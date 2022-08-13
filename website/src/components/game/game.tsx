import React from 'react';
import { Grid } from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import styles from './game.module.css';
import SizeSelector, { availableSizes } from './sizeSelector';
import LevelSelector, { availableLevels } from './levelSelector';
import TileButton, { TileButtonProps } from './tileButton';
import Victory from './victory';
import Reset from './reset';
import StopWatch from './stopWatch';
import { useStopwatch } from 'react-timer-hook';
import BestTime from './bestTime';
import StartScreen from './startScreen';

export function getTimeInSeconds(
  seconds: number,
  minutes: number,
  hours: number
): number {
  return seconds + minutes * 60 + hours * 60 * 60;
}

function sortRange() {
  return 0.5 - Math.random();
}

function createTiles(size: number): TileButtonProps[] {
  const rangeOfNumbers = Array.from(Array(size + 1).keys()).slice(1);
  rangeOfNumbers.sort(sortRange);
  rangeOfNumbers.sort(sortRange);
  const range = rangeOfNumbers.map((i) => ({
    id: i,
    label: `${i}`,
    done: false,
    fontSize: `${i < 100 ? 180 / Math.sqrt(size) : 130 / Math.sqrt(size)}px`,
  }));

  return range;
}

const storageItems = {
  score: 'score',
  gridSize: 'gridSize',
  difficultyLevel: 'difficultyLevel',
  bestTime: 'bestTime-',
};

export default function Game() {
  const [numberToClick, setNumberToClick] = useState<number>(1);
  const [gameIsWon, setGameIsWon] = useState(false);
  const [gridSize, setGridSize] = useState<number>();
  const [difficultyLevel, setDifficultyLevel] = useState<number>();
  const [tiles, setTiles] = useState<TileButtonProps[]>([]);
  const [bestTime, setBestTime] = useState<number | undefined>(undefined);
  const [gameStarted, setGameStarted] = useState(false);
  const stopwatch = useStopwatch({ autoStart: true });

  useEffect(function () {
    const initialGridSize =
      Number(localStorage.getItem(storageItems.gridSize)) || availableSizes[0];
    setGridSize(initialGridSize);
    setDifficultyLevel(
      Number(localStorage.getItem(storageItems.difficultyLevel)) ||
        availableLevels[0].code
    );
    setBestTime(
      Number(
        localStorage.getItem(`${storageItems.bestTime}${initialGridSize}`)
      ) || undefined
    );
  }, []);

  useEffect(
    function () {
      if (gridSize) {
        localStorage.setItem(storageItems.gridSize, `${gridSize}`);
        setTiles(createTiles(gridSize));
        setNumberToClick(1);
        setBestTime(
          Number(localStorage.getItem(`${storageItems.bestTime}${gridSize}`)) ||
            undefined
        );
      }
    },
    [gridSize]
  );

  useEffect(
    function () {
      if (difficultyLevel) {
        localStorage.setItem(
          storageItems.difficultyLevel,
          `${difficultyLevel}`
        );
      }
    },
    [difficultyLevel]
  );

  function resetBoard(backToHomeScreen: boolean) {
    if (gridSize) {
      setNumberToClick(1);
      setGameIsWon(false);
      setTiles(createTiles(gridSize));
      stopwatch.reset();
      if (backToHomeScreen) {
        setGameStarted(false);
      }
    }
  }

  function saveBestTime() {
    const timeInSeconds = getTimeInSeconds(
      stopwatch.seconds,
      stopwatch.minutes,
      stopwatch.hours
    );
    if (!bestTime || timeInSeconds < bestTime) {
      setBestTime(timeInSeconds);
      localStorage.setItem(
        `${storageItems.bestTime}${gridSize}`,
        timeInSeconds.toString()
      );
    }
  }

  function markAsDone(event: SyntheticEvent) {
    const tileNumber = Number(event.currentTarget.id);
    if (numberToClick === tileNumber) {
      const matchingTile = tiles.find((t) => t.id === tileNumber);
      if (matchingTile) {
        matchingTile.done = true;
      }
      if (tileNumber === gridSize) {
        // GAME WON!!!
        stopwatch.pause();
        saveBestTime();
        setTimeout(() => {
          setGameIsWon(true);
        }, 1000);
        return;
      }
      setNumberToClick(numberToClick + 1);
    } else {
      event.currentTarget.animate(
        [
          { transform: 'rotate(10deg)' },
          { transform: 'rotate(-10deg)' },
          { transform: 'rotate(0)' },
        ],
        { duration: 100, iterations: 1 }
      );
    }
  }

  if (!gameStarted && difficultyLevel && gridSize) {
    return (
      <StartScreen
        currentLevel={difficultyLevel}
        setLevel={setDifficultyLevel}
        currentSize={gridSize}
        setSize={setGridSize}
        handleStart={setGameStarted}
      />
    );
  }

  return (
    <>
      <div className={styles.toolbar}>
        {gridSize && (
          <SizeSelector currentSize={gridSize} setSize={setGridSize} />
        )}
        {difficultyLevel && (
          <LevelSelector
            currentLevel={difficultyLevel}
            setLevel={setDifficultyLevel}
          />
        )}
        {bestTime && <BestTime time={bestTime} />}
      </div>
      {gridSize && (
        <Grid
          container
          spacing={1 / Math.sqrt(gridSize)}
          columns={Math.sqrt(gridSize)}
          width="100%"
          alignItems="center"
          justifyContent="center"
          maxWidth={1200}
          overflow="hidden"
          margin="auto"
        >
          {tiles.map((props) => (
            <Grid item key={props.id} xs={1} xl={1} lg={1} sm={1} md={1}>
              <TileButton {...props} markAsDone={markAsDone} />
            </Grid>
          ))}
        </Grid>
      )}
      <div className={styles.toolbar}>
        <StopWatch stopwatch={stopwatch} />
      </div>
      <div className={styles.toolbar}>
        <Reset handleReset={() => resetBoard(true)} />
      </div>
      {gameIsWon && (
        <Victory
          startNewGame={() => resetBoard(false)}
          seconds={stopwatch.seconds}
          minutes={stopwatch.minutes}
          hours={stopwatch.hours}
          bestTime={bestTime}
        />
      )}
    </>
  );
}

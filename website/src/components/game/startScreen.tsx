import React, { Dispatch, SetStateAction } from 'react';
import SizeSelector, { SizeSelectorProps } from './sizeSelector';
import styles from './game.module.css';
import { Button } from '@mui/material';

type StartScreenProps = SizeSelectorProps & {
  handleStart: Dispatch<SetStateAction<boolean>>;
};

export default function StartScreen({
  currentSize,
  setSize,
  handleStart,
}: StartScreenProps) {
  return (
    <div
      className={styles.startScreen}
    >
      <div>
        <h1 className={styles.gameTitle}>Focus Grid</h1>
      </div>
      <div className={styles.gameDescription}>
        Gra poprawiająca koncentrację. Wybierz rozmiar tablicy i odsłoń kolejne
        liczby w jak najkrótszym czasie.
      </div>
      <div className={styles.sizeSelector}>
        <SizeSelector currentSize={currentSize} setSize={setSize} />
      </div>
      <Button variant="contained" size="large" onClick={() => handleStart(true)}>
        Start
      </Button>
    </div>
  );
}

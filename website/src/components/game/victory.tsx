import React from 'react';
import { getTimeDisplayFromNumber } from './bestTime';
import { getTimeInSeconds } from './game';
import styles from './game.module.css';

type VictoryProps = {
  startNewGame: () => void;
  seconds: number;
  minutes: number;
  hours: number;
  bestTime: number | undefined;
};

export default function Victory({
  startNewGame,
  seconds,
  minutes,
  hours,
  bestTime,
}: VictoryProps) {
  const resultInSeconds = getTimeInSeconds(seconds, minutes, hours);
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <h1>Wynik: {getTimeDisplayFromNumber(resultInSeconds)}</h1>
        {bestTime && (
          <p>
            Twój najlepszy czas dla planszy o tym rozmiarze to{' '}
            {getTimeDisplayFromNumber(bestTime)}
          </p>
        )}
        <p>Spróbuj swoich sił z innym rozmiarem planszy.</p>
        <button className={styles.button} onClick={startNewGame}>
          Graj dalej
        </button>
      </div>
    </div>
  );
}

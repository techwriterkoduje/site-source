import React from 'react';
import SizeSelector, { SizeSelectorProps } from './sizeSelector';
import styles from './game.module.css';
import { Dispatch, SetStateAction } from 'react';
import splashImage from '@site/static/img/focus-grid.png';

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
      style={{ backgroundImage: `url(${splashImage})` }}
    >
      <div>
        <h1 className={styles.gameTitle}>Focus Grid</h1>
      </div>
      <div className={styles.sizeSelector}>
        <SizeSelector currentSize={currentSize} setSize={setSize} />
      </div>
      <button
        className={styles.button}
        style={{ border: '1px solid gray', borderRadius: '6px' }}
        onClick={() => handleStart(true)}
      >
        Start
      </button>
    </div>
  );
}

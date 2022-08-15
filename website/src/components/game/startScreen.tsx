import React from 'react';
import SizeSelector, { SizeSelectorProps } from './sizeSelector';
import styles from './game.module.css';
import { Dispatch, SetStateAction } from 'react';

type StartScreenProps = SizeSelectorProps & {
  handleStart: Dispatch<SetStateAction<boolean>>;
};

export default function StartScreen({
  currentSize,
  setSize,
  handleStart,
}: StartScreenProps) {
  return (
    <div className={styles.startScreen}>
      <div>
        <h1>Focus Grid</h1>
        <p>Ćwicz koncentrację</p>
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

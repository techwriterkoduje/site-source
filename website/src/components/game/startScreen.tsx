import React from "react";
import SizeSelector, { SizeSelectorProps } from "./sizeSelector";
import styles from "./game.module.css";
import LevelSelector, { LevelSelectorProps } from "./levelSelector";
import { Dispatch, SetStateAction } from "react";

type StartScreenProps = SizeSelectorProps &
  LevelSelectorProps & {
    handleStart: Dispatch<SetStateAction<boolean>>;
  };

export default function StartScreen({
  currentLevel,
  currentSize,
  setLevel,
  setSize,
  handleStart,
}: StartScreenProps) {
  return (
    <div className={styles.startScreen}>
      <div>
        <h1>Focus Grid</h1>
        <p>Ćwicz koncentrację</p>
      </div>
      <SizeSelector currentSize={currentSize} setSize={setSize} />
      <LevelSelector currentLevel={currentLevel} setLevel={setLevel} />
      <button
        className={styles.button}
        style={{ border: "1px solid gray", borderRadius: "6px" }}
        onClick={() => handleStart(true)}
      >
        Start
      </button>
    </div>
  );
}

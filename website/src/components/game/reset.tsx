import React from "react";
import styles from "./game.module.css";

type ResetProps = {
  handleReset(): void;
};

export default function Reset({ handleReset }: ResetProps) {
  return (
    <button
      className={styles.button}
      style={{ width: "100%" }}
      onClick={handleReset}
    >
      Resetuj grę
    </button>
  );
}

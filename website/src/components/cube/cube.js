import React from "react";
import cx from "clsx";
import styles from "./styles.module.css";

export default function Cube() {
  return (
    <div className={cx(styles.cube)}>
      <div className={cx(styles.cubeFace, styles.cubeFaceFront)} />
      <div className={cx(styles.cubeFace, styles.cubeFaceLeft)} />
      <div className={cx(styles.cubeFace, styles.cubeFaceBottom)} />
      <div className={styles.cubeText}>?</div>
    </div>
  );
}

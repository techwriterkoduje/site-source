import React from "react";
import cx from "clsx";
import useSound from "use-sound";
import styles from "./styles.module.css";
import coin from "./sound/coin.wav";

export default function Cube() {
  const [play] = useSound(coin);

  return (
    <div className={cx(styles.cube)} onClick={play}>
      <div className={cx(styles.cubeFace, styles.cubeFaceFront)}>
        <span className={styles.cubeText}>?</span>
      </div>
      <div className={cx(styles.cubeFace, styles.cubeFaceLeft)} />
      <div className={cx(styles.cubeFace, styles.cubeFaceBottom)} />
    </div>
  );
}

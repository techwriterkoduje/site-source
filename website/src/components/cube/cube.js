import React, { useRef, useState } from 'react';
import cx from 'clsx';
import useSound from 'use-sound';
import styles from './styles.module.css';
import coin from './sound/coin.wav';
import oneUp from './sound/oneUp.wav';

export default function Cube() {
  const coinObject = useRef(null);
  const [coins, setCoins] = useState(0);
  const [playCoin] = useSound(coin);
  const [playOneUp] = useSound(oneUp);

  function giveCoin() {
    let animationDuration = 300;
    setCoins(coins + 1);
    coinObject.current.className = styles.coin;

    if (coins === 69) {
      animationDuration = 800;
      playOneUp();
      coinObject.current.className = cx(
        styles.coin,
        styles.jumpy,
        styles.oneUp
      );
      setCoins(0);
    } else {
      playCoin();
      coinObject.current.className = cx(styles.coin, styles.jumpy);
    }

    setTimeout(function () {
      coinObject.current.className = styles.coin;
    }, animationDuration);
  }

  return (
    <div className={cx(styles.cube)} onClick={giveCoin}>
      <div className={styles.coin} ref={coinObject} />
      <div className={cx(styles.cubeFace, styles.cubeFaceFront)}>
        <span className={styles.cubeText}>?</span>
      </div>
      <div className={cx(styles.cubeFace, styles.cubeFaceLeft)} />
      <div className={cx(styles.cubeFace, styles.cubeFaceBottom)} />
    </div>
  );
}

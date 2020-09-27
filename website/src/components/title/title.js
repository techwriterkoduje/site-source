import React from "react";
import styles from "./styles.module.css";
import Cube from "../cube";

const boldClasses = [
  styles.logoRedBold,
  styles.logoBlueBold,
  styles.logoOrangeBold,
  styles.logoGreenBold,
];

const shadowClasses = [
  styles.logoBlueShadow,
  styles.logoOrangeShadow,
  styles.logoRedShadow,
  styles.logoGreenShadow,
];

function GetLettersFromLine(line) {
  const styles = line.style === "bold" ? boldClasses : shadowClasses;
  return line.label.map((letter, i) => (
    <span className={styles[i + (1 % styles.length)]}>{letter}</span>
  ));
}

export default function Title({ lines }) {
  return (
    <div>
      <div className="container">
        <div className={styles.animatedLogo}>
          <div className={styles.logoFirst}>
            <span className={styles.logoRedBold}>T</span>
            <span className={styles.logoBlueBold}>e</span>
            <span className={styles.logoOrangeBold}>c</span>
            <span className={styles.logoGreenBold}>h</span>
          </div>
          <div className={styles.logoSecond}>
            <span className={styles.logoGreenBold}>W</span>
            <span className={styles.logoBlueBold}>r</span>
            <span className={styles.logoOrangeBold}>i</span>
            <span className={styles.logoRedBold}>t</span>
            <span className={styles.logoGreenBold}>e</span>
            <span className={styles.logoOrangeBold}>r</span>
          </div>
          <div className={styles.logoThird}>
            <Cube />
            <span className={styles.logoBlueShadow}>k</span>
            <span className={styles.logoOrangeShadow}>o</span>
            <span className={styles.logoRedShadow}>d</span>
            <span className={styles.logoGreenShadow}>u</span>
            <span className={styles.logoOrangeShadow}>j</span>
            <span className={styles.logoBlueShadow}>e</span>
          </div>
        </div>
      </div>
    </div>
  );
}

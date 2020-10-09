import React from "react";
import styles from "./styles.module.css";
import Cube from "../cube";

const boldClasses = [
  styles.redBold,
  styles.blueBold,
  styles.orangeBold,
  styles.greenBold,
];

const shadowClasses = [
  styles.blueShadow,
  styles.orangeShadow,
  styles.redShadow,
  styles.greenShadow,
];

const lineClasses = {
  big: styles.bigLine,
  mid: styles.midLine,
  cubed: styles.cubedLine,
};

function getLettersFromLine(line) {
  const styles = line.style === "bold" ? boldClasses : shadowClasses;
  return line.label.split("").map((letter, key) => (
    <span key={key} className={styles[key % styles.length]}>
      {letter}
    </span>
  ));
}

export default function Title({ lines }) {
  return (
    <div>
      <div className="container">
        <div className={styles.stylizedTitle}>
          {lines &&
            lines.map((line, key) => (
              <div key={key} className={lineClasses[line.lineStyle]}>
                {line.lineStyle === "cubed" ? <Cube /> : ""}
                {getLettersFromLine(line)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

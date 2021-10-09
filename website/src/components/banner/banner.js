import React, { useState } from 'react';
import styles from './banner.module.css';
import { Redirect } from '@docusaurus/router';

const redirectMap = {
  'słucha()': '/blog',
  'czyta()': '/read',
  'ogląda()': '/watch',
  Projekty: '/projects',
  Kontakt: '/contact',
};

const responseMap = {
  prowadzący: <div>Lista prowadzących: Michał Skowron, Paweł Kowaluk</div>,
};

export default function Banner({ initialCommand }) {
  const [command, setCommand] = useState(initialCommand);
  const [result, setResult] = useState(undefined);

  function runCommand(event) {
    event.preventDefault();

    if (redirectMap[command]) {
      console.log('Bingo!', redirectMap[command]);
      setResult(function () {
        return <Redirect to={redirectMap[command]} />;
      });
    } else if (responseMap[command]) {
      setResult(function () {
        return responseMap[command];
      });
    } else {
      setResult(function () {
        return (
          <div>
            <span className={styles.highlight}>{command}</span> is not a
            function.
          </div>
        );
      });
    }
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={runCommand}>
        <div className={styles.techWriter}>TechWriter</div>
        <div className={styles.commandLine}>
          <span className={styles.dot}>.</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className={styles.command}
          />
        </div>
        <div className={styles.result}>{result}</div>
      </form>
    </div>
  );
}

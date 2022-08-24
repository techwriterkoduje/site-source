import { Button } from '@mui/material';
import React from 'react';
import styles from './game.module.css';

type ResetProps = {
  handleReset(): void;
  disabled: boolean;
};

export default function Reset({ handleReset, disabled }: ResetProps) {
  return (
    <Button fullWidth onClick={handleReset} disabled={disabled}>
      Resetuj grę
    </Button>
  );
}

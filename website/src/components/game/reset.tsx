import { Button } from '@mui/material';
import React from 'react';
import styles from './game.module.css';

type ResetProps = {
  handleReset(): void;
};

export default function Reset({ handleReset }: ResetProps) {
  return <Button fullWidth onClick={handleReset}>Resetuj grę</Button>;
}

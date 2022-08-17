import React from 'react';
import { Chip } from '@mui/material';

type BestTimeProps = {
  time: number;
};

export function getTimeDisplayFromNumber(seconds: number): string {
  return new Date(seconds * 1000).toISOString().slice(11, 19);
}

export default function BestTime({ time }: BestTimeProps) {
  return <Chip label={getTimeDisplayFromNumber(time)} />;
}

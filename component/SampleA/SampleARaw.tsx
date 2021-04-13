import React from 'react';
import { ISampleAProps } from './ISampleAProps';

export const SampleARaw = ({ className, text, color }: ISampleAProps) => {
  return <div className={`${className} ${color}`}>{text}</div>;
};

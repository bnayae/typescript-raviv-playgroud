// @ts-ignore TS6133
import { expect, test } from '@jest/globals';
import { z } from 'zod';
import { guardZodNumber } from '../guards/guards';

const schema = z.object({
  email: z.string().email(),
  birthday: z.date().optional(),
  score: z.number().positive(),
  avatar: z.string().url().optional().nullable(),
});

test('passing validations', () => {
  const isScoreNumber = guardZodNumber(schema.shape.score);
  expect(isScoreNumber).toEqual(true);
});

import React from 'react';
import { z } from 'zod';
import { guardZodNumber, guardZodString } from '../guards/guards';

export const PersonSchema = z.object({
  email: z.string().email(),
  birthday: z.date().optional(),
  score: z.number().positive(),
  avatar: z.string().url().optional().nullable(),
});

type StringOrKeyof<T extends unknown> = T extends string ? string : keyof T;
``;
export type IIndexer<TKey extends unknown, TValue = unknown> = Partial<
  Record<StringOrKeyof<TKey>, TValue>
>;

export const Home = () => {
  // const getType = <T extends ZodRawShape>(ztype: XType<T>) => {
  //   return ztype.type;
  // };

  const { score, email, avatar } = PersonSchema.shape;

  return (
    <div>
      <div>Guard</div>
      <div>{JSON.stringify(avatar._def.innerType._def.innerType.email)}</div>
      <div>
        {guardZodNumber(score)
          ? JSON.stringify(score._def.minimum?.value)
          : 'not number'}
      </div>
      <div>{guardZodString(email) ? 'email' : 'not number'}</div>
      <div>{guardZodString(avatar) ? 'avatar' : 'not number'}</div>
    </div>
  );
};

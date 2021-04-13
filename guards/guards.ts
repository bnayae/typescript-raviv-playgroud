import { ZodNumber, ZodString } from 'zod';

export const guardZodNumber = (candidate: any): candidate is ZodNumber => {
  let check = candidate;
  do {
    if (check?.int != null) return true;
    check = check?._def?.innerType;
  } while (check);
  return false;
};

export const guardZodString = (candidate: any): candidate is ZodString => {
  let check = candidate;
  do {
    if (check?.email != null) return true;
    check = check?._def?.innerType;
  } while (check);
  return false;
};

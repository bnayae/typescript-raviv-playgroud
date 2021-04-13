/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extend-native */
/* eslint-disable @typescript-eslint/naming-convention */

type RecordKey = string | number | symbol;

// credits: https://www.itsrainingmani.dev/blog/string-prototype-extension/
export {};
declare global {
  interface Array<T> {
    toRecord<K extends keyof T, V = T>(
      keySelector: K,
      valueSelector?: (item: T, index: number) => V
    ): Record<RecordKey, V>;

    toRecordMap<K extends RecordKey, V = T>(
      keySelector: (item: T, index: number) => K,
      valueSelector?: (item: T, index: number) => V
    ): Record<K, V>;

    toRecordSelf<V = T>(
      valueSelector: (item: T, index: number) => V
    ): Record<RecordKey, V>;

    union(array: T[]): T[];
  }
}

if (!Array.prototype.toRecord) {
  Array.prototype.toRecord = function <
    T extends { [K in keyof T]: RecordKey }, // added constraint
    K extends keyof T,
    V = T
  >(
    keySelector: K,
    valueSelector?: (item: T, index: number) => V
  ): Record<T[K], V> {
    const empty = {} as Record<T[K], V>;
    return this.reduce<Record<T[K], V>>((acc, item, index) => {
      const k: T[K] = item[keySelector];
      const value = valueSelector ? valueSelector(item, index) : item;
      return { ...acc, [k]: value } as Record<T[K], V>;
    }, empty);
  };
}

if (!Array.prototype.toRecordMap) {
  Array.prototype.toRecordMap = function <
    T extends { [K in keyof T]: RecordKey }, // added constraint
    K extends RecordKey,
    V = T
  >(
    keySelector: (item: T, index: number) => K,
    valueSelector?: (item: T, index: number) => V
  ): Record<RecordKey, V> {
    const empty = {} as Record<K, V>;
    return this.reduce<Record<K, V>>((acc, item, index) => {
      const k: K = keySelector(item, index);
      const value = valueSelector ? valueSelector(item, index) : item;
      return { ...acc, [k]: value } as Record<K, V>;
    }, empty);
  };
}

if (!Array.prototype.toRecordSelf) {
  Array.prototype.toRecordSelf = function <
    T extends RecordKey, // added constraint
    V = T
  >(valueSelector: (item: T, index: number) => V): Record<T, V> {
    const empty = {} as Record<T, V>;
    return this.reduce<Record<T, V>>((acc, item, index) => {
      const value = valueSelector(item, index);
      return { ...acc, [item]: value } as Record<T, V>;
    }, empty);
  };
}

if (!Array.prototype.union) {
  Array.prototype.union = function <T>(array: T[]): T[] {
    const res = [...new Set<T>([...this, ...array])];
    return res;
  };
}

import React, { useState } from 'react';
import { ISampleAProps } from './ISampleAProps';

export const SampleARaw = ({ className, text, color }: ISampleAProps) => {
  const [candidate, setCandidate] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCandidate(e.target.value);
  };

  const handleAdd = () => {
    setList((prv) => {
      var set = new Set<string>(prv);
      if (set.has(candidate)) return prv;
      // if (prv.includes(candidate)) return prv;
      return [...prv, candidate];
    });
    setCandidate('');
  };

  return (
    <div className={`${className} ${color}`}>
      <div className="title">{text}</div>
      <input
        className="candidate"
        type="text"
        value={candidate}
        onChange={handleChange}
      />
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
      <div className="items">
        {list.map((m) => (
          <div className="item">{m}</div>
        ))}
      </div>
    </div>
  );
};

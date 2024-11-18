import { atom } from 'recoil';

export const counterAtom = atom({
  key: 'counterAtom', // Unique ID (with respect to other atoms/selectors)
  default: 0,         // Default value (initial value)
});

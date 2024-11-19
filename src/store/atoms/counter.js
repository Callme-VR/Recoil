import { atom, selector } from 'recoil';

// Define the counter atom
export const counterAtom = atom({
  key: 'counterAtom', // Unique ID (with respect to other atoms/selectors)
  default: 0,         // Default value (initial value)
});

// Define the selector to determine if the counter value is even
export const evenSelector = selector({
  key: 'evenSelector', // Unique ID (with respect to other selectors)
  get: ({ get }) => {
    const count = get(counterAtom); // Correct reference to the atom
    return count % 2 === 0; // Return true if the count is even
  },
});

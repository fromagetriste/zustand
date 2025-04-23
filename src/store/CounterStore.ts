import { create } from "zustand";

type CounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

// create(set) peut prendre uen fonction "set" comme argument, comme la setter function dans useState
export const useConterStore = create<CounterState>((set) => {
  // blablabla, some const and logic here
  // create(set) retourne un objet, key-value pairs
  return {
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
  };
});

// SAME CODE :
// on peut voir plus généralement cette syntax, sans le mot "return" mais en englobant entre parenthèses:
// export const useCounterStore = create<CounterState>((set) => ({
//   count: 0,
//   increase: () => set((state) => ({ count: state.count + 1 })),
//   decrease: () => set((state) => ({ count: state.count - 1 })),
//   reset: () => set({ count: 0 }),
// }))
// Wrapping the object in () is required to avoid confusion with a block.



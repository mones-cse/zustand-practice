import { create } from "zustand";
import { TCount } from "../../types/v1/count.type";

export const useCountStoreV1 = create<TCount>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCountStoreV1;

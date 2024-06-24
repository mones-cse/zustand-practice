import { StateCreator } from "zustand";
import { TUser } from "../../types/v2/user.type";

export const UserSliceV2: StateCreator<TUser, [], [], TUser> = (set) => ({
  fullName: "John Doe",
  email: "john_doe@gmail.com",
  age: 25,
  address: "New York",
  setAddress: (address: string) => set({ address }),
});

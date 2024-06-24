import { StateCreator } from "zustand";
import { TUser } from "../../types/v3/user.type";

export const UserSliceV3: StateCreator<
  TUser,
  [["zustand/immer", never]],
  [],
  TUser
> = (set) => ({
  fullName: "John Doe",
  email: "john_doe@gmail.com",
  age: 25,
  address: {
    city: "Dhaka",
    country: {
      name: "Bangladesh",
      code: "BD",
    },
  },
  setCity: (city: string) =>
    set((state) => {
      state.address.city = city;
    }),
  setCountryName: (name: string) =>
    set((state) => {
      state.address.country.name = name;
    }),

  setCountryCode: (code: string) =>
    set((state) => {
      state.address.country.code = code;
    }),
});

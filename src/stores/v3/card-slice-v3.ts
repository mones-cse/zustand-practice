import { StateCreator } from "zustand";
import { TCard } from "../../types/v3/card.type";

export const CardSliceV3: StateCreator<
  TCard,
  [["zustand/immer", never]],
  [],
  TCard
> = (set) => ({
  cardNumber: "1234 5678 9012 3456",
  contact: {
    email: "test@gmail.com",
    phone: "1234567890",
  },
  setCardNumber: (cardNumber: string) =>
    set((state) => {
      state.cardNumber = cardNumber;
    }),

  setEmailOfCard: (email: string) =>
    set((state) => {
      state.contact.email = email;
    }),

  setPhoneOfCard: (phone: string) =>
    set((state) => {
      state.contact.phone = phone;
    }),
});

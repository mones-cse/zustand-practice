import { StateCreator } from "zustand";
import { TCard } from "../../types/v2/card.type";

export const CardSliceV2: StateCreator<TCard, [], [], TCard> = (set) => ({
  cardNumber: "1234 5678 9012 3456",
  cardHolder: "John Doe",
  expirationDate: "12/23",
  securityCode: "123",
  setSecurityCode: (securityCode: string) => set({ securityCode }),
});

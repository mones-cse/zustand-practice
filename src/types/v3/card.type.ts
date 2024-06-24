// type
type CardState = {
  cardNumber: string;
  contact: {
    email: string;
    phone: string;
  };
};
// actions
type CardActions = {
  setCardNumber: (cardNumber: string) => void;
  setEmailOfCard: (email: string) => void;
  setPhoneOfCard: (phone: string) => void;
};

// combined Type for slice
export type TCard = CardState & CardActions;

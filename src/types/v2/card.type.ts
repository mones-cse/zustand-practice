// type
type CardState = {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  securityCode: string;
};
// actions
type CardActions = {
  setSecurityCode: (securityCode: string) => void;
};

// combined Type for slice
export type TCard = CardState & CardActions;

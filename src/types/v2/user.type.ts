// type
type UserState = {
  fullName: string;
  email: string;
  age: number;
  address: string;
};
// actions
type UserActions = {
  setAddress: (address: string) => void;
};

// combined Type for slice
export type TUser = UserState & UserActions;

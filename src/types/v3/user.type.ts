// type
type UserState = {
  fullName: string;
  email: string;
  age: number;
  address: {
    city: string;
    country: {
      name: string;
      code: string;
    };
  };
};
// actions
type UserActions = {
  setCity: (city: string) => void;
  setCountryName: (country: string) => void;
  setCountryCode: (code: string) => void;
};

// combined Type for slice
export type TUser = UserState & UserActions;

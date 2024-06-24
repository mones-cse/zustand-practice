import { useShallow } from "zustand/react/shallow";
import { useCountStoreV1 } from "./stores/v1/storev1";
import { userStoreV2 } from "./stores/v2/storev2";
import { userStoreV3 } from "./stores/v3/storev3";
import { BlueButton, RedButton } from "./ui/Button";
import { Input } from "./ui/Input";

const BasicExample = () => {
  const { count, increment, decrement } = useCountStoreV1(
    // useShallow is used to prevent unnecessary re-renders
    useShallow((state) => {
      return {
        count: state.count,
        increment: state.increment,
        decrement: state.decrement,
      };
    })
  );
  return (
    <div className="text-center w-full">
      <p className="text-2xl font-semibold text-blue-500 ">
        This is the simplest basic example of zustand
      </p>
      <p className="text-xl font-bold my-2">Count is: {count}</p>
      <div className="flex justify-center gap-x-1">
        <BlueButton onClick={increment}>Increment</BlueButton>
        <RedButton onClick={decrement}>Decrement</RedButton>
      </div>
      <br />
    </div>
  );
};

const BasicExampleWithSlice = () => {
  const {
    fullName,
    email,
    age,
    address,
    setAddress,
    cardHolder,
    cardNumber,
    expirationDate,
    securityCode,
    setSecurityCode,
  } = userStoreV2();
  return (
    <div className="w-full">
      <p className="text-2xl font-semibold text-blue-500 text-center">
        This example is implemented with slice without immer
      </p>
      <div className="flex w-full bg-slate-50 text-center p-5 gap-x-4 items-end">
        <div className="w-1/2 text-left">
          <p className="text-xl font-bold"> User info</p>
          <p>user full name: {fullName}</p>
          <p>user email: {email}</p>
          <p>user age: {age}</p>
          <p>user address: {address}</p>
          <Input
            placeholder="Search for anything..."
            value={address}
            customCalss="w-3/4"
            onChange={(value) => {
              setAddress(value.target.value);
            }}
          />
        </div>
        <div className="w-1/2 text-left">
          <p className="text-xl font-bold">Card info</p>
          <p>card number: {cardNumber}</p>
          <p>card holder: {cardHolder}</p>
          <p>expiration date: {expirationDate}</p>
          <p>security code: {securityCode}</p>
          <Input
            placeholder="Search for anything..."
            value={securityCode}
            customCalss="w-3/4"
            onChange={(value) => {
              setSecurityCode(value.target.value);
            }}
          />
        </div>
      </div>
      <br />
    </div>
  );
};

const BasicExampleWithSliceAndImmer = () => {
  const store = userStoreV3();
  return (
    <div className="w-full">
      <p className="text-2xl font-semibold text-blue-500 text-center">
        This example is implemented with slice & immer
      </p>
      <div className="flex w-full bg-slate-50 text-center p-5 gap-x-4 items-start">
        <div className="w-1/2 text-left">
          <p className="text-xl font-bold"> User info</p>
          <p>user full name: {store.fullName}</p>
          <p>user email: {store.email}</p>
          <p>user age: {store.age}</p>
          <p className="underline underline-offset-1">user address:</p>
          <p className="pl-4">City: {store.address.city}</p>
          <p className="pl-4">
            Country: {store.address.country.name} - {store.address.country.code}
          </p>
          <br />
          <Input
            placeholder="City Name"
            value={store.address.city}
            customCalss="w-full"
            onChange={(value) => {
              store.setCity(value.target.value);
            }}
          />
          <br />
          <div className="flex gap-1">
            <Input
              placeholder="Country Name"
              value={store.address.country.name}
              customCalss="w-1/2"
              onChange={(value) => {
                store.setCountryName(value.target.value);
              }}
            />
            <Input
              placeholder="Country Code"
              value={store.address.country.code}
              customCalss="w-1/2"
              onChange={(value) => {
                store.setCountryCode(value.target.value);
              }}
            />
          </div>

          {/* <Input
            placeholder="Search for anything..."
            value={address}
            onChange={(value) => {
              setAddress(value.target.value);
            }}
          /> */}
        </div>
        <div className="w-1/2 text-left">
          <p className="text-xl font-bold">Card info</p>
          <p>card number: {store.cardNumber}</p>
          <p className="underline underline-offset-1">Contatct</p>
          <p className="pl-4">Email: {store.contact.email}</p>
          <p className="pl-4">Phone: {store.contact.phone}</p>
          <br />
          <br />
          <br />

          <Input
            placeholder="Card Number"
            value={store.cardNumber}
            customCalss="w-full"
            onChange={(value) => {
              store.setCardNumber(value.target.value);
            }}
          />
          <br />
          <div className="flex gap-1">
            <Input
              placeholder="Email"
              value={store.contact.email}
              customCalss="w-full"
              onChange={(value) => {
                store.setEmailOfCard(value.target.value);
              }}
            />
            <Input
              placeholder="Card Number"
              value={store.contact.phone}
              customCalss="w-full"
              onChange={(value) => {
                store.setPhoneOfCard(value.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-5/6 m-auto">
        <p className="text-3xl font-bold">
          This is an example codebase to understand zustand
        </p>
        <br />
        <BasicExample />
        <BasicExampleWithSlice />
        <BasicExampleWithSliceAndImmer />
      </div>
    </>
  );
}

export default App;

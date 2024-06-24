import { useCountStoreV1 } from "./stores/v1/storev1";
import { userStoreV2 } from "./stores/v2/storev2";
import { userStoreV3 } from "./stores/v3/storev3";
import { BlueButton, RedButton } from "./ui/Button";
import { Input } from "./ui/Input";

const BasicExample = () => {
  const { count, increment, decrement } = useCountStoreV1();
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
  const {
    fullName,
    email,
    age,
    address,
    setCity,
    setCountryCode,
    setCountryName,
    cardNumber,
    contact,
    setCardNumber,
    setEmailOfCard,
    setPhoneOfCard,
  } = userStoreV3();
  return (
    <div className="w-full">
      <p className="text-2xl font-semibold text-blue-500 text-center">
        This example is implemented with slice & immer
      </p>
      <div className="flex w-full bg-slate-50 text-center p-5 gap-x-4 items-start">
        <div className="w-1/2 text-left">
          <p className="text-xl font-bold"> User info</p>
          <p>user full name: {fullName}</p>
          <p>user email: {email}</p>
          <p>user age: {age}</p>
          <p className="underline underline-offset-1">user address:</p>
          <p className="pl-4">City: {address.city}</p>
          <p className="pl-4">
            Country: {address.country.name} - {address.country.code}
          </p>
          <br />
          <Input
            placeholder="City Name"
            value={address.city}
            customCalss="w-full"
            onChange={(value) => {
              setCity(value.target.value);
            }}
          />
          <br />
          <div className="flex gap-1">
            <Input
              placeholder="Country Name"
              value={address.country.name}
              customCalss="w-1/2"
              onChange={(value) => {
                setCountryName(value.target.value);
              }}
            />
            <Input
              placeholder="Country Code"
              value={address.country.code}
              customCalss="w-1/2"
              onChange={(value) => {
                setCountryCode(value.target.value);
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
          <p>card number: {cardNumber}</p>
          <p className="underline underline-offset-1">Contatct</p>
          <p className="pl-4">Email: {contact.email}</p>
          <p className="pl-4">Phone: {contact.phone}</p>
          <br />
          <br />
          <br />

          <Input
            placeholder="Card Number"
            value={cardNumber}
            customCalss="w-full"
            onChange={(value) => {
              setCardNumber(value.target.value);
            }}
          />
          <br />
          <div className="flex gap-1">
            <Input
              placeholder="Email"
              value={contact.email}
              customCalss="w-full"
              onChange={(value) => {
                setEmailOfCard(value.target.value);
              }}
            />
            <Input
              placeholder="Card Number"
              value={contact.phone}
              customCalss="w-full"
              onChange={(value) => {
                setPhoneOfCard(value.target.value);
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

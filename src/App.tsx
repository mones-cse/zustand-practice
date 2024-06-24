import { useCountStoreV1 } from "./stores/v1/storev1";
import { userStoreV2 } from "./stores/v2/storev2";
import { BlueButton, RedButton } from "./ui/Button";
import { Input } from "./ui/Input";

function App() {
  const { count, increment, decrement } = useCountStoreV1();
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
    <>
      <div className="flex justify-center items-center flex-col w-5/6 m-auto">
        <p className="text-3xl font-bold">
          This is an example codebase to understand zustand
        </p>
        <br />

        <p className="text-2xl font-semibold text-blue-500 ">
          This is the simplest basic example of zustand
        </p>
        <p className="text-xl font-bold my-2">Count is: {count}</p>
        <div className="flex gap-x-1">
          <BlueButton onClick={increment}>Increment</BlueButton>
          <RedButton onClick={decrement}>Decrement</RedButton>
        </div>

        <br />
        <p className="text-2xl font-semibold text-blue-500 ">
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
              onChange={(value) => {
                setSecurityCode(value.target.value);
              }}
            />
          </div>
        </div>

        <br />
        <p className="text-2xl font-semibold text-blue-500 ">
          This example is implemented with slice & immer
        </p>
      </div>
    </>
  );
}

export default App;

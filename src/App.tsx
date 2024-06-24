import { useCountStoreV1 } from "./stores/v1/storev1";
import { BlueButton, RedButton } from "./ui/Button";

function App() {
  const { count, increment, decrement } = useCountStoreV1();
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <p className="text-3xl font-bold">
          This is an example codebase to understand zustand
        </p>
        <br />

        <p className="text-2xl font-semibold text-blue-500 ">
          This is the simplest basic example of zustand
        </p>
        <p className="text-xl font-bold">Count is: {count}</p>
        <div className="flex gap-x-1">
          <BlueButton onClick={increment}>Increment</BlueButton>
          <RedButton onClick={decrement}>Decrement</RedButton>
        </div>

        <br />
        <p className="text-2xl font-semibold text-blue-500 ">
          This example is implemented with slice
        </p>
      </div>
    </>
  );
}

export default App;

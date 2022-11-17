import { useState } from "react";
import Button from "./components/Button/index";

function App() {
  const [count, setCount] = useState(0);

  const tambah = () => {
    setCount(count + 1);
    count == 10 ? setCount(count) : "";
  };

  const kurang = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <div className="flex justify-center items-center flex-col h-screen w-full gap-y-3">
        <h1 className="font-bold ">{count}</h1>
        <div className="flex flex-row gap-x-3">
          <Button
            onClick={tambah}
            teks="tambah"
            className="p-3 bg-slate-500 text-white rounded-md"
          />

          <Button
            onClick={kurang}
            teks="kurang"
            className="p-3 bg-red-400 text-white rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

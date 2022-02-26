import "./App.css";
import { useState } from "react";

function MyTextField() {
  const [val, setVal] = useState("foo");
  return (
    <div
      onKeyDown={(e) => {
        // this is supposed to be doing something else,
        // but it also does...
        e.preventDefault();
      }}
    >
      <input
        value={val}
        onChange={(e) => {
          console.log(e);
          setVal(e.target.value);
        }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MyTextField></MyTextField>
    </div>
  );
}

export default App;

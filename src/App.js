import "./App.css";
import { useState } from "react";

function MyTextField() {
  const [val, setVal] = useState("foo");
  const [eventIsTrusted, setEventIsTrusted] = useState(true);
  return (
    <div>
      <input
        value={val}
        onChange={(e) => {
          setEventIsTrusted(e.isTrusted);
          setVal(e.target.value);
        }}
      />
      <div>
        <p>{eventIsTrusted ? "trusted" : "untrusted"}</p>
      </div>
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

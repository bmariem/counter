import React, { useState } from "react";
import "./App.css";

//Components
import Header from "./Components/Header/Header";
import Button from "./Components/Button/Button";

function App() {
  // ETATS
  const [counter, setCounter] = useState(0);

  // Functions
  const handleDecrementClick = () => {
    setCounter(counter - 1);
  };

  const handleIncrementClick = () => {
    setCounter(counter + 1);
  };

  const handleResetClick = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="counter">
          <Button
            click={handleDecrementClick}
            counter={counter}
            limit="0"
            label="-"
            class="minus"
          />

          <h2 className="result">{counter} </h2>

          <Button
            click={handleIncrementClick}
            counter={counter}
            limit="10"
            label="+"
            class="plus"
          />
        </div>
        <Button click={handleResetClick} label="Reset" class="reset" />
      </div>
    </div>
  );
}

export default App;

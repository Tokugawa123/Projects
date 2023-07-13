import { useMemo, useState } from "react";
import "./App.css";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 160;

export default function App() {
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }
  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>Project 7: BMI calculator</h1>
      <div className="input-section">
        <p>Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p>Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          step="1"
          min="140"
          max="220"
        />
      </div>

      <div className="output-section">
        <p>Your BMI</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

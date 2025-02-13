import ResetButton from "./ResetButton";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import Title from "./Title";
import { useState } from "react";
import CountButton from "./CountButton";

export default function Card() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((c) => c + 1);
  }
  function handleDecrease() {
    setCount((c) => c - 1);
  }

  function handleReset() {
    setCount(0);
  }
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton onReset={handleReset} />
      <ButtonContainer>
        <CountButton type="minus" onDecrease={handleDecrease} />
        <CountButton type="plus" onIncrease={handleIncrease} />
      </ButtonContainer>
    </div>
  );
}

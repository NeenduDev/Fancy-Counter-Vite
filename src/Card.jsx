import ResetButton from "./ResetButton";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import Title from "./Title";
import { useEffect, useState } from "react";
import CountButton from "./CountButton";

export default function Card() {
  const [count, setCount] = useState(0);
  const isLocked = count > 5;
  function handleIncrease(e) {
    // if (count === 5) return;
    setCount((c) => (c > 5 ? 6 : c + 1));
    e.currentTarget.blur();
  }
  function handleDecrease(e) {
    if (count === 0) return;
    setCount((c) => c - 1);
    e.currentTarget.blur();
  }

  function handleReset(e) {
    setCount(0);
    e.currentTarget.blur();
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") setCount((c) => (c > 5 ? 6 : c + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={count > 5 ? `card card--limit` : `card`}>
      <Title isLocked={isLocked} />
      <Count count={count} isLocked={isLocked} />
      <ResetButton onReset={handleReset} />
      <ButtonContainer>
        <CountButton type="minus" onDecrease={handleDecrease} />
        <CountButton type="plus" onIncrease={handleIncrease} />
      </ButtonContainer>
    </div>
  );
}

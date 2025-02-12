import ResetButton from "./ResetButton";
import Count from "./Count";
import CountButtons from "./CountButtons";
import Title from "./Title";

export default function Card() {
  return (
    <div>
      <Title />
      <Count />
      <ResetButton />
      <CountButtons />
    </div>
  );
}

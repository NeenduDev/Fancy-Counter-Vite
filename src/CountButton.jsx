import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, onDecrease, onIncrease }) {
  return type === "plus" ? (
    <button className="count-btn" onClick={onIncrease}>
      <PlusIcon className="count-btn-icon" />
    </button>
  ) : (
    <button className="count-btn" onClick={onDecrease}>
      <MinusIcon className="count-btn-icon" />
    </button>
  );
}

import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, onDecrease, onIncrease }) {
  return (
    <button
      className="count-btn"
      onClick={type == "plus" ? onIncrease : onDecrease}
    >
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

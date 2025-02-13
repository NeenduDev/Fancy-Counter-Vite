export default function Count({ count, isLocked }) {
  return <p className="count">{isLocked ? 5 : count}</p>;
}

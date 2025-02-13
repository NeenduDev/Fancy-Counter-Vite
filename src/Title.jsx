export default function Title({ isLocked }) {
  return (
    <h1 className="title" id="title">
      {isLocked ? (
        <span>
          Limit! Buy <b>Pro</b> for &gt;5
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}

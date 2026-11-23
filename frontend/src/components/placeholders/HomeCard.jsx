import { CardSkeleton, ToolbarSkeleton } from "./CardSkeleton";

function HomeCard() {
  return (
    <div role="status" aria-live="polite">
      <span className="visually-hidden">Loading cards</span>
      <ToolbarSkeleton />
      <div className="card-rail">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

export default HomeCard;
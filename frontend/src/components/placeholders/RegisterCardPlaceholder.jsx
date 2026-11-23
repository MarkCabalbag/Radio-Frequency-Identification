import { CardSkeleton, ToolbarSkeleton } from "./CardSkeleton";

function RegisterCardPlaceholder() {
  return (
    <div role="status" aria-live="polite">
      <span className="visually-hidden">Loading cards</span>
      <ToolbarSkeleton />
      <div className="card-grid">
        <CardSkeleton withActions />
        <CardSkeleton withActions />
        <CardSkeleton withActions />
      </div>
    </div>
  );
}

export default RegisterCardPlaceholder;
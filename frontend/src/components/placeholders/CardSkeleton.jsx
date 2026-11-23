// Skeleton pieces that mirror the real toolbar and card layout (see GetCard, CardItem).
export function ToolbarSkeleton() {
  return (
    <div className="card-toolbar placeholder-glow" aria-hidden="true">
      <span className="placeholder skeleton-heading"></span>
      <div className="card-toolbar__actions">
        <span className="placeholder skeleton-button"></span>
        <span className="placeholder skeleton-button skeleton-button--wide"></span>
      </div>
    </div>
  );
}

export function CardSkeleton({ withActions = false }) {
  return (
    <div className="card rfid-card rfid-card--skeleton" aria-hidden="true">
      <div className="rfid-card__body placeholder-glow">
        <div className="rfid-card__top">
          <span className="placeholder skeleton-eyebrow"></span>
          <span className="placeholder skeleton-tag"></span>
        </div>
        <span className="placeholder skeleton-title"></span>
        <div className="skeleton-meta">
          <span className="placeholder"></span>
          <span className="placeholder"></span>
        </div>
      </div>
      {withActions && (
        <div className="rfid-card__actions placeholder-glow">
          <span className="placeholder skeleton-button skeleton-button--fill"></span>
          <span className="placeholder skeleton-button skeleton-button--short"></span>
        </div>
      )}
    </div>
  );
}
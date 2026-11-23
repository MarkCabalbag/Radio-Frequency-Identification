// `className` is kept for backwards compatibility; prefer `isLoading`.
function ButtonSpinner({
  buttonContent,
  className = "",
  onClick,
  btnClassname,
  isLoading = false,
}) {
  const spinnerClass = isLoading
    ? "spinner-border spinner-border-sm ms-2"
    : className;

  return (
    <button
      className={btnClassname}
      type="button"
      onClick={onClick}
      disabled={isLoading}
    >
      <span role="status">{buttonContent}</span>
      <span className={spinnerClass} aria-hidden="true"></span>
    </button>
  );
}

export default ButtonSpinner;
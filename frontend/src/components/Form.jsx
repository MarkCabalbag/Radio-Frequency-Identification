function Form({ onSubmit, formContent, className }) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {formContent}
    </form>
  );
}

export default Form;
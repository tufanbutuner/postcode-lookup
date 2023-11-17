interface InputProps {
  label: string;
  hint: string;
}

export default function Input({ label, hint }: InputProps) {
  return (
    <div className="govuk-form-group lbh-form-group">
      <label className="govuk-label lbh-label" htmlFor="input-with-hint-text">
        {label}
      </label>
      <span id="input-with-hint-text-hint" className="govuk-hint lbh-hint">
        {hint}
      </span>
      <input
        className="govuk-input lbh-input"
        id="input-with-hint-text"
        name="test-name-2"
        type="text"
        aria-describedby="input-with-hint-text-hint"
      />
    </div>
  );
}

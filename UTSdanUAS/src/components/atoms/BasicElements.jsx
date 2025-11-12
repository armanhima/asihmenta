// src/components/atoms/BasicElements.jsx

export function Input({ type = "text", name, value, onChange, required = false }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="form-input"
    />
  );
}

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {children}
    </label>
  );
}

export function Button({ type = "button", onClick, children }) {
  return (
    <button type={type} onClick={onClick} className="form-button">
      {children}
    </button>
  );
}
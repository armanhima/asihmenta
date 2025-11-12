function Input({ type = "text", name, value, onChange, required = false }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
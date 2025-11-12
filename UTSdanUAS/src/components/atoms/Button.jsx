// src/components/atoms/Button.jsx
function Button({ type = "button", onClick, children }) {
  return (
    <button type={type} onClick={onClick} className="form-button">
      {children}
    </button>
  );
}

export default Button;
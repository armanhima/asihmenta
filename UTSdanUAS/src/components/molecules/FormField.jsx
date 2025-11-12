import { Label, Input } from "../atoms/BasicElements";

function FormField({ label, name, type, value, onChange }) {
  return (
    <div className="form-field">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} value={value} onChange={onChange} required />
    </div>
  );
}

export default FormField;
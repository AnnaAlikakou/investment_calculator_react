export default function Input({ label, value, onChange }) {

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        required
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

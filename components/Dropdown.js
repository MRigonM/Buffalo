// components/Dropdown.js


export default function Dropdown({ name, options = [], register, required, placeholder, onChange }) {
  return (
    <div className="dropdown">
      <select {...register(name, { required })}
              defaultValue=""
                onChange={onChange}>
        <option value="" disabled hidden>
          {placeholder || '-- Select an option --'}
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}


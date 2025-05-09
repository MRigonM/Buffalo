export default function TextInput({
  label,
  name,
  register,
  required = false, // default to false if not provided
  placeholder,
  type = 'text',
  error,
  validationRules = {}, // Add validationRules prop to accept additional validation rules
}) {
  // Check if 'name' and 'register' are available before proceeding
  if (!name || typeof register !== 'function') {
    console.error('TextInput component requires both "name" and "register" function.');
    return null;
  }

  // Spread the additional validation rules
  const inputProps = {
    id: name,
    name: name,
    type: type,
    placeholder: placeholder,
    ...register(name, { required, ...validationRules }) // Apply additional validation rules here
  };

  return (
    <div className={`textinput ${error ? 'has-error' : ''}`}>
     

      <input {...inputProps} aria-invalid={!!error} />

      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
}
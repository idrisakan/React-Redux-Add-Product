

const Input = ({value, placeholder, type, name, id, onChange }) => {
  return (
    <input
    className="h-10 p-2 rounded-md w-full border outline-none mt-3"
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;

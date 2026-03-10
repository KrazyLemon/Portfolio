
export default function Selector({ value, onChange }) {
  const options = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
  ];

  return (
    <div className="rounded-xl p-3 flex items-center gap-2 border border-white/20 hover:bg-white/20  backdrop-blur-xl shadow-lg">
      <select
        className="border-0  outline-0 cursor-pointer "
        value={value}
        onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="p-2 bg-white/10 text-black backdrop-blur-2xl">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search employee..."
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
    />
  );
}

export default SearchBar;
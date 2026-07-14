import { FaSearch } from "react-icons/fa";

function TaskSearch({ value, onChange }) {
  return (
    <div className="relative">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search task..."
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
      />
    </div>
  );
}

export default TaskSearch;
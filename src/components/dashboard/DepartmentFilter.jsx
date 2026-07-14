function DepartmentFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
    >
      <option value="All">All Departments</option>
      <option value="IT">IT</option>
      <option value="HR">HR</option>
      <option value="Finance">Finance</option>
    </select>
  );
}

export default DepartmentFilter;
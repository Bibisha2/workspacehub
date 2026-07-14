function ProjectFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    >
      <option>All</option>
      <option>Active</option>
      <option>Completed</option>
      <option>Pending</option>
    </select>
  );
}

export default ProjectFilter;
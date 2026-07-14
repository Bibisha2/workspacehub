function TaskFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
    >
      <option value="All">All Priority</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
  );
}

export default TaskFilter;
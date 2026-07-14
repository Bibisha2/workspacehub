function ProjectSearch({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search project..."
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    />
  );
}

export default ProjectSearch;
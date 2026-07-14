function ProjectModal({
  isOpen,
  onClose,
  title,
  project,
  onChange,
  onSave,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold">
          {title}
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Project Name"
            name="name"
            value={project.name}
            onChange={onChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="text"
            placeholder="Project Manager"
            name="manager"
            value={project.manager}
            onChange={onChange}
            className="w-full rounded-lg border p-3"
          />

          <select
            name="status"
            value={project.status}
            onChange={onChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>

          <input
            type="date"
            name="deadline"
            value={project.deadline}
            onChange={onChange}
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white"
          >
            Save
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
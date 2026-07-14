function TaskModal({
  isOpen,
  onClose,
  title,
  task,
  onChange,
  onSave,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            {title}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Fill in the task details below.
          </p>
        </div>

        <div className="space-y-4">

          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={task.title}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-500"
          />

          <input
            type="text"
            name="assignedTo"
            placeholder="Assigned To"
            value={task.assignedTo}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-500"
          />

          <select
            name="priority"
            value={task.priority}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <select
            name="status"
            value={task.status}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-blue-500"
          />

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-5 py-2 transition hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Save Task
          </button>

        </div>

      </div>
    </div>
  );
}

export default TaskModal;
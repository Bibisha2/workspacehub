function EmployeeModal({
  isOpen,
  onClose,
  title,
  employee,
  onChange,
  onSave,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold">{title}</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Employee Name"
            name="name"
            value={employee.name}
            onChange={onChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="text"
            placeholder="Department"
            name="department"
            value={employee.department}
            onChange={onChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="text"
            placeholder="Role"
            name="role"
            value={employee.role}
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

export default EmployeeModal;
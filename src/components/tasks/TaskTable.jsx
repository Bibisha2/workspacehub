import { useState } from "react";
import toast from "react-hot-toast";

import Card from "../ui/Card";
import Button from "../ui/Button";

import TaskSearch from "./TaskSearch";
import TaskFilter from "./TaskFilter";
import TaskModal from "./TaskModal";
import DeleteTaskModal from "./DeleteTaskModal";

import { tasks as taskData } from "../../data/tasks";

function TaskTable() {
  const [taskList, setTaskList] = useState(taskData);

  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const [task, setTask] = useState({
    title: "",
    assignedTo: "",
    priority: "",
    status: "",
    dueDate: "",
  });

  const filteredTasks = taskList.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPriority =
      priority === "All" ||
      item.priority === priority;

    return matchesSearch && matchesPriority;
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (isEditing) {
      setTaskList((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, ...task }
            : item
        )
      );

      toast.success("Task updated successfully!");
    } else {
      const newTask = {
        id: Date.now(),
        ...task,
      };

      setTaskList((prev) => [...prev, newTask]);

      toast.success("Task added successfully!");
    }

    setTask({
      title: "",
      assignedTo: "",
      priority: "",
      status: "",
      dueDate: "",
    });

    setEditingId(null);
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const handleEdit = (item) => {
    setTask({
      title: item.title,
      assignedTo: item.assignedTo,
      priority: item.priority,
      status: item.status,
      dueDate: item.dueDate,
    });

    setEditingId(item.id);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (item) => {
    setSelectedTask(item.id);
    setIsDeleteOpen(true);
  };

  const handleDelete = () => {
    setTaskList((prev) =>
      prev.filter((item) => item.id !== selectedTask)
    );

    toast.success("Task deleted successfully!");

    setIsDeleteOpen(false);
  };

  return (
    <>
      <Card>
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Tasks
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage and track all company tasks.
            </p>
          </div>

          <Button
            variant="primary"
            className="w-fit px-5 py-2"
            onClick={() => {
              setTask({
                title: "",
                assignedTo: "",
                priority: "",
                status: "",
                dueDate: "",
              });

              setEditingId(null);
              setIsEditing(false);
              setIsModalOpen(true);
            }}
          >
            + Add Task
          </Button>
        </div>

        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="w-full md:w-2/3">
              <TaskSearch
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <TaskFilter
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />

          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">

          <table className="w-full">

            <thead>

              <tr className="bg-slate-100">

                <th className="px-6 py-4 text-left font-semibold">
                  Task
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  Assigned To
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  Priority
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  Status
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  Due Date
                </th>

                <th className="px-6 py-4 text-center font-semibold">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>
                              {filteredTasks.map((item) => (
                <tr
                  key={item.id}
                  className="border-t transition hover:bg-slate-50"
                >
                  <td className="px-6 py-4 font-medium">
                    {item.title}
                  </td>

                  <td className="px-6 py-4">
                    {item.assignedTo}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : item.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    {item.dueDate}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">

                      <Button
                        variant="primary"
                        className="w-fit px-4 py-2 text-sm"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="danger"
                        className="w-fit px-4 py-2 text-sm"
                        onClick={() => handleDeleteClick(item)}
                      >
                        Delete
                      </Button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </Card>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditing ? "Edit Task" : "Add Task"}
        task={task}
        onChange={handleChange}
        onSave={handleSave}
      />

      <DeleteTaskModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
}

export default TaskTable;
            
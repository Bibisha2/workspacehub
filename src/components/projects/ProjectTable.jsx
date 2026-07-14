import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ProjectSearch from "./ProjectSearch";
import ProjectFilter from "./ProjectFilter";
import ProjectModal from "./ProjectModal";
import DeleteModal from "../dashboard/DeleteModal";
import { projects as projectData } from "../../data/projects";
import toast from "react-hot-toast";

function ProjectTable() {
  const [projectList, setProjectList] = useState(projectData);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [project, setProject] = useState({
    name: "",
    manager: "",
    status: "",
    deadline: "",
  });

  const filteredProjects = projectList.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || item.status === status;

    return matchesSearch && matchesStatus;
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (isEditing) {
      setProjectList((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, ...project }
            : item
        )
      );

      toast.success("Project updated successfully!");
    } else {
      const newProject = {
        id: Date.now(),
        ...project,
      };

      setProjectList((prev) => [...prev, newProject]);

      toast.success("Project added successfully!");
    }

    setProject({
      name: "",
      manager: "",
      status: "",
      deadline: "",
    });

    setEditingId(null);
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const handleEdit = (item) => {
    setProject({
      name: item.name,
      manager: item.manager,
      status: item.status,
      deadline: item.deadline,
    });

    setEditingId(item.id);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (item) => {
    setSelectedProject(item.id);
    setIsDeleteOpen(true);
  };

  const handleDelete = () => {
    setProjectList((prev) =>
      prev.filter((item) => item.id !== selectedProject)
    );

    toast.success("Project deleted successfully!");

    setIsDeleteOpen(false);
  };

  return (
    <>
      <Card>
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Projects
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage all company projects.
            </p>
          </div>

          <Button
            variant="primary"
            className="w-fit px-5 py-2"
            onClick={() => {
              setProject({
                name: "",
                manager: "",
                status: "",
                deadline: "",
              });

              setEditingId(null);
              setIsEditing(false);
              setIsModalOpen(true);
            }}
          >
            + Add Project
          </Button>
        </div>

        {/* Search & Filter */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-2/3">
              <ProjectSearch
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <ProjectFilter
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-6 py-4 text-left font-semibold">
                  Project
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  Manager
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  Status
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  Deadline
                </th>

                <th className="px-6 py-4 text-center font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProjects.map((item) => (
                <tr
                  key={item.id}
                  className="border-t transition hover:bg-slate-50"
                >
                  <td className="px-6 py-4 font-medium">
                    {item.name}
                  </td>

                  <td className="px-6 py-4">
                    {item.manager}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Completed"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    {item.deadline}
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

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditing ? "Edit Project" : "Add Project"}
        project={project}
        onChange={handleChange}
        onSave={handleSave}
      />

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
}

export default ProjectTable;
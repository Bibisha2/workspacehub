import React from "react";
import {
  FaUsers,
  FaFolderOpen,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

function StatsCard({ title, value }) {
  const cardData = {
    "Total Employees": {
      icon: <FaUsers size={28} />,
      color: "bg-blue-100 text-blue-600",
      growth: "+12% this month",
    },

    "Active Projects": {
      icon: <FaFolderOpen size={28} />,
      color: "bg-green-100 text-green-600",
      growth: "+4 new projects",
    },

    "Pending Tasks": {
      icon: <FaTasks size={28} />,
      color: "bg-yellow-100 text-yellow-600",
      growth: "6 due today",
    },

    Revenue: {
      icon: <FaChartLine size={28} />,
      color: "bg-purple-100 text-purple-600",
      growth: "+18% this month",
    },
  };

  const current =
    cardData[title] || {
      icon: <FaChartLine size={28} />,
      color: "bg-gray-100 text-gray-600",
      growth: "Updated today",
    };

  return (
    <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-800">
            {value}
          </h2>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600">
            <FaChartLine size={14} />
            {current.growth}
          </div>
        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${current.color} transition-transform duration-300 group-hover:scale-110`}
        >
          {current.icon}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
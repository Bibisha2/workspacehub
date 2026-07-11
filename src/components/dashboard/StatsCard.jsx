import React from "react";

function StatsCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition">
      <p className="text-gray-500">{title}</p>

      <h2 className="mt-2 text-3xl font-bold text-blue-600">
        {value}
      </h2>
    </div>
  );
}

export default StatsCard;
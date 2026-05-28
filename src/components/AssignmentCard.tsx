"use client";

import { FiMoreVertical } from "react-icons/fi";

export default function AssignmentCard() {
  return (
    <div className="bg-white rounded-3xl p-6 relative hover:shadow-md transition min-h-[180px]">
      {/* MENU */}
      <button className="absolute top-5 right-5 text-gray-400">
        <FiMoreVertical />
      </button>

      {/* TITLE */}
      <h2 className="text-3xl font-bold underline">Quiz on Electricity</h2>

      {/* FOOTER */}
      <div className="flex justify-between mt-16">
        <div>
          <p className="font-semibold">Assigned on:</p>

          <p className="text-gray-500">20-06-2025</p>
        </div>

        <div>
          <p className="font-semibold">Due:</p>

          <p className="text-gray-500">21-06-2025</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { FiArrowLeft, FiBell } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="bg-white rounded-3xl px-6 py-4 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button className="text-2xl">
          <FiArrowLeft />
        </button>

        <p className="text-gray-400 text-lg">Assignment</p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <FiBell className="text-2xl" />

          <div className="w-2 h-2 rounded-full bg-orange-500 absolute top-0 right-0"></div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            className="w-12 h-12 rounded-full"
            alt="profile"
          />

          <p className="font-semibold">John Doe</p>
        </div>
      </div>
    </div>
  );
}

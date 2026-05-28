"use client";

import Link from "next/link";

import { FiHome, FiBook, FiUsers, FiSettings, FiClock } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="hidden md:flex w-[280px] min-h-screen bg-white border-r flex-col justify-between p-5">
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-white text-2xl font-bold">
            V
          </div>

          <h1 className="text-4xl font-bold">VedaAI</h1>
        </div>

        {/* BUTTON */}
        <Link href="/create">
          <button className="w-full bg-black text-white py-4 rounded-full mt-10 hover:scale-[1.02] transition">
            ✨ Create Assignment
          </button>
        </Link>

        {/* MENU */}
        <div className="mt-10 space-y-2">
          <Link href="/">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer text-gray-500">
              <FiHome />

              <p>Home</p>
            </div>
          </Link>

          <Link href="/assignments">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer text-gray-500">
              <FiUsers />

              <p>My Groups</p>
            </div>
          </Link>

          <Link href="/assignments">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 cursor-pointer">
              <FiBook />

              <p className="font-semibold">Assignments</p>
            </div>
          </Link>

          <Link href="/preview">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer text-gray-500">
              <FiBook />

              <p>AI Teacher Toolkit</p>
            </div>
          </Link>

          <Link href="/create">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer text-gray-500">
              <FiClock />

              <p>My Library</p>
            </div>
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div>
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer text-gray-500">
          <FiSettings />

          <p>Settings</p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-3 mt-3 flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            className="w-14 h-14 rounded-full"
            alt="school"
          />

          <div>
            <h3 className="font-bold">Delhi Public School</h3>

            <p className="text-sm text-gray-500">Bokaro Steel City</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import MainLayout from "@/layouts/MainLayout";
import Navbar from "@/components/Navbar";
import AssignmentCard from "@/components/AssignmentCard";

import { FiFilter, FiSearch, FiPlus } from "react-icons/fi";

export default function AssignmentsPage() {
  const assignments = [1, 2, 3, 4, 5, 6];

  return (
    <MainLayout>
      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>

          <h1 className="text-4xl font-bold">Assignments</h1>
        </div>

        <p className="text-gray-500 mt-2">
          Manage and create assignments for your classes.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-3xl p-4 mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* FILTER */}
        <div className="flex items-center gap-2 text-gray-500">
          <FiFilter />

          <p>Filter By</p>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-2 border rounded-full px-4 py-3 w-full md:w-[350px]">
          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search Assignment"
            className="outline-none w-full"
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-6">
        {assignments.map((item) => (
          <AssignmentCard key={item} />
        ))}
      </div>

      {/* FLOATING BUTTON */}
      <Link href="/create">
        <button className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 rounded-full shadow-xl hover:scale-105 transition">
          + Create Assignment
        </button>
      </Link>
    </MainLayout>
  );
}

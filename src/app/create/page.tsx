"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import Navbar from "@/components/Navbar";

import { FiPlus, FiUploadCloud } from "react-icons/fi";

import { generateAssignment } from "@/services/assignmentService";

import { useAssignmentStore } from "@/store/useAssignmentStore";

export default function CreatePage() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleGenerate = async () => {
    try {
      setLoading(true);

      const payload = {
        dueDate,
        instructions,
        questions,
      };

      const response = await generateAssignment(payload);

      console.log(response);

      setGeneratedPaper(response.data.sections);

      router.push("/preview");
    } catch (error) {
      console.log(error);

      alert("API Failed");
    } finally {
      setLoading(false);
    }
  };

  const {
    dueDate,
    instructions,
    questions,

    setDueDate,
    setInstructions,

    addQuestion,
    updateQuestion,

    setGeneratedPaper,
  } = useAssignmentStore();

  const totalQuestions = questions.reduce((acc, q) => acc + q.count, 0);

  const totalMarks = questions.reduce((acc, q) => acc + q.count * q.marks, 0);

  return (
    <MainLayout>
      <Navbar />

      {/* HEADER */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>

          <div>
            <h1 className="text-4xl font-bold">Create Assignment</h1>

            <p className="text-gray-500 mt-1">
              Set up a new assignment for your students
            </p>
          </div>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="w-full h-1 bg-gray-200 rounded-full mt-8">
        <div className="w-1/2 h-full bg-black rounded-full"></div>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-3xl p-8 mt-8 max-w-5xl mx-auto">
        {/* TITLE */}
        <div>
          <h2 className="text-2xl font-bold">Assignment Details</h2>

          <p className="text-gray-500 mt-1">
            Basic information about your assignment
          </p>
        </div>

        {/* UPLOAD */}
        <div className="border-2 border-dashed rounded-3xl p-12 mt-8 flex flex-col items-center justify-center">
          <FiUploadCloud className="text-5xl text-gray-400" />

          <p className="mt-4 font-medium">
            Choose a file or drag & drop it here
          </p>

          <p className="text-gray-400 text-sm mt-1">PDF, DOCX up to 10MB</p>

          <button className="mt-5 bg-gray-100 px-6 py-3 rounded-full">
            Browse Files
          </button>
        </div>

        {/* DATE */}
        <div className="mt-8">
          <label className="font-semibold">Due Date</label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border rounded-2xl p-4 mt-2 outline-none"
          />
        </div>

        {/* QUESTION SECTION */}
        <div className="mt-10">
          <div className="grid grid-cols-12 gap-4 mb-4 font-semibold text-sm">
            <p className="col-span-6">Question Type</p>

            <p className="col-span-3 text-center">No. of Questions</p>

            <p className="col-span-3 text-center">Marks</p>
          </div>

          {/* ROWS */}
          {questions.map((question, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-4 items-center mb-4"
            >
              {/* TYPE */}
              <select
                value={question.type}
                onChange={(e) => updateQuestion(index, "type", e.target.value)}
                className="col-span-6 border rounded-2xl p-4 outline-none"
              >
                <option>Multiple Choice Questions</option>

                <option>Short Questions</option>

                <option>Long Questions</option>
              </select>

              {/* COUNT */}
              <input
                type="number"
                min={1}
                value={question.count}
                onChange={(e) =>
                  updateQuestion(index, "count", Number(e.target.value))
                }
                className="col-span-3 border rounded-2xl p-4 text-center outline-none"
              />

              {/* MARKS */}
              <input
                type="number"
                min={1}
                value={question.marks}
                onChange={(e) =>
                  updateQuestion(index, "marks", Number(e.target.value))
                }
                className="col-span-3 border rounded-2xl p-4 text-center outline-none"
              />
            </div>
          ))}

          {/* ADD BUTTON */}
          <button
            onClick={addQuestion}
            className="flex items-center gap-3 mt-6"
          >
            <div className="bg-black text-white rounded-full p-2">
              <FiPlus />
            </div>
            Add Question Type
          </button>
        </div>

        {/* TOTALS */}
        <div className="flex justify-end mt-10">
          <div className="text-right">
            <p className="font-semibold">
              Total Questions:
              <span className="text-gray-500 font-normal">
                {" "}
                {totalQuestions}
              </span>
            </p>

            <p className="font-semibold mt-2">
              Total Marks:
              <span className="text-gray-500 font-normal"> {totalMarks}</span>
            </p>
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <div className="mt-10">
          <label className="font-semibold">Additional Instructions</label>

          <textarea
            rows={5}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Generate a question paper..."
            className="w-full border rounded-3xl p-5 mt-3 outline-none resize-none"
          />
        </div>
      </div>

      {/* FOOTER BUTTONS */}
      <div className="flex justify-between max-w-5xl mx-auto mt-8 pb-10">
        <button className="bg-white px-8 py-4 rounded-full">← Previous</button>

        <button
          onClick={handleGenerate}
          className="bg-black text-white px-8 py-4 rounded-full"
        >
          {loading ? "Generating..." : "Generate →"}
        </button>
      </div>
    </MainLayout>
  );
}

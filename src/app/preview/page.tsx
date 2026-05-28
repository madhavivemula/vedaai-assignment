"use client";

import MainLayout from "@/layouts/MainLayout";
import Navbar from "@/components/Navbar";

export default function PreviewPage() {
  const generatedPaper = [
    {
      title: "Section A",

      instruction: "Attempt all questions. Each question carries 2 marks.",

      questions: [
        {
          text: "Define electroplating and explain its purpose.",

          difficulty: "Easy",

          marks: 2,
        },

        {
          text: "What is electrolysis?",

          difficulty: "Moderate",

          marks: 2,
        },

        {
          text: "Explain chemical effects of electric current.",

          difficulty: "Hard",

          marks: 5,
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <Navbar />

      {/* TOP CARD */}
      <div className="bg-[#1d1d1d] text-white rounded-3xl p-8 mt-5 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold leading-relaxed">
          Certainly! Here are customized questions for your CBSE Grade 8 Science
          class.
        </h2>

        <button className="bg-white text-black px-6 py-3 rounded-full mt-6 font-medium">
          Download as PDF
        </button>
      </div>

      {/* PAPER */}
      <div className="bg-white rounded-3xl mt-5 p-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">Delhi Public School</h1>

          <p className="text-2xl mt-4">Subject: Science</p>

          <p className="text-2xl mt-2">Class: 8th</p>
        </div>

        {/* INFO */}
        <div className="flex justify-between mt-14">
          <p className="font-medium">Time Allowed: 45 Minutes</p>

          <p className="font-medium">Maximum Marks: 20</p>
        </div>

        <p className="mt-10">
          All questions are compulsory unless stated otherwise.
        </p>

        {/* STUDENT INFO */}
        <div className="mt-10 space-y-3">
          <p>Name: __________________</p>

          <p>Roll Number: __________________</p>

          <p>Section: __________________</p>
        </div>

        {/* SECTIONS */}
        <div className="mt-16">
          {generatedPaper.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <div className="text-center mt-20 mb-14">
                <h2 className="text-5xl font-bold tracking-wide">
                  {section.title}
                </h2>
              </div>

              <p className="text-gray-500 mt-4 text-center">
                {section.instruction}
              </p>

              {/* QUESTIONS */}
              <div className="mt-4 space-y-2">
                {section.questions.map((question, questionIndex) => (
                  <div
                    key={questionIndex}
                    className="py-2 border-b border-gray-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                      <p className="text-[18px] leading-9 text-gray-800">
                        {questionIndex + 1}. {question.text}
                      </p>

                      <div className="flex gap-3">
                        <span className="text-sm font-semibold text-blue-600">
                          {question.difficulty}
                        </span>

                        <span className="text-sm font-semibold text-gray-700">
                          {question.marks} Marks
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ANSWER KEY */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold">Answer Key</h2>

          <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
            <p>
              1. Electroplating is the process of coating one metal with another
              using electricity.
            </p>

            <p>
              2. Electrolysis is the chemical decomposition caused by electric
              current.
            </p>

            <p>
              3. Electric current can produce chemical changes in conducting
              liquids.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

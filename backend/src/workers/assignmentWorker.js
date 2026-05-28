const { Worker } = require("bullmq");

const connection = require("../config/redis");

const worker = new Worker(
  "assignment-generation",

  async (job) => {
    console.log("Processing Job...");

    // Fake AI delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Fake AI response
    const generatedPaper = {
      sections: [
        {
          title: "Section A",

          instruction: "Attempt all questions",

          questions: [
            {
              text: "Define electroplating.",

              difficulty: "Easy",

              marks: 2,
            },

            {
              text: "Explain electrolysis.",

              difficulty: "Medium",

              marks: 5,
            },
          ],
        },
      ],
    };

    console.log("AI Generation Complete");

    return generatedPaper;
  },

  {
    connection,
  },
);

worker.on("completed", (job, result) => {
  console.log("Job completed:", result);
});

module.exports = worker;

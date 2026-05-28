const assignmentQueue = require("../queues/assignmentQueue");

exports.generateAssignment = async (req, res) => {
  try {
    const job = await assignmentQueue.add("generate-paper", req.body);

    // WAIT FOR RESULT
    const result = await job.waitUntilFinished(assignmentQueue.events);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const express = require("express");

const router = express.Router();

const { generateAssignment } = require("../controllers/assignmentController");

router.post("/generate", generateAssignment);

module.exports = router;

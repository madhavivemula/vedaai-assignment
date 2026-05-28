const { Queue, QueueEvents } = require("bullmq");

const connection = require("../config/redis");

const assignmentQueue = new Queue("assignment-generation", { connection });

const queueEvents = new QueueEvents("assignment-generation", { connection });

assignmentQueue.events = queueEvents;

module.exports = assignmentQueue;

const express = require("express");
const cors = require("cors");
const http = require("http");

const { Server } = require("socket.io");

const assignmentRoutes = require("./routes/assignmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/assignments", assignmentRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Client connected");
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});

require("./workers/assignmentWorker");

server.listen(5000, () => {
  console.log("Server running on port 5000");
});

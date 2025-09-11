import express from "express";
import os from "os";
import { execSync } from "child_process";

const app = express();
const port = 3000;
const hostname = os.hostname();

let commitHash = "N/A";
try {
  commitHash = execSync("git rev-parse HEAD").toString().trim();
} catch (err) {
  console.log("Not a git repository or commit not found");
}

app.get("/", (req, res) => {
  res.status(200).json({
    hostname,
    commitHash
  });
});

const server = app.listen(port, () => {
  const address = server.address();
  const host = address.address === "::" ? "localhost" : address.address;
  console.log(`Server running on http://${hostname}@${host}:${address.port}`);
});

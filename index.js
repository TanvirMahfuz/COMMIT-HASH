import express from "express";
import os from "os";

const app = express();
const port = 3000;
const hostmachine = os.hostname();
let serverInfo = {};
const GITHUB_API_URL = "https://api.github.com/repos/TanvirMahfuz/COMMIT-HASH/commits/main";

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "127.0.0.1"; 
}

app.get("/", async (req, res) => {
  try {
    const result = await fetch(GITHUB_API_URL);
    const data = await result.json();

    return res.status(200).json({
      msg: "Fetched data successfully",
      hostmachine,
      server: serverInfo,
      commitHash: data.sha,
      commitMessage: data.commit.message
    });

  } catch (error) {
    res.status(500).json({ msg: "internal server error", error: error.message });
  }
});

app.listen(port, () => {
  const host = getLocalIP(); // get real IP
  serverInfo = { host, port };
  console.log(`Server running on http://${hostmachine}@${host}:${port}`);
});

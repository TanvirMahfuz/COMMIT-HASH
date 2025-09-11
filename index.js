import express from "express";
import os from "os";

const app = express();
const port = 3000;
const hostname = os.hostname();

const GITHUB_API_URL = "https://api.github.com/repos/TanvirMahfuz/COMMIT-HASH/commits/main";

app.get("/",async (req, res) => {
    try {
        const result = await fetch(GITHUB_API_URL)
        const data = await result.json(0)
        console.log({
            msg: "Fetched data successfully",
            hostname,
            commitHash: data.sha,
            commitMessage: data.commit.message
        })
        return res.status(200).json({
            msg: "Fetched data successfully",
            hostname,
            commitHash: data.sha,
            commitMessage: data.commit.message
        });

    } catch (error) {
        res.status(500).json({msg:"internal server error",error: error.message})
    }

});

const server = app.listen(port, () => {
  const address = server.address();
  const host = address.address === "::" ? "localhost" : address.address;
  console.log(`Server running on http://${hostname}@${host}:${address.port}`);
});

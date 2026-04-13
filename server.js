const express = require("express");
const ytdl = require("@distube/ytdl-core");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.get("/download", async (req, res) => {
  try {
    const url = req.query.url;

    if (!ytdl.validateURL(url)) {
      return res.send("Invalid URL");
    }

    res.header("Content-Disposition", 'attachment; filename="video.mp4"');

    ytdl(url, {
      quality: "highest",
      filter: "audioandvideo"
    }).pipe(res);

  } catch (err) {
    res.send("Error: " + err.message);
  }
});

app.listen(10000, () => {
  console.log("Server running");
});

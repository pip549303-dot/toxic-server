const express = require("express");
const ytdl = require("ytdl-core");

const app = express();

app.get("/download", (req, res) => {
    const url = req.query.url;

    if (!ytdl.validateURL(url)) {
        return res.send("Invalid URL");
    }

    res.header("Content-Disposition", 'attachment; filename="video.mp4"');

    ytdl(url, { format: "mp4" }).pipe(res);
});

app.listen(10000, () => {
    console.log("Server running");
});
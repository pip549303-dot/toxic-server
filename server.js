const express = require("express");
const ytdl = require("ytdl-core");

const app = express();

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// التحميل
app.get("/download", (req, res) => {
    const url = req.query.url;

    if (!ytdl.validateURL(url)) {
        return res.send("Invalid URL");
    }

    res.header("Content-Disposition", 'attachment; filename="video.mp4"');

    ytdl(url).pipe(res);
});

app.listen(10000, () => {
    console.log("Server running");
});

import express from "express";
import multer from "multer";
import path from "path";
const app = express();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/uploads", (req, res) => {
  res.send("File Uploaded");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

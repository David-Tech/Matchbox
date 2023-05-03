const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Photo = require("../server/client/components/pages/Upload.js");

// Set up multer storage
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// Set up multer upload
const upload = multer({
  storage: storage,
});

// Handle photo upload
router.post("/upload", upload.single("photo"), (req, res, next) => {
  const { location } = req.body;

  // Create new photo instance
  const newPhoto = new Photo({
    location: location,
    path: req.file.path,
  });

  // Save photo instance to database
  newPhoto.save((err, photo) => {
    if (err) {
      res.status(500).json({ error: "Unable to upload photo." });
    } else {
      res.json(photo);
    }
  });
});

module.exports = router;

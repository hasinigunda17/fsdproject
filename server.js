const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer();

app.use(express.static("public"));

// STUDENT REGISTRATION
app.post("/student", upload.none(), (req, res) => {
    console.log("Student Registered:", req.body);
    res.sendStatus(200);
});

// VOLUNTEER REGISTRATION
app.post("/volunteer", upload.none(), (req, res) => {
    console.log("Volunteer Added:", req.body);
    res.sendStatus(200);
});

// EVENT CREATION
app.post("/event", upload.none(), (req, res) => {
    console.log("Event Created:", req.body);
    res.sendStatus(200);
});

// QR CHECKIN
app.post("/checkin", upload.none(), (req, res) => {
    console.log("QR Check-in:", req.body);
    res.sendStatus(200);
});

app.listen(3000, () =>
    console.log("Server running at http://localhost:3000")
);
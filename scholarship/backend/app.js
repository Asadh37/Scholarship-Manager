require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const app = express();
const PORT = process.env.PORT || 5000;
const studentRouter = require("./routes/student.route")
const scholarshipRouter = require("./routes/scholarship.route")
const instituteRoute = require("./routes/instiitute.route")
// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(express.json({ limit:"16kb" }));
// app.use(urlencoded({ extended:true, limit:"16kb" }));
app.use(express.static("public"))
app.use(cookieParser())

app.use("/students", studentRouter)
app.use("/institute", instituteRoute)
app.use("/scholarship", scholarshipRouter)
module.exports = app

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

//DB CONNECTION-------------------------------------------------------------------------
require("./db/connection");
//-------------------------------------------------------------------------

// Workout model-----------------------------------------------------------------------
const Workout = require("./models/workoutModel");
//-------------------------------------------------------------------------

//Require Routes-----------------------------
const workutsRoutes = require("./routes/workoutRouter");

//Require Routes user-------------------------------------
const userRoutes = require("./routes/userRouter");

//ROUTES-----------
app.use("/api/workouts", workutsRoutes);
app.use("/api/user", userRoutes);

//PORT RUN PROJECT---------------------------------------------------------------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

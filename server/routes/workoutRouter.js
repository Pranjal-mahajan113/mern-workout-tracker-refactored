const express = require("express");

const Workout = require("../models/workoutModel");

const router = express.Router();
const authUser = require("../middleware/userMiddleware");

//Require controllers---------------------------------------------------------
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
router.use(authUser);

//GET entire data--------------------------------------------------
router.get("/", getWorkouts);

//GET one record using id--------------------------
router.get("/:id", getWorkout);

//Create Route ---POST--------------------------------------------
router.post("/", createWorkout);

//UPDATE RECORD-------------
router.patch("/:id", editWorkout);

//DELETE RECORD----------
router.delete("/:id", deleteWorkout);

module.exports = router;

const express = require("express");

const Workout = require("../models/workoutModel");

const getWorkouts = async (req, res) => {
  try {
    const workoutdata = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(workoutdata);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Get singledata

const getWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutdata = await Workout.findById({ _id: id });
    res.status(200).json(workoutdata);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Create record------------------------------------
const createWorkout = async (req, res) => {
  try {
    const newWorkout = new Workout(req.body);
    const workoutsave = await newWorkout.save();
    res.status(201).json(workoutsave);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Update Record-------------------------------------
const editWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete ---------
const deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findByIdAndDelete({ _id: id });

    if (!workoutData) {
      return res.status(404).json({
        success: false,
        message: "Workout not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Workout deleted sucessfully",
      deletedData:workoutData
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
};

const express = require("express");

const User = require("../models/userModel");

const loginUser = async (req, res) => {
  res.json({ msg: "User logged in" });
};

const signupUser = async (req, res) => {
  res.json({ msg: "User signed up" });
};

module.exports = {
  loginUser,
  signupUser,
};

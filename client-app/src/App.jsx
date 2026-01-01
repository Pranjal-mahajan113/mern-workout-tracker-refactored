import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./Componets/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  //GET REQUEST------------------------
  //State for getting the data
  // State to store all workouts fetched from backend
  // const [workouts, setWorkouts] = useState([]);

  //Get Request function
  // Function to fetch workouts from API
  // const getWorkouts = async () => {
  //   const response = await axios.get("http://localhost:4000/api/workouts");
  //   const data = response.data;
  //   setWorkouts(data); // Update state with fetched data
  // };

  // Fetch workouts once when component mounts
  // useEffect(() => {
  //   getWorkouts();
  // }, []);

  // --------------------- POST REQUEST (CREATE WORKOUT) ---------------------

  // State to handle the create form fields
  // const [form, setForm] = useState({
  //   title: "",
  //   reps: "",
  //   load: "",
  // });

  // Handle form input changes for create form
  // const updateformfield = (e) => {
  //   const { name, value } = e.target;

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // Function to create a new workout
  // const createWorkout = async (e) => {
  //   e.preventDefault(); // Prevent page reload on form submit
  //   // Send POST request to backend
  //   const response = await axios.post(
  //     "http://localhost:4000/api/workouts",
  //     form
  //   );
  //   setWorkouts([...workouts, response.data]);

  //   // Clear the form after submission
  //   setForm({
  //     title: "",
  //     reps: "",
  //     load: "",
  //   });

  //   // Refresh the workouts list from backend
  //   getWorkouts();
  // };

  //DELETE REQUEST-----------------------------------------------------------------------------------
  // Function to delete a workout by id
  // const deleteWorkout = async (_id) => {
  //   const response = await axios.delete(
  //     `http://localhost:4000/api/workouts/${_id}`
  //   );
  //   // console.log(response);
  //   getWorkouts();
  // };
  //----------------------------------------------------------------------------------------------

  //UPDATE REQUEST---------------------------------------------------------------------------------
  // State to handle the update form fields
  // const [updateForm, setUpdateform] = useState({
  //   _id: null, // If _id is null → edit form is hidden
  //   title: "",
  //   reps: "",
  //   load: "",
  // });

  // Handle input changes for the edit form
  // const handleEditchange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdateform({
  //     ...updateForm,
  //     [name]: value,
  //   });
  // };

  // Function to populate the edit form when "Edit" button is clicked
  // const toggleUpdate = (item) => {
  //   // console.log(item)
  //   setUpdateform({
  //     _id: item._id, // Store the id of the workout being edited
  //     title: item.title,
  //     reps: item.reps,
  //     load: item.load, //data goes to form edit
  //   });
  // };

  // Function to update a workout (PATCH request)
  // const updateWorkout = async (e) => {
  //   e.preventDefault();
  //   const { _id, title, reps, load } = updateForm;

  // Send PATCH request to backend with updated values
  // const response = await axios.patch(
  //   `http://localhost:4000/api/workouts/${_id}`,
  //   {
  //     title,
  //     reps,
  //     load,
  //   }
  // );
  // getWorkouts();
  // setUpdateform({
  //   _id: null,
  //   title: "",
  //   reps: "",
  //   load: "",
  // });

  // console.log(response)

  return (
    <div>
      {/* <h1> CREATE RECORDS</h1>
      <div className="createform">
        <form onSubmit={createWorkout}>
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={updateformfield}
          />
          <br />

          <label htmlFor="">Reps</label>
          <input
            type="number"
            name="reps"
            value={form.reps}
            onChange={updateformfield}
          />
          <br />

          <label htmlFor="">Loads</label>
          <input
            type="number"
            name="load"
            value={form.load}
            onChange={updateformfield}
          />
          <br />
          <br />
          <button>SUBMIT</button>
        </form>
      </div>
      <br />
      <hr /> */}

      {/* {updateForm._id && (
        <div className="Editform">
          
          <h1>EDIT RECORDS</h1>
          <form onSubmit={updateWorkout}>
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              value={updateForm.title}
              onChange={handleEditchange}
            />
            <br />

            <label htmlFor="">Reps</label>
            <input
              type="number"
              name="reps"
              value={updateForm.reps}
              onChange={handleEditchange}
            />
            <br />

            <label htmlFor="">Loads</label>
            <input
              type="number"
              name="load"
              value={updateForm.load}
              onChange={handleEditchange}
            />
            <br />
            <br />
            <button>Update</button>
            <hr />
          </form>
        </div>
      )} */}

      {/* <h1>WORKOUTS</h1> */}

      {/* {workouts &&
        workouts.map((item) => {
          return (
            <div className="record" key={item._id}>
              <h1>{item.title}</h1>
              <p>{item.reps}</p>
              <p>{item.load}</p>
              <button onClick={() => toggleUpdate(item)}>Edit</button>
              <button onClick={() => deleteWorkout(item._id)}>Delete</button>
            </div>
          );
        })} */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

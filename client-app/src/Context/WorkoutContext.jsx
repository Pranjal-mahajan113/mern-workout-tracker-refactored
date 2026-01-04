import React, { createContext, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../Hooks/useAuthContext";

export const Data = createContext();

const WorkoutContext = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const [form, setForm] = useState({
    title: "",
    reps: "",
    load: "",
  });
  const { user } = useAuthContext();
  //GET REQUEST FUNCTION
  const getWorkouts = async () => {
    const response = await axios.get("http://localhost:4000/api/workouts", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = response.data;
    setWorkouts(data); // Update state with fetched data
  };
  //Delete Request---------------------------------
  //Function to delete a workout by id
  const deleteWorkout = async (_id) => {
    const response = await axios.delete(
      `http://localhost:4000/api/workouts/${_id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    // console.log(response);
    getWorkouts();
  };

  //Update Request---------------------------------------
  const [updateForm, setUpdateform] = useState({
    _id: null, // If _id is null → edit form is hidden
    title: "",
    reps: "",
    load: "",
  });

  //Function to populate the edit form when "Edit" button is clicked
  const toggleUpdate = (item) => {
    // console.log(item)
    setUpdateform({
      _id: item._id, // Store the id of the workout being edited
      title: item.title,
      reps: item.reps,
      load: item.load, //data goes to form edit
    });
  };

  //Function to update a workout (PATCH request)

  return (
    <>
      <Data.Provider
        value={{
          workouts,
          setWorkouts,
          form,
          setForm,
          getWorkouts,
          deleteWorkout,
          updateForm,
          setUpdateform,
          toggleUpdate,
        }}
      >
        {children}
      </Data.Provider>
    </>
  );
};

export default WorkoutContext;

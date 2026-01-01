import React, { useContext } from "react";
import axios from "axios";
import { Data } from "../../Context/workoutContext";

const Form = () => {
  const {
    form,
    setForm,
    workouts,
    setWorkouts,
    getWorkouts,
    updateForm,
    setUpdateform,
  } = useContext(Data);

  //Handle form input changes for create form
  //1...CREATE FORM FUNCTION-------------------------------
  const updateformfield = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  // Function to create a new workout
  const createWorkout = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    // Send POST request to backend
    const response = await axios.post(
      "http://localhost:4000/api/workouts",
      form
    );
    setWorkouts([...workouts, response.data]);

    // Clear the form after submission
    setForm({
      title: "",
      reps: "",
      load: "",
    });
    getWorkouts();
  };

  //2...UPDATE FORM FUNCTION-------------------------------
  const updateWorkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateForm;

    // Send PATCH request to backend with updated values
    const response = await axios.patch(
      `http://localhost:4000/api/workouts/${_id}`,
      {
        title,
        reps,
        load,
      }
    );
    getWorkouts();
    setUpdateform({
      _id: null,
      title: "",
      reps: "",
      load: "",
    });

    console.log(response);
  };

  //Handle input changes for the edit form
  const handleEditchange = (e) => {
    const { name, value } = e.target;
    setUpdateform({
      ...updateForm,
      [name]: value,
    });
  };

  return (
    //Create Form
    <>
      <div className="createform">
        {!updateForm._id && (
          <>
            <div className="max-w-xl mx-auto mt-10 bg-white shadow-sm border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Add New Workout
              </h2>
              <form onSubmit={createWorkout} className="space-y-4">
                <label className="block font-semibold text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={updateformfield}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-[#1aac83]"
                />
                <br />

                <label className="block font-semibold text-gray-700">
                  Reps
                </label>
                <input
                  type="number"
                  name="reps"
                  value={form.reps}
                  onChange={updateformfield}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-[#1aac83]"
                  placeholder="Enter reps"
                />
                <br />
                <label className="block font-semibold text-gray-700">
                  Load (kg)
                </label>
                <input
                  type="number"
                  name="load"
                  value={form.load}
                  onChange={updateformfield}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-[#1aac83]"
                  placeholder="Enter weight"
                />
                <br />
                <br />
                <button className="w-full bg-[#1aac83] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  SUBMIT
                </button>
              </form>
            </div>
          </>
        )}
      </div>

      {/* UPDATE FORM */}

      <div className="Editform">
        {updateForm._id && (
          <>
            <div className="mx-w--xl mx-auto mt-10 bg-white shadow-sm border border-gray-200 rounded-xl p-6">
              <h1 className=" text-2xl font-bold text-[#1aac83] mb-4">
                EDIT RECORDS
              </h1>
              <form onSubmit={updateWorkout} className="space-y-4">
                <label className="block font-semibold text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={updateForm.title}
                  onChange={handleEditchange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-[#1aac83]"
                />
                <br />

                <label className="block font-semibold text-gray-700">
                  Reps
                </label>
                <input
                  type="number"
                  name="reps"
                  value={updateForm.reps}
                  onChange={handleEditchange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-[#1aac83]"
                />

                <br />

                <label className="block font-semibold text-gray-700">
                  Loads (Kg)
                </label>
                <input
                  type="number"
                  name="load"
                  value={updateForm.load}
                  onChange={handleEditchange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-[#1aac83]"
                />
                <div className="flex gap-3">
                   <button className="flex-1 bg-[#1aac83] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  Update
                </button>

                </div>

                
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Form;

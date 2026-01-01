import React, { useContext, useEffect } from "react";
import { Data } from "../../Context/workoutContext";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Records = () => {
  const { workouts, getWorkouts, deleteWorkout, toggleUpdate } =
    useContext(Data);

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-[#1aac83] mb-6">Records</h1>

      <div className="space-y-4">
        {workouts &&
          workouts.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-sm border border-gray-200 rounded-xl p-5 flex justify-between items-center hover:shadow-md transition"
            >
              {/* Left Content */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>

                <div className="flex gap-6 text-gray-600 mt-1">
                  <p>
                    <span className="font-semibold text-gray-800">Reps:</span>{" "}
                    {item.reps}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Load:</span>
                    {"  "}
                    {item.load} kg
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleUpdate(item)}
                  className="flex items-center gap-1 border border-[#1aac83] text-[#1aac83] px-3 py-1.5 rounded-lg hover:bg-[#1aac83] hover:text-white transition"
                >
                  <FiEdit size={18} />
                  Edit
                </button>

                <button
                  onClick={() => deleteWorkout(item._id)}
                  className="flex items-center gap-1 border border-[#e7195a] text-[#e7195a] px-3 py-1.5 rounded-lg hover:bg-[#e7195a] hover:text-white transition"
                >
                  <FiTrash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Records;

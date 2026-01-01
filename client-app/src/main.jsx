import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WorkoutContext from "./Context/workoutContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WorkoutContext>
      <App />
    </WorkoutContext>
  </StrictMode>
);

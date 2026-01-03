import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setError(null);
    const response = await fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      //SAVE USER DATA IN LOCAL SRORAge
      localStorage.setItem("user", JSON.stringify(data));

      //UPDATE  USER  CONTEXT
      dispatch({ type: "LOGIN", payload: data });
    }
  };

  return { signup, error };
};

export default useSignup;

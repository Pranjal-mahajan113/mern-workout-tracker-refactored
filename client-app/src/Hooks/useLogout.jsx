import { useAuthContext } from "./useAuthContext";

import React, { useContext } from "react";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    //remove data form Localstorage
    localStorage.removeItem("user");
    //updatecontext

    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

export default useLogout;

import React from "react";
import Login from "./Login";
import Register from "./Register";

const isRegistered = false

const AuthPage = () => {
  return (
      <div>
        {isRegistered?(<Login/>):(<Register/>)}
      </div>
  );
};

export default AuthPage;

import { Box } from "@mui/system";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import styles from "./styles.module.css";

const isRegistered = true

const AuthPage = () => {
  return (
      <div className={styles.box}>
      <Box 
      sx={{
        width:500
      }}>
      {isRegistered?(<Login/>):(<Register/>)}
      </Box>
        
      </div>
  );
};

export default AuthPage;

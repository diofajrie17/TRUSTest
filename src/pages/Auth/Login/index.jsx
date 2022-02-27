import { Button, Card, TextField } from "@mui/material";
import React from "react";
import styles from "../styles.module.css";

const Login = () => {
  return (
      <Card>
        <div className={styles.container}>
          <h1 className={styles.title}>TRUSTest</h1>
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            type="email"
            placeholder="Email"
            margin="normal"
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
            defaultValue=""
            placeholder="Password"
            margin="normal"
          />
          <Button className={styles.button} variant="contained">Login</Button>
        </div>
      </Card>
  );
};

export default Login;

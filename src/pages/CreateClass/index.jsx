import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";

const CreateClass = () => {
  const [name, setName] = useState("");
  const [lecturer, setLecturer] = useState("");

  const data = {
    name:"Matematika",
    lecturer:"Bundo"
  }

  const config = {
    header: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const handleSubmit = () => {
    axios.post("https://warm-ravine-03466.herokuapp.com/subject/register",data,config)
    .then((response) => {
      console.log(response);
    })
  }

  return (
    <div>
      <p>Halaman Create Class</p>
      <TextField
        required
        id="outlined-required"
        label="Class Name"
        defaultValue=""
        // value={formValue.name}
        placeholder="Class Name"
        margin="normal"
      />
      <TextField
        required
        id="outlined-required"
        label="Lecturer"
        defaultValue=""
        // value={formValue.lecturer}
        placeholder="Lecturer"
        margin="normal"
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default CreateClass;

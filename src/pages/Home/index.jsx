import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ClassCard from "./components/ClassCard";
import styles from "./styles.module.css";
import axios from "axios";

const Home = () => {
  const [dataClass, setDataClass] = useState([]);
  const config = {
    header: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const getDataClass = () => {
    axios
      .get("https://warm-ravine-03466.herokuapp.com/subject", config)
      .then((response) => {
        console.log(response);
        const myRepo = response.data;
        setDataClass(myRepo);
      });
  };

  useEffect(() => getDataClass(), []);

  const cardList = dataClass.map((sdata) => {
    return <ClassCard name={sdata.name} lecturer={sdata.lecturer} />;
  });
  return (
    <div>
      <Header />
      <div className={styles.cardContainer}>{cardList}</div>

      <Footer />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ClassCard from "./components/ClassCard";
import axios from "axios";

const Home = () => {
  const [dataClass, setDataClass] = useState([]);

  const getDataClass = () => {
    axios
      .get('https://warm-ravine-03466.herokuapp.com/subject')
      .then((response) => {
        console.log(response);
        const myRepo = response.data;
        setDataClass(myRepo);
      });
  };

  useEffect(() => getDataClass(), []);

  const cardList = dataClass.map((data) => {
    return <ClassCard name={data.name} lecturer={data.lecturer} />;
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

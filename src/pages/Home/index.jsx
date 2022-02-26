import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ClassCard from "./components/ClassCard";
import { dataClass } from "./data";
import styles from "./styles.module.css";

const Home = () => {
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

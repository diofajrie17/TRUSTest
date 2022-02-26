import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ClassCard from "./components/ClassCard";

const Home = () => {
  return (
    <div>
      <Header />
      <ClassCard/>
      <Footer/>
    </div>
  );
};

export default Home;

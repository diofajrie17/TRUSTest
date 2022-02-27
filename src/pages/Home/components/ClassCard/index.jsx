import React from "react";
import styles from "./styles.module.css";
import banner from "../../../../assets/images/algoritma.png";
import Button from "../../../../components/Button";

const ClassCard = ({ name, lecturer }) => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="gambar" />

      <div>
        <p>Nama Kelas: {name}</p>
        <p>Nama Dosen: {lecturer}</p>
      </div>
      <Button link="/details" label="Detail" />
    </div>
  );
};


export default ClassCard;

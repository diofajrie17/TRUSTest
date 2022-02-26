import React from "react";
import styles from "./styles.module.css";

const ClassCard = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>Gambar</p>
      </div>
      <div>
        <p>Nama Kelas: Algoritma</p>
        <p>Nama Dosen: Ni Nes</p>
      </div>
    </div>
  )
}

export default ClassCard;
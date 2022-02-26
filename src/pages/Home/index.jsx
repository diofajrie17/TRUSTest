import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  return <div>
      <Header/>
      <body>
          <div className="classCard">
              <h1>Nama Kelas</h1>
              <p>keterangan kelas</p>
          </div>
          <button>add new class</button>
      </body>
      <Footer/>
  </div>;
}

export default Home;

import React from "react";

import Titre from "../components/Titre";
import Content from "../components/Content";

import buffet from "../buffet.jpg";
import "../styles/accueil.css";

const Accueil = () => {
  return (
    <>
      <main>
        <Titre text="Accueil" />
        <Content>
          <img src={buffet} alt="Buffet" className="accueilImage" />
        </Content>
      </main>
    </>
  );
};

export default Accueil;

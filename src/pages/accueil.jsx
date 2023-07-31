import React from "react";

// Components importation
import Titre from "../components/Titre";
import Content from "../components/Content";
import Card from "../components/Card";

const Accueil = () => {
  return (
    <>
      <Titre text="Accueil" />
      <Content>
        <Card recipeType="Salé" />
        <Card recipeType="Sucré" />
        <Card recipeType="Surprise" />
      </Content>
    </>
  );
};

export default Accueil;

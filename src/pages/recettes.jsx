import React from "react";

import Titre from "../components/Titre";
import Content from "../components/Content";
import { RecipeData } from "../components/Recipe";

const Recettes = () => {
  return (
    <>
      <main>
        <Titre text="Recettes" />
        <Content>
          <RecipeData />
        </Content>
      </main>
    </>
  );
};

export default Recettes;

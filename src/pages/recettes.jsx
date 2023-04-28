import React from 'react';

// Components importations
import Titre from '../components/Titre';
import Content from '../components/Content';
import { SearchBar } from '../components/SearchBar';
import { RecipeData } from '../components/Recipe';

const Recettes = () => {
  return (
    <>
      <Titre text="Recettes" />
      <SearchBar />
      <Content>
        <RecipeData />
      </Content>
    </>
  );
};

export default Recettes;
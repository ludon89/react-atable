import React from 'react';

// Components importations
import Titre from '../components/Titre';
import Content from '../components/Content';
import { Recipe } from '../components/Recipe';
import { RecipeData } from '../components/Recipe';

const Recettes = () => {
    return (
        <div>
            <Titre text="Recettes" />
            <Content>
                <Recipe
                    recipeName="Soupalognon"
                    recipeServings="2"
                    recipeDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                />
                <RecipeData />
            </Content>
        </div>
    );
};

export default Recettes;
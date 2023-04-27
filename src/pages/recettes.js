import React from 'react';

// Components importations
import Titre from '../components/Titre';
import Content from '../components/Content';
import Recipe from '../components/Recipe';

const Recettes = () => {
    return (
        <div>
            <Titre text="Recettes" />
            <Content>
                <Recipe />
                <Recipe />
                <Recipe />
            </Content>
        </div>
    );
};

export default Recettes;
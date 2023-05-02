import React, { useState, useEffect } from 'react';

import '../styles/recipe.css';
import '../styles/searchbar.css';

import Data from "./data/recettes.json";

export function RecipeData () { // TODO : affichage des ustensiles en liste
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);

    // check champ de recherche vide
    if (searchInput !== "") {
      const filteredData = Data.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Data);
    }


  };

  return (
    <>

      <div className='searchBarCont'>
        <form>
          <input type="text"
            placeholder="Recherche..."
            name="search"
            className="searchBar"
            onChange={(e) => searchItems(e.target.value)}
          />
        </form>
      </div>

      {searchInput.length > 1 ? (
        filteredResults.map(item => {
          return (
            <div className="recipeCard" key={item.id}>
              <h2 className="recipeName">
                {item.name}
              </h2>
              <img src="https://picsum.photos/300/200" alt="" />
              <p>
                Pour {item.servings} personnes
              </p>
              <br />

              <h3>Ingrédients</h3>
              {item.ingredients.map(subitem => {
                return (
                  <ul key={subitem.id}>
                    <li>
                      {subitem.ingredient} : {subitem.quantity} {subitem.unit}
                    </li>
                  </ul>
                );
              })}
              <br />

              <h3>Instructions</h3>
              <p>
                {item.description}
              </p>
              <br />

              <h3>Appareil requis</h3>
              <ul>
                <li>{item.appliance}</li>
              </ul>
              <br />

              <h3>Ustensiles requis</h3>
              <ul key={item.ustensils} value={item.ustensils}>
                <li>{item.ustensils}</li>
              </ul>

            </div>
          );
        })
      ) : (
        Data.map(item => {
          return (
            <div className="recipeCard" key={item.id}>
              <h2 className="recipeName">
                {item.name}
              </h2>
              <img src="https://picsum.photos/300/200" alt="" />
              <p>
                Pour {item.servings} personnes
              </p>
              <br />

              <h3>Ingrédients</h3>
              {item.ingredients.map(subitem => {
                return (
                  <ul key={subitem.id}>
                    <li>
                      {subitem.ingredient} : {subitem.quantity} {subitem.unit}
                    </li>
                  </ul>
                );
              })}
              <br />

              <h3>Instructions</h3>
              <p>
                {item.description}
              </p>
              <br />

              <h3>Appareil requis</h3>
              <ul>
                <li>{item.appliance}</li>
              </ul>
              <br />

              <h3>Ustensiles requis</h3>
              <ul key={item.ustensils} value={item.ustensils}>
                <li>{item.ustensils}</li>
              </ul>

            </div>
          );
        })

      )}

    </>
  );
}



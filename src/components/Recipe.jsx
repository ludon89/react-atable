import React, { useState, useEffect } from 'react';

import '../styles/recipe.css';
import '../styles/searchbar.css';

import Data from "./data/recettes.json";

export function RecipeData () {
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

  console.log(filteredResults);

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

      {
        searchInput.length > 1 ? (
          filteredResults.map(item => {
            return (
              <div className="recipeCard" key={item.id}>
                <h2 className="recipeName">
                  {item.name}
                </h2>
                <img src={process.env.PUBLIC_URL + "/assets/img/" + item.name + ".jpg"}
                  alt="photo de la recette"
                  className='recipeImage'
                />
                <p>
                  Pour {item.servings} personnes
                </p>
                <br />

                <h3>Ingrédients</h3>
                {item.ingredients.map(subitem => {
                  return (
                    <ul key={subitem.ingredient}>
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
                {item.ustensils.map(ustensils =>
                  <ul key={ustensils}>
                    <li>{ustensils}</li>
                  </ul>
                )}
              </div>
            );
          })
        ) : ( // si 0 ou 1 caractère dans le champ de recherche, on affiche toutes les données
          Data.map(item => {
            return (
              <div className="recipeCard" key={item.id}>
                <h2 className="recipeName">
                  {item.name}
                </h2>
                <img src={process.env.PUBLIC_URL + "/assets/img/" + item.name + ".jpg"}
                  alt="photo de la recette"
                  className='recipeImage'
                />
                <p>
                  Pour {item.servings} personnes
                </p>
                <br />

                <h3>Ingrédients</h3>
                {item.ingredients.map(subitem => {
                  return (
                    <ul key={subitem.ingredient}>
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
                {item.ustensils.map(ustensils =>
                  <ul key={ustensils}>
                    <li>{ustensils}</li>
                  </ul>
                )}

              </div>
            );
          })

        )
      }

    </>
  );
}

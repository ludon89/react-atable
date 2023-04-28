import '../styles/recipe.css';

import Data from "./data/recettes.json";

export function RecipeData () { // TODO : affichage des ustensiles en liste
  return (
    <>

      {
        Data && Data.map(data => {
          return (
            <div className="recipeCard" key={data.id}>
              <h2 className="recipeName">
                {data.name}
              </h2>
              <img src="https://picsum.photos/300/200" alt="" />
              <p>
                Pour {data.servings} personnes
              </p>
              <br />

              <h3>Ingrédients</h3>
              {data.ingredients.map(ingred => {
                return (
                  <ul key={data.id}>
                    <li>
                      {ingred.ingredient} : {ingred.quantity} {ingred.unit}
                    </li>
                  </ul>
                );
              })}
              <br />

              <h3>Instructions</h3>
              <p>
                {data.description}
              </p>
              <br />

              <h3>Appareil requis</h3>
              <ul>
                <li>{data.appliance}</li>
              </ul>
              <br />

              <h3>Ustensiles requis</h3>
              <ul key={data.ustensils} value={data.ustensils}>
                <li>{data.ustensils}</li>
              </ul>

            </div>
          );
        })
      }

    </>
  );
}



import '../styles/recipe.css';

import Data from "./data/recettes.json";

// export function Recipe ({ recipeName, recipeServings, recipeDescription }) {
//   return (
//     <div className="recipeCard">
//       <h2 className="recipeName">
//         {recipeName}
//       </h2>
//       <img src="https://picsum.photos/300/200" alt="" />
//       <p>
//         Pour {recipeServings} personnes
//       </p>
//       <p>
//         {recipeDescription}
//       </p>
//     </div>
//   );
// }

export function RecipeData () {
  return (
    <>
      {
        Data.map(data => {
          return (
            <div className="recipeCard">
              <h2 className="recipeName">
                {data.name}
              </h2>
              <img src="https://picsum.photos/300/200" alt="" />
              <p>
                Pour {data.servings} personnes
              </p>
              <p>
                {data.description}
              </p>
            </div>
          );
        })
      }

    </>
  );
}



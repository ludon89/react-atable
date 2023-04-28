import '../styles/recipe.css';

function Recipe ({ recipeTitle }) {
  return (
    <div className="recipeCard">
      <h2 className="recipeType">
        {recipeTitle}
      </h2>
      <img src="https://picsum.photos/300/200" alt="" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut animi saepe quasi et. Placeat pariatur veniam libero hic ipsum deserunt quos molestias voluptatum dolores iste! Molestias iusto ex doloribus non.
      </p>
    </div>
  );
}

export default Recipe;

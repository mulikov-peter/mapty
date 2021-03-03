import { async } from 'regenerator-runtime';

export const state = {
  cocktail: {},
};

export const loadCocktail = async function (id) {
  try {
    // Loading cocktail by id
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error('Something went wrong :(');

    // Get ingredients & measures from data
    const ingredients = [];
    const measures = [];

    for (const x in data.drinks[0]) {
      if (x.slice(0, 13) === 'strIngredient')
        ingredients.push(data.drinks[0][x]);
      if (x.slice(0, 10) === 'strMeasure') measures.push(data.drinks[0][x]);
    }

    // Create array of object ingredients & measures
    const ingredientsFull = ingredients.map((el, i) => {
      return { ingredient: el, measure: measures[i] };
    });

    state.cocktail = {
      id: data.drinks[0].idDrink,
      title: data.drinks[0].strDrink.toUpperCase(),
      type: data.drinks[0].strAlcoholic,
      img: data.drinks[0].strDrinkThumb,
      glass: data.drinks[0].strGlass,
      instruction: data.drinks[0].strInstructions,
      ingredientsFull,
      ingredients,
      measures,
      favorite: false,
    };
  } catch (err) {
    console.log(err);
  }

  // console.log(state.cocktail);
};

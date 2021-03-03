import { async } from 'regenerator-runtime';
import { API_ID_URL } from './config.js';
import { getJSON } from './helpers.js';
import { createIngredientObject } from './helpers.js';

export const state = {
  cocktail: {},
};

export const loadCocktail = async function (id) {
  try {
    // Loading cocktail by id
    const data = await getJSON(`${API_ID_URL}${id}`);

    // Create list of ingredient/measure object
    const ingredientsFull = createIngredientObject(data);

    // Put data to state cocktail
    state.cocktail = {
      id: data.drinks[0].idDrink,
      title: data.drinks[0].strDrink.toUpperCase(),
      type: data.drinks[0].strAlcoholic,
      img: data.drinks[0].strDrinkThumb,
      glass: data.drinks[0].strGlass,
      instruction: data.drinks[0].strInstructions,
      ingredientsFull,
      favorite: false,
    };
  } catch (err) {
    throw err;
  }

  console.log(state.cocktail);
};

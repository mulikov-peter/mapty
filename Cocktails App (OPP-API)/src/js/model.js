import { async } from 'regenerator-runtime';
import { API_ID_URL } from './config.js';
import { API_NAME_URL } from './config.js';
import { RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';
import { createIngredientObject } from './helpers.js';

export const state = {
  cocktail: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  favorites: [],
};

//^
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
      //! ...(recipe.key && { key: recipe.key }), check
    };

    // Check if favorite is in array of favorites
    if (state.favorites.some(fav => fav.id === id))
      state.cocktail.favorite = true;
    else state.cocktail.favorite = false;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

//^ Search by cocktail name
export const loadSearchNameResult = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_NAME_URL}${query}`);

    state.search.results = data.drinks.map(drink => {
      return {
        id: drink.idDrink,
        title: drink.strDrink.toUpperCase(),
        img: drink.strDrinkThumb,
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; //0
  const end = page * state.search.resultsPerPage; //9

  return state.search.results.slice(start, end);
};

//^ Add favorite cocktail to state favorites
export const addFavorite = function (cocktail) {
  // Add favorites
  state.favorites.push(cocktail);

  // Mark current cocktail as favorite
  if (cocktail.id === state.cocktail.id) state.cocktail.favorite = true;
};

//^ Remove favorite from array of favorites
export const removeFavorite = function (id) {
  // Delete favorite
  const index = state.favorites.findIndex(el => el.id === id);
  state.favorites.splice(index, 1);

  // Mark current cocktail as NOT favorite
  if (id === state.cocktail.id) state.cocktail.favorite = false;
};

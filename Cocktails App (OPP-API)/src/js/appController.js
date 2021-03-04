import * as model from './model.js';
import cocktailView from './ui-views/cocktailView.js';
import searchByNameView from './ui-views/searchByNameView.js';
import resultsNameView from './ui-views/resultsNameView.js';
import paginationView from './ui-views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

//^ Controller - when click on cocktail
const controlCocktails = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // Render spinner
    cocktailView.renderSpinner();

    // Update results view to mark selected search result
    resultsNameView.update(model.getSearchResultsPage());

    // Loading cocktail by id from model
    await model.loadCocktail(id);

    // Rendering cocktail (from cocktailView)
    cocktailView.render(model.state.cocktail);
  } catch (err) {
    cocktailView.renderError();
    console.log(err);
  }
};

//^ Controller - when search by name
const controlSearchNameResults = async function () {
  try {
    // Render spinner
    resultsNameView.renderSpinner();

    // Get search query
    const query = searchByNameView.getQuery();
    if (!query) return;

    // Load search results
    await model.loadSearchNameResult(query);

    // Render results
    resultsNameView.render(model.getSearchResultsPage());

    // Render initial pagination buttons
    paginationView.render(model.state.search);

    console.log(query, '====', model.state.search.results);
  } catch (err) {
    resultsNameView.renderError();
  }
};

//^ Controller when click on pagination button
const constrolPagination = function (gotoPage) {
  // Render new results
  resultsNameView.render(model.getSearchResultsPage(gotoPage));

  // Render new pagination buttons
  paginationView.render(model.state.search);
};

//^ Controller when click on heart img
const controlAddFavorite = function () {
  // Add/remove favorite
  if (!model.state.cocktail.favorite) model.addFavorite(model.state.cocktail);
  else model.removeFavorite(model.state.cocktail.id);

  // Update cocktail view
  // cocktailView.update(model.state.cocktail);
  cocktailView.render(model.state.cocktail);

  //TODO Render favorite
  //! TEST
  console.log(model.state, model.state.cocktail);
};

const init = function () {
  cocktailView.addHendlerRender(controlCocktails);
  cocktailView.addHendlerAddFavorite(controlAddFavorite);
  searchByNameView.addHendlerSearchByName(controlSearchNameResults);
  paginationView.addHandlerClick(constrolPagination);
};

init();

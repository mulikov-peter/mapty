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

// Controller - when click on cocktail
const controllCocktails = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // Render spinner
    cocktailView.renderSpinner();

    // Loading cocktail by id from model
    await model.loadCocktail(id);

    // Rendering cocktail (from cocktailView)
    cocktailView.render(model.state.cocktail);
  } catch (err) {
    cocktailView.renderError();
  }
};

// Controller - when search by name
const controllSearchNameResults = async function () {
  try {
    // Render spinner
    resultsNameView.renderSpinner();

    // Get search query
    const query = searchByNameView.getQuery();
    if (!query) return;

    // Load search results
    await model.loadSearchNameResult(query);

    // Render results
    // resultsNameView.render(model.state.search.results);
    resultsNameView.render(model.getSearchResultsPage());

    // Render initial pagination buttons
    paginationView.render(model.state.search);

    console.log(query, '====', model.state.search.results);
  } catch (err) {
    resultsNameView.renderError();
  }
};

// Controller when click on pagination button
const constrolPagination = function (gotoPage) {
  // Render new results
  // resultsNameView.render(model.state.search.results);
  resultsNameView.render(model.getSearchResultsPage(gotoPage));

  // Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlFavorite = function () {};

const init = function () {
  cocktailView.addHendlerRender(controllCocktails);
  searchByNameView.addHendlerSearchByName(controllSearchNameResults);
  paginationView.addHandlerClick(constrolPagination);
};

init();

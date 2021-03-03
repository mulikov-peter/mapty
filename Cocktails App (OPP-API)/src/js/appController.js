import * as model from './model.js';
import cocktailView from './ui-views/cocktailView.js';
import searchByNameView from './ui-views/searchByNameView.js';
import resultsView from './ui-views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

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

const controllSearchResults = async function () {
  try {
    // Render spinner
    resultsView.renderSpinner();

    // Get search query
    const query = searchByNameView.getQuery();
    if (!query) return;

    // Load search results
    await model.loadSearchResult(query);

    // Render results
    resultsView.render(model.state.search.results);
  } catch (err) {
    resultsView.renderError();
  }
};

const init = function () {
  cocktailView.addHendlerRender(controllCocktails);
  searchByNameView.addHendlerSearchByName(controllSearchResults);
};

init();

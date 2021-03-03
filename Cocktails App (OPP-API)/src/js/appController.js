import * as model from './model.js';
import cocktailView from './ui-views/cocktailView.js';
import searchByNameView from './ui-views/searchByNameView.js';
import resultsNameView from './ui-views/resultsNameView.js';

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
    resultsNameView.render(model.state.search.results);
  } catch (err) {
    resultsNameView.renderError();
  }
};

const init = function () {
  cocktailView.addHendlerRender(controllCocktails);
  searchByNameView.addHendlerSearchByName(controllSearchNameResults);
};

init();

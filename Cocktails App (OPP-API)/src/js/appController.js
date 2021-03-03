import * as model from './model.js';
import cocktailView from './ui-views/cocktailView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controllCocktails = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    //^ Render spinner
    cocktailView.renderSpinner();

    //^ Loading cocktail by id from model
    await model.loadCocktail(id);

    //^ Rendering cocktail (from cocktailView)
    cocktailView.render(model.state.cocktail);

    //-----------------------------
    // console.log(data);
    // console.log(id);
    //-----------------------------
  } catch (err) {
    console.log(err);
    alert(err);
  }
};

// showCocktail();

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controllCocktails)
);

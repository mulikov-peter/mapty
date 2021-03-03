// import icons from './img/heart.svg'; // Parcel 1
import favorite from 'url:../../img/favorite.png'; // Parcel 2
import warning from 'url:../../img/warning.png';

class CocktailView {
  #parentElement = document.querySelector('.cocktail-container');
  #data;
  #errorMessage = `We could not find that cocktail. Please try another one...`;

  //^ Clear html of parent elemnt
  #clear() {
    this.#parentElement.innerHTML = '';
  }

  addHendlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  //^ Render data to ui
  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //^ Render spinner
  renderSpinner() {
    const markup = `
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //^ Render error
  renderError(message = this.#errorMessage) {
    const markup = `
      <h4 class='mt-5 text-center'> <span> <img class='icon warning align-top' src="${warning}" alt="warning"> ${message}</span></h4>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //^ Generate markup for full cocktail
  #generateMarkup() {
    return `
      <div class="card bg-dark m-2">
      <h4 class="card-header cocktailName">${this.#data.title} 
        <a href="#"> 
          <img class='icon favorite pull-right mh-20' src="${favorite}" alt="heart">
        </a>
      </h4>
      
      <div class="card-body row">
        <div class="col-md-3 col-ms-1 col-xs-1" >
          <img class="img-fluid rounded mb-2"  src="${this.#data.img}">
          <div ><b>Category:</b> ${this.#data.type}</div>
          <div><b>Glass:</b> ${this.#data.glass}</div>
        </div>
        <div class="col-md-9 col-ms-11 col-xs-11">
        <h5 class="list-group-item"><b>Ingredients:</b> </h5>
          <ul class="list-group d-inline-block">

          ${this.#data.ingredientsFull
            .map(this.#generateMarkupIngridient)
            .join('')}

            <li class="list-group-item text-justify">${
              this.#data.instruction
            }</li>
          </ul>
        </div>
      </div>
    </div>
      `;
  }

  //^ Generate markup for ingredients
  #generateMarkupIngridient(ing) {
    if (!ing.ingredient) return;

    return `
      <li class="list-group-item d-inline-block text-center">
        <div class="row">
          <figure class="col-ms-2 ">
            <img class="img-fluid img-fig mb-2" src="https://www.thecocktaildb.com/images/ingredients/${
              ing.ingredient
            }-Small.png">
            <figcaption>
              <span class="ing">${ing.ingredient}</span>
              <span class="meas">${ing.measure ? ing.measure : ''}</span>
            </figcaption>
          </figure>
        </div>
      </li>
    `;
  }
}

export default new CocktailView();

import View from './View.js';

class FavoriteView extends View {
  _parentElement = document.querySelector('.favorites');
  _errorMessage = 'No favorites yet';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
      <a class="dropdown-item text-success text-decoration-none" href="#${result.id}">
        <div class="p-0">
          <img class="img-fluid img-cocktail rounded-circle" src="${result.img}" alt="${result.title}"/><p class="m-0 pt-2 text-center">${result.title}</p>
        </div>
      </a>
    `;
  }
}

export default new FavoriteView();

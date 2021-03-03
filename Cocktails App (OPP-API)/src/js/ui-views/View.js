import warning from 'url:../../img/warning.png';

export default class View {
  _data;
  _errorMessage = `We could not find that cocktail. Please try another one...`;

  //^ Clear html of parent elemnt
  _clear() {
    this._parentElement.innerHTML = '';
  }

  //^ Render data to ui
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
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

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //^ Render error
  renderError(message = this._errorMessage) {
    const markup = `
      <h4 class='mt-5 text-center'> <span> <img class='icon warning align-top' src="${warning}" alt="warning"> ${message}</span></h4>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

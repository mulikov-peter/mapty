import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.result-container');

  _generateMarkup() {
    return `
        ${this._data.map(this._generateMarkupPreview).join('')}
    `;
  }

  _generateMarkupPreview(result) {
    return `
      <div class="card col m-2 p-0 border border-success d-inline-block" style= "width: 120px;">
        <a class="stretched-link text-success text-decoration-none" href="#${result.id}">
          <div class="card-header p-2 text-center" style="height:60px;">${result.title}</div>
          <div class="card-body p-0">
            <img class="img-fluid" src="${result.img}" alt="${result.title}"/>
          </div>
        </a>
      </div>
    `;
  }
}

export default new ResultsView();

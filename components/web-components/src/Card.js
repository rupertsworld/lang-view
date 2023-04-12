import spec from '../spec/Card.json';

class CardComponent extends HTMLElement {
  constructor() {
    super();
    this._title = '';
    this._content = '';
  }

  connectedCallback() {
    this.render();
  }

  set title(value) {
    this._title = value;
  }

  set content(value) {
    this._content = value;
  }

  render() {
    this.innerHTML = `
      <h1>${this._title}</h1>
      <p>${this._content}</p>
    `;
  }
}
customElements.define('lv-card', CardComponent);

export default {
  spec: spec,
  component: CardComponent,
}
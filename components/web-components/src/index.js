import yaml from 'js-yaml';

export { default as Card } from './Card';
export { default as VStack } from './VStack';

function toAttributeString(item) {
  const keys = Object.keys(item).filter((k) => k !== 'type');
  return keys.map((k) => `${k}="${item[k]}"`).join(' ');
}

export class View extends HTMLElement {
  constructor() {
    super();
    this._children = [];
    // this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set markup(markup) {
    const json = yaml.load(markup);
    this._children = json;
    this.render();
  }

  render() {
    // this.shadowRoot.innerHTML
    if (!this._children.length) return;
    this.innerHTML = '';
    
    this._children.forEach((x) => {
      const elem = document.createElement(`lv-${x.type.toLowerCase()}`);
      const propKeys = Object.keys(x).filter(key => key !== 'type');
      propKeys.forEach((key) => elem[key] = x[key]);
      this.appendChild(elem);
    });
  }
}

customElements.define('lang-view', View);

import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
 
class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <p class="text-center text-white mb-0">
      <locale-picker class="d-block mb-3"></locale-picker>
        ${msg(`Dibuat dengan ❤ oleh Dicoding Indonesia`)}
      </p>
    `;
  }
}
 
customElements.define('footer-app', FooterApp);

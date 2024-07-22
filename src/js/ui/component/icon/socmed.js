import LitWithoutShadowDom from "../../../base/LitWithoutShadowDom";
import { html } from "lit";

class SocmedLogoApp extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <a
        class="bi bi-instagram home-icon10"
        href="https://www.instagram.com/sulhanfuadi/"
      ></a>
      <a
        class="bi bi-linkedin home-icon12"
        href="https://www.linkedin.com/in/sulhanfuadi/"
      ></a>
    `;
  }
}

customElements.define("socmed-component", SocmedLogoApp);

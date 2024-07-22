import LitWithoutShadowDom from "../../../base/LitWithoutShadowDom";
import { html } from "lit";
import Socmed from "../icon/socmed";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <footer class="home-footer1">
        <div class="home-container2">
          <span class="home-logo2">bagiCerita</span>
          <nav class="home-nav1">
            <a href="/"> <span class="home-nav12">${msg(`Home`)}</span> </a>
            <a href="dashboard.html">
              <span class="home-nav22">${msg(`Dashboard`)}</span>
            </a>
            <a href="addpage.html">
              <span class="home-nav22">${msg(`Tell a Story`)}</span>
            </a>
            <a href="addpageforguest.html">
              <span class="home-nav22">${msg(`Tell a Story for Guest`)}</span>
            </a>
          </nav>
        </div>
        <div class="home-separator"></div>
        <div class="home-container3">
          <socmed-component class="home-icon-group1"></socmed-component>
          <span class="home-text">
            ${msg(`© 2024 sulhanfuadi, All Rights Reserved.`)}
          </span>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-component", FooterApp);

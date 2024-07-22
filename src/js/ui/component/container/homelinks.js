import LitWithoutShadowDom from "../../../base/LitWithoutShadowDom";
import { html } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import Utils from "../../../utils/utils";
import CheckUserAuth from "../../pages/checkuserauth";
import Config from "../../../config/config";

class HomeLinksApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    Utils.destroyName(Config.NAME);
    CheckUserAuth.checkLoginState();
  }

  render() {
    return html`
      <a href="login.html" class="login-appbar">
        <span class="home-nav23">${msg(`Login`)}</span>
      </a>
      <a href="register.html" class="register-appbar">
        <span class="home-nav23">${msg(`Register`)}</span>
      </a>
      <a href="/" class="logout-appbar" @click=${this._userLogOut}>
        <span class="home-nav23">${msg(`Logout`)}</span>
      </a>
      <locale-picker class="dropdown"></locale-picker>
    `;
  }
}

customElements.define("homelinks-component", HomeLinksApp);

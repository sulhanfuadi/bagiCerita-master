import LitWithoutShadowDom from "../../../base/LitWithoutShadowDom";
import { html } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class GalleryApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`${msg(`Story`)}`;
  }
}

customElements.define("gallery-component", GalleryApp);

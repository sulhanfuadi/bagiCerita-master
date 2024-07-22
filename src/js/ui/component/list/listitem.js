import LitWithoutShadowDom from "../../../base/LitWithoutShadowDom";
import { html } from "lit";

class ListItemApp extends LitWithoutShadowDom {
  static get properties() {
    return {
      image: { type: String },
      name: { type: String },
      description: { type: String },
      createdAt: { type: String },
    };
  }

  constructor() {
    super();
    this.image = "photoUrl";
    this.name = "Name";
    this.description = "Description";
    this.createdAt = "createdAt";
  }

  render() {
    return html`
      <img alt="photo" src="${this.image}" class="card-img-top" />
      <div class="card-body">
        <span class="gallery-card3-text"
          ><h6 class="card-title">Oleh: ${this.name}</h6></span
        >
        <span class="gallery-card3-text"
          ><h8 class="card-subtitle mb-2 text-muted"
            >${this.createdAt}</h8
          ></span
        >
        <span class="gallery-card3-text"
          ><p class="card-text">${this.description}</p></span
        >
      </div>
    `;
  }
}

customElements.define("listitem-component", ListItemApp);

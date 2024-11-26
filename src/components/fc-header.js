import { LitElement, css, html } from 'lit'


export class FcHeader extends LitElement {
  static get properties() {
    return {

    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <slot name="top"></slot>
      <div class="hole"></div>
      <slot name="bottom"></slot>
    `
  }

  static get styles() {
    return css`
    :host {
      position: relative;
    }
     
    .hole {
        height: 100px;
        width: 100px;
        background-color: grey;
        border-radius: 50%;
        position:absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    `
  }
}

window.customElements.define('fc-header', FcHeader)

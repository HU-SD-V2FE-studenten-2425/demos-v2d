import { LitElement, css, html } from 'lit'

export class DummyPage extends LitElement {
  static get properties() {
    return {
   
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
        <h1>Hello world!</h1>
    `
  }

  static get styles() {
    return css`
     
    `
  }
}

window.customElements.define('dummy-page', DummyPage)

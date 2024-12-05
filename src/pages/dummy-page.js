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
      <skeleton-carousel dots nav loop>
        <img src="https://api.groenkennisnet.nl/upload_mm/4/8/d/743947_fullimage_guinea-pig-2017678_1280.jpg">
        <img src="https://www.almeloord.nl/uploads/images/shutterstock_76763146_Almeloord_Paginabeheer_Cavia_202001151444232.jpg">
        <img src="https://a.storyblok.com/f/151320/2560x1918/b5a2640e5b/dierenrijk-dierenpagina-cavia.jpg/m/3840x0/filters:fill(transparent):quality(75)">
        <img src="https://www.dier.nu/uploads/knowledgebase/cavia.60d6e9.jpg">
      </skeleton-carousel>
    `
  }

  static get styles() {
    return css`
      skeleton-carousel {
        max-width: 500px;
        max-height: 500px;
      }
    `
  }
}

window.customElements.define('dummy-page', DummyPage)

import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

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

<!-- <div class="logo">
  <h2>Eurol</h2>
  <h3>Lubricants</h3>
</div>
<p class="slogan">Voor perfect fiets onderhoud</p>

<div class="hole front"></div>
<div class="code">
  ${this.code}
</div>



<div class="blurb">
  <h3>Fietsen, goed voor uw conditie</h3>
  <p>Houdt Uw fiets zomer en winter in topconditie met Eurol producten!</p>
</div>
<div class="hole back"></div> -->

    `
  }

  static get styles() {
    return css`
     
    `
  }
}

window.customElements.define('fc-header', FcHeader)

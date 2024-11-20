import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class FcFooter extends LitElement {
  static get properties() {
    return {
   
    }
  }

  constructor() {
    super()    
  }

  render() {
    return html`
    <footer>
      <h2>Eurol - Nicor</h2>
      <h3>Een sterke combinatie!</h3>
      <slot></slot>
    </footer>
    
    `
  }

  static get styles() {
    return css`
    footer {
        h2 {
          color: var(--rood-eurol);
          font-size: 2.5rem;
          text-align: center;
          border-bottom: 2px solid var(--blauw-eurol);
          margin-bottom: 2px;
        }
    
        h3 {
          margin-top: 2px;
          color: var(--blauw-eurol);
          text-align: center;
        }
      }
    }
    `
  }
}

window.customElements.define('fc-footer', FcFooter)

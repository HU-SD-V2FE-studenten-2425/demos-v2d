import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'


export class MyElement extends LitElement {
  static get properties() {
    return {
   
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
    
    `
  }

  static get styles() {
    return css`
     
    `
  }
}

window.customElements.define('my-element', MyElement)

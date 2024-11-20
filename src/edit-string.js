import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'
import {when} from 'lit/directives/when.js';

export class EditableString extends LitElement {
  static get properties() {
    return {
        value: {type: String, reflect: true},
        editing: { state: true }
    }
  }

  constructor() {
    super()
    this.value= "";
    this.editing = false;
  }

  connectedCallback(){
    super.connectedCallback();
  }

  startEdit(){
    this.editing = true;
  }

  stopEdit(){
    this.editing = false;
  }

  changingValue(e){
    this.value = e.currentTarget.value;
    this.dispatchEvent(new CustomEvent("string-changed", { 
      detail: { value: this.value },
      composed: true,
      bubbles: true
    }));
  }

  render() {
    return html`
        ${when(this.editing, () => {
            return html`<input 
                          type="text" 
                          value="${this.value}" 
                          @change=${this.changingValue}>
                          
                          <button @click=${this.stopEdit}>Ok</button>`
        }, () => {
            return html`<span @click=${this.startEdit}>${this.value}</span>`
        })}        
    `
  }

  static get styles() {
    return css`
        span {
            cursor: pointer;
        }
        input {
          max-width: 70px;
        }
    `
  }
}

window.customElements.define('edit-string', EditableString)

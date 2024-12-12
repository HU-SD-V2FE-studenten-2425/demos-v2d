import { LitElement, css, html } from 'lit'
import {when} from 'lit/directives/when.js';
import {ref, createRef} from 'lit/directives/ref.js';

export class EditableString extends LitElement {
  inputRef = createRef();

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

  onBeforeEnter(location, commands, router){
    this.router = router;
  }

  connectedCallback(){
    super.connectedCallback();
  }

  startEdit(){
    this.editing = true;
    console.log(this.querySelector('input'))
  }

  stopEdit(){
    this.editing = false;
    this.dispatchEvent(new CustomEvent("string-changed", { 
      detail: { value: this.value },
      composed: true,
      bubbles: true
    }));
  }

  enterPressed(e){
    if(e.key === "Enter"){      
      this.stopEdit();
    }    
  }

  changingValue(e){
    this.value = e.currentTarget.value;
  }

  render() {
    return html`
        ${when(this.editing, () => {
            return html`<input
                          ${ref(this.inputRef)} 
                          type="text" 
                          value="${this.value}" 
                          @change=${this.changingValue}
                          @keyup=${this.enterPressed}>
                          
                          <button @click=${this.stopEdit} aria-pressed="true">Ok</button>`
        }, () => {
            return html`<span @click=${this.startEdit} tabindex="1" role="button" aria-pressed="false" >${this.value}</span>`
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

  updated(changedProperties){
    if(this.editing){
      this.inputRef.value.focus();
    }
  }
}

window.customElements.define('edit-string', EditableString)

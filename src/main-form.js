import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'


export class MainForm extends LitElement {
  static get properties() {
    return {
        repairData: { type: Object}
    }
  }

  constructor() {
    super()
  }

  render() {    
    let receiverName = this.repairData.receiver.firstName + ' ' + this.repairData.receiver.lastName
    return html`
    <h2>Reparatiekaart</h2>
  <form>
    <div><label for="naam">Naam: </label><input type="text" id="naam" name="naam"></div>
    <div><label for="adres">Adres: </label><input type="text" id="adres" name="adres"></div>


    <div class="horizontal">
      <label for="ontvanger">Ontvanger: </label><input type="text" id="ontvanger" name="ontvanger" value=${receiverName}>
      <label for="klaar">Klaar: </label><input type="text" id="klaar" name="klaar">
    </div>
    <br /><br />
    <div>
      <label for="opdracht">Opdracht: </label><textarea id="opdracht" name="opdracht" rows="10"></textarea>
    </div>
  </form>
    `
  }

  static get styles() {
    return css`
     form {
        margin: 1rem;

        >div {
        display: flex;
        flex-direction: row;
        }
    }

    input[type=text],
    textarea {
        flex: 1;
        border: none;
        background: transparent;
        border-bottom: 2px dotted var(--blauw-reparatie);
    }
    `
  }
}

window.customElements.define('main-form', MainForm)

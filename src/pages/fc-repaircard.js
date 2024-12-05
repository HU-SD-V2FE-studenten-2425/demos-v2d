import { LitElement, css, html } from 'lit'
import FakeRepairService from '../services/repair-service'

export class FcRepairCard extends LitElement {
  static get properties() {
    return {
      code: { type: String, reflect: true },
      repairData: { type: Object},
      loading: { type: Boolean, state: true }
    }
  }

  onBeforeEnter(location, commands, router) {    
    this.code = location.params.code;
  }

  willUpdate(changedProperties){
    if(changedProperties.has("code")){
      this.#loadCode(this.code)
    }
  }

  #loadCode(newValue) {
    let service = new FakeRepairService();
    this.loading = true;
    
    return service.fetchCard(newValue).then(r => {
      this.loading = false;
      this.repairData = r;
    });
  }

  codeChange(e) {
    e.stopPropagation();
    this.code = e.detail.value;

    this.dispatchEvent(new CustomEvent('code-changed', {
      detail: { code: this.code },
      bubbles: true,
      composed: true
    }));
  }

  constructor() {
    super()
    this.code = "";
    this.loading = false;
  }

  render() {
    console.log('rendering...')
    if (this.loading) {
      return html`<div>Loading...</div>`
    }
    return html`
<article class="repair-card">

<fc-header class="front">
    <div slot="top">
        <div class="logo">
            <h2>Eurol</h2>
            <h3>Lubricants</h3>
        </div>
        <p class="slogan">Voor perfect fiets onderhoud</p>
    </div>
    <div slot="bottom">
        <div class="code">
            <edit-string value=${this.code} @string-changed=${this.codeChange}></edit-string>
        </div>
    </div>
</fc-header>

<main class="front">
  <main-form .repairData=${this.repairData} ></main-form>
</main>
<fc-footer class="front">      
  <div class="code">
    <edit-string value=${this.code} @string-changed=${this.codeChange}></edit-string>
  </div>
</fc-footer>

<fc-header class="back">    
  <div slot="top" class="blurb">
    <h3>Fietsen, goed voor uw conditie</h3>
    <p>Houdt Uw fiets zomer en winter in topconditie met Eurol producten!</p>
  </div>
</fc-header>

<main class="back">
  <h3>Nota</h3>
  <form>
    <div class="horizontal">
      <label for="datum">Datum: </label><input type="text" id="datum" name="datum">
      <label for="klaar">Contant: </label>
    </div>
  </form>
  <table>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Werkplaatstarief</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Totaal</td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  </table>
</main>
<fc-footer class="back">
  <p>Geachte klant, het is wenselijk ook het volgende nog te laten doen:</p>
</fc-footer>
</article>
    `
  }

  static get styles() {
    return css`     
.repair-card {
    background-color: #FAF9F6;
    color: var(--blauw-reparatie);
    display: grid;
    grid-template-areas:
        "headf . headb"
        "repf  . repb"
        "footf . footb"
    ;
    grid-template-columns: 1fr 10px 1fr;
    grid-template-rows: 1fr 2fr 1fr;

    >* {
        margin: 10px 20px;
    }

    fc-footer.front {
        grid-area: footf;
    }

    fc-footer.back {
        grid-area: footb;
    }

    main.front {
        grid-area: repf;
    }

    main.back {
        grid-area: repb;
    }

    fc-header.front {
        grid-area: headf;
    }

    fc-header.back {
      grid-area: headb;
    }

    fc-header.front {
      div {
        .logo {
          display: inline-block;
        }

        p {
          float: right;          
        }
      }
    }

    .code {
        font-family: monospace;
        font-size: 2rem;
        text-align: right;
        margin-right: 45px;
    }

    h2 {
        margin-bottom: 5px;
        color: var(--blauw-eurol);
        font-variant: small-caps;
        border-bottom: 2px solid #864058;
        font-variant: small-caps;
        text-align: center;
    }

    h3,
    p {
        color: var(--rood-eurol);
        font-style: italic;
        font-weight: bold;
        margin: auto;
    }

    .blurb p {
        color: var(--blauw-eurol)
    }

    h3 {
        margin-top: 5px;
    }

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
  }
    `
  }
}

window.customElements.define('fc-repaircard', FcRepairCard)

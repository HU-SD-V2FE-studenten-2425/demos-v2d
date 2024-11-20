import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

export class FcRepairCard extends LitElement {
    static get properties() {
        return {
            code: { type: String }
        }
    }

    constructor() {
        super()
        this.code = "123456";
    }

    render() {
        return html`
<article class="repair-card">


<div class="logo">
  <h2>Eurol</h2>
  <h3>Lubricants</h3>
</div>
<p class="slogan">Voor perfect fiets onderhoud</p>

<div class="hole front"></div>
<div class="code">
  ${this.code}
</div>


<main class="front">
  <h2>Reparatiekaart</h2>
  <form>
    <div><label for="naam">Naam: </label><input type="text" id="naam" name="naam"></div>
    <div><label for="adres">Adres: </label><input type="text" id="adres" name="adres"></div>


    <div class="horizontal">
      <label for="ontvanger">Ontvanger: </label><input type="text" id="ontvanger" name="ontvanger">
      <label for="klaar">Klaar: </label><input type="text" id="klaar" name="klaar">
    </div>
    <br /><br />
    <div>
      <label for="opdracht">Opdracht: </label><textarea id="opdracht" name="opdracht" rows="10"></textarea>
    </div>
  </form>
</main>
<fc-footer class="front">      
  <div class="code">
  ${this.code}
  </div>
</fc-footer>



<div class="blurb">
  <h3>Fietsen, goed voor uw conditie</h3>
  <p>Houdt Uw fiets zomer en winter in topconditie met Eurol producten!</p>
</div>
<div class="hole back"></div>

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
        "logo slogan slogan . blurb blurb blurb"
        ".    holef   .     .  .     holeb .    "
        ".      .    code   . .       .   .    "
        "repf repf   repf   . repb  repb  repb "
        "footf footf footf  . footb footb footb"
    ;
    grid-template-columns: repeat(3, 1fr) 10px repeat(3, 1fr);
    grid-template-rows: 8, 3% 8, 3% 8, 3% 1fr 25%;

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

    .blurb {
        grid-area: blurb;
    }

    .logo {
        grid-area: logo;
    }

    .slogan {
        grid-area: slogan;
    }

    .code {
        grid-area: code;
        font-family: monospace;
        font-size: 2rem;
    }

    .hole.front {
        grid-area: holef;
    }

    .hole.back {
        grid-area: holeb;
    }

    .hole {

        height: 100px;
        width: 100px;
        background-color: grey;
        border-radius: 50%;
        display: inline-block;
        margin: 0 auto;

    }

    h2 {
        margin-bottom: 5px;
        color: var(--blauw-eurol);
        font-variant: small-caps;
        border-bottom: 2px solid #864058;
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


    h2 {
        font-variant: small-caps;
        text-align: center;
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

    tr {
        /* ???!!!???!! */
        border-bottom: 2px dotted var(--blauw-reparatie);
        ;
    }

    .code {
        text-align: right;
        margin-right: 45px;

    }

    }

    @media (max-width: 800px) {
    .repair-card {
        grid-template-areas:
        "logo slogan slogan"
        ".    holef   .    "
        ".      .    code  "
        "repf repf   repf  "
        "footf footf footf "
        "blurb blurb blurb"
        " .     holeb .    "
        ".       .   .    "
        "repb  repb  repb "
        "footb footb footb"
        ;
    }

    ;
}
    `
    }
}

window.customElements.define('fc-repaircard', FcRepairCard)

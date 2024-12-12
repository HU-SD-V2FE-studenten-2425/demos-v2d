import { Router } from '@vaadin/router'
import { LitElement, css, html } from 'lit'
import { DummyPage } from './pages/dummy-page';
import {ref, createRef} from 'lit/directives/ref.js';

export class VaadinRouter extends LitElement {

  //See https://lit.dev/docs/templates/directives/#ref
  divRef = createRef();

  static get properties() {
    return {
      message: { type: String }
    }
  }
  

  constructor() {
    super()
    this.message = "";
    
  }

  firstUpdated(){
    this.router = new Router();
    this.router.component = this;
    this.router.setOutlet(this.divRef.value);
    this.router.setRoutes([{
        path: "/", component: "dummy-page"
    },
    { path: "/repair", component: "fc-repaircard" },
    { path: "/repair/:code", component: "fc-repaircard" }
    ])
    console.log('de router is er')
  }

  render() {
    return html`
        <header>
        <h1>Een gedeelde header van de router</h1>
        <p>En een paar test-routes</p>
        <nav>
        <ul>
          <li><a href="/">Dummy</a></li>
          <li><a href="/repair/123">Repair 123</a></li>
          <li><a href="/repair/456">Repair 456</a></li>
        </ul>
        </nav>
        </header>
        <div ${ref(this.divRef)}></div>
        <!-- <div class="aria-feedback" aria-live="polite">${this.message}</div> -->
    `
  }

  static get styles() {
    return css`
      a {
        color: black;
      }
/* 
      .aria-feedback {
        visibility: hidden;
      } */

    `
  }
}

window.customElements.define('vaadin-router', VaadinRouter)

import { Router } from '@vaadin/router'
import { LitElement, css, html } from 'lit'
import { DummyPage } from './pages/dummy-page';
import {ref, createRef} from 'lit/directives/ref.js';

export class VaadinRouter extends LitElement {

  //See https://lit.dev/docs/templates/directives/#ref
  divRef = createRef();

  static get properties() {
    return {
   
    }
  }
  

  constructor() {
    super()
    
  }

  firstUpdated(){
    this.router = new Router();
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
        <h1>Dit is de router!</h1>
        <div ${ref(this.divRef)}></div>
    `
  }

  static get styles() {
    return css`
     
    `
  }
}

window.customElements.define('vaadin-router', VaadinRouter)

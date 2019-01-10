/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import {html} from '@polymer/lit-element';
import {PageViewElement} from './page-view-element.js';
import {connect} from 'pwa-helpers/connect-mixin.js';
import 'google-maps-limited/google-maps-limited';
// This element is connected to the Redux store.
import {store} from '../store.js';
// These are the shared styles needed by this element.
import {SharedStyles} from './shared-styles.js';

// These are the elements needed by this element.

class MyView2 extends connect(store)(PageViewElement) {

  constructor() {
    super();
    this.apiKey = "AIzaSyAIrIPQPwVdtQNvswXBSgV5UqtnksHYomc";
    this.markers = [
      {
        position: {lat:41, lng:-112},
        InfoWindowContent: "<h3>The Salt Lake City, UT Temple</h3>"
      },
      {
        position: {lat:33, lng:-117},
        InfoWindowContent: "<h3>The San Diego, CA Temple</h3>"
      },
      {
        position: {lat:29, lng:-82},
        InfoWindowContent: "<h3>The Orlando, FL Temple</h3>"
      },
      {
        position: {lat:43, lng:-70},
        InfoWindowContent: "<h3>The Cape Elizabeth, ME Temple</h3>"
      }
    ];
  }

  render() {
    return html`
      ${SharedStyles}
      <google-maps-limited style="height:65vh;width:80vw"
        .apiKey="${this.apiKey}"
        .markers="${this.markers}"
      ></google-maps-limited>
    `;
  }

  static get properties() {
    return {
      apiKey: {type: String},
      markers: {type: Array}
    }
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {

  }
}

window.customElements.define('my-view2', MyView2);

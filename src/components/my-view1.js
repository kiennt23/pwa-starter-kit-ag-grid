/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import 'ag-grid-enterprise/dist/ag-grid-enterprise';
import 'ag-grid-webcomponent/src/agGrid';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import {AgGridStyles} from "../styles/ag-grid";
import {AgThemeStyles} from "../styles/ag-theme-balham";

class MyView1 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      ${AgGridStyles}
      ${AgThemeStyles}
      <style>
        ag-grid {
          padding: 12px;
          border: solid gainsboro 1px;
          font-size: 16px;
          height: 540px;
          width: auto;
        }
      </style>
      <ag-grid id="agGrid" class="ag-theme-balham"></ag-grid>
    `;
  }

  firstUpdated(_changedProperties) {
    let columnDefs = [{ headerName: 'Make', field: 'make' }, { headerName: 'Model', field: 'model' }, { headerName: 'Price', field: 'price' }]

    const rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ];

    const agGrid = this.shadowRoot.getElementById('agGrid')
    const gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
      enableFilter: true,
      floatingFilter: true,
      onGridReady: () => {
        gridOptions.api.sizeColumnsToFit()
      },
    };
    agGrid.gridOptions = gridOptions
  }
}

window.customElements.define('my-view1', MyView1);

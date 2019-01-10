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
import 'ag-grid-enterprise/dist/ag-grid-enterprise';
import 'ag-grid-webcomponent/src/agGrid';
import '@vaadin/vaadin-dialog/vaadin-dialog';
import {store} from '../store';
// These are the shared styles needed by this element.
import {SharedStyles} from './shared-styles.js';
import {AgGridStyles} from '../styles/ag-grid';
import {AgThemeStyles} from '../styles/ag-theme-balham';

import {openDialog, closeDialog} from '../actions/dialog';
import dialog from '../reducers/dialog';
import {connect} from "pwa-helpers";

store.addReducers({
  dialog
});

class MyView1 extends connect(store)(PageViewElement) {

  static get properties() {
    return {
      dialogOpened: {type: Boolean},
      dialogData: {type: Object}
    };
  }

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
      ${this.renderDialog()}
    `;
  }

  renderDialog() {
    if (this.dialogOpened && this.dialogData) {
      return html`
        <vaadin-dialog opened @opened-changed="${(e) => this.openChanged(e)}">
          <template>
            <div>Make: ${this.dialogData.make}</div>
            <div>Model: ${this.dialogData.model}</div>
            <div>Manufacture Date: ${this.dialogData.manufactureDate}</div>
            <div>Price: ${this.dialogData.price}</div>
          </template>
        </vaadin-dialog>
      `;
    } else {
      return html``;
    }
  }

  firstUpdated(_changedProperties) {
    let columnDefs = [{headerName: 'Make', field: 'make'},
      {headerName: 'Model', field: 'model'},
      {
        headerName: 'Manufacture Date',
        field: 'manufactureDate',
        filter: 'agDateColumnFilter',
        filterParams: {
          debounceMs: 1000
        }
      },
      {headerName: 'Price', field: 'price'}
    ];

    const rowData = [
      {
        make: 'Toyota',
        model: 'Celica',
        manufactureDate: '21/01/2007',
        price: 35000
      },
      {
        make: 'Ford',
        model: 'Mondeo',
        manufactureDate: '15/06/2008', price: 32000
      },
      {
        make: 'Porsche',
        model: 'Boxter',
        manufactureDate: '31/07/2008',
        price: 72000
      },
    ];

    const agGrid = this.shadowRoot.getElementById('agGrid');
    const gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
      enableFilter: true,
      floatingFilter: true,
      suppressRowClickSelection: true,
      onGridReady: () => {
        gridOptions.api.sizeColumnsToFit()
      },
      onRowClicked: (event) => this.openDialog(event)
    };
    agGrid.gridOptions = gridOptions;
  }

  openDialog(event) {
    store.dispatch(openDialog({dialogData: event.data}));
  }

  openChanged(event) {
    if (!event.detail.value) {
      store.dispatch(closeDialog())
    }
  }

  stateChanged(state) {
    let {dialogOpened, dialogData} = state.dialog || {};
    this.dialogOpened = dialogOpened;
    this.dialogData = dialogData;
  }
}

window.customElements.define('my-view1', MyView1);

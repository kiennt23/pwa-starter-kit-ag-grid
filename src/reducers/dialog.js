/**
 @license
 Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {OPEN_DIALOG, CLOSE_DIALOG} from "../actions/dialog";

const INITIAL_STATE = {
  page: '',
  offline: false,
  drawerOpened: false,
  snackbarOpened: false,
};

const dialog = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        dialogOpened: true,
        dialogData: action.dialogData
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        dialogOpened: false,
        dialogData: null
      };
    default:
      return state;
  }
};

export default dialog;

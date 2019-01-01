import { html } from '@polymer/lit-element';

export const AgGridStyles = html`
<style>
ag-grid, ag-grid-angular, ag-grid-ng2, ag-grid-polymer, ag-grid-aurelia {
  display: block; }

.ag-rtl {
  direction: rtl; }

.ag-ltr {
  direction: ltr; }

.ag-select-agg-func-popup {
  position: absolute; }

.ag-body-no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.ag-root-wrapper {
  position: relative;
  display: flex;
  flex-direction: column; }
.ag-root-wrapper.ag-layout-normal {
  height: 100%; }

.ag-root-wrapper-body {
  display: flex;
  flex-direction: row; }
.ag-root-wrapper-body.ag-layout-normal {
  flex-grow: 1;
  height: 0px;
  min-height: 0px; }

.ag-root {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column; }
.ag-root.ag-layout-normal, .ag-root.ag-layout-auto-height {
  overflow: hidden;
  width: 0px;
  min-width: 0px;
  flex: 1; }
.ag-root.ag-layout-normal {
  height: 100%; }

.ag-font-style {
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.ag-popup-backdrop {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%; }

.ag-header {
  box-sizing: border-box;
  white-space: nowrap;
  width: 100%;
  display: flex; }

.ag-pinned-left-header {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  overflow: hidden; }

.ag-pinned-right-header {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  overflow: hidden; }

.ag-header-viewport {
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  width: 0px;
  min-width: 0px;
  flex: 1; }

.ag-header-row {
  position: absolute; }

.ag-header-container {
  box-sizing: border-box;
  height: 100%;
  position: relative;
  white-space: nowrap; }

.ag-header-overlay {
  display: block;
  position: absolute; }

.ag-header-cell {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  position: absolute;
  vertical-align: bottom; }

.ag-floating-filter {
  box-sizing: border-box;
  display: inline-block;
  position: absolute; }

.ag-floating-filter-body {
  height: 20px;
  margin-right: 25px; }

.ag-floating-filter-full-body {
  height: 20px;
  width: 100%; }

.ag-floating-filter-input {
  width: 100%; }

.ag-floating-filter-input:-moz-read-only {
  background-color: #eee; }

.ag-floating-filter-input:read-only {
  background-color: #eee; }

.ag-floating-filter-menu {
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.ag-dnd-ghost {
  background: #e5e5e5;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: move;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  overflow: hidden;
  padding: 3px;
  position: absolute;
  text-overflow: ellipsis;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.ag-dnd-ghost-icon {
  display: inline-block;
  float: left;
  padding: 2px; }

.ag-dnd-ghost-label {
  display: inline-block; }

.ag-header-group-cell {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis; }

.ag-header-group-cell-label {
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex; }

.ag-header-cell-label {
  overflow: hidden;
  text-overflow: ellipsis; }

.ag-header-cell-resize {
  position: absolute;
  z-index: 4;
  cursor: col-resize;
  height: 100%;
  width: 4px; }

.ag-ltr .ag-header-cell-resize {
  right: -4px; }

.ag-ltr .ag-pinned-right-header .ag-header-cell-resize {
  left: -4px; }

.ag-rtl .ag-header-cell-resize {
  left: -4px; }

.ag-rtl .ag-pinned-left-header .ag-header-cell-resize {
  right: -4px; }

.ag-ltr .ag-header-select-all {
  float: left; }

.ag-rtl .ag-header-select-all {
  float: right; }

.ag-header-expand-icon {
  padding-left: 4px; }

.ag-header-cell-menu-button {
  float: right; }

.ag-overlay {
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%; }

.ag-overlay-panel {
  display: table;
  height: 100%;
  pointer-events: none;
  width: 100%; }

.ag-overlay-wrapper {
  display: table-cell;
  text-align: center;
  vertical-align: middle; }

.ag-primary-cols-header-panel .ag-column-name-filter {
  flex-grow: 1;
  flex-shrink: 1; }

.ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper {
  width: 100%; }

.ag-tool-panel-wrapper {
  display: flex;
  overflow-y: auto; }

.ag-column-panel {
  display: flex;
  min-height: 400px;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  max-height: 100vh; }

.ag-body-container.ag-layout-auto-height {
  min-height: 50px; }

.ag-overlay-no-rows-wrapper.ag-layout-auto-height {
  padding-top: 30px; }

.ag-body {
  box-sizing: border-box;
  position: relative;
  display: flex; }
.ag-body.ag-layout-normal {
  flex: 1;
  height: 0px;
  min-height: 0px; }

.ag-rtl .ag-body {
  flex-direction: row-reverse; }

.ag-ltr .ag-body {
  flex-direction: row; }

.ag-rtl .ag-floating-top {
  flex-direction: row-reverse; }

.ag-ltr .ag-floating-top {
  flex-direction: row; }

.ag-rtl .ag-floating-bottom {
  flex-direction: row-reverse; }

.ag-ltr .ag-floating-bottom {
  flex-direction: row; }

.ag-ltr .ag-header {
  flex-direction: row; }

.ag-rtl .ag-header {
  flex-direction: row-reverse; }

.ag-floating-top {
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
  display: flex; }

.ag-pinned-left-floating-top {
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  position: relative;
  min-width: 0px;
  width: 0px;
  flex-grow: 1000; }

.ag-pinned-right-floating-top {
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  position: relative;
  min-width: 0px;
  width: 0px;
  flex-grow: 1000; }

.ag-floating-top-viewport {
  box-sizing: border-box;
  overflow: hidden;
  width: 0px;
  min-width: 0px;
  flex: 1; }
.ag-floating-top-viewport.ag-layout-normal {
  height: 100%; }

.ag-floating-top-container {
  box-sizing: border-box;
  position: relative;
  white-space: nowrap; }

.ag-floating-bottom {
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
  display: flex; }

.ag-pinned-left-floating-bottom {
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  position: relative;
  min-width: 0px;
  width: 0px;
  flex-grow: 1000; }

.ag-pinned-right-floating-bottom {
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  position: relative;
  min-width: 0px;
  width: 0px;
  flex-grow: 1000; }

.ag-floating-bottom-viewport {
  box-sizing: border-box;
  overflow: hidden;
  flex: 1;
  width: 0px;
  min-width: 0px; }

.ag-floating-bottom-container {
  box-sizing: border-box;
  position: relative;
  white-space: nowrap; }

.ag-pinned-right-cols-viewport-wrapper {
  height: 100%;
  overflow: hidden;
  flex-grow: 1000;
  min-width: 0px;
  width: 0px; }

.ag-pinned-right-cols-viewport {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto; }

.ag-pinned-right-cols-container {
  display: block;
  position: relative; }

.ag-pinned-left-cols-viewport-wrapper {
  height: 100%;
  overflow: hidden;
  flex-grow: 1000;
  min-width: 0px;
  width: 0px; }

.ag-pinned-left-cols-viewport {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto; }

.ag-pinned-left-cols-container {
  display: block;
  position: relative; }

.ag-body-viewport-wrapper {
  overflow: hidden; }
.ag-body-viewport-wrapper.ag-layout-auto-height, .ag-body-viewport-wrapper.ag-layout-normal {
  height: 100%;
  width: 20px;
  min-width: 20px;
  flex: 1; }

.ag-body-viewport.ag-layout-auto-height {
  overflow-x: auto;
  overflow-y: hidden; }

.ag-body-viewport.ag-layout-normal {
  overflow-x: auto;
  overflow-y: auto;
  height: 100%; }

.ag-full-width-viewport-wrapper {
  height: 100%;
  width: 100%;
  display: inline-block;
  pointer-events: none;
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  box-sizing: border-box; }

.ag-full-width-viewport {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  overflow-x: hidden;
  overflow-y: auto; }

.ag-full-width-container {
  overflow: hidden;
  position: relative;
  width: 100%; }

.ag-floating-bottom-full-width-container {
  display: inline;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  top: 0; }

.ag-floating-top-full-width-container {
  display: inline;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  top: 0; }

.ag-full-width-row {
  overflow: hidden;
  pointer-events: all; }

.ag-body-container {
  position: relative; }
.ag-body-container:not(.ag-layout-print) {
  display: block; }

.ag-row-animation .ag-row {
  transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;
  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;
  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s; }

.ag-row-no-animation .ag-row {
  transition: background-color 0.1s; }

.ag-row {
  box-sizing: border-box;
  white-space: nowrap;
  width: 100%; }

.ag-row-position-absolute {
  position: absolute; }

.ag-row-position-relative {
  position: relative; }

.ag-column-moving .ag-cell {
  transition: left 0.2s; }

.ag-column-moving .ag-header-cell {
  transition: left 0.2s; }

.ag-column-moving .ag-header-group-cell {
  transition: left 0.2s, width 0.2s; }

.ag-column-drop {
  box-sizing: border-box;
  width: 100%; }

.ag-column-drop-vertical {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 50px;
  overflow: hidden; }
.ag-column-drop-vertical .ag-column-drop-list {
  flex-grow: 1;
  height: 20px;
  overflow-x: auto; }
.ag-column-drop-vertical .ag-column-drop-cell {
  display: flex; }
.ag-column-drop-vertical .ag-column-drop-cell .ag-column-drop-cell-text {
  overflow: hidden;
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap; }
.ag-column-drop-vertical .ag-column-drop-empty-message {
  display: block; }
.ag-column-drop-vertical .ag-column-drop-cell-button {
  line-height: 16px; }

.ag-ltr .ag-column-drop-vertical .ag-column-drop-cell-button {
  float: right; }

.ag-rtl .ag-column-drop-vertical .ag-column-drop-cell-button {
  float: left; }

.ag-column-drop-horizontal {
  white-space: nowrap;
  overflow: hidden; }
.ag-column-drop-horizontal .ag-column-drop-cell {
  display: inline-block; }
.ag-column-drop-horizontal .ag-column-drop-empty-message {
  display: inline-block; }
.ag-column-drop-horizontal .ag-column-drop-list {
  height: 100%; }

.ag-cell {
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  white-space: nowrap; }

.ag-cell-with-height {
  height: 100%; }

.ag-value-slide-out {
  margin-right: 5px;
  opacity: 1;
  transition: opacity 3s, margin-right 3s;
  transition-timing-function: linear; }

.ag-value-slide-out-end {
  margin-right: 10px;
  opacity: 0; }

.ag-opacity-zero {
  opacity: 0; }

.ag-cell-edit-input {
  height: 100%;
  width: 100%; }

.ag-group-cell-entire-row {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%; }

.ag-footer-cell-entire-row {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%; }

.ag-popup-editor {
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.ag-menu {
  max-height: 100%;
  overflow-y: auto;
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.ag-menu-column-select-wrapper {
  height: 265px;
  overflow: auto;
  width: 200px; }

.ag-menu-list {
  border-collapse: collapse;
  display: table; }

.ag-menu-option {
  display: table-row; }

.ag-menu-option-text {
  display: table-cell;
  white-space: nowrap; }

.ag-menu-option-shortcut {
  display: table-cell; }

.ag-menu-option-icon {
  display: table-cell; }

.ag-menu-option-popup-pointer {
  display: table-cell; }

.ag-menu-separator {
  display: table-row; }

.ag-menu-separator-cell {
  display: table-cell; }

.ag-virtual-list-viewport {
  height: 100%;
  overflow-x: auto;
  width: 100%; }

.ag-virtual-list-container {
  overflow: hidden;
  position: relative; }

.ag-rich-select {
  cursor: default;
  outline: none; }

.ag-rich-select-row {
  white-space: nowrap; }

.ag-rich-select-list {
  height: 200px;
  width: 200px; }

.ag-set-filter-list {
  height: 200px;
  width: 200px; }

.ag-set-filter-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; }

.ag-virtual-list-item {
  position: absolute;
  width: 100%; }
.ag-virtual-list-item span:empty:not(.ag-icon) {
  border-left: 1px solid transparent; }

.ag-filter-filter {
  box-sizing: border-box;
  width: 100%; }

.ag-filter .ag-filter-checkbox {
  pointer-events: none; }

.ag-floating-filter-body input {
  height: 19px;
  margin: 0;
  width: 100%; }

.ag-floating-filter-full-body input {
  height: 19px;
  margin: 0;
  width: 100%; }

.ag-filter-select {
  margin: 4px 4px 0 4px;
  width: 110px; }

.ag-list-selection {
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.ag-tool-panel-wrapper {
  box-sizing: border-box;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 200px; }

.ag-primary-cols-list-panel {
  flex-grow: 1;
  height: 50px;
  overflow: auto; }

.ag-column-select-indent {
  display: inline-block; }

.ag-ltr .ag-column-tool-panel-column {
  margin-left: 16px; }

.ag-rtl .ag-column-tool-panel-column {
  margin-right: 16px; }

.ag-column-tool-panel-column,
.ag-column-tool-panel-column-group {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-overflow: ellipsis;
  white-space: nowrap; }
.ag-column-tool-panel-column .ag-column-tool-panel-column,
.ag-column-tool-panel-column .ag-column-tool-panel-column-group,
.ag-column-tool-panel-column-group .ag-column-tool-panel-column,
.ag-column-tool-panel-column-group .ag-column-tool-panel-column-group {
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis; }
.ag-column-tool-panel-column .ag-column-drag,
.ag-column-tool-panel-column-group .ag-column-drag {
  min-width: 16px;
  flex-grow: 0;
  flex-shrink: 0; }

.ag-column-select-panel {
  display: flex;
  flex-direction: column;
  overflow: hidden; }

.ag-side-bar .ag-column-select-panel {
  flex-grow: 4; }

.ag-tool-panel-horizontal-resize {
  cursor: col-resize;
  height: 100%;
  position: absolute;
  top: 0;
  width: 5px;
  z-index: 1; }

.ag-rtl .ag-tool-panel-horizontal-resize {
  float: right;
  -webkit-transform: translateX(3px);
  transform: translateX(3px); }

.ag-ltr .ag-tool-panel-horizontal-resize {
  float: left;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px); }

.ag-menu-column-select-wrapper .ag-column-select-panel {
  height: 100%; }

.ag-hidden {
  display: none !important; }

.ag-visibility-hidden {
  visibility: hidden !important; }

.ag-faded {
  opacity: 0.3; }

.ag-width-half {
  display: inline-block;
  width: 50%; }

.ag-shake-left-to-right {
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: ag-shake-left-to-right;
  animation-name: ag-shake-left-to-right; }

@-webkit-keyframes ag-shake-left-to-right {
  from {
    padding-left: 6px;
    padding-right: 2px; }
  to {
    padding-left: 2px;
    padding-right: 6px; } }

@keyframes ag-shake-left-to-right {
  from {
    padding-left: 6px;
    padding-right: 2px; }
  to {
    padding-left: 2px;
    padding-right: 6px; } }

/* icons are used outside of the grid root (in the ghost) */
.ag-icon-aggregation {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkuNSAyLjVoLTZsMiAzLjUtMiAzLjVoNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-arrows {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2IDZsLTEuNDEgMS40MUwxNi4xNyA5SDR2MmgxMi4xN2wtMS41OCAxLjU5TDE2IDE0bDQtNHoiLz48cGF0aCBkPSJNNCA2bDEuNDEgMS40MUwzLjgzIDlIMTZ2MkgzLjgzbDEuNTggMS41OUw0IDE0bC00LTR6Ii8+PHBhdGggZD0iTTYgMTZsMS40MS0xLjQxTDkgMTYuMTdWNGgydjEyLjE3bDEuNTktMS41OEwxNCAxNmwtNCA0eiIvPjxwYXRoIGQ9Ik0xNCA0bC0xLjQxIDEuNDFMMTEgMy44M1YxNkg5VjMuODNMNy40MSA1LjQxIDYgNGw0LTR6Ii8+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-asc {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNSAzaDJ2OUg1eiIvPjxwYXRoIGQ9Ik04Ljk5MyA1LjJWMy40OTNoLTZ2Nkg0LjdWNS4yaDQuMjkzeiIgaWQ9ImIiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNNS41IDMuNWgxdjhoLTF6Ii8+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNS45OTMgNi40OTMpIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNOC40OTMgNC43di0uNzA3aC01djVINC4yVjQuN2g0LjI5M3oiLz48L2c+PC9nPjwvc3ZnPg==) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-checkbox-checked-readonly {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIxIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iIzAwMCIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHJ4PSIxIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNOSAzTDYgOC41bC0yLjUtMiIvPjwvZz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-checkbox-checked {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIxIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iIzAwMCIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHJ4PSIxIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNOSAzTDYgOC41bC0yLjUtMiIvPjwvZz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-checkbox-indeterminate-readonly {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIxIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iIzAwMCIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHJ4PSIxIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTQgNWg0djJINHoiLz48L2c+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-checkbox-indeterminate {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIxIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iIzAwMCIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHJ4PSIxIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTQgNWg0djJINHoiLz48L2c+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-checkbox-unchecked-readonly {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIxIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iIzAwMCIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHJ4PSIxIi8+PC9nPjwvc3ZnPg==) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-checkbox-unchecked {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIxIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iIzAwMCIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHJ4PSIxIi8+PC9nPjwvc3ZnPg==) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-column {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWg0djJIMXptMCAzaDR2N0gxeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-columns {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWg0djJIMXptNiAwaDR2Mkg3ek0xIDVoNHYySDF6bTYgMGg0djJIN3pNMSA5aDR2Mkgxem02IDBoNHYySDd6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-contracted {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZT0iIzAwMCIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHJ4PSIxIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkgNXYySDNWNXoiLz48L2c+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-copy {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00LjUgNC41aDV2NWgtNXoiLz48cGF0aCBkPSJNNy41IDIuNWgtNXY1aDJ2Mmg1di01aC0ydi0yeiIvPjwvZz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-cut {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zIDMuMTJjLjY2Ny4wNzggMyAxLjc0NSA3IDUtLjMyNi4yMDQtLjY1OS4yMDQtMSAwLS4zNDEtLjIwNi0xLjY3NC0xLjIwNi00LTMgMCAuNjY2LS42NjcuNjY2LTIgMC0yLTEtMS0yLjEyIDAtMnoiLz48cGF0aCBkPSJNMyA4LjI2NGMuNjY3LS4wOCAzLTEuNzQ2IDctNS0uMzI2LS4yMDUtLjY1OS0uMjA1LTEgMC0uMzQxLjIwNC0xLjY3NCAxLjIwNC00IDMgMC0uNjY3LS42NjctLjY2Ny0yIDAtMiAxLTEgMi4xMTkgMCAyeiIvPjwvZz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-desc {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNSAyaDJ2OUg1eiIvPjxwYXRoIGQ9Ik04Ljk5MyA2LjFWNC4zOTNoLTZ2Nkg0LjdWNi4xaDQuMjkzeiIgaWQ9ImIiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNNS41IDIuNWgxdjhoLTF6Ii8+PGcgdHJhbnNmb3JtPSJyb3RhdGUoLTEzNSA1Ljk5MyA3LjM5MykiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik04LjQ5MyA1LjZ2LS43MDdoLTV2NUg0LjJWNS42aDQuMjkzeiIvPjwvZz48L2c+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-expanded {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZT0iIzAwMCIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHJ4PSIxIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTUgM2gydjZINXoiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNOSA1djJIM1Y1eiIvPjwvZz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-eye-slash {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMy4wMDEgMy45MDhMMyA0YTMgMyAwIDEgMCA1Ljk5OS0uMDkyQTUuMjQ4IDUuMjQ4IDAgMCAwIDYgM2MtMS4xIDAtMi4xLjMwMy0yLjk5OS45MDh6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTQgNC41Yy42NjctLjMzMyAxLjY2Ny0uNSAzLS41IiBzdHJva2U9IiM5Nzk3OTciLz48cGF0aCBkPSJNMSA2YzEuMzMzLTIgMy0zIDUtM3MzLjY2NyAxIDUgM0M5LjY2NyA4IDggOSA2IDlTMi4zMzMgOCAxIDZ6IiBzdHJva2U9IiMwMDAiLz48cGF0aCBkPSJNNC4wMDQgMi44MzVsNC45OTIgNi4zMyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PHBhdGggZD0iTTMuMDA0IDIuODM1bDQuOTkyIDYuMzMiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-eye {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMy4wMDEgMy45MDhMMyA0YTMgMyAwIDEgMCA1Ljk5OS0uMDkyQTUuMjQ4IDUuMjQ4IDAgMCAwIDYgM2MtMS4xIDAtMi4xLjMwMy0yLjk5OS45MDh6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTQgNC41Yy42NjctLjMzMyAxLjY2Ny0uNSAzLS41IiBzdHJva2U9IiM5Nzk3OTciLz48cGF0aCBkPSJNMSA2YzEuMzMzLTIgMy0zIDUtM3MzLjY2NyAxIDUgM0M5LjY2NyA4IDggOSA2IDlTMi4zMzMgOCAxIDZ6IiBzdHJva2U9IiMwMDAiLz48L2c+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-filter {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMmgxMEw3IDZ2NUw1IDlWNkwxIDJ6bTQgNHYxaDJWNkg1eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-group {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik03LjUgMS41aDN2MmgtM3ptMCA0aDN2MmgtM3ptMCA0aDN2MmgtM3oiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMiAzaDF2OEgyem0xIDNoNHYxSDN6bTItNGgzdjFINXoiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMiAxMGg1djFIMnoiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik0xLjUgMS41aDN2MmgtM3oiLz48L2c+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-indeterminate {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMy4wNTYgNC41ODFhMy4wMDEgMy4wMDEgMCAwIDAgNS44ODggMEM4LjA1OSA0LjE5NCA3LjA3OCA0IDYgNGMtMS4wNzggMC0yLjA2LjE5NC0yLjk0NC41ODF6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTQgNS41Yy42NjctLjMzMyAxLjY2Ny0uNSAzLS41IiBzdHJva2U9IiM5Nzk3OTciLz48cGF0aCBkPSJNMSA2YzEuMzMzLTEuMzMzIDMtMiA1LTJzMy42NjcuNjY3IDUgMkM5LjY2NyA3LjMzMyA4IDggNiA4cy0zLjY2Ny0uNjY3LTUtMnoiIHN0cm9rZT0iIzAwMCIvPjwvZz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-left {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNS41IDEuNWgydjloLTJ6Ii8+PHBhdGggZD0iTTcuOTkzIDQuN1YyLjk5M2gtNnY2SDMuN1Y0LjdoNC4yOTN6IiBpZD0iYiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0icm90YXRlKDkwIDYuNSA2KSI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYSIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTYgMmgxdjhINnoiLz48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDQuOTkzIDUuOTkzKSI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYiIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTcuNDkzIDQuMnYtLjcwN2gtNXY1SDMuMlY0LjJoNC4yOTN6Ii8+PC9nPjwvZz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-loading {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNSAxaDJ2M0g1eiIvPjxwYXRoIGlkPSJiIiBkPSJNNSA4aDJ2M0g1eiIvPjxwYXRoIGlkPSJjIiBkPSJNMSA1aDN2MkgxeiIvPjxwYXRoIGlkPSJkIiBkPSJNOCA1aDN2Mkg4eiIvPjxwYXRoIGlkPSJlIiBkPSJNNCAwaDJ2M0g0eiIvPjxwYXRoIGlkPSJmIiBkPSJNNCA3aDJ2M0g0eiIvPjxwYXRoIGlkPSJnIiBkPSJNMCA0aDN2MkgweiIvPjxwYXRoIGlkPSJoIiBkPSJNNyA0aDN2Mkg3eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2EiLz48cGF0aCBzdHJva2U9IiM5Nzk3OTciIGQ9Ik01LjUgMS41aDF2MmgtMXoiLz48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggc3Ryb2tlPSIjOTc5Nzk3IiBkPSJNNS41IDguNWgxdjJoLTF6Ii8+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYyIvPjxwYXRoIHN0cm9rZT0iIzk3OTc5NyIgZD0iTTEuNSA1LjVoMnYxaC0yeiIvPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2QiLz48cGF0aCBzdHJva2U9IiM5Nzk3OTciIGQ9Ik04LjUgNS41aDJ2MWgtMnoiLz48ZyBvcGFjaXR5PSIuNzE0Ij48ZyB0cmFuc2Zvcm09InJvdGF0ZSg0NSA0LjI5MyA2LjcwNykiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2UiLz48cGF0aCBzdHJva2U9IiM5Nzk3OTciIGQ9Ik00LjUuNWgxdjJoLTF6Ii8+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1IDQuMjkzIDYuNzA3KSI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjZiIvPjxwYXRoIHN0cm9rZT0iIzk3OTc5NyIgZD0iTTQuNSA3LjVoMXYyaC0xeiIvPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg0NSA0LjI5MyA2LjcwNykiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2ciLz48cGF0aCBzdHJva2U9IiM5Nzk3OTciIGQ9Ik0uNSA0LjVoMnYxaC0yeiIvPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg0NSA0LjI5MyA2LjcwNykiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2giLz48cGF0aCBzdHJva2U9IiM5Nzk3OTciIGQ9Ik03LjUgNC41aDJ2MWgtMnoiLz48L2c+PC9nPjwvZz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-menu {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgxMHYySDF6bTAgNGgxMHYySDF6bTAgNGgxMHYySDF6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-minus {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIgNWg4djJIMnoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-none {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNSAzaDJ2Nkg1eiIvPjxwYXRoIGQ9Ik04LjE0NiA4LjE4MlY2LjQ3NWgtNXY1aDEuNzA4VjguMTgyaDMuMjkyeiIgaWQ9ImIiLz48cGF0aCBkPSJNOC41IDIuOTE0VjEuMjA3aC01djVoMS43MDdWMi45MTRIOC41eiIgaWQ9ImMiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNNS41IDMuNWgxdjVoLTF6Ii8+PGcgdHJhbnNmb3JtPSJyb3RhdGUoLTEzNSA1LjY0NiA4LjQ3NSkiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik03LjY0NiA3LjY4MnYtLjcwN2gtNHY0aC43MDhWNy42ODJoMy4yOTJ6Ii8+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1IDYgMy43MDcpIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNjIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNOCAyLjQxNHYtLjcwN0g0djRoLjcwN1YyLjQxNEg4eiIvPjwvZz48L2c+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-not-allowed {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI0Ii8+PHBhdGggZD0iTTguNSAzLjVMMy40MDEgOC41OTkiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L2c+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-paste {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjUgMi41aDd2N2gtN3oiLz48cGF0aCBkPSJNNi41IDEuNWgtMXYyaC0xdjFoM3YtMWgtMXYtMnoiLz48L2c+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-pin {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMyAyaDZ2MUg4djRsMiAxSDdsLTEgMy0xLTNIMmwyLTFWM0gzeiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjUiIGZpbGw9IiNGRkYiIGQ9Ik01IDNoMXY0SDV6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuMjgiIGZpbGw9IiNGRkYiIGQ9Ik00IDNoMXYzSDR6Ii8+PC9nPjwvc3ZnPg==) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-pivot {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHg9IjEuNSIgeT0iMS41IiB3aWR0aD0iOSIgaGVpZ2h0PSI5IiByeD0iMSIvPjxwYXRoIGQ9Ik0xMC41IDMuNWgtOW0yLTJ2OSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjxwYXRoIGQ9Ik03LjUgNi41bDEtMSAxIDFtLTMgMWwtMSAxIDEgMSIvPjxwYXRoIGQ9Ik04LjUgNS41djNoLTMiLz48L2c+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-plus {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNSAyaDJ2OEg1eiIvPjxwYXRoIGQ9Ik0yIDVoOHYySDJ6Ii8+PC9nPjwvc3ZnPg==) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-right {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNC41IDEuNWgydjloLTJ6Ii8+PHBhdGggZD0iTTkuOTkzIDQuN1YyLjk5M2gtNnY2SDUuN1Y0LjdoNC4yOTN6IiBpZD0iYiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0icm90YXRlKDkwIDUuNSA2KSI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYSIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTUgMmgxdjhINXoiLz48L2c+PGcgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoLTQ1IDAgMjIuODc0KSI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYiIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTkuNDkzIDQuMnYtLjcwN2gtNXY1SDUuMlY0LjJoNC4yOTN6Ii8+PC9nPjwvZz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-small-left {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMgNmw0LTR2OHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-small-right {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUgMmw0IDQtNCA0eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-small-up {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIgN2w0LTQgNCA0eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-small-down {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIgNWg4TDYgOXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-tick {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNSA1LjVsMyAzIDYtNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz48L3N2Zz4=) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-cross {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIgMTBsOC04bTAgOEwyIDIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-tree-open {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIgNWg4TDYgOXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-tree-closed {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUgMmw0IDQtNCA0eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.ag-icon-tree-indeterminate {
  display: inline-block;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIgNWg4djJIMnoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==) center no-repeat;
  background-size: 12px 12px;
  -webkit-filter: "initial";
  filter: "initial";
  height: 12px;
  width: 12px; }

.loading-filter {
  background-color: #e6e6e6;
  height: 100%;
  padding: 5px;
  position: absolute;
  top: 34px;
  width: 100%;
  z-index: 1; }

.ag-details-row {
  height: 100%;
  width: 100%; }

.ag-details-grid {
  height: 100%;
  width: 100%; }

.ag-primary-cols-header-panel {
  display: flex;
  flex-direction: row; }

.ag-ltr .ag-toolpanel-indent-1 {
  padding-left: 10px; }

.ag-rtl .ag-toolpanel-indent-1 {
  padding-right: 10px; }

.ag-ltr .ag-row-group-indent-1 {
  padding-left: 10px; }

.ag-rtl .ag-row-group-indent-1 {
  padding-right: 10px; }

.ag-ltr .ag-toolpanel-indent-2 {
  padding-left: 20px; }

.ag-rtl .ag-toolpanel-indent-2 {
  padding-right: 20px; }

.ag-ltr .ag-row-group-indent-2 {
  padding-left: 20px; }

.ag-rtl .ag-row-group-indent-2 {
  padding-right: 20px; }

.ag-ltr .ag-toolpanel-indent-3 {
  padding-left: 30px; }

.ag-rtl .ag-toolpanel-indent-3 {
  padding-right: 30px; }

.ag-ltr .ag-row-group-indent-3 {
  padding-left: 30px; }

.ag-rtl .ag-row-group-indent-3 {
  padding-right: 30px; }

.ag-ltr .ag-toolpanel-indent-4 {
  padding-left: 40px; }

.ag-rtl .ag-toolpanel-indent-4 {
  padding-right: 40px; }

.ag-ltr .ag-row-group-indent-4 {
  padding-left: 40px; }

.ag-rtl .ag-row-group-indent-4 {
  padding-right: 40px; }

.ag-ltr .ag-toolpanel-indent-5 {
  padding-left: 50px; }

.ag-rtl .ag-toolpanel-indent-5 {
  padding-right: 50px; }

.ag-ltr .ag-row-group-indent-5 {
  padding-left: 50px; }

.ag-rtl .ag-row-group-indent-5 {
  padding-right: 50px; }

.ag-ltr .ag-toolpanel-indent-6 {
  padding-left: 60px; }

.ag-rtl .ag-toolpanel-indent-6 {
  padding-right: 60px; }

.ag-ltr .ag-row-group-indent-6 {
  padding-left: 60px; }

.ag-rtl .ag-row-group-indent-6 {
  padding-right: 60px; }

.ag-ltr .ag-toolpanel-indent-7 {
  padding-left: 70px; }

.ag-rtl .ag-toolpanel-indent-7 {
  padding-right: 70px; }

.ag-ltr .ag-row-group-indent-7 {
  padding-left: 70px; }

.ag-rtl .ag-row-group-indent-7 {
  padding-right: 70px; }

.ag-ltr .ag-toolpanel-indent-8 {
  padding-left: 80px; }

.ag-rtl .ag-toolpanel-indent-8 {
  padding-right: 80px; }

.ag-ltr .ag-row-group-indent-8 {
  padding-left: 80px; }

.ag-rtl .ag-row-group-indent-8 {
  padding-right: 80px; }

.ag-ltr .ag-toolpanel-indent-9 {
  padding-left: 90px; }

.ag-rtl .ag-toolpanel-indent-9 {
  padding-right: 90px; }

.ag-ltr .ag-row-group-indent-9 {
  padding-left: 90px; }

.ag-rtl .ag-row-group-indent-9 {
  padding-right: 90px; }

.ag-ltr .ag-toolpanel-indent-10 {
  padding-left: 100px; }

.ag-rtl .ag-toolpanel-indent-10 {
  padding-right: 100px; }

.ag-ltr .ag-row-group-indent-10 {
  padding-left: 100px; }

.ag-rtl .ag-row-group-indent-10 {
  padding-right: 100px; }

.ag-ltr .ag-toolpanel-indent-11 {
  padding-left: 110px; }

.ag-rtl .ag-toolpanel-indent-11 {
  padding-right: 110px; }

.ag-ltr .ag-row-group-indent-11 {
  padding-left: 110px; }

.ag-rtl .ag-row-group-indent-11 {
  padding-right: 110px; }

.ag-ltr .ag-toolpanel-indent-12 {
  padding-left: 120px; }

.ag-rtl .ag-toolpanel-indent-12 {
  padding-right: 120px; }

.ag-ltr .ag-row-group-indent-12 {
  padding-left: 120px; }

.ag-rtl .ag-row-group-indent-12 {
  padding-right: 120px; }

.ag-ltr .ag-toolpanel-indent-13 {
  padding-left: 130px; }

.ag-rtl .ag-toolpanel-indent-13 {
  padding-right: 130px; }

.ag-ltr .ag-row-group-indent-13 {
  padding-left: 130px; }

.ag-rtl .ag-row-group-indent-13 {
  padding-right: 130px; }

.ag-ltr .ag-toolpanel-indent-14 {
  padding-left: 140px; }

.ag-rtl .ag-toolpanel-indent-14 {
  padding-right: 140px; }

.ag-ltr .ag-row-group-indent-14 {
  padding-left: 140px; }

.ag-rtl .ag-row-group-indent-14 {
  padding-right: 140px; }

.ag-ltr .ag-toolpanel-indent-15 {
  padding-left: 150px; }

.ag-rtl .ag-toolpanel-indent-15 {
  padding-right: 150px; }

.ag-ltr .ag-row-group-indent-15 {
  padding-left: 150px; }

.ag-rtl .ag-row-group-indent-15 {
  padding-right: 150px; }

.ag-ltr .ag-toolpanel-indent-16 {
  padding-left: 160px; }

.ag-rtl .ag-toolpanel-indent-16 {
  padding-right: 160px; }

.ag-ltr .ag-row-group-indent-16 {
  padding-left: 160px; }

.ag-rtl .ag-row-group-indent-16 {
  padding-right: 160px; }

.ag-ltr .ag-toolpanel-indent-17 {
  padding-left: 170px; }

.ag-rtl .ag-toolpanel-indent-17 {
  padding-right: 170px; }

.ag-ltr .ag-row-group-indent-17 {
  padding-left: 170px; }

.ag-rtl .ag-row-group-indent-17 {
  padding-right: 170px; }

.ag-ltr .ag-toolpanel-indent-18 {
  padding-left: 180px; }

.ag-rtl .ag-toolpanel-indent-18 {
  padding-right: 180px; }

.ag-ltr .ag-row-group-indent-18 {
  padding-left: 180px; }

.ag-rtl .ag-row-group-indent-18 {
  padding-right: 180px; }

.ag-ltr .ag-toolpanel-indent-19 {
  padding-left: 190px; }

.ag-rtl .ag-toolpanel-indent-19 {
  padding-right: 190px; }

.ag-ltr .ag-row-group-indent-19 {
  padding-left: 190px; }

.ag-rtl .ag-row-group-indent-19 {
  padding-right: 190px; }

.ag-ltr .ag-toolpanel-indent-20 {
  padding-left: 200px; }

.ag-rtl .ag-toolpanel-indent-20 {
  padding-right: 200px; }

.ag-ltr .ag-row-group-indent-20 {
  padding-left: 200px; }

.ag-rtl .ag-row-group-indent-20 {
  padding-right: 200px; }

.ag-ltr .ag-toolpanel-indent-21 {
  padding-left: 210px; }

.ag-rtl .ag-toolpanel-indent-21 {
  padding-right: 210px; }

.ag-ltr .ag-row-group-indent-21 {
  padding-left: 210px; }

.ag-rtl .ag-row-group-indent-21 {
  padding-right: 210px; }

.ag-ltr .ag-toolpanel-indent-22 {
  padding-left: 220px; }

.ag-rtl .ag-toolpanel-indent-22 {
  padding-right: 220px; }

.ag-ltr .ag-row-group-indent-22 {
  padding-left: 220px; }

.ag-rtl .ag-row-group-indent-22 {
  padding-right: 220px; }

.ag-ltr .ag-toolpanel-indent-23 {
  padding-left: 230px; }

.ag-rtl .ag-toolpanel-indent-23 {
  padding-right: 230px; }

.ag-ltr .ag-row-group-indent-23 {
  padding-left: 230px; }

.ag-rtl .ag-row-group-indent-23 {
  padding-right: 230px; }

.ag-ltr .ag-toolpanel-indent-24 {
  padding-left: 240px; }

.ag-rtl .ag-toolpanel-indent-24 {
  padding-right: 240px; }

.ag-ltr .ag-row-group-indent-24 {
  padding-left: 240px; }

.ag-rtl .ag-row-group-indent-24 {
  padding-right: 240px; }

.ag-ltr .ag-toolpanel-indent-25 {
  padding-left: 250px; }

.ag-rtl .ag-toolpanel-indent-25 {
  padding-right: 250px; }

.ag-ltr .ag-row-group-indent-25 {
  padding-left: 250px; }

.ag-rtl .ag-row-group-indent-25 {
  padding-right: 250px; }

.ag-ltr .ag-toolpanel-indent-26 {
  padding-left: 260px; }

.ag-rtl .ag-toolpanel-indent-26 {
  padding-right: 260px; }

.ag-ltr .ag-row-group-indent-26 {
  padding-left: 260px; }

.ag-rtl .ag-row-group-indent-26 {
  padding-right: 260px; }

.ag-ltr .ag-toolpanel-indent-27 {
  padding-left: 270px; }

.ag-rtl .ag-toolpanel-indent-27 {
  padding-right: 270px; }

.ag-ltr .ag-row-group-indent-27 {
  padding-left: 270px; }

.ag-rtl .ag-row-group-indent-27 {
  padding-right: 270px; }

.ag-ltr .ag-toolpanel-indent-28 {
  padding-left: 280px; }

.ag-rtl .ag-toolpanel-indent-28 {
  padding-right: 280px; }

.ag-ltr .ag-row-group-indent-28 {
  padding-left: 280px; }

.ag-rtl .ag-row-group-indent-28 {
  padding-right: 280px; }

.ag-ltr .ag-toolpanel-indent-29 {
  padding-left: 290px; }

.ag-rtl .ag-toolpanel-indent-29 {
  padding-right: 290px; }

.ag-ltr .ag-row-group-indent-29 {
  padding-left: 290px; }

.ag-rtl .ag-row-group-indent-29 {
  padding-right: 290px; }

.ag-ltr .ag-toolpanel-indent-30 {
  padding-left: 300px; }

.ag-rtl .ag-toolpanel-indent-30 {
  padding-right: 300px; }

.ag-ltr .ag-row-group-indent-30 {
  padding-left: 300px; }

.ag-rtl .ag-row-group-indent-30 {
  padding-right: 300px; }

.ag-ltr .ag-toolpanel-indent-31 {
  padding-left: 310px; }

.ag-rtl .ag-toolpanel-indent-31 {
  padding-right: 310px; }

.ag-ltr .ag-row-group-indent-31 {
  padding-left: 310px; }

.ag-rtl .ag-row-group-indent-31 {
  padding-right: 310px; }

.ag-ltr .ag-toolpanel-indent-32 {
  padding-left: 320px; }

.ag-rtl .ag-toolpanel-indent-32 {
  padding-right: 320px; }

.ag-ltr .ag-row-group-indent-32 {
  padding-left: 320px; }

.ag-rtl .ag-row-group-indent-32 {
  padding-right: 320px; }

.ag-ltr .ag-toolpanel-indent-33 {
  padding-left: 330px; }

.ag-rtl .ag-toolpanel-indent-33 {
  padding-right: 330px; }

.ag-ltr .ag-row-group-indent-33 {
  padding-left: 330px; }

.ag-rtl .ag-row-group-indent-33 {
  padding-right: 330px; }

.ag-ltr .ag-toolpanel-indent-34 {
  padding-left: 340px; }

.ag-rtl .ag-toolpanel-indent-34 {
  padding-right: 340px; }

.ag-ltr .ag-row-group-indent-34 {
  padding-left: 340px; }

.ag-rtl .ag-row-group-indent-34 {
  padding-right: 340px; }

.ag-ltr .ag-toolpanel-indent-35 {
  padding-left: 350px; }

.ag-rtl .ag-toolpanel-indent-35 {
  padding-right: 350px; }

.ag-ltr .ag-row-group-indent-35 {
  padding-left: 350px; }

.ag-rtl .ag-row-group-indent-35 {
  padding-right: 350px; }

.ag-ltr .ag-toolpanel-indent-36 {
  padding-left: 360px; }

.ag-rtl .ag-toolpanel-indent-36 {
  padding-right: 360px; }

.ag-ltr .ag-row-group-indent-36 {
  padding-left: 360px; }

.ag-rtl .ag-row-group-indent-36 {
  padding-right: 360px; }

.ag-ltr .ag-toolpanel-indent-37 {
  padding-left: 370px; }

.ag-rtl .ag-toolpanel-indent-37 {
  padding-right: 370px; }

.ag-ltr .ag-row-group-indent-37 {
  padding-left: 370px; }

.ag-rtl .ag-row-group-indent-37 {
  padding-right: 370px; }

.ag-ltr .ag-toolpanel-indent-38 {
  padding-left: 380px; }

.ag-rtl .ag-toolpanel-indent-38 {
  padding-right: 380px; }

.ag-ltr .ag-row-group-indent-38 {
  padding-left: 380px; }

.ag-rtl .ag-row-group-indent-38 {
  padding-right: 380px; }

.ag-ltr .ag-toolpanel-indent-39 {
  padding-left: 390px; }

.ag-rtl .ag-toolpanel-indent-39 {
  padding-right: 390px; }

.ag-ltr .ag-row-group-indent-39 {
  padding-left: 390px; }

.ag-rtl .ag-row-group-indent-39 {
  padding-right: 390px; }

.ag-ltr .ag-toolpanel-indent-40 {
  padding-left: 400px; }

.ag-rtl .ag-toolpanel-indent-40 {
  padding-right: 400px; }

.ag-ltr .ag-row-group-indent-40 {
  padding-left: 400px; }

.ag-rtl .ag-row-group-indent-40 {
  padding-right: 400px; }

.ag-ltr .ag-toolpanel-indent-41 {
  padding-left: 410px; }

.ag-rtl .ag-toolpanel-indent-41 {
  padding-right: 410px; }

.ag-ltr .ag-row-group-indent-41 {
  padding-left: 410px; }

.ag-rtl .ag-row-group-indent-41 {
  padding-right: 410px; }

.ag-ltr .ag-toolpanel-indent-42 {
  padding-left: 420px; }

.ag-rtl .ag-toolpanel-indent-42 {
  padding-right: 420px; }

.ag-ltr .ag-row-group-indent-42 {
  padding-left: 420px; }

.ag-rtl .ag-row-group-indent-42 {
  padding-right: 420px; }

.ag-ltr .ag-toolpanel-indent-43 {
  padding-left: 430px; }

.ag-rtl .ag-toolpanel-indent-43 {
  padding-right: 430px; }

.ag-ltr .ag-row-group-indent-43 {
  padding-left: 430px; }

.ag-rtl .ag-row-group-indent-43 {
  padding-right: 430px; }

.ag-ltr .ag-toolpanel-indent-44 {
  padding-left: 440px; }

.ag-rtl .ag-toolpanel-indent-44 {
  padding-right: 440px; }

.ag-ltr .ag-row-group-indent-44 {
  padding-left: 440px; }

.ag-rtl .ag-row-group-indent-44 {
  padding-right: 440px; }

.ag-ltr .ag-toolpanel-indent-45 {
  padding-left: 450px; }

.ag-rtl .ag-toolpanel-indent-45 {
  padding-right: 450px; }

.ag-ltr .ag-row-group-indent-45 {
  padding-left: 450px; }

.ag-rtl .ag-row-group-indent-45 {
  padding-right: 450px; }

.ag-ltr .ag-toolpanel-indent-46 {
  padding-left: 460px; }

.ag-rtl .ag-toolpanel-indent-46 {
  padding-right: 460px; }

.ag-ltr .ag-row-group-indent-46 {
  padding-left: 460px; }

.ag-rtl .ag-row-group-indent-46 {
  padding-right: 460px; }

.ag-ltr .ag-toolpanel-indent-47 {
  padding-left: 470px; }

.ag-rtl .ag-toolpanel-indent-47 {
  padding-right: 470px; }

.ag-ltr .ag-row-group-indent-47 {
  padding-left: 470px; }

.ag-rtl .ag-row-group-indent-47 {
  padding-right: 470px; }

.ag-ltr .ag-toolpanel-indent-48 {
  padding-left: 480px; }

.ag-rtl .ag-toolpanel-indent-48 {
  padding-right: 480px; }

.ag-ltr .ag-row-group-indent-48 {
  padding-left: 480px; }

.ag-rtl .ag-row-group-indent-48 {
  padding-right: 480px; }

.ag-ltr .ag-toolpanel-indent-49 {
  padding-left: 490px; }

.ag-rtl .ag-toolpanel-indent-49 {
  padding-right: 490px; }

.ag-ltr .ag-row-group-indent-49 {
  padding-left: 490px; }

.ag-rtl .ag-row-group-indent-49 {
  padding-right: 490px; }

.ag-side-bar {
  display: flex;
  flex-direction: row-reverse;
  box-sizing: border-box; }
.ag-side-bar .ag-side-buttons {
  width: 20px; }
.ag-side-bar .ag-side-buttons div button {
  display: block;
  white-space: nowrap;
  outline: none; }
.ag-side-bar .ag-side-buttons div button span {
  -webkit-writing-mode: tb;
  -ms-writing-mode: tb;
  writing-mode: tb;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr; }
.ag-side-bar .panel-container {
  width: 180px; }
.ag-side-bar.full-width .panel-container {
  width: 200px; }

.ag-rtl .ag-side-bar .ag-side-buttons button span {
  -webkit-writing-mode: tb-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl; }

.ag-row-inline-editing {
  z-index: 1; }

.ag-status-bar {
  display: flex;
  justify-content: space-between; }
.ag-status-bar .ag-status-panel {
  display: inline-flex; }

.ag-status-bar-left {
  display: inline-flex; }

.ag-status-bar-center {
  display: inline-flex; }

.ag-status-bar-right {
  display: inline-flex; }

@media print {
  .ag-body-viewport {
    display: block; }
  .ag-row {
    page-break-inside: avoid; } }

.ag-body .ag-pinned-left-cols-viewport, .ag-body .ag-body-viewport, .ag-body .ag-pinned-right-cols-viewport {
  -webkit-overflow-scrolling: touch; }
  
</style>
`;
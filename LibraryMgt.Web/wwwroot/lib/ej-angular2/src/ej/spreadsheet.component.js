"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("syncfusion-javascript/Scripts/ej/web/ej.spreadsheet.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var SpreadsheetRangeSettingDirective = (function (_super) {
    __extends(SpreadsheetRangeSettingDirective, _super);
    function SpreadsheetRangeSettingDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return SpreadsheetRangeSettingDirective;
}(core_1.ComplexTagElement));
SpreadsheetRangeSettingDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-rangesettings>e-rangesetting',
            },] },
];
/** @nocollapse */
SpreadsheetRangeSettingDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return SpreadsheetComponent; }),] },] },
]; };
SpreadsheetRangeSettingDirective.propDecorators = {
    'dataSource': [{ type: core_2.Input, args: ['dataSource',] },],
    'headerStyles': [{ type: core_2.Input, args: ['headerStyles',] },],
    'primaryKey': [{ type: core_2.Input, args: ['primaryKey',] },],
    'query': [{ type: core_2.Input, args: ['query',] },],
    'showHeader': [{ type: core_2.Input, args: ['showHeader',] },],
    'startCell': [{ type: core_2.Input, args: ['startCell',] },],
};
exports.SpreadsheetRangeSettingDirective = SpreadsheetRangeSettingDirective;
var SpreadsheetRangeSettingsDirective = (function (_super) {
    __extends(SpreadsheetRangeSettingsDirective, _super);
    function SpreadsheetRangeSettingsDirective(widget) {
        return _super.call(this, 'rangeSettings') || this;
    }
    return SpreadsheetRangeSettingsDirective;
}(core_1.ArrayTagElement));
SpreadsheetRangeSettingsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-sheets>e-rangesettings',
                queries: {
                    children: new core_2.ContentChildren(SpreadsheetRangeSettingDirective)
                }
            },] },
];
/** @nocollapse */
SpreadsheetRangeSettingsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return SpreadsheetComponent; }),] },] },
]; };
exports.SpreadsheetRangeSettingsDirective = SpreadsheetRangeSettingsDirective;
var SpreadsheetSheetDirective = (function (_super) {
    __extends(SpreadsheetSheetDirective, _super);
    function SpreadsheetSheetDirective(widget) {
        var _this = _super.call(this, ['rangeSettings']) || this;
        _this.parent = widget;
        return _this;
    }
    return SpreadsheetSheetDirective;
}(core_1.ComplexTagElement));
SpreadsheetSheetDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-sheets>e-sheet',
            },] },
];
/** @nocollapse */
SpreadsheetSheetDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return SpreadsheetComponent; }),] },] },
]; };
SpreadsheetSheetDirective.propDecorators = {
    'border': [{ type: core_2.Input, args: ['border',] },],
    'cellTypes': [{ type: core_2.Input, args: ['cellTypes',] },],
    'cFormatRule': [{ type: core_2.Input, args: ['cFormatRule',] },],
    'colCount': [{ type: core_2.Input, args: ['colCount',] },],
    'columnWidth': [{ type: core_2.Input, args: ['columnWidth',] },],
    'dataSource': [{ type: core_2.Input, args: ['dataSource',] },],
    'fieldAsColumnHeader': [{ type: core_2.Input, args: ['fieldAsColumnHeader',] },],
    'frozenRows': [{ type: core_2.Input, args: ['frozenRows',] },],
    'frozenColumns': [{ type: core_2.Input, args: ['frozenColumns',] },],
    'headerStyles': [{ type: core_2.Input, args: ['headerStyles',] },],
    'hideColumns': [{ type: core_2.Input, args: ['hideColumns',] },],
    'hideRows': [{ type: core_2.Input, args: ['hideRows',] },],
    'mergeCells': [{ type: core_2.Input, args: ['mergeCells',] },],
    'primaryKey': [{ type: core_2.Input, args: ['primaryKey',] },],
    'query': [{ type: core_2.Input, args: ['query',] },],
    'rangeSettings': [{ type: core_2.Input, args: ['rangeSettings',] },],
    'rowCount': [{ type: core_2.Input, args: ['rowCount',] },],
    'rows': [{ type: core_2.Input, args: ['rows',] },],
    'showGridlines': [{ type: core_2.Input, args: ['showGridlines',] },],
    'showHeader': [{ type: core_2.Input, args: ['showHeader',] },],
    'showHeadings': [{ type: core_2.Input, args: ['showHeadings',] },],
    'sheetName': [{ type: core_2.Input, args: ['sheetName',] },],
    'startCell': [{ type: core_2.Input, args: ['startCell',] },],
    'tag_rangeSettings': [{ type: core_2.ContentChild, args: [SpreadsheetRangeSettingsDirective,] },],
};
exports.SpreadsheetSheetDirective = SpreadsheetSheetDirective;
var SpreadsheetSheetsDirective = (function (_super) {
    __extends(SpreadsheetSheetsDirective, _super);
    function SpreadsheetSheetsDirective(widget) {
        return _super.call(this, 'sheets') || this;
    }
    return SpreadsheetSheetsDirective;
}(core_1.ArrayTagElement));
SpreadsheetSheetsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-spreadsheet>e-sheets',
                queries: {
                    children: new core_2.ContentChildren(SpreadsheetSheetDirective)
                }
            },] },
];
/** @nocollapse */
SpreadsheetSheetsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return SpreadsheetComponent; }),] },] },
]; };
exports.SpreadsheetSheetsDirective = SpreadsheetSheetsDirective;
var SpreadsheetComponent = (function (_super) {
    __extends(SpreadsheetComponent, _super);
    function SpreadsheetComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Spreadsheet', el, cdRef, ['sheets'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.actionBegin_output = new core_2.EventEmitter();
        _this.actionComplete_output = new core_2.EventEmitter();
        _this.autoFillBegin_output = new core_2.EventEmitter();
        _this.autoFillComplete_output = new core_2.EventEmitter();
        _this.beforeBatchSave_output = new core_2.EventEmitter();
        _this.beforeCellFormat_output = new core_2.EventEmitter();
        _this.beforeCellSelect_output = new core_2.EventEmitter();
        _this.beforeDrop_output = new core_2.EventEmitter();
        _this.beforeEditComment_output = new core_2.EventEmitter();
        _this.beforeOpen_output = new core_2.EventEmitter();
        _this.beforePanelOpen_output = new core_2.EventEmitter();
        _this.cellClick_output = new core_2.EventEmitter();
        _this.cellEdit_output = new core_2.EventEmitter();
        _this.cellFormatting_output = new core_2.EventEmitter();
        _this.cellHover_output = new core_2.EventEmitter();
        _this.cellSave_output = new core_2.EventEmitter();
        _this.cellSelected_output = new core_2.EventEmitter();
        _this.contextMenuClick_output = new core_2.EventEmitter();
        _this.drag_output = new core_2.EventEmitter();
        _this.dragShape_output = new core_2.EventEmitter();
        _this.dragStart_output = new core_2.EventEmitter();
        _this.drop_output = new core_2.EventEmitter();
        _this.editRangeBegin_output = new core_2.EventEmitter();
        _this.editRangeComplete_output = new core_2.EventEmitter();
        _this.keyDown_output = new core_2.EventEmitter();
        _this.keyUp_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.loadComplete_output = new core_2.EventEmitter();
        _this.menuClick_output = new core_2.EventEmitter();
        _this.onImport_output = new core_2.EventEmitter();
        _this.openFailure_output = new core_2.EventEmitter();
        _this.pagerClick_output = new core_2.EventEmitter();
        _this.resizeStart_output = new core_2.EventEmitter();
        _this.resizeEnd_output = new core_2.EventEmitter();
        _this.ribbonClick_output = new core_2.EventEmitter();
        _this.seriesRendering_output = new core_2.EventEmitter();
        _this.tabClick_output = new core_2.EventEmitter();
        _this.tabSelect_output = new core_2.EventEmitter();
        return _this;
    }
    return SpreadsheetComponent;
}(core_1.EJComponents));
SpreadsheetComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-spreadsheet',
                template: ''
            },] },
];
/** @nocollapse */
SpreadsheetComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
SpreadsheetComponent.propDecorators = {
    'activeSheetIndex_input': [{ type: core_2.Input, args: ['activeSheetIndex',] },],
    'allowAutoCellType_input': [{ type: core_2.Input, args: ['allowAutoCellType',] },],
    'allowAutoFill_input': [{ type: core_2.Input, args: ['allowAutoFill',] },],
    'allowAutoSum_input': [{ type: core_2.Input, args: ['allowAutoSum',] },],
    'allowCellFormatting_input': [{ type: core_2.Input, args: ['allowCellFormatting',] },],
    'allowCellType_input': [{ type: core_2.Input, args: ['allowCellType',] },],
    'allowCharts_input': [{ type: core_2.Input, args: ['allowCharts',] },],
    'allowClear_input': [{ type: core_2.Input, args: ['allowClear',] },],
    'allowClipboard_input': [{ type: core_2.Input, args: ['allowClipboard',] },],
    'allowComments_input': [{ type: core_2.Input, args: ['allowComments',] },],
    'allowConditionalFormats_input': [{ type: core_2.Input, args: ['allowConditionalFormats',] },],
    'allowDataValidation_input': [{ type: core_2.Input, args: ['allowDataValidation',] },],
    'allowDelete_input': [{ type: core_2.Input, args: ['allowDelete',] },],
    'allowDragAndDrop_input': [{ type: core_2.Input, args: ['allowDragAndDrop',] },],
    'allowEditing_input': [{ type: core_2.Input, args: ['allowEditing',] },],
    'allowFiltering_input': [{ type: core_2.Input, args: ['allowFiltering',] },],
    'allowFormatAsTable_input': [{ type: core_2.Input, args: ['allowFormatAsTable',] },],
    'allowFormatPainter_input': [{ type: core_2.Input, args: ['allowFormatPainter',] },],
    'allowFormulaBar_input': [{ type: core_2.Input, args: ['allowFormulaBar',] },],
    'allowFreezing_input': [{ type: core_2.Input, args: ['allowFreezing',] },],
    'allowHyperlink_input': [{ type: core_2.Input, args: ['allowHyperlink',] },],
    'allowImport_input': [{ type: core_2.Input, args: ['allowImport',] },],
    'allowInsert_input': [{ type: core_2.Input, args: ['allowInsert',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'allowLockCell_input': [{ type: core_2.Input, args: ['allowLockCell',] },],
    'allowMerging_input': [{ type: core_2.Input, args: ['allowMerging',] },],
    'allowOverflow_input': [{ type: core_2.Input, args: ['allowOverflow',] },],
    'allowResizing_input': [{ type: core_2.Input, args: ['allowResizing',] },],
    'allowSearching_input': [{ type: core_2.Input, args: ['allowSearching',] },],
    'allowSelection_input': [{ type: core_2.Input, args: ['allowSelection',] },],
    'allowSorting_input': [{ type: core_2.Input, args: ['allowSorting',] },],
    'allowUndoRedo_input': [{ type: core_2.Input, args: ['allowUndoRedo',] },],
    'allowWrap_input': [{ type: core_2.Input, args: ['allowWrap',] },],
    'apWidth_input': [{ type: core_2.Input, args: ['apWidth',] },],
    'autoFillSettings_input': [{ type: core_2.Input, args: ['autoFillSettings',] },],
    'chartSettings_input': [{ type: core_2.Input, args: ['chartSettings',] },],
    'columnCount_input': [{ type: core_2.Input, args: ['columnCount',] },],
    'columnWidth_input': [{ type: core_2.Input, args: ['columnWidth',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'customFormulas_input': [{ type: core_2.Input, args: ['customFormulas',] },],
    'enableContextMenu_input': [{ type: core_2.Input, args: ['enableContextMenu',] },],
    'enablePivotTable_input': [{ type: core_2.Input, args: ['enablePivotTable',] },],
    'enableTouch_input': [{ type: core_2.Input, args: ['enableTouch',] },],
    'exportSettings_input': [{ type: core_2.Input, args: ['exportSettings',] },],
    'formatSettings_input': [{ type: core_2.Input, args: ['formatSettings',] },],
    'importSettings_input': [{ type: core_2.Input, args: ['importSettings',] },],
    'isReadOnly_input': [{ type: core_2.Input, args: ['isReadOnly',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'pictureSettings_input': [{ type: core_2.Input, args: ['pictureSettings',] },],
    'printSettings_input': [{ type: core_2.Input, args: ['printSettings',] },],
    'ribbonSettings_input': [{ type: core_2.Input, args: ['ribbonSettings',] },],
    'rowCount_input': [{ type: core_2.Input, args: ['rowCount',] },],
    'rowHeight_input': [{ type: core_2.Input, args: ['rowHeight',] },],
    'scrollSettings_input': [{ type: core_2.Input, args: ['scrollSettings',] },],
    'selectionSettings_input': [{ type: core_2.Input, args: ['selectionSettings',] },],
    'sheetCount_input': [{ type: core_2.Input, args: ['sheetCount',] },],
    'showPager_input': [{ type: core_2.Input, args: ['showPager',] },],
    'showRibbon_input': [{ type: core_2.Input, args: ['showRibbon',] },],
    'undoRedoStep_input': [{ type: core_2.Input, args: ['undoRedoStep',] },],
    'userName_input': [{ type: core_2.Input, args: ['userName',] },],
    'autoFillSettings_fillType_input': [{ type: core_2.Input, args: ['autoFillSettings.fillType',] },],
    'autoFillSettings_showFillOptions_input': [{ type: core_2.Input, args: ['autoFillSettings.showFillOptions',] },],
    'chartSettings_height_input': [{ type: core_2.Input, args: ['chartSettings.height',] },],
    'chartSettings_width_input': [{ type: core_2.Input, args: ['chartSettings.width',] },],
    'exportSettings_allowExporting_input': [{ type: core_2.Input, args: ['exportSettings.allowExporting',] },],
    'exportSettings_csvUrl_input': [{ type: core_2.Input, args: ['exportSettings.csvUrl',] },],
    'exportSettings_excelUrl_input': [{ type: core_2.Input, args: ['exportSettings.excelUrl',] },],
    'exportSettings_password_input': [{ type: core_2.Input, args: ['exportSettings.password',] },],
    'exportSettings_pdfUrl_input': [{ type: core_2.Input, args: ['exportSettings.pdfUrl',] },],
    'formatSettings_allowCellBorder_input': [{ type: core_2.Input, args: ['formatSettings.allowCellBorder',] },],
    'formatSettings_allowDecimalPlaces_input': [{ type: core_2.Input, args: ['formatSettings.allowDecimalPlaces',] },],
    'formatSettings_allowFontFamily_input': [{ type: core_2.Input, args: ['formatSettings.allowFontFamily',] },],
    'importSettings_importMapper_input': [{ type: core_2.Input, args: ['importSettings.importMapper',] },],
    'importSettings_importOnLoad_input': [{ type: core_2.Input, args: ['importSettings.importOnLoad',] },],
    'importSettings_importUrl_input': [{ type: core_2.Input, args: ['importSettings.importUrl',] },],
    'importSettings_password_input': [{ type: core_2.Input, args: ['importSettings.password',] },],
    'pictureSettings_allowPictures_input': [{ type: core_2.Input, args: ['pictureSettings.allowPictures',] },],
    'pictureSettings_height_input': [{ type: core_2.Input, args: ['pictureSettings.height',] },],
    'pictureSettings_width_input': [{ type: core_2.Input, args: ['pictureSettings.width',] },],
    'printSettings_allowPageSetup_input': [{ type: core_2.Input, args: ['printSettings.allowPageSetup',] },],
    'printSettings_allowPageSize_input': [{ type: core_2.Input, args: ['printSettings.allowPageSize',] },],
    'printSettings_allowPrinting_input': [{ type: core_2.Input, args: ['printSettings.allowPrinting',] },],
    'ribbonSettings_applicationTab_input': [{ type: core_2.Input, args: ['ribbonSettings.applicationTab',] },],
    'ribbonSettings_applicationTab_type_input': [{ type: core_2.Input, args: ['ribbonSettings.applicationTab.type',] },],
    'ribbonSettings_applicationTab_menuSettings_input': [{ type: core_2.Input, args: ['ribbonSettings.applicationTab.menuSettings',] },],
    'scrollSettings_allowScrolling_input': [{ type: core_2.Input, args: ['scrollSettings.allowScrolling',] },],
    'scrollSettings_allowSheetOnDemand_input': [{ type: core_2.Input, args: ['scrollSettings.allowSheetOnDemand',] },],
    'scrollSettings_allowVirtualScrolling_input': [{ type: core_2.Input, args: ['scrollSettings.allowVirtualScrolling',] },],
    'scrollSettings_height_input': [{ type: core_2.Input, args: ['scrollSettings.height',] },],
    'scrollSettings_isResponsive_input': [{ type: core_2.Input, args: ['scrollSettings.isResponsive',] },],
    'scrollSettings_scrollMode_input': [{ type: core_2.Input, args: ['scrollSettings.scrollMode',] },],
    'scrollSettings_width_input': [{ type: core_2.Input, args: ['scrollSettings.width',] },],
    'selectionSettings_activeCell_input': [{ type: core_2.Input, args: ['selectionSettings.activeCell',] },],
    'selectionSettings_animationTime_input': [{ type: core_2.Input, args: ['selectionSettings.animationTime',] },],
    'selectionSettings_enableAnimation_input': [{ type: core_2.Input, args: ['selectionSettings.enableAnimation',] },],
    'selectionSettings_selectionType_input': [{ type: core_2.Input, args: ['selectionSettings.selectionType',] },],
    'selectionSettings_selectionUnit_input': [{ type: core_2.Input, args: ['selectionSettings.selectionUnit',] },],
    'nameManager_input': [{ type: core_2.Input, args: ['nameManager',] },],
    'sheets_input': [{ type: core_2.Input, args: ['sheets',] },],
    'sheets_rows_cells_input': [{ type: core_2.Input, args: ['sheets.rows.cells',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'actionBegin_output': [{ type: core_2.Output, args: ['actionBegin',] },],
    'actionComplete_output': [{ type: core_2.Output, args: ['actionComplete',] },],
    'autoFillBegin_output': [{ type: core_2.Output, args: ['autoFillBegin',] },],
    'autoFillComplete_output': [{ type: core_2.Output, args: ['autoFillComplete',] },],
    'beforeBatchSave_output': [{ type: core_2.Output, args: ['beforeBatchSave',] },],
    'beforeCellFormat_output': [{ type: core_2.Output, args: ['beforeCellFormat',] },],
    'beforeCellSelect_output': [{ type: core_2.Output, args: ['beforeCellSelect',] },],
    'beforeDrop_output': [{ type: core_2.Output, args: ['beforeDrop',] },],
    'beforeEditComment_output': [{ type: core_2.Output, args: ['beforeEditComment',] },],
    'beforeOpen_output': [{ type: core_2.Output, args: ['beforeOpen',] },],
    'beforePanelOpen_output': [{ type: core_2.Output, args: ['beforePanelOpen',] },],
    'cellClick_output': [{ type: core_2.Output, args: ['cellClick',] },],
    'cellEdit_output': [{ type: core_2.Output, args: ['cellEdit',] },],
    'cellFormatting_output': [{ type: core_2.Output, args: ['cellFormatting',] },],
    'cellHover_output': [{ type: core_2.Output, args: ['cellHover',] },],
    'cellSave_output': [{ type: core_2.Output, args: ['cellSave',] },],
    'cellSelected_output': [{ type: core_2.Output, args: ['cellSelected',] },],
    'contextMenuClick_output': [{ type: core_2.Output, args: ['contextMenuClick',] },],
    'drag_output': [{ type: core_2.Output, args: ['drag',] },],
    'dragShape_output': [{ type: core_2.Output, args: ['dragShape',] },],
    'dragStart_output': [{ type: core_2.Output, args: ['dragStart',] },],
    'drop_output': [{ type: core_2.Output, args: ['drop',] },],
    'editRangeBegin_output': [{ type: core_2.Output, args: ['editRangeBegin',] },],
    'editRangeComplete_output': [{ type: core_2.Output, args: ['editRangeComplete',] },],
    'keyDown_output': [{ type: core_2.Output, args: ['keyDown',] },],
    'keyUp_output': [{ type: core_2.Output, args: ['keyUp',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'loadComplete_output': [{ type: core_2.Output, args: ['loadComplete',] },],
    'menuClick_output': [{ type: core_2.Output, args: ['menuClick',] },],
    'onImport_output': [{ type: core_2.Output, args: ['onImport',] },],
    'openFailure_output': [{ type: core_2.Output, args: ['openFailure',] },],
    'pagerClick_output': [{ type: core_2.Output, args: ['pagerClick',] },],
    'resizeStart_output': [{ type: core_2.Output, args: ['resizeStart',] },],
    'resizeEnd_output': [{ type: core_2.Output, args: ['resizeEnd',] },],
    'ribbonClick_output': [{ type: core_2.Output, args: ['ribbonClick',] },],
    'seriesRendering_output': [{ type: core_2.Output, args: ['seriesRendering',] },],
    'tabClick_output': [{ type: core_2.Output, args: ['tabClick',] },],
    'tabSelect_output': [{ type: core_2.Output, args: ['tabSelect',] },],
    'tag_sheets': [{ type: core_2.ContentChild, args: [SpreadsheetSheetsDirective,] },],
};
exports.SpreadsheetComponent = SpreadsheetComponent;
exports.EJ_SPREADSHEET_COMPONENTS = [SpreadsheetComponent,
    SpreadsheetRangeSettingsDirective, SpreadsheetSheetsDirective, SpreadsheetRangeSettingDirective, SpreadsheetSheetDirective];
//# sourceMappingURL=spreadsheet.component.js.map
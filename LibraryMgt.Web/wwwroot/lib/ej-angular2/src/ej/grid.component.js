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
require("syncfusion-javascript/Scripts/ej/web/ej.grid.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var GridCommandDirective = (function (_super) {
    __extends(GridCommandDirective, _super);
    function GridCommandDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return GridCommandDirective;
}(core_1.ComplexTagElement));
GridCommandDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-commands>e-command',
            },] },
];
/** @nocollapse */
GridCommandDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
GridCommandDirective.propDecorators = {
    'buttonOptions': [{ type: core_2.Input, args: ['buttonOptions',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
};
exports.GridCommandDirective = GridCommandDirective;
var GridCommandsDirective = (function (_super) {
    __extends(GridCommandsDirective, _super);
    function GridCommandsDirective(widget) {
        return _super.call(this, 'commands') || this;
    }
    return GridCommandsDirective;
}(core_1.ArrayTagElement));
GridCommandsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-columns>e-commands',
                queries: {
                    children: new core_2.ContentChildren(GridCommandDirective)
                }
            },] },
];
/** @nocollapse */
GridCommandsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
exports.GridCommandsDirective = GridCommandsDirective;
var GridColumnDirective = (function (_super) {
    __extends(GridColumnDirective, _super);
    function GridColumnDirective(widget) {
        var _this = _super.call(this, ['commands']) || this;
        _this.parent = widget;
        return _this;
    }
    return GridColumnDirective;
}(core_1.ComplexTagElement));
GridColumnDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-columns>e-column',
            },] },
];
/** @nocollapse */
GridColumnDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
GridColumnDirective.propDecorators = {
    'clipMode': [{ type: core_2.Input, args: ['clipMode',] },],
    'allowEditing': [{ type: core_2.Input, args: ['allowEditing',] },],
    'allowFiltering': [{ type: core_2.Input, args: ['allowFiltering',] },],
    'allowGrouping': [{ type: core_2.Input, args: ['allowGrouping',] },],
    'allowSorting': [{ type: core_2.Input, args: ['allowSorting',] },],
    'allowResizing': [{ type: core_2.Input, args: ['allowResizing',] },],
    'commands': [{ type: core_2.Input, args: ['commands',] },],
    'cssClass': [{ type: core_2.Input, args: ['cssClass',] },],
    'customAttributes': [{ type: core_2.Input, args: ['customAttributes',] },],
    'dataSource': [{ type: core_2.Input, args: ['dataSource',] },],
    'defaultValue': [{ type: core_2.Input, args: ['defaultValue',] },],
    'disableHtmlEncode': [{ type: core_2.Input, args: ['disableHtmlEncode',] },],
    'displayAsCheckbox': [{ type: core_2.Input, args: ['displayAsCheckbox',] },],
    'editParams': [{ type: core_2.Input, args: ['editParams',] },],
    'editTemplate': [{ type: core_2.Input, args: ['editTemplate',] },],
    'editType': [{ type: core_2.Input, args: ['editType',] },],
    'enableGroupByFormat': [{ type: core_2.Input, args: ['enableGroupByFormat',] },],
    'field': [{ type: core_2.Input, args: ['field',] },],
    'filterBarTemplate': [{ type: core_2.Input, args: ['filterBarTemplate',] },],
    'filterType': [{ type: core_2.Input, args: ['filterType',] },],
    'foreignKeyField': [{ type: core_2.Input, args: ['foreignKeyField',] },],
    'foreignKeyValue': [{ type: core_2.Input, args: ['foreignKeyValue',] },],
    'format': [{ type: core_2.Input, args: ['format',] },],
    'headerTemplateID': [{ type: core_2.Input, args: ['headerTemplateID',] },],
    'headerText': [{ type: core_2.Input, args: ['headerText',] },],
    'headerTextAlign': [{ type: core_2.Input, args: ['headerTextAlign',] },],
    'headerTooltip': [{ type: core_2.Input, args: ['headerTooltip',] },],
    'isFrozen': [{ type: core_2.Input, args: ['isFrozen',] },],
    'isIdentity': [{ type: core_2.Input, args: ['isIdentity',] },],
    'isPrimaryKey': [{ type: core_2.Input, args: ['isPrimaryKey',] },],
    'priority': [{ type: core_2.Input, args: ['priority',] },],
    'showInColumnChooser': [{ type: core_2.Input, args: ['showInColumnChooser',] },],
    'template': [{ type: core_2.Input, args: ['template',] },],
    'textAlign': [{ type: core_2.Input, args: ['textAlign',] },],
    'tooltip': [{ type: core_2.Input, args: ['tooltip',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'validationRules': [{ type: core_2.Input, args: ['validationRules',] },],
    'visible': [{ type: core_2.Input, args: ['visible',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'tag_commands': [{ type: core_2.ContentChild, args: [GridCommandsDirective,] },],
};
exports.GridColumnDirective = GridColumnDirective;
var GridColumnsDirective = (function (_super) {
    __extends(GridColumnsDirective, _super);
    function GridColumnsDirective(widget) {
        return _super.call(this, 'columns') || this;
    }
    return GridColumnsDirective;
}(core_1.ArrayTagElement));
GridColumnsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-grid>e-columns',
                queries: {
                    children: new core_2.ContentChildren(GridColumnDirective)
                }
            },] },
];
/** @nocollapse */
GridColumnsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
exports.GridColumnsDirective = GridColumnsDirective;
var GridSummaryColumnDirective = (function (_super) {
    __extends(GridSummaryColumnDirective, _super);
    function GridSummaryColumnDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return GridSummaryColumnDirective;
}(core_1.ComplexTagElement));
GridSummaryColumnDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-summarycolumns>e-summarycolumn',
            },] },
];
/** @nocollapse */
GridSummaryColumnDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
GridSummaryColumnDirective.propDecorators = {
    'customSummaryValue': [{ type: core_2.Input, args: ['customSummaryValue',] },],
    'dataMember': [{ type: core_2.Input, args: ['dataMember',] },],
    'displayColumn': [{ type: core_2.Input, args: ['displayColumn',] },],
    'format': [{ type: core_2.Input, args: ['format',] },],
    'prefix': [{ type: core_2.Input, args: ['prefix',] },],
    'suffix': [{ type: core_2.Input, args: ['suffix',] },],
    'summaryType': [{ type: core_2.Input, args: ['summaryType',] },],
    'template': [{ type: core_2.Input, args: ['template',] },],
};
exports.GridSummaryColumnDirective = GridSummaryColumnDirective;
var GridSummaryColumnsDirective = (function (_super) {
    __extends(GridSummaryColumnsDirective, _super);
    function GridSummaryColumnsDirective(widget) {
        return _super.call(this, 'summaryColumns') || this;
    }
    return GridSummaryColumnsDirective;
}(core_1.ArrayTagElement));
GridSummaryColumnsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-summaryrows>e-summarycolumns',
                queries: {
                    children: new core_2.ContentChildren(GridSummaryColumnDirective)
                }
            },] },
];
/** @nocollapse */
GridSummaryColumnsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
exports.GridSummaryColumnsDirective = GridSummaryColumnsDirective;
var GridSummaryRowDirective = (function (_super) {
    __extends(GridSummaryRowDirective, _super);
    function GridSummaryRowDirective(widget) {
        var _this = _super.call(this, ['summaryColumns']) || this;
        _this.parent = widget;
        return _this;
    }
    return GridSummaryRowDirective;
}(core_1.ComplexTagElement));
GridSummaryRowDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-summaryrows>e-summaryrow',
            },] },
];
/** @nocollapse */
GridSummaryRowDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
GridSummaryRowDirective.propDecorators = {
    'showCaptionSummary': [{ type: core_2.Input, args: ['showCaptionSummary',] },],
    'showGroupSummary': [{ type: core_2.Input, args: ['showGroupSummary',] },],
    'showTotalSummary': [{ type: core_2.Input, args: ['showTotalSummary',] },],
    'summaryColumns': [{ type: core_2.Input, args: ['summaryColumns',] },],
    'title': [{ type: core_2.Input, args: ['title',] },],
    'titleColumn': [{ type: core_2.Input, args: ['titleColumn',] },],
    'tag_summaryColumns': [{ type: core_2.ContentChild, args: [GridSummaryColumnsDirective,] },],
};
exports.GridSummaryRowDirective = GridSummaryRowDirective;
var GridSummaryRowsDirective = (function (_super) {
    __extends(GridSummaryRowsDirective, _super);
    function GridSummaryRowsDirective(widget) {
        return _super.call(this, 'summaryRows') || this;
    }
    return GridSummaryRowsDirective;
}(core_1.ArrayTagElement));
GridSummaryRowsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-grid>e-summaryrows',
                queries: {
                    children: new core_2.ContentChildren(GridSummaryRowDirective)
                }
            },] },
];
/** @nocollapse */
GridSummaryRowsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
exports.GridSummaryRowsDirective = GridSummaryRowsDirective;
var GridStackedHeaderColumnDirective = (function (_super) {
    __extends(GridStackedHeaderColumnDirective, _super);
    function GridStackedHeaderColumnDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return GridStackedHeaderColumnDirective;
}(core_1.ComplexTagElement));
GridStackedHeaderColumnDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-stackedheadercolumns>e-stackedheadercolumn',
            },] },
];
/** @nocollapse */
GridStackedHeaderColumnDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
GridStackedHeaderColumnDirective.propDecorators = {
    'column': [{ type: core_2.Input, args: ['column',] },],
    'cssClass': [{ type: core_2.Input, args: ['cssClass',] },],
    'headerText': [{ type: core_2.Input, args: ['headerText',] },],
    'textAlign': [{ type: core_2.Input, args: ['textAlign',] },],
    'tooltip': [{ type: core_2.Input, args: ['tooltip',] },],
};
exports.GridStackedHeaderColumnDirective = GridStackedHeaderColumnDirective;
var GridStackedHeaderColumnsDirective = (function (_super) {
    __extends(GridStackedHeaderColumnsDirective, _super);
    function GridStackedHeaderColumnsDirective(widget) {
        return _super.call(this, 'stackedHeaderColumns') || this;
    }
    return GridStackedHeaderColumnsDirective;
}(core_1.ArrayTagElement));
GridStackedHeaderColumnsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-stackedheaderrows>e-stackedheadercolumns',
                queries: {
                    children: new core_2.ContentChildren(GridStackedHeaderColumnDirective)
                }
            },] },
];
/** @nocollapse */
GridStackedHeaderColumnsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
exports.GridStackedHeaderColumnsDirective = GridStackedHeaderColumnsDirective;
var GridStackedHeaderRowDirective = (function (_super) {
    __extends(GridStackedHeaderRowDirective, _super);
    function GridStackedHeaderRowDirective(widget) {
        var _this = _super.call(this, ['stackedHeaderColumns']) || this;
        _this.parent = widget;
        return _this;
    }
    return GridStackedHeaderRowDirective;
}(core_1.ComplexTagElement));
GridStackedHeaderRowDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-stackedheaderrows>e-stackedheaderrow',
            },] },
];
/** @nocollapse */
GridStackedHeaderRowDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
GridStackedHeaderRowDirective.propDecorators = {
    'stackedHeaderColumns': [{ type: core_2.Input, args: ['stackedHeaderColumns',] },],
    'tag_stackedHeaderColumns': [{ type: core_2.ContentChild, args: [GridStackedHeaderColumnsDirective,] },],
};
exports.GridStackedHeaderRowDirective = GridStackedHeaderRowDirective;
var GridStackedHeaderRowsDirective = (function (_super) {
    __extends(GridStackedHeaderRowsDirective, _super);
    function GridStackedHeaderRowsDirective(widget) {
        return _super.call(this, 'stackedHeaderRows') || this;
    }
    return GridStackedHeaderRowsDirective;
}(core_1.ArrayTagElement));
GridStackedHeaderRowsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-grid>e-stackedheaderrows',
                queries: {
                    children: new core_2.ContentChildren(GridStackedHeaderRowDirective)
                }
            },] },
];
/** @nocollapse */
GridStackedHeaderRowsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return GridComponent; }),] },] },
]; };
exports.GridStackedHeaderRowsDirective = GridStackedHeaderRowsDirective;
var GridComponent = (function (_super) {
    __extends(GridComponent, _super);
    function GridComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Grid', el, cdRef, ['columns', 'summaryRows', 'stackedHeaderRows'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.dataSource_twoChange = new core_2.EventEmitter();
        _this.pageSettings_currentPage_twoChange = new core_2.EventEmitter();
        _this.actionBegin_output = new core_2.EventEmitter();
        _this.actionComplete_output = new core_2.EventEmitter();
        _this.actionFailure_output = new core_2.EventEmitter();
        _this.batchAdd_output = new core_2.EventEmitter();
        _this.batchDelete_output = new core_2.EventEmitter();
        _this.beforeBatchAdd_output = new core_2.EventEmitter();
        _this.beforeBatchDelete_output = new core_2.EventEmitter();
        _this.beforeBatchSave_output = new core_2.EventEmitter();
        _this.beforePrint_output = new core_2.EventEmitter();
        _this.beforeRowDrop_output = new core_2.EventEmitter();
        _this.beginEdit_output = new core_2.EventEmitter();
        _this.cellEdit_output = new core_2.EventEmitter();
        _this.cellSave_output = new core_2.EventEmitter();
        _this.cellSelected_output = new core_2.EventEmitter();
        _this.cellSelecting_output = new core_2.EventEmitter();
        _this.cellDeselected_output = new core_2.EventEmitter();
        _this.cellDeselecting_output = new core_2.EventEmitter();
        _this.columnDrag_output = new core_2.EventEmitter();
        _this.columnDragStart_output = new core_2.EventEmitter();
        _this.columnDrop_output = new core_2.EventEmitter();
        _this.columnSelected_output = new core_2.EventEmitter();
        _this.columnSelecting_output = new core_2.EventEmitter();
        _this.columnDeselected_output = new core_2.EventEmitter();
        _this.columnDeselecting_output = new core_2.EventEmitter();
        _this.contextClick_output = new core_2.EventEmitter();
        _this.contextOpen_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.dataBound_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.detailsCollapse_output = new core_2.EventEmitter();
        _this.detailsDataBound_output = new core_2.EventEmitter();
        _this.detailsExpand_output = new core_2.EventEmitter();
        _this.endAdd_output = new core_2.EventEmitter();
        _this.endDelete_output = new core_2.EventEmitter();
        _this.endEdit_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.mergeHeaderCellInfo_output = new core_2.EventEmitter();
        _this.mergeCellInfo_output = new core_2.EventEmitter();
        _this.queryCellInfo_output = new core_2.EventEmitter();
        _this.recordClick_output = new core_2.EventEmitter();
        _this.recordDoubleClick_output = new core_2.EventEmitter();
        _this.resized_output = new core_2.EventEmitter();
        _this.resizeEnd_output = new core_2.EventEmitter();
        _this.resizeStart_output = new core_2.EventEmitter();
        _this.rightClick_output = new core_2.EventEmitter();
        _this.rowDataBound_output = new core_2.EventEmitter();
        _this.rowSelected_output = new core_2.EventEmitter();
        _this.rowSelecting_output = new core_2.EventEmitter();
        _this.rowDeselected_output = new core_2.EventEmitter();
        _this.rowDeselecting_output = new core_2.EventEmitter();
        _this.rowDrag_output = new core_2.EventEmitter();
        _this.rowDragStart_output = new core_2.EventEmitter();
        _this.rowDrop_output = new core_2.EventEmitter();
        _this.rowHover_output = new core_2.EventEmitter();
        _this.templateRefresh_output = new core_2.EventEmitter();
        _this.toolbarClick_output = new core_2.EventEmitter();
        return _this;
    }
    return GridComponent;
}(core_1.EJComponents));
GridComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-grid',
                template: ''
            },] },
];
/** @nocollapse */
GridComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
GridComponent.propDecorators = {
    'allowCellMerging_input': [{ type: core_2.Input, args: ['allowCellMerging',] },],
    'allowGrouping_input': [{ type: core_2.Input, args: ['allowGrouping',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'allowFiltering_input': [{ type: core_2.Input, args: ['allowFiltering',] },],
    'allowSorting_input': [{ type: core_2.Input, args: ['allowSorting',] },],
    'allowMultiSorting_input': [{ type: core_2.Input, args: ['allowMultiSorting',] },],
    'allowPaging_input': [{ type: core_2.Input, args: ['allowPaging',] },],
    'allowReordering_input': [{ type: core_2.Input, args: ['allowReordering',] },],
    'allowResizeToFit_input': [{ type: core_2.Input, args: ['allowResizeToFit',] },],
    'allowResizing_input': [{ type: core_2.Input, args: ['allowResizing',] },],
    'allowRowDragAndDrop_input': [{ type: core_2.Input, args: ['allowRowDragAndDrop',] },],
    'allowScrolling_input': [{ type: core_2.Input, args: ['allowScrolling',] },],
    'allowSearching_input': [{ type: core_2.Input, args: ['allowSearching',] },],
    'allowSelection_input': [{ type: core_2.Input, args: ['allowSelection',] },],
    'allowTextWrap_input': [{ type: core_2.Input, args: ['allowTextWrap',] },],
    'allowMultipleExporting_input': [{ type: core_2.Input, args: ['allowMultipleExporting',] },],
    'commonWidth_input': [{ type: core_2.Input, args: ['commonWidth',] },],
    'gridLines_input': [{ type: core_2.Input, args: ['gridLines',] },],
    'childGrid_input': [{ type: core_2.Input, args: ['childGrid',] },],
    'columnLayout_input': [{ type: core_2.Input, args: ['columnLayout',] },],
    'contextMenuSettings_input': [{ type: core_2.Input, args: ['contextMenuSettings',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'detailsTemplate_input': [{ type: core_2.Input, args: ['detailsTemplate',] },],
    'editSettings_input': [{ type: core_2.Input, args: ['editSettings',] },],
    'enableAltRow_input': [{ type: core_2.Input, args: ['enableAltRow',] },],
    'enableAutoSaveOnSelectionChange_input': [{ type: core_2.Input, args: ['enableAutoSaveOnSelectionChange',] },],
    'enableHeaderHover_input': [{ type: core_2.Input, args: ['enableHeaderHover',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableResponsiveRow_input': [{ type: core_2.Input, args: ['enableResponsiveRow',] },],
    'enableRowHover_input': [{ type: core_2.Input, args: ['enableRowHover',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableTouch_input': [{ type: core_2.Input, args: ['enableTouch',] },],
    'enableToolbarItems_input': [{ type: core_2.Input, args: ['enableToolbarItems',] },],
    'exportToExcelAction_input': [{ type: core_2.Input, args: ['exportToExcelAction',] },],
    'exportToPdfAction_input': [{ type: core_2.Input, args: ['exportToPdfAction',] },],
    'exportToWordAction_input': [{ type: core_2.Input, args: ['exportToWordAction',] },],
    'filterSettings_input': [{ type: core_2.Input, args: ['filterSettings',] },],
    'groupSettings_input': [{ type: core_2.Input, args: ['groupSettings',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'keySettings_input': [{ type: core_2.Input, args: ['keySettings',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'minWidth_input': [{ type: core_2.Input, args: ['minWidth',] },],
    'pageSettings_input': [{ type: core_2.Input, args: ['pageSettings',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'resizeSettings_input': [{ type: core_2.Input, args: ['resizeSettings',] },],
    'rowTemplate_input': [{ type: core_2.Input, args: ['rowTemplate',] },],
    'rowDropSettings_input': [{ type: core_2.Input, args: ['rowDropSettings',] },],
    'searchSettings_input': [{ type: core_2.Input, args: ['searchSettings',] },],
    'selectedRecords_input': [{ type: core_2.Input, args: ['selectedRecords',] },],
    'selectedRowIndex_input': [{ type: core_2.Input, args: ['selectedRowIndex',] },],
    'selectedRowIndices_input': [{ type: core_2.Input, args: ['selectedRowIndices',] },],
    'selectionSettings_input': [{ type: core_2.Input, args: ['selectionSettings',] },],
    'selectionType_input': [{ type: core_2.Input, args: ['selectionType',] },],
    'scrollSettings_input': [{ type: core_2.Input, args: ['scrollSettings',] },],
    'showColumnChooser_input': [{ type: core_2.Input, args: ['showColumnChooser',] },],
    'showStackedHeader_input': [{ type: core_2.Input, args: ['showStackedHeader',] },],
    'showSummary_input': [{ type: core_2.Input, args: ['showSummary',] },],
    'sortSettings_input': [{ type: core_2.Input, args: ['sortSettings',] },],
    'textWrapSettings_input': [{ type: core_2.Input, args: ['textWrapSettings',] },],
    'toolbarSettings_input': [{ type: core_2.Input, args: ['toolbarSettings',] },],
    'contextMenuSettings_contextMenuItems_input': [{ type: core_2.Input, args: ['contextMenuSettings.contextMenuItems',] },],
    'contextMenuSettings_customContextMenuItems_input': [{ type: core_2.Input, args: ['contextMenuSettings.customContextMenuItems',] },],
    'contextMenuSettings_enableContextMenu_input': [{ type: core_2.Input, args: ['contextMenuSettings.enableContextMenu',] },],
    'contextMenuSettings_disableDefaultItems_input': [{ type: core_2.Input, args: ['contextMenuSettings.disableDefaultItems',] },],
    'editSettings_allowAdding_input': [{ type: core_2.Input, args: ['editSettings.allowAdding',] },],
    'editSettings_allowDeleting_input': [{ type: core_2.Input, args: ['editSettings.allowDeleting',] },],
    'editSettings_allowEditing_input': [{ type: core_2.Input, args: ['editSettings.allowEditing',] },],
    'editSettings_allowEditOnDblClick_input': [{ type: core_2.Input, args: ['editSettings.allowEditOnDblClick',] },],
    'editSettings_dialogEditorTemplateID_input': [{ type: core_2.Input, args: ['editSettings.dialogEditorTemplateID',] },],
    'editSettings_editMode_input': [{ type: core_2.Input, args: ['editSettings.editMode',] },],
    'editSettings_externalFormTemplateID_input': [{ type: core_2.Input, args: ['editSettings.externalFormTemplateID',] },],
    'editSettings_formPosition_input': [{ type: core_2.Input, args: ['editSettings.formPosition',] },],
    'editSettings_inlineFormTemplateID_input': [{ type: core_2.Input, args: ['editSettings.inlineFormTemplateID',] },],
    'editSettings_rowPosition_input': [{ type: core_2.Input, args: ['editSettings.rowPosition',] },],
    'editSettings_showConfirmDialog_input': [{ type: core_2.Input, args: ['editSettings.showConfirmDialog',] },],
    'editSettings_showDeleteConfirmDialog_input': [{ type: core_2.Input, args: ['editSettings.showDeleteConfirmDialog',] },],
    'editSettings_titleColumn_input': [{ type: core_2.Input, args: ['editSettings.titleColumn',] },],
    'editSettings_showAddNewRow_input': [{ type: core_2.Input, args: ['editSettings.showAddNewRow',] },],
    'filterSettings_enableCaseSensitivity_input': [{ type: core_2.Input, args: ['filterSettings.enableCaseSensitivity',] },],
    'filterSettings_enableInterDeterminateState_input': [{ type: core_2.Input, args: ['filterSettings.enableInterDeterminateState',] },],
    'filterSettings_filterBarMode_input': [{ type: core_2.Input, args: ['filterSettings.filterBarMode',] },],
    'filterSettings_filterType_input': [{ type: core_2.Input, args: ['filterSettings.filterType',] },],
    'filterSettings_immediateModeDelay_input': [{ type: core_2.Input, args: ['filterSettings.immediateModeDelay',] },],
    'filterSettings_maxFilterChoices_input': [{ type: core_2.Input, args: ['filterSettings.maxFilterChoices',] },],
    'filterSettings_showFilterBarStatus_input': [{ type: core_2.Input, args: ['filterSettings.showFilterBarStatus',] },],
    'filterSettings_showPredicate_input': [{ type: core_2.Input, args: ['filterSettings.showPredicate',] },],
    'groupSettings_captionFormat_input': [{ type: core_2.Input, args: ['groupSettings.captionFormat',] },],
    'groupSettings_enableDropAreaAutoSizing_input': [{ type: core_2.Input, args: ['groupSettings.enableDropAreaAutoSizing',] },],
    'groupSettings_groupedColumns_input': [{ type: core_2.Input, args: ['groupSettings.groupedColumns',] },],
    'groupSettings_showDropArea_input': [{ type: core_2.Input, args: ['groupSettings.showDropArea',] },],
    'groupSettings_showGroupedColumn_input': [{ type: core_2.Input, args: ['groupSettings.showGroupedColumn',] },],
    'groupSettings_showToggleButton_input': [{ type: core_2.Input, args: ['groupSettings.showToggleButton',] },],
    'groupSettings_showUngroupButton_input': [{ type: core_2.Input, args: ['groupSettings.showUngroupButton',] },],
    'pageSettings_enableQueryString_input': [{ type: core_2.Input, args: ['pageSettings.enableQueryString',] },],
    'pageSettings_enableTemplates_input': [{ type: core_2.Input, args: ['pageSettings.enableTemplates',] },],
    'pageSettings_pageCount_input': [{ type: core_2.Input, args: ['pageSettings.pageCount',] },],
    'pageSettings_pageSize_input': [{ type: core_2.Input, args: ['pageSettings.pageSize',] },],
    'pageSettings_pageSizeList_input': [{ type: core_2.Input, args: ['pageSettings.pageSizeList',] },],
    'pageSettings_showDefaults_input': [{ type: core_2.Input, args: ['pageSettings.showDefaults',] },],
    'pageSettings_template_input': [{ type: core_2.Input, args: ['pageSettings.template',] },],
    'pageSettings_totalPages_input': [{ type: core_2.Input, args: ['pageSettings.totalPages',] },],
    'pageSettings_totalRecordsCount_input': [{ type: core_2.Input, args: ['pageSettings.totalRecordsCount',] },],
    'pageSettings_printMode_input': [{ type: core_2.Input, args: ['pageSettings.printMode',] },],
    'resizeSettings_resizeMode_input': [{ type: core_2.Input, args: ['resizeSettings.resizeMode',] },],
    'rowDropSettings_dropTargetID_input': [{ type: core_2.Input, args: ['rowDropSettings.dropTargetID',] },],
    'rowDropSettings_dragMapper_input': [{ type: core_2.Input, args: ['rowDropSettings.dragMapper',] },],
    'rowDropSettings_dropMapper_input': [{ type: core_2.Input, args: ['rowDropSettings.dropMapper',] },],
    'searchSettings_fields_input': [{ type: core_2.Input, args: ['searchSettings.fields',] },],
    'searchSettings_key_input': [{ type: core_2.Input, args: ['searchSettings.key',] },],
    'searchSettings_operator_input': [{ type: core_2.Input, args: ['searchSettings.operator',] },],
    'searchSettings_ignoreCase_input': [{ type: core_2.Input, args: ['searchSettings.ignoreCase',] },],
    'selectionSettings_cellSelectionMode_input': [{ type: core_2.Input, args: ['selectionSettings.cellSelectionMode',] },],
    'selectionSettings_enableToggle_input': [{ type: core_2.Input, args: ['selectionSettings.enableToggle',] },],
    'selectionSettings_selectionMode_input': [{ type: core_2.Input, args: ['selectionSettings.selectionMode',] },],
    'scrollSettings_allowVirtualScrolling_input': [{ type: core_2.Input, args: ['scrollSettings.allowVirtualScrolling',] },],
    'scrollSettings_autoHide_input': [{ type: core_2.Input, args: ['scrollSettings.autoHide',] },],
    'scrollSettings_buttonSize_input': [{ type: core_2.Input, args: ['scrollSettings.buttonSize',] },],
    'scrollSettings_enableTouchScroll_input': [{ type: core_2.Input, args: ['scrollSettings.enableTouchScroll',] },],
    'scrollSettings_frozenColumns_input': [{ type: core_2.Input, args: ['scrollSettings.frozenColumns',] },],
    'scrollSettings_frozenRows_input': [{ type: core_2.Input, args: ['scrollSettings.frozenRows',] },],
    'scrollSettings_height_input': [{ type: core_2.Input, args: ['scrollSettings.height',] },],
    'scrollSettings_scrollerSize_input': [{ type: core_2.Input, args: ['scrollSettings.scrollerSize',] },],
    'scrollSettings_virtualScrollMode_input': [{ type: core_2.Input, args: ['scrollSettings.virtualScrollMode',] },],
    'scrollSettings_enableVirtualization_input': [{ type: core_2.Input, args: ['scrollSettings.enableVirtualization',] },],
    'scrollSettings_width_input': [{ type: core_2.Input, args: ['scrollSettings.width',] },],
    'scrollSettings_scrollOneStepBy_input': [{ type: core_2.Input, args: ['scrollSettings.scrollOneStepBy',] },],
    'textWrapSettings_wrapMode_input': [{ type: core_2.Input, args: ['textWrapSettings.wrapMode',] },],
    'toolbarSettings_showToolbar_input': [{ type: core_2.Input, args: ['toolbarSettings.showToolbar',] },],
    'toolbarSettings_toolbarItems_input': [{ type: core_2.Input, args: ['toolbarSettings.toolbarItems',] },],
    'columns_input': [{ type: core_2.Input, args: ['columns',] },],
    'stackedHeaderRows_input': [{ type: core_2.Input, args: ['stackedHeaderRows',] },],
    'summaryRows_input': [{ type: core_2.Input, args: ['summaryRows',] },],
    'contextMenuSettings_subContextMenu_input': [{ type: core_2.Input, args: ['contextMenuSettings.subContextMenu',] },],
    'filterSettings_filteredColumns_input': [{ type: core_2.Input, args: ['filterSettings.filteredColumns',] },],
    'sortSettings_sortedColumns_input': [{ type: core_2.Input, args: ['sortSettings.sortedColumns',] },],
    'toolbarSettings_customToolbarItems_input': [{ type: core_2.Input, args: ['toolbarSettings.customToolbarItems',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'dataSource_two': [{ type: core_2.Input, args: ['dataSource',] },],
    'dataSource_twoChange': [{ type: core_2.Output, args: ['dataSourceChange',] },],
    'pageSettings_currentPage_two': [{ type: core_2.Input, args: ['pageSettings.currentPage',] },],
    'pageSettings_currentPage_twoChange': [{ type: core_2.Output, args: ['pageSettings.currentPageChange',] },],
    'actionBegin_output': [{ type: core_2.Output, args: ['actionBegin',] },],
    'actionComplete_output': [{ type: core_2.Output, args: ['actionComplete',] },],
    'actionFailure_output': [{ type: core_2.Output, args: ['actionFailure',] },],
    'batchAdd_output': [{ type: core_2.Output, args: ['batchAdd',] },],
    'batchDelete_output': [{ type: core_2.Output, args: ['batchDelete',] },],
    'beforeBatchAdd_output': [{ type: core_2.Output, args: ['beforeBatchAdd',] },],
    'beforeBatchDelete_output': [{ type: core_2.Output, args: ['beforeBatchDelete',] },],
    'beforeBatchSave_output': [{ type: core_2.Output, args: ['beforeBatchSave',] },],
    'beforePrint_output': [{ type: core_2.Output, args: ['beforePrint',] },],
    'beforeRowDrop_output': [{ type: core_2.Output, args: ['beforeRowDrop',] },],
    'beginEdit_output': [{ type: core_2.Output, args: ['beginEdit',] },],
    'cellEdit_output': [{ type: core_2.Output, args: ['cellEdit',] },],
    'cellSave_output': [{ type: core_2.Output, args: ['cellSave',] },],
    'cellSelected_output': [{ type: core_2.Output, args: ['cellSelected',] },],
    'cellSelecting_output': [{ type: core_2.Output, args: ['cellSelecting',] },],
    'cellDeselected_output': [{ type: core_2.Output, args: ['cellDeselected',] },],
    'cellDeselecting_output': [{ type: core_2.Output, args: ['cellDeselecting',] },],
    'columnDrag_output': [{ type: core_2.Output, args: ['columnDrag',] },],
    'columnDragStart_output': [{ type: core_2.Output, args: ['columnDragStart',] },],
    'columnDrop_output': [{ type: core_2.Output, args: ['columnDrop',] },],
    'columnSelected_output': [{ type: core_2.Output, args: ['columnSelected',] },],
    'columnSelecting_output': [{ type: core_2.Output, args: ['columnSelecting',] },],
    'columnDeselected_output': [{ type: core_2.Output, args: ['columnDeselected',] },],
    'columnDeselecting_output': [{ type: core_2.Output, args: ['columnDeselecting',] },],
    'contextClick_output': [{ type: core_2.Output, args: ['contextClick',] },],
    'contextOpen_output': [{ type: core_2.Output, args: ['contextOpen',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'dataBound_output': [{ type: core_2.Output, args: ['dataBound',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'detailsCollapse_output': [{ type: core_2.Output, args: ['detailsCollapse',] },],
    'detailsDataBound_output': [{ type: core_2.Output, args: ['detailsDataBound',] },],
    'detailsExpand_output': [{ type: core_2.Output, args: ['detailsExpand',] },],
    'endAdd_output': [{ type: core_2.Output, args: ['endAdd',] },],
    'endDelete_output': [{ type: core_2.Output, args: ['endDelete',] },],
    'endEdit_output': [{ type: core_2.Output, args: ['endEdit',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'mergeHeaderCellInfo_output': [{ type: core_2.Output, args: ['mergeHeaderCellInfo',] },],
    'mergeCellInfo_output': [{ type: core_2.Output, args: ['mergeCellInfo',] },],
    'queryCellInfo_output': [{ type: core_2.Output, args: ['queryCellInfo',] },],
    'recordClick_output': [{ type: core_2.Output, args: ['recordClick',] },],
    'recordDoubleClick_output': [{ type: core_2.Output, args: ['recordDoubleClick',] },],
    'resized_output': [{ type: core_2.Output, args: ['resized',] },],
    'resizeEnd_output': [{ type: core_2.Output, args: ['resizeEnd',] },],
    'resizeStart_output': [{ type: core_2.Output, args: ['resizeStart',] },],
    'rightClick_output': [{ type: core_2.Output, args: ['rightClick',] },],
    'rowDataBound_output': [{ type: core_2.Output, args: ['rowDataBound',] },],
    'rowSelected_output': [{ type: core_2.Output, args: ['rowSelected',] },],
    'rowSelecting_output': [{ type: core_2.Output, args: ['rowSelecting',] },],
    'rowDeselected_output': [{ type: core_2.Output, args: ['rowDeselected',] },],
    'rowDeselecting_output': [{ type: core_2.Output, args: ['rowDeselecting',] },],
    'rowDrag_output': [{ type: core_2.Output, args: ['rowDrag',] },],
    'rowDragStart_output': [{ type: core_2.Output, args: ['rowDragStart',] },],
    'rowDrop_output': [{ type: core_2.Output, args: ['rowDrop',] },],
    'rowHover_output': [{ type: core_2.Output, args: ['rowHover',] },],
    'templateRefresh_output': [{ type: core_2.Output, args: ['templateRefresh',] },],
    'toolbarClick_output': [{ type: core_2.Output, args: ['toolbarClick',] },],
    'tag_columns': [{ type: core_2.ContentChild, args: [GridColumnsDirective,] },],
    'tag_summaryRows': [{ type: core_2.ContentChild, args: [GridSummaryRowsDirective,] },],
    'tag_stackedHeaderRows': [{ type: core_2.ContentChild, args: [GridStackedHeaderRowsDirective,] },],
};
exports.GridComponent = GridComponent;
exports.EJ_GRID_COMPONENTS = [GridComponent,
    GridCommandsDirective, GridColumnsDirective, GridSummaryColumnsDirective, GridSummaryRowsDirective, GridStackedHeaderColumnsDirective, GridStackedHeaderRowsDirective, GridCommandDirective, GridColumnDirective, GridSummaryColumnDirective, GridSummaryRowDirective, GridStackedHeaderColumnDirective, GridStackedHeaderRowDirective];
//# sourceMappingURL=grid.component.js.map
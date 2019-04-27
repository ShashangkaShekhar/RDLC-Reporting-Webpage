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
require("syncfusion-javascript/Scripts/ej/web/ej.pivotgrid.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var PivotGridComponent = (function (_super) {
    __extends(PivotGridComponent, _super);
    function PivotGridComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'PivotGrid', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.afterServiceInvoke_output = new core_2.EventEmitter();
        _this.beforeServiceInvoke_output = new core_2.EventEmitter();
        _this.beforePivotEnginePopulate_output = new core_2.EventEmitter();
        _this.cellDoubleClick_output = new core_2.EventEmitter();
        _this.cellContext_output = new core_2.EventEmitter();
        _this.cellSelection_output = new core_2.EventEmitter();
        _this.columnHeaderHyperlinkClick_output = new core_2.EventEmitter();
        _this.drillSuccess_output = new core_2.EventEmitter();
        _this.drillThrough_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.renderComplete_output = new core_2.EventEmitter();
        _this.renderFailure_output = new core_2.EventEmitter();
        _this.renderSuccess_output = new core_2.EventEmitter();
        _this.rowHeaderHyperlinkClick_output = new core_2.EventEmitter();
        _this.summaryCellHyperlinkClick_output = new core_2.EventEmitter();
        _this.valueCellHyperlinkClick_output = new core_2.EventEmitter();
        _this.saveReport_output = new core_2.EventEmitter();
        _this.loadReport_output = new core_2.EventEmitter();
        _this.beforeExport_output = new core_2.EventEmitter();
        _this.cellEdit_output = new core_2.EventEmitter();
        return _this;
    }
    return PivotGridComponent;
}(core_1.EJComponents));
PivotGridComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-pivotgrid',
                template: ''
            },] },
];
/** @nocollapse */
PivotGridComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
PivotGridComponent.propDecorators = {
    'analysisMode_input': [{ type: core_2.Input, args: ['analysisMode',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'pivotTableFieldListID_input': [{ type: core_2.Input, args: ['pivotTableFieldListID',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'valueSortSettings_input': [{ type: core_2.Input, args: ['valueSortSettings',] },],
    'frozenHeaderSettings_input': [{ type: core_2.Input, args: ['frozenHeaderSettings',] },],
    'headerSettings_input': [{ type: core_2.Input, args: ['headerSettings',] },],
    'showUniqueNameOnPivotButton_input': [{ type: core_2.Input, args: ['showUniqueNameOnPivotButton',] },],
    'customObject_input': [{ type: core_2.Input, args: ['customObject',] },],
    'collapsedMembers_input': [{ type: core_2.Input, args: ['collapsedMembers',] },],
    'enableCellContext_input': [{ type: core_2.Input, args: ['enableCellContext',] },],
    'enableCellSelection_input': [{ type: core_2.Input, args: ['enableCellSelection',] },],
    'enableDrillThrough_input': [{ type: core_2.Input, args: ['enableDrillThrough',] },],
    'enableCellDoubleClick_input': [{ type: core_2.Input, args: ['enableCellDoubleClick',] },],
    'enableCellEditing_input': [{ type: core_2.Input, args: ['enableCellEditing',] },],
    'enableCollapseByDefault_input': [{ type: core_2.Input, args: ['enableCollapseByDefault',] },],
    'enableColumnGrandTotal_input': [{ type: core_2.Input, args: ['enableColumnGrandTotal',] },],
    'enableConditionalFormatting_input': [{ type: core_2.Input, args: ['enableConditionalFormatting',] },],
    'enableAdvancedFilter_input': [{ type: core_2.Input, args: ['enableAdvancedFilter',] },],
    'enableDeferUpdate_input': [{ type: core_2.Input, args: ['enableDeferUpdate',] },],
    'enableGroupingBar_input': [{ type: core_2.Input, args: ['enableGroupingBar',] },],
    'enableMemberEditorPaging_input': [{ type: core_2.Input, args: ['enableMemberEditorPaging',] },],
    'memberEditorPageSize_input': [{ type: core_2.Input, args: ['memberEditorPageSize',] },],
    'enableGrandTotal_input': [{ type: core_2.Input, args: ['enableGrandTotal',] },],
    'enableJSONRendering_input': [{ type: core_2.Input, args: ['enableJSONRendering',] },],
    'enablePivotFieldList_input': [{ type: core_2.Input, args: ['enablePivotFieldList',] },],
    'enableRowGrandTotal_input': [{ type: core_2.Input, args: ['enableRowGrandTotal',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableToolTip_input': [{ type: core_2.Input, args: ['enableToolTip',] },],
    'enableToolTipAnimation_input': [{ type: core_2.Input, args: ['enableToolTipAnimation',] },],
    'enableColumnResizing_input': [{ type: core_2.Input, args: ['enableColumnResizing',] },],
    'resizeColumnsToFit_input': [{ type: core_2.Input, args: ['resizeColumnsToFit',] },],
    'enableContextMenu_input': [{ type: core_2.Input, args: ['enableContextMenu',] },],
    'enableVirtualScrolling_input': [{ type: core_2.Input, args: ['enableVirtualScrolling',] },],
    'enablePaging_input': [{ type: core_2.Input, args: ['enablePaging',] },],
    'hyperlinkSettings_input': [{ type: core_2.Input, args: ['hyperlinkSettings',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'jsonRecords_input': [{ type: core_2.Input, args: ['jsonRecords',] },],
    'layout_input': [{ type: core_2.Input, args: ['layout',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'operationalMode_input': [{ type: core_2.Input, args: ['operationalMode',] },],
    'serviceMethodSettings_input': [{ type: core_2.Input, args: ['serviceMethodSettings',] },],
    'url_input': [{ type: core_2.Input, args: ['url',] },],
    'dataSource_cube_input': [{ type: core_2.Input, args: ['dataSource.cube',] },],
    'dataSource_sourceInfo_input': [{ type: core_2.Input, args: ['dataSource.sourceInfo',] },],
    'dataSource_providerName_input': [{ type: core_2.Input, args: ['dataSource.providerName',] },],
    'dataSource_data_input': [{ type: core_2.Input, args: ['dataSource.data',] },],
    'dataSource_catalog_input': [{ type: core_2.Input, args: ['dataSource.catalog',] },],
    'dataSource_enableAdvancedFilter_input': [{ type: core_2.Input, args: ['dataSource.enableAdvancedFilter',] },],
    'dataSource_reportName_input': [{ type: core_2.Input, args: ['dataSource.reportName',] },],
    'dataSource_pagerOptions_input': [{ type: core_2.Input, args: ['dataSource.pagerOptions',] },],
    'dataSource_pagerOptions_categoricalPageSize_input': [{ type: core_2.Input, args: ['dataSource.pagerOptions.categoricalPageSize',] },],
    'dataSource_pagerOptions_seriesPageSize_input': [{ type: core_2.Input, args: ['dataSource.pagerOptions.seriesPageSize',] },],
    'dataSource_pagerOptions_categoricalCurrentPage_input': [{ type: core_2.Input, args: ['dataSource.pagerOptions.categoricalCurrentPage',] },],
    'dataSource_pagerOptions_seriesCurrentPage_input': [{ type: core_2.Input, args: ['dataSource.pagerOptions.seriesCurrentPage',] },],
    'valueSortSettings_headerText_input': [{ type: core_2.Input, args: ['valueSortSettings.headerText',] },],
    'valueSortSettings_headerDelimiters_input': [{ type: core_2.Input, args: ['valueSortSettings.headerDelimiters',] },],
    'valueSortSettings_sortOrder_input': [{ type: core_2.Input, args: ['valueSortSettings.sortOrder',] },],
    'frozenHeaderSettings_enableFrozenRowHeaders_input': [{ type: core_2.Input, args: ['frozenHeaderSettings.enableFrozenRowHeaders',] },],
    'frozenHeaderSettings_enableFrozenColumnHeaders_input': [{ type: core_2.Input, args: ['frozenHeaderSettings.enableFrozenColumnHeaders',] },],
    'frozenHeaderSettings_enableFrozenHeaders_input': [{ type: core_2.Input, args: ['frozenHeaderSettings.enableFrozenHeaders',] },],
    'frozenHeaderSettings_scrollerSize_input': [{ type: core_2.Input, args: ['frozenHeaderSettings.scrollerSize',] },],
    'headerSettings_showRowItems_input': [{ type: core_2.Input, args: ['headerSettings.showRowItems',] },],
    'headerSettings_showColumnItems_input': [{ type: core_2.Input, args: ['headerSettings.showColumnItems',] },],
    'hyperlinkSettings_enableColumnHeaderHyperlink_input': [{ type: core_2.Input, args: ['hyperlinkSettings.enableColumnHeaderHyperlink',] },],
    'hyperlinkSettings_enableRowHeaderHyperlink_input': [{ type: core_2.Input, args: ['hyperlinkSettings.enableRowHeaderHyperlink',] },],
    'hyperlinkSettings_enableSummaryCellHyperlink_input': [{ type: core_2.Input, args: ['hyperlinkSettings.enableSummaryCellHyperlink',] },],
    'hyperlinkSettings_enableValueCellHyperlink_input': [{ type: core_2.Input, args: ['hyperlinkSettings.enableValueCellHyperlink',] },],
    'serviceMethodSettings_drillDown_input': [{ type: core_2.Input, args: ['serviceMethodSettings.drillDown',] },],
    'serviceMethodSettings_exportPivotGrid_input': [{ type: core_2.Input, args: ['serviceMethodSettings.exportPivotGrid',] },],
    'serviceMethodSettings_deferUpdate_input': [{ type: core_2.Input, args: ['serviceMethodSettings.deferUpdate',] },],
    'serviceMethodSettings_fetchMembers_input': [{ type: core_2.Input, args: ['serviceMethodSettings.fetchMembers',] },],
    'serviceMethodSettings_filtering_input': [{ type: core_2.Input, args: ['serviceMethodSettings.filtering',] },],
    'serviceMethodSettings_initialize_input': [{ type: core_2.Input, args: ['serviceMethodSettings.initialize',] },],
    'serviceMethodSettings_nodeDropped_input': [{ type: core_2.Input, args: ['serviceMethodSettings.nodeDropped',] },],
    'serviceMethodSettings_nodeStateModified_input': [{ type: core_2.Input, args: ['serviceMethodSettings.nodeStateModified',] },],
    'serviceMethodSettings_paging_input': [{ type: core_2.Input, args: ['serviceMethodSettings.paging',] },],
    'serviceMethodSettings_sorting_input': [{ type: core_2.Input, args: ['serviceMethodSettings.sorting',] },],
    'serviceMethodSettings_memberExpand_input': [{ type: core_2.Input, args: ['serviceMethodSettings.memberExpand',] },],
    'serviceMethodSettings_cellEditing_input': [{ type: core_2.Input, args: ['serviceMethodSettings.cellEditing',] },],
    'serviceMethodSettings_saveReport_input': [{ type: core_2.Input, args: ['serviceMethodSettings.saveReport',] },],
    'serviceMethodSettings_loadReport_input': [{ type: core_2.Input, args: ['serviceMethodSettings.loadReport',] },],
    'serviceMethodSettings_calculatedField_input': [{ type: core_2.Input, args: ['serviceMethodSettings.calculatedField',] },],
    'serviceMethodSettings_drillThroughHierarchies_input': [{ type: core_2.Input, args: ['serviceMethodSettings.drillThroughHierarchies',] },],
    'serviceMethodSettings_drillThroughDataTable_input': [{ type: core_2.Input, args: ['serviceMethodSettings.drillThroughDataTable',] },],
    'serviceMethodSettings_valueSorting_input': [{ type: core_2.Input, args: ['serviceMethodSettings.valueSorting',] },],
    'serviceMethodSettings_removeButton_input': [{ type: core_2.Input, args: ['serviceMethodSettings.removeButton',] },],
    'serviceMethodSettings_writeBack_input': [{ type: core_2.Input, args: ['serviceMethodSettings.writeBack',] },],
    'dataSource_columns_input': [{ type: core_2.Input, args: ['dataSource.columns',] },],
    'dataSource_rows_input': [{ type: core_2.Input, args: ['dataSource.rows',] },],
    'dataSource_values_input': [{ type: core_2.Input, args: ['dataSource.values',] },],
    'dataSource_filters_input': [{ type: core_2.Input, args: ['dataSource.filters',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'afterServiceInvoke_output': [{ type: core_2.Output, args: ['afterServiceInvoke',] },],
    'beforeServiceInvoke_output': [{ type: core_2.Output, args: ['beforeServiceInvoke',] },],
    'beforePivotEnginePopulate_output': [{ type: core_2.Output, args: ['beforePivotEnginePopulate',] },],
    'cellDoubleClick_output': [{ type: core_2.Output, args: ['cellDoubleClick',] },],
    'cellContext_output': [{ type: core_2.Output, args: ['cellContext',] },],
    'cellSelection_output': [{ type: core_2.Output, args: ['cellSelection',] },],
    'columnHeaderHyperlinkClick_output': [{ type: core_2.Output, args: ['columnHeaderHyperlinkClick',] },],
    'drillSuccess_output': [{ type: core_2.Output, args: ['drillSuccess',] },],
    'drillThrough_output': [{ type: core_2.Output, args: ['drillThrough',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'renderComplete_output': [{ type: core_2.Output, args: ['renderComplete',] },],
    'renderFailure_output': [{ type: core_2.Output, args: ['renderFailure',] },],
    'renderSuccess_output': [{ type: core_2.Output, args: ['renderSuccess',] },],
    'rowHeaderHyperlinkClick_output': [{ type: core_2.Output, args: ['rowHeaderHyperlinkClick',] },],
    'summaryCellHyperlinkClick_output': [{ type: core_2.Output, args: ['summaryCellHyperlinkClick',] },],
    'valueCellHyperlinkClick_output': [{ type: core_2.Output, args: ['valueCellHyperlinkClick',] },],
    'saveReport_output': [{ type: core_2.Output, args: ['saveReport',] },],
    'loadReport_output': [{ type: core_2.Output, args: ['loadReport',] },],
    'beforeExport_output': [{ type: core_2.Output, args: ['beforeExport',] },],
    'cellEdit_output': [{ type: core_2.Output, args: ['cellEdit',] },],
};
exports.PivotGridComponent = PivotGridComponent;
exports.EJ_PIVOTGRID_COMPONENTS = [PivotGridComponent
];
//# sourceMappingURL=pivotgrid.component.js.map
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
require("syncfusion-javascript/Scripts/ej/web/ej.pivotchart.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var PivotChartComponent = (function (_super) {
    __extends(PivotChartComponent, _super);
    function PivotChartComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'PivotChart', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.load_output = new core_2.EventEmitter();
        _this.afterServiceInvoke_output = new core_2.EventEmitter();
        _this.beforeServiceInvoke_output = new core_2.EventEmitter();
        _this.beforePivotEnginePopulate_output = new core_2.EventEmitter();
        _this.drillSuccess_output = new core_2.EventEmitter();
        _this.renderComplete_output = new core_2.EventEmitter();
        _this.renderFailure_output = new core_2.EventEmitter();
        _this.renderSuccess_output = new core_2.EventEmitter();
        _this.beforeExport_output = new core_2.EventEmitter();
        return _this;
    }
    return PivotChartComponent;
}(core_1.EJComponents));
PivotChartComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-pivotchart',
                template: ''
            },] },
];
/** @nocollapse */
PivotChartComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
PivotChartComponent.propDecorators = {
    'analysisMode_input': [{ type: core_2.Input, args: ['analysisMode',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'zooming_input': [{ type: core_2.Input, args: ['zooming',] },],
    'commonSeriesOptions_input': [{ type: core_2.Input, args: ['commonSeriesOptions',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'customObject_input': [{ type: core_2.Input, args: ['customObject',] },],
    'enable3D_input': [{ type: core_2.Input, args: ['enable3D',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableMultiLevelLabels_input': [{ type: core_2.Input, args: ['enableMultiLevelLabels',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'legend_input': [{ type: core_2.Input, args: ['legend',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'operationalMode_input': [{ type: core_2.Input, args: ['operationalMode',] },],
    'primaryXAxis_input': [{ type: core_2.Input, args: ['primaryXAxis',] },],
    'primaryYAxis_input': [{ type: core_2.Input, args: ['primaryYAxis',] },],
    'rotation_input': [{ type: core_2.Input, args: ['rotation',] },],
    'enableContextMenu_input': [{ type: core_2.Input, args: ['enableContextMenu',] },],
    'serviceMethodSettings_input': [{ type: core_2.Input, args: ['serviceMethodSettings',] },],
    'size_input': [{ type: core_2.Input, args: ['size',] },],
    'url_input': [{ type: core_2.Input, args: ['url',] },],
    'zooming_enableScrollbar_input': [{ type: core_2.Input, args: ['zooming.enableScrollbar',] },],
    'commonSeriesOptions_type_input': [{ type: core_2.Input, args: ['commonSeriesOptions.type',] },],
    'dataSource_cube_input': [{ type: core_2.Input, args: ['dataSource.cube',] },],
    'dataSource_sourceInfo_input': [{ type: core_2.Input, args: ['dataSource.sourceInfo',] },],
    'dataSource_providerName_input': [{ type: core_2.Input, args: ['dataSource.providerName',] },],
    'dataSource_data_input': [{ type: core_2.Input, args: ['dataSource.data',] },],
    'dataSource_catalog_input': [{ type: core_2.Input, args: ['dataSource.catalog',] },],
    'serviceMethodSettings_drillDown_input': [{ type: core_2.Input, args: ['serviceMethodSettings.drillDown',] },],
    'serviceMethodSettings_exportPivotChart_input': [{ type: core_2.Input, args: ['serviceMethodSettings.exportPivotChart',] },],
    'serviceMethodSettings_initialize_input': [{ type: core_2.Input, args: ['serviceMethodSettings.initialize',] },],
    'serviceMethodSettings_paging_input': [{ type: core_2.Input, args: ['serviceMethodSettings.paging',] },],
    'dataSource_columns_input': [{ type: core_2.Input, args: ['dataSource.columns',] },],
    'dataSource_rows_input': [{ type: core_2.Input, args: ['dataSource.rows',] },],
    'dataSource_values_input': [{ type: core_2.Input, args: ['dataSource.values',] },],
    'dataSource_filters_input': [{ type: core_2.Input, args: ['dataSource.filters',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'afterServiceInvoke_output': [{ type: core_2.Output, args: ['afterServiceInvoke',] },],
    'beforeServiceInvoke_output': [{ type: core_2.Output, args: ['beforeServiceInvoke',] },],
    'beforePivotEnginePopulate_output': [{ type: core_2.Output, args: ['beforePivotEnginePopulate',] },],
    'drillSuccess_output': [{ type: core_2.Output, args: ['drillSuccess',] },],
    'renderComplete_output': [{ type: core_2.Output, args: ['renderComplete',] },],
    'renderFailure_output': [{ type: core_2.Output, args: ['renderFailure',] },],
    'renderSuccess_output': [{ type: core_2.Output, args: ['renderSuccess',] },],
    'beforeExport_output': [{ type: core_2.Output, args: ['beforeExport',] },],
};
exports.PivotChartComponent = PivotChartComponent;
exports.EJ_PIVOTCHART_COMPONENTS = [PivotChartComponent
];
//# sourceMappingURL=pivotchart.component.js.map
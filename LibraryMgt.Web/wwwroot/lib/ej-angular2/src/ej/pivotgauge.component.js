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
require("syncfusion-javascript/Scripts/ej/web/ej.pivotgauge.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var PivotGaugeComponent = (function (_super) {
    __extends(PivotGaugeComponent, _super);
    function PivotGaugeComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'PivotGauge', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.afterServiceInvoke_output = new core_2.EventEmitter();
        _this.beforeServiceInvoke_output = new core_2.EventEmitter();
        _this.beforePivotEnginePopulate_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.renderComplete_output = new core_2.EventEmitter();
        _this.renderFailure_output = new core_2.EventEmitter();
        _this.renderSuccess_output = new core_2.EventEmitter();
        return _this;
    }
    return PivotGaugeComponent;
}(core_1.EJComponents));
PivotGaugeComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-pivotgauge',
                template: ''
            },] },
];
/** @nocollapse */
PivotGaugeComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
PivotGaugeComponent.propDecorators = {
    'columnsCount_input': [{ type: core_2.Input, args: ['columnsCount',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'customObject_input': [{ type: core_2.Input, args: ['customObject',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enableTooltip_input': [{ type: core_2.Input, args: ['enableTooltip',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'labelFormatSettings_input': [{ type: core_2.Input, args: ['labelFormatSettings',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'rowsCount_input': [{ type: core_2.Input, args: ['rowsCount',] },],
    'scales_input': [{ type: core_2.Input, args: ['scales',] },],
    'serviceMethodSettings_input': [{ type: core_2.Input, args: ['serviceMethodSettings',] },],
    'showHeaderLabel_input': [{ type: core_2.Input, args: ['showHeaderLabel',] },],
    'url_input': [{ type: core_2.Input, args: ['url',] },],
    'analysisMode_input': [{ type: core_2.Input, args: ['analysisMode',] },],
    'operationalMode_input': [{ type: core_2.Input, args: ['operationalMode',] },],
    'dataSource_cube_input': [{ type: core_2.Input, args: ['dataSource.cube',] },],
    'dataSource_sourceInfo_input': [{ type: core_2.Input, args: ['dataSource.sourceInfo',] },],
    'dataSource_providerName_input': [{ type: core_2.Input, args: ['dataSource.providerName',] },],
    'dataSource_data_input': [{ type: core_2.Input, args: ['dataSource.data',] },],
    'dataSource_catalog_input': [{ type: core_2.Input, args: ['dataSource.catalog',] },],
    'labelFormatSettings_numberFormat_input': [{ type: core_2.Input, args: ['labelFormatSettings.numberFormat',] },],
    'labelFormatSettings_decimalPlaces_input': [{ type: core_2.Input, args: ['labelFormatSettings.decimalPlaces',] },],
    'labelFormatSettings_prefixText_input': [{ type: core_2.Input, args: ['labelFormatSettings.prefixText',] },],
    'labelFormatSettings_suffixText_input': [{ type: core_2.Input, args: ['labelFormatSettings.suffixText',] },],
    'serviceMethodSettings_initialize_input': [{ type: core_2.Input, args: ['serviceMethodSettings.initialize',] },],
    'dataSource_columns_input': [{ type: core_2.Input, args: ['dataSource.columns',] },],
    'dataSource_rows_input': [{ type: core_2.Input, args: ['dataSource.rows',] },],
    'dataSource_values_input': [{ type: core_2.Input, args: ['dataSource.values',] },],
    'dataSource_filters_input': [{ type: core_2.Input, args: ['dataSource.filters',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'afterServiceInvoke_output': [{ type: core_2.Output, args: ['afterServiceInvoke',] },],
    'beforeServiceInvoke_output': [{ type: core_2.Output, args: ['beforeServiceInvoke',] },],
    'beforePivotEnginePopulate_output': [{ type: core_2.Output, args: ['beforePivotEnginePopulate',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'renderComplete_output': [{ type: core_2.Output, args: ['renderComplete',] },],
    'renderFailure_output': [{ type: core_2.Output, args: ['renderFailure',] },],
    'renderSuccess_output': [{ type: core_2.Output, args: ['renderSuccess',] },],
};
exports.PivotGaugeComponent = PivotGaugeComponent;
exports.EJ_PIVOTGAUGE_COMPONENTS = [PivotGaugeComponent
];
//# sourceMappingURL=pivotgauge.component.js.map
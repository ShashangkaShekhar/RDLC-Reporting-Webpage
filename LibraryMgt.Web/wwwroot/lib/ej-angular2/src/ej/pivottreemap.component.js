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
require("syncfusion-javascript/Scripts/ej/web/ej.pivottreemap.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var PivotTreeMapComponent = (function (_super) {
    __extends(PivotTreeMapComponent, _super);
    function PivotTreeMapComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'PivotTreeMap', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.afterServiceInvoke_output = new core_2.EventEmitter();
        _this.beforeServiceInvoke_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.beforePivotEnginePopulate_output = new core_2.EventEmitter();
        _this.drillSuccess_output = new core_2.EventEmitter();
        _this.renderComplete_output = new core_2.EventEmitter();
        _this.renderFailure_output = new core_2.EventEmitter();
        _this.renderSuccess_output = new core_2.EventEmitter();
        return _this;
    }
    return PivotTreeMapComponent;
}(core_1.EJComponents));
PivotTreeMapComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-pivottreemap',
                template: ''
            },] },
];
/** @nocollapse */
PivotTreeMapComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
PivotTreeMapComponent.propDecorators = {
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'customObject_input': [{ type: core_2.Input, args: ['customObject',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'operationalMode_input': [{ type: core_2.Input, args: ['operationalMode',] },],
    'serviceMethodSettings_input': [{ type: core_2.Input, args: ['serviceMethodSettings',] },],
    'url_input': [{ type: core_2.Input, args: ['url',] },],
    'dataSource_data_input': [{ type: core_2.Input, args: ['dataSource.data',] },],
    'dataSource_cube_input': [{ type: core_2.Input, args: ['dataSource.cube',] },],
    'dataSource_sourceInfo_input': [{ type: core_2.Input, args: ['dataSource.sourceInfo',] },],
    'dataSource_providerName_input': [{ type: core_2.Input, args: ['dataSource.providerName',] },],
    'dataSource_catalog_input': [{ type: core_2.Input, args: ['dataSource.catalog',] },],
    'serviceMethodSettings_initialize_input': [{ type: core_2.Input, args: ['serviceMethodSettings.initialize',] },],
    'serviceMethodSettings_drillDown_input': [{ type: core_2.Input, args: ['serviceMethodSettings.drillDown',] },],
    'dataSource_columns_input': [{ type: core_2.Input, args: ['dataSource.columns',] },],
    'dataSource_rows_input': [{ type: core_2.Input, args: ['dataSource.rows',] },],
    'dataSource_values_input': [{ type: core_2.Input, args: ['dataSource.values',] },],
    'dataSource_filters_input': [{ type: core_2.Input, args: ['dataSource.filters',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'afterServiceInvoke_output': [{ type: core_2.Output, args: ['afterServiceInvoke',] },],
    'beforeServiceInvoke_output': [{ type: core_2.Output, args: ['beforeServiceInvoke',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'beforePivotEnginePopulate_output': [{ type: core_2.Output, args: ['beforePivotEnginePopulate',] },],
    'drillSuccess_output': [{ type: core_2.Output, args: ['drillSuccess',] },],
    'renderComplete_output': [{ type: core_2.Output, args: ['renderComplete',] },],
    'renderFailure_output': [{ type: core_2.Output, args: ['renderFailure',] },],
    'renderSuccess_output': [{ type: core_2.Output, args: ['renderSuccess',] },],
};
exports.PivotTreeMapComponent = PivotTreeMapComponent;
exports.EJ_PIVOTTREEMAP_COMPONENTS = [PivotTreeMapComponent
];
//# sourceMappingURL=pivottreemap.component.js.map
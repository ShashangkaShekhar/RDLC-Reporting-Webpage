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
require("syncfusion-javascript/Scripts/ej/web/ej.pivotschemadesigner.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var PivotSchemaDesignerComponent = (function (_super) {
    __extends(PivotSchemaDesignerComponent, _super);
    function PivotSchemaDesignerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'PivotSchemaDesigner', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.load_output = new core_2.EventEmitter();
        _this.afterServiceInvoke_output = new core_2.EventEmitter();
        _this.beforeServiceInvoke_output = new core_2.EventEmitter();
        _this.dragMove_output = new core_2.EventEmitter();
        return _this;
    }
    return PivotSchemaDesignerComponent;
}(core_1.EJComponents));
PivotSchemaDesignerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-pivotschemadesigner',
                template: ''
            },] },
];
/** @nocollapse */
PivotSchemaDesignerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
PivotSchemaDesignerComponent.propDecorators = {
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'customObject_input': [{ type: core_2.Input, args: ['customObject',] },],
    'enableWrapper_input': [{ type: core_2.Input, args: ['enableWrapper',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'olap_input': [{ type: core_2.Input, args: ['olap',] },],
    'enableDragDrop_input': [{ type: core_2.Input, args: ['enableDragDrop',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'pivotControl_input': [{ type: core_2.Input, args: ['pivotControl',] },],
    'serviceMethods_input': [{ type: core_2.Input, args: ['serviceMethods',] },],
    'url_input': [{ type: core_2.Input, args: ['url',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'layout_input': [{ type: core_2.Input, args: ['layout',] },],
    'olap_showKPI_input': [{ type: core_2.Input, args: ['olap.showKPI',] },],
    'olap_showNamedSets_input': [{ type: core_2.Input, args: ['olap.showNamedSets',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'afterServiceInvoke_output': [{ type: core_2.Output, args: ['afterServiceInvoke',] },],
    'beforeServiceInvoke_output': [{ type: core_2.Output, args: ['beforeServiceInvoke',] },],
    'dragMove_output': [{ type: core_2.Output, args: ['dragMove',] },],
};
exports.PivotSchemaDesignerComponent = PivotSchemaDesignerComponent;
exports.EJ_PIVOTSCHEMADESIGNER_COMPONENTS = [PivotSchemaDesignerComponent
];
//# sourceMappingURL=pivotschemadesigner.component.js.map
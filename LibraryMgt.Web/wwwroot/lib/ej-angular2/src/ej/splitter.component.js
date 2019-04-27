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
require("syncfusion-javascript/Scripts/ej/web/ej.splitter.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var SplitterComponent = (function (_super) {
    __extends(SplitterComponent, _super);
    function SplitterComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Splitter', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeExpandCollapse_output = new core_2.EventEmitter();
        _this.clickOnExpander_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.expandCollapse_output = new core_2.EventEmitter();
        _this.resize_output = new core_2.EventEmitter();
        return _this;
    }
    return SplitterComponent;
}(core_1.EJComponents));
SplitterComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-splitter',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
SplitterComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
SplitterComponent.propDecorators = {
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'animationSpeed_input': [{ type: core_2.Input, args: ['animationSpeed',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'expanderTemplate_input': [{ type: core_2.Input, args: ['expanderTemplate',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'properties_input': [{ type: core_2.Input, args: ['properties',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeExpandCollapse_output': [{ type: core_2.Output, args: ['beforeExpandCollapse',] },],
    'clickOnExpander_output': [{ type: core_2.Output, args: ['clickOnExpander',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'expandCollapse_output': [{ type: core_2.Output, args: ['expandCollapse',] },],
    'resize_output': [{ type: core_2.Output, args: ['resize',] },],
};
exports.SplitterComponent = SplitterComponent;
exports.EJ_SPLITTER_COMPONENTS = [SplitterComponent
];
//# sourceMappingURL=splitter.component.js.map
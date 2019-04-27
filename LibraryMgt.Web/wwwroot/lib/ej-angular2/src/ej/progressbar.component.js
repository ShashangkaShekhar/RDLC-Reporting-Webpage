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
require("syncfusion-javascript/Scripts/ej/web/ej.progressbar.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var ProgressBarComponent = (function (_super) {
    __extends(ProgressBarComponent, _super);
    function ProgressBarComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'ProgressBar', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.complete_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.start_output = new core_2.EventEmitter();
        return _this;
    }
    return ProgressBarComponent;
}(core_1.EJComponents));
ProgressBarComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-progressbar',
                template: ''
            },] },
];
/** @nocollapse */
ProgressBarComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ProgressBarComponent.propDecorators = {
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'maxValue_input': [{ type: core_2.Input, args: ['maxValue',] },],
    'minValue_input': [{ type: core_2.Input, args: ['minValue',] },],
    'percentage_input': [{ type: core_2.Input, args: ['percentage',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'text_input': [{ type: core_2.Input, args: ['text',] },],
    'value_input': [{ type: core_2.Input, args: ['value',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'complete_output': [{ type: core_2.Output, args: ['complete',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'start_output': [{ type: core_2.Output, args: ['start',] },],
};
exports.ProgressBarComponent = ProgressBarComponent;
exports.EJ_PROGRESSBAR_COMPONENTS = [ProgressBarComponent
];
//# sourceMappingURL=progressbar.component.js.map
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
require("syncfusion-javascript/Scripts/ej/web/ej.radialslider.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var RadialSliderComponent = (function (_super) {
    __extends(RadialSliderComponent, _super);
    function RadialSliderComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'RadialSlider', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.value_twoChange = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.mouseover_output = new core_2.EventEmitter();
        _this.slide_output = new core_2.EventEmitter();
        _this.start_output = new core_2.EventEmitter();
        _this.stop_output = new core_2.EventEmitter();
        return _this;
    }
    return RadialSliderComponent;
}(core_1.EJComponents));
RadialSliderComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-radialslider',
                template: ''
            },] },
];
/** @nocollapse */
RadialSliderComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
RadialSliderComponent.propDecorators = {
    'autoOpen_input': [{ type: core_2.Input, args: ['autoOpen',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enableRoundOff_input': [{ type: core_2.Input, args: ['enableRoundOff',] },],
    'endAngle_input': [{ type: core_2.Input, args: ['endAngle',] },],
    'inline_input': [{ type: core_2.Input, args: ['inline',] },],
    'innerCircleImageClass_input': [{ type: core_2.Input, args: ['innerCircleImageClass',] },],
    'innerCircleImageUrl_input': [{ type: core_2.Input, args: ['innerCircleImageUrl',] },],
    'labelSpace_input': [{ type: core_2.Input, args: ['labelSpace',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'radius_input': [{ type: core_2.Input, args: ['radius',] },],
    'showInnerCircle_input': [{ type: core_2.Input, args: ['showInnerCircle',] },],
    'startAngle_input': [{ type: core_2.Input, args: ['startAngle',] },],
    'strokeWidth_input': [{ type: core_2.Input, args: ['strokeWidth',] },],
    'ticks_input': [{ type: core_2.Input, args: ['ticks',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'value_two': [{ type: core_2.Input, args: ['value',] },],
    'value_twoChange': [{ type: core_2.Output, args: ['valueChange',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'mouseover_output': [{ type: core_2.Output, args: ['mouseover',] },],
    'slide_output': [{ type: core_2.Output, args: ['slide',] },],
    'start_output': [{ type: core_2.Output, args: ['start',] },],
    'stop_output': [{ type: core_2.Output, args: ['stop',] },],
};
exports.RadialSliderComponent = RadialSliderComponent;
exports.EJ_RADIALSLIDER_COMPONENTS = [RadialSliderComponent
];
//# sourceMappingURL=radialslider.component.js.map
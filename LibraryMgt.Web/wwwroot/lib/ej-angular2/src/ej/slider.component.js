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
require("syncfusion-javascript/Scripts/ej/web/ej.slider.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var SliderComponent = (function (_super) {
    __extends(SliderComponent, _super);
    function SliderComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Slider', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.value_twoChange = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.renderingTicks_output = new core_2.EventEmitter();
        _this.slide_output = new core_2.EventEmitter();
        _this.start_output = new core_2.EventEmitter();
        _this.stop_output = new core_2.EventEmitter();
        _this.tooltipChange_output = new core_2.EventEmitter();
        return _this;
    }
    return SliderComponent;
}(core_1.EJComponents));
SliderComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-slider',
                template: ''
            },] },
];
/** @nocollapse */
SliderComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
SliderComponent.propDecorators = {
    'allowMouseWheel_input': [{ type: core_2.Input, args: ['allowMouseWheel',] },],
    'animationSpeed_input': [{ type: core_2.Input, args: ['animationSpeed',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'incrementStep_input': [{ type: core_2.Input, args: ['incrementStep',] },],
    'largeStep_input': [{ type: core_2.Input, args: ['largeStep',] },],
    'maxValue_input': [{ type: core_2.Input, args: ['maxValue',] },],
    'minValue_input': [{ type: core_2.Input, args: ['minValue',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'showButtons_input': [{ type: core_2.Input, args: ['showButtons',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'showScale_input': [{ type: core_2.Input, args: ['showScale',] },],
    'showSmallTicks_input': [{ type: core_2.Input, args: ['showSmallTicks',] },],
    'showTooltip_input': [{ type: core_2.Input, args: ['showTooltip',] },],
    'sliderType_input': [{ type: core_2.Input, args: ['sliderType',] },],
    'smallStep_input': [{ type: core_2.Input, args: ['smallStep',] },],
    'values_input': [{ type: core_2.Input, args: ['values',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'value_two': [{ type: core_2.Input, args: ['value',] },],
    'value_twoChange': [{ type: core_2.Output, args: ['valueChange',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'renderingTicks_output': [{ type: core_2.Output, args: ['renderingTicks',] },],
    'slide_output': [{ type: core_2.Output, args: ['slide',] },],
    'start_output': [{ type: core_2.Output, args: ['start',] },],
    'stop_output': [{ type: core_2.Output, args: ['stop',] },],
    'tooltipChange_output': [{ type: core_2.Output, args: ['tooltipChange',] },],
};
exports.SliderComponent = SliderComponent;
exports.EJ_SLIDER_COMPONENTS = [SliderComponent
];
//# sourceMappingURL=slider.component.js.map
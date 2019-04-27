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
require("syncfusion-javascript/Scripts/ej/web/ej.rating.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var RatingComponent = (function (_super) {
    __extends(RatingComponent, _super);
    function RatingComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Rating', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.value_twoChange = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.click_output = new core_2.EventEmitter();
        _this.ejclick_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.mouseout_output = new core_2.EventEmitter();
        _this.mousemove_output = new core_2.EventEmitter();
        _this.mouseover_output = new core_2.EventEmitter();
        return _this;
    }
    return RatingComponent;
}(core_1.EJComponents));
RatingComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-rating',
                template: ''
            },] },
];
/** @nocollapse */
RatingComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
RatingComponent.propDecorators = {
    'allowReset_input': [{ type: core_2.Input, args: ['allowReset',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'incrementStep_input': [{ type: core_2.Input, args: ['incrementStep',] },],
    'maxValue_input': [{ type: core_2.Input, args: ['maxValue',] },],
    'minValue_input': [{ type: core_2.Input, args: ['minValue',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'precision_input': [{ type: core_2.Input, args: ['precision',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'shapeHeight_input': [{ type: core_2.Input, args: ['shapeHeight',] },],
    'shapeWidth_input': [{ type: core_2.Input, args: ['shapeWidth',] },],
    'showTooltip_input': [{ type: core_2.Input, args: ['showTooltip',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'value_two': [{ type: core_2.Input, args: ['value',] },],
    'value_twoChange': [{ type: core_2.Output, args: ['valueChange',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'click_output': [{ type: core_2.Output, args: ['click',] },],
    'ejclick_output': [{ type: core_2.Output, args: ['ejclick',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'mouseout_output': [{ type: core_2.Output, args: ['mouseout',] },],
    'mousemove_output': [{ type: core_2.Output, args: ['mousemove',] },],
    'mouseover_output': [{ type: core_2.Output, args: ['mouseover',] },],
};
exports.RatingComponent = RatingComponent;
exports.EJ_RATING_COMPONENTS = [RatingComponent
];
//# sourceMappingURL=rating.component.js.map
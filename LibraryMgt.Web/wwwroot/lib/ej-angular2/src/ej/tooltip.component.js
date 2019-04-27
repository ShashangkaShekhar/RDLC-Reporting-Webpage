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
require("syncfusion-javascript/Scripts/ej/web/ej.tooltip.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var TooltipComponent = (function (_super) {
    __extends(TooltipComponent, _super);
    function TooltipComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Tooltip', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeClose_output = new core_2.EventEmitter();
        _this.beforeOpen_output = new core_2.EventEmitter();
        _this.click_output = new core_2.EventEmitter();
        _this.ejclick_output = new core_2.EventEmitter();
        _this.close_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.hover_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.tracking_output = new core_2.EventEmitter();
        return _this;
    }
    return TooltipComponent;
}(core_1.EJComponents));
TooltipComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-tooltip',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
TooltipComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
TooltipComponent.propDecorators = {
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'animation_input': [{ type: core_2.Input, args: ['animation',] },],
    'associate_input': [{ type: core_2.Input, args: ['associate',] },],
    'autoCloseTimeout_input': [{ type: core_2.Input, args: ['autoCloseTimeout',] },],
    'closeMode_input': [{ type: core_2.Input, args: ['closeMode',] },],
    'collision_input': [{ type: core_2.Input, args: ['collision',] },],
    'containment_input': [{ type: core_2.Input, args: ['containment',] },],
    'content_input': [{ type: core_2.Input, args: ['content',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'isBalloon_input': [{ type: core_2.Input, args: ['isBalloon',] },],
    'position_input': [{ type: core_2.Input, args: ['position',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'showShadow_input': [{ type: core_2.Input, args: ['showShadow',] },],
    'target_input': [{ type: core_2.Input, args: ['target',] },],
    'tip_input': [{ type: core_2.Input, args: ['tip',] },],
    'title_input': [{ type: core_2.Input, args: ['title',] },],
    'trigger_input': [{ type: core_2.Input, args: ['trigger',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'animation_effect_input': [{ type: core_2.Input, args: ['animation.effect',] },],
    'animation_speed_input': [{ type: core_2.Input, args: ['animation.speed',] },],
    'position_target_input': [{ type: core_2.Input, args: ['position.target',] },],
    'position_target_horizontal_input': [{ type: core_2.Input, args: ['position.target.horizontal',] },],
    'position_target_vertical_input': [{ type: core_2.Input, args: ['position.target.vertical',] },],
    'position_stem_input': [{ type: core_2.Input, args: ['position.stem',] },],
    'position_stem_horizontal_input': [{ type: core_2.Input, args: ['position.stem.horizontal',] },],
    'position_stem_vertical_input': [{ type: core_2.Input, args: ['position.stem.vertical',] },],
    'tip_size_input': [{ type: core_2.Input, args: ['tip.size',] },],
    'tip_size_width_input': [{ type: core_2.Input, args: ['tip.size.width',] },],
    'tip_size_height_input': [{ type: core_2.Input, args: ['tip.size.height',] },],
    'tip_adjust_input': [{ type: core_2.Input, args: ['tip.adjust',] },],
    'tip_adjust_xValue_input': [{ type: core_2.Input, args: ['tip.adjust.xValue',] },],
    'tip_adjust_yValue_input': [{ type: core_2.Input, args: ['tip.adjust.yValue',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeClose_output': [{ type: core_2.Output, args: ['beforeClose',] },],
    'beforeOpen_output': [{ type: core_2.Output, args: ['beforeOpen',] },],
    'click_output': [{ type: core_2.Output, args: ['click',] },],
    'ejclick_output': [{ type: core_2.Output, args: ['ejclick',] },],
    'close_output': [{ type: core_2.Output, args: ['close',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'hover_output': [{ type: core_2.Output, args: ['hover',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
    'tracking_output': [{ type: core_2.Output, args: ['tracking',] },],
};
exports.TooltipComponent = TooltipComponent;
exports.EJ_TOOLTIP_COMPONENTS = [TooltipComponent
];
//# sourceMappingURL=tooltip.component.js.map
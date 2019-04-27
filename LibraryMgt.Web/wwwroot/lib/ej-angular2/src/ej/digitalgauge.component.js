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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.digitalgauge.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var DigitalGaugeItemDirective = (function (_super) {
    __extends(DigitalGaugeItemDirective, _super);
    function DigitalGaugeItemDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return DigitalGaugeItemDirective;
}(core_1.ComplexTagElement));
DigitalGaugeItemDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-digitalgauge-items>e-digitalgauge-item',
            },] },
];
/** @nocollapse */
DigitalGaugeItemDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DigitalGaugeComponent; }),] },] },
]; };
DigitalGaugeItemDirective.propDecorators = {
    'characterSettings': [{ type: core_2.Input, args: ['characterSettings',] },],
    'characterSettings_count': [{ type: core_2.Input, args: ['characterSettings.count',] },],
    'characterSettings_opacity': [{ type: core_2.Input, args: ['characterSettings.opacity',] },],
    'characterSettings_spacing': [{ type: core_2.Input, args: ['characterSettings.spacing',] },],
    'characterSettings_type': [{ type: core_2.Input, args: ['characterSettings.type',] },],
    'enableCustomFont': [{ type: core_2.Input, args: ['enableCustomFont',] },],
    'font': [{ type: core_2.Input, args: ['font',] },],
    'font_fontFamily': [{ type: core_2.Input, args: ['font.fontFamily',] },],
    'font_fontStyle': [{ type: core_2.Input, args: ['font.fontStyle',] },],
    'font_size': [{ type: core_2.Input, args: ['font.size',] },],
    'position': [{ type: core_2.Input, args: ['position',] },],
    'position_x': [{ type: core_2.Input, args: ['position.x',] },],
    'position_y': [{ type: core_2.Input, args: ['position.y',] },],
    'segmentSettings': [{ type: core_2.Input, args: ['segmentSettings',] },],
    'segmentSettings_color': [{ type: core_2.Input, args: ['segmentSettings.color',] },],
    'segmentSettings_gradient': [{ type: core_2.Input, args: ['segmentSettings.gradient',] },],
    'segmentSettings_length': [{ type: core_2.Input, args: ['segmentSettings.length',] },],
    'segmentSettings_opacity': [{ type: core_2.Input, args: ['segmentSettings.opacity',] },],
    'segmentSettings_spacing': [{ type: core_2.Input, args: ['segmentSettings.spacing',] },],
    'segmentSettings_width': [{ type: core_2.Input, args: ['segmentSettings.width',] },],
    'shadowBlur': [{ type: core_2.Input, args: ['shadowBlur',] },],
    'shadowColor': [{ type: core_2.Input, args: ['shadowColor',] },],
    'shadowOffsetX': [{ type: core_2.Input, args: ['shadowOffsetX',] },],
    'shadowOffsetY': [{ type: core_2.Input, args: ['shadowOffsetY',] },],
    'textAlign': [{ type: core_2.Input, args: ['textAlign',] },],
    'textColor': [{ type: core_2.Input, args: ['textColor',] },],
    'value': [{ type: core_2.Input, args: ['value',] },],
};
exports.DigitalGaugeItemDirective = DigitalGaugeItemDirective;
var DigitalGaugeItemsDirective = (function (_super) {
    __extends(DigitalGaugeItemsDirective, _super);
    function DigitalGaugeItemsDirective(widget) {
        return _super.call(this, 'items') || this;
    }
    return DigitalGaugeItemsDirective;
}(core_1.ArrayTagElement));
DigitalGaugeItemsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-digitalgauge>e-digitalgauge-items',
                queries: {
                    children: new core_2.ContentChildren(DigitalGaugeItemDirective)
                }
            },] },
];
/** @nocollapse */
DigitalGaugeItemsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DigitalGaugeComponent; }),] },] },
]; };
exports.DigitalGaugeItemsDirective = DigitalGaugeItemsDirective;
var DigitalGaugeComponent = (function (_super) {
    __extends(DigitalGaugeComponent, _super);
    function DigitalGaugeComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'DigitalGauge', el, cdRef, ['items'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.value_twoChange = new core_2.EventEmitter();
        _this.init_output = new core_2.EventEmitter();
        _this.itemRendering_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.renderComplete_output = new core_2.EventEmitter();
        return _this;
    }
    return DigitalGaugeComponent;
}(core_1.EJComponents));
DigitalGaugeComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-digitalgauge',
                template: ''
            },] },
];
/** @nocollapse */
DigitalGaugeComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
DigitalGaugeComponent.propDecorators = {
    'frame_input': [{ type: core_2.Input, args: ['frame',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'enableResize_input': [{ type: core_2.Input, args: ['enableResize',] },],
    'matrixSegmentData_input': [{ type: core_2.Input, args: ['matrixSegmentData',] },],
    'segmentData_input': [{ type: core_2.Input, args: ['segmentData',] },],
    'themes_input': [{ type: core_2.Input, args: ['themes',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'frame_backgroundImageUrl_input': [{ type: core_2.Input, args: ['frame.backgroundImageUrl',] },],
    'frame_innerWidth_input': [{ type: core_2.Input, args: ['frame.innerWidth',] },],
    'frame_outerWidth_input': [{ type: core_2.Input, args: ['frame.outerWidth',] },],
    'items_input': [{ type: core_2.Input, args: ['items',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'value_two': [{ type: core_2.Input, args: ['value',] },],
    'value_twoChange': [{ type: core_2.Output, args: ['valueChange',] },],
    'init_output': [{ type: core_2.Output, args: ['init',] },],
    'itemRendering_output': [{ type: core_2.Output, args: ['itemRendering',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'renderComplete_output': [{ type: core_2.Output, args: ['renderComplete',] },],
    'tag_items': [{ type: core_2.ContentChild, args: [DigitalGaugeItemsDirective,] },],
};
exports.DigitalGaugeComponent = DigitalGaugeComponent;
exports.EJ_DIGITALGAUGE_COMPONENTS = [DigitalGaugeComponent,
    DigitalGaugeItemsDirective, DigitalGaugeItemDirective];
//# sourceMappingURL=digitalgauge.component.js.map
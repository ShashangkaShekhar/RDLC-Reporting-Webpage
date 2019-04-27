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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.heatmap.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var HeatMapLegendLegendcolorMappingDirective = (function (_super) {
    __extends(HeatMapLegendLegendcolorMappingDirective, _super);
    function HeatMapLegendLegendcolorMappingDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return HeatMapLegendLegendcolorMappingDirective;
}(core_1.ComplexTagElement));
HeatMapLegendLegendcolorMappingDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-legendcolormappings>e-legendcolormapping',
            },] },
];
/** @nocollapse */
HeatMapLegendLegendcolorMappingDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return HeatMapLegendComponent; }),] },] },
]; };
HeatMapLegendLegendcolorMappingDirective.propDecorators = {
    'color': [{ type: core_2.Input, args: ['color',] },],
    'value': [{ type: core_2.Input, args: ['value',] },],
    'label': [{ type: core_2.Input, args: ['label',] },],
    'label_bold': [{ type: core_2.Input, args: ['label.bold',] },],
    'label_italic': [{ type: core_2.Input, args: ['label.italic',] },],
    'label_text': [{ type: core_2.Input, args: ['label.text',] },],
    'label_textDecoration': [{ type: core_2.Input, args: ['label.textDecoration',] },],
    'label_fontSize': [{ type: core_2.Input, args: ['label.fontSize',] },],
    'label_fontFamily': [{ type: core_2.Input, args: ['label.fontFamily',] },],
    'label_fontColor': [{ type: core_2.Input, args: ['label.fontColor',] },],
};
exports.HeatMapLegendLegendcolorMappingDirective = HeatMapLegendLegendcolorMappingDirective;
var HeatMapLegendLegendcolorMappingsDirective = (function (_super) {
    __extends(HeatMapLegendLegendcolorMappingsDirective, _super);
    function HeatMapLegendLegendcolorMappingsDirective(widget) {
        return _super.call(this, 'colorMappingCollection') || this;
    }
    return HeatMapLegendLegendcolorMappingsDirective;
}(core_1.ArrayTagElement));
HeatMapLegendLegendcolorMappingsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-heatmaplegend>e-legendcolormappings',
                queries: {
                    children: new core_2.ContentChildren(HeatMapLegendLegendcolorMappingDirective)
                }
            },] },
];
/** @nocollapse */
HeatMapLegendLegendcolorMappingsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return HeatMapLegendComponent; }),] },] },
]; };
exports.HeatMapLegendLegendcolorMappingsDirective = HeatMapLegendLegendcolorMappingsDirective;
var HeatMapLegendComponent = (function (_super) {
    __extends(HeatMapLegendComponent, _super);
    function HeatMapLegendComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'HeatMapLegend', el, cdRef, ['colorMappingCollection'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        return _this;
    }
    return HeatMapLegendComponent;
}(core_1.EJComponents));
HeatMapLegendComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-heatmaplegend',
                template: ''
            },] },
];
/** @nocollapse */
HeatMapLegendComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
HeatMapLegendComponent.propDecorators = {
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'showLabel_input': [{ type: core_2.Input, args: ['showLabel',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'legendMode_input': [{ type: core_2.Input, args: ['legendMode',] },],
    'colorMappingCollection_input': [{ type: core_2.Input, args: ['colorMappingCollection',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'tag_colorMappingCollection': [{ type: core_2.ContentChild, args: [HeatMapLegendLegendcolorMappingsDirective,] },],
};
exports.HeatMapLegendComponent = HeatMapLegendComponent;
exports.EJ_HEATMAPLEGEND_COMPONENTS = [HeatMapLegendComponent,
    HeatMapLegendLegendcolorMappingsDirective, HeatMapLegendLegendcolorMappingDirective];
//# sourceMappingURL=heatmaplegend.component.js.map
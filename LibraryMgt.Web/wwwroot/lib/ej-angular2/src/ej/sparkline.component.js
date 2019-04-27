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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.sparkline.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var SparklineComponent = (function (_super) {
    __extends(SparklineComponent, _super);
    function SparklineComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Sparkline', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.load_output = new core_2.EventEmitter();
        _this.loaded_output = new core_2.EventEmitter();
        _this.tooltipInitialize_output = new core_2.EventEmitter();
        _this.seriesRendering_output = new core_2.EventEmitter();
        _this.pointRegionMouseMove_output = new core_2.EventEmitter();
        _this.pointRegionMouseClick_output = new core_2.EventEmitter();
        _this.sparklineMouseMove_output = new core_2.EventEmitter();
        _this.sparklineMouseLeave_output = new core_2.EventEmitter();
        return _this;
    }
    return SparklineComponent;
}(core_1.EJComponents));
SparklineComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-sparkline',
                template: ''
            },] },
];
/** @nocollapse */
SparklineComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
SparklineComponent.propDecorators = {
    'background_input': [{ type: core_2.Input, args: ['background',] },],
    'fill_input': [{ type: core_2.Input, args: ['fill',] },],
    'stroke_input': [{ type: core_2.Input, args: ['stroke',] },],
    'border_input': [{ type: core_2.Input, args: ['border',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'opacity_input': [{ type: core_2.Input, args: ['opacity',] },],
    'highPointColor_input': [{ type: core_2.Input, args: ['highPointColor',] },],
    'lowPointColor_input': [{ type: core_2.Input, args: ['lowPointColor',] },],
    'startPointColor_input': [{ type: core_2.Input, args: ['startPointColor',] },],
    'endPointColor_input': [{ type: core_2.Input, args: ['endPointColor',] },],
    'negativePointColor_input': [{ type: core_2.Input, args: ['negativePointColor',] },],
    'rangeBandSettings_input': [{ type: core_2.Input, args: ['rangeBandSettings',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'palette_input': [{ type: core_2.Input, args: ['palette',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'enableCanvasRendering_input': [{ type: core_2.Input, args: ['enableCanvasRendering',] },],
    'enableGroupSeparator_input': [{ type: core_2.Input, args: ['enableGroupSeparator',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'xName_input': [{ type: core_2.Input, args: ['xName',] },],
    'yName_input': [{ type: core_2.Input, args: ['yName',] },],
    'padding_input': [{ type: core_2.Input, args: ['padding',] },],
    'type_input': [{ type: core_2.Input, args: ['type',] },],
    'theme_input': [{ type: core_2.Input, args: ['theme',] },],
    'tooltip_input': [{ type: core_2.Input, args: ['tooltip',] },],
    'markerSettings_input': [{ type: core_2.Input, args: ['markerSettings',] },],
    'size_input': [{ type: core_2.Input, args: ['size',] },],
    'axisLineSettings_input': [{ type: core_2.Input, args: ['axisLineSettings',] },],
    'border_color_input': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width_input': [{ type: core_2.Input, args: ['border.width',] },],
    'rangeBandSettings_startRange_input': [{ type: core_2.Input, args: ['rangeBandSettings.startRange',] },],
    'rangeBandSettings_endRange_input': [{ type: core_2.Input, args: ['rangeBandSettings.endRange',] },],
    'rangeBandSettings_opacity_input': [{ type: core_2.Input, args: ['rangeBandSettings.opacity',] },],
    'rangeBandSettings_color_input': [{ type: core_2.Input, args: ['rangeBandSettings.color',] },],
    'tooltip_visible_input': [{ type: core_2.Input, args: ['tooltip.visible',] },],
    'tooltip_fill_input': [{ type: core_2.Input, args: ['tooltip.fill',] },],
    'tooltip_template_input': [{ type: core_2.Input, args: ['tooltip.template',] },],
    'tooltip_border_input': [{ type: core_2.Input, args: ['tooltip.border',] },],
    'tooltip_border_color_input': [{ type: core_2.Input, args: ['tooltip.border.color',] },],
    'tooltip_border_width_input': [{ type: core_2.Input, args: ['tooltip.border.width',] },],
    'tooltip_font_input': [{ type: core_2.Input, args: ['tooltip.font',] },],
    'tooltip_font_color_input': [{ type: core_2.Input, args: ['tooltip.font.color',] },],
    'tooltip_font_fontFamily_input': [{ type: core_2.Input, args: ['tooltip.font.fontFamily',] },],
    'tooltip_font_fontStyle_input': [{ type: core_2.Input, args: ['tooltip.font.fontStyle',] },],
    'tooltip_font_fontWeight_input': [{ type: core_2.Input, args: ['tooltip.font.fontWeight',] },],
    'tooltip_font_opacity_input': [{ type: core_2.Input, args: ['tooltip.font.opacity',] },],
    'tooltip_font_size_input': [{ type: core_2.Input, args: ['tooltip.font.size',] },],
    'markerSettings_opacity_input': [{ type: core_2.Input, args: ['markerSettings.opacity',] },],
    'markerSettings_visible_input': [{ type: core_2.Input, args: ['markerSettings.visible',] },],
    'markerSettings_width_input': [{ type: core_2.Input, args: ['markerSettings.width',] },],
    'markerSettings_fill_input': [{ type: core_2.Input, args: ['markerSettings.fill',] },],
    'markerSettings_border_input': [{ type: core_2.Input, args: ['markerSettings.border',] },],
    'markerSettings_border_color_input': [{ type: core_2.Input, args: ['markerSettings.border.color',] },],
    'markerSettings_border_opacity_input': [{ type: core_2.Input, args: ['markerSettings.border.opacity',] },],
    'markerSettings_border_width_input': [{ type: core_2.Input, args: ['markerSettings.border.width',] },],
    'size_height_input': [{ type: core_2.Input, args: ['size.height',] },],
    'size_width_input': [{ type: core_2.Input, args: ['size.width',] },],
    'axisLineSettings_visible_input': [{ type: core_2.Input, args: ['axisLineSettings.visible',] },],
    'axisLineSettings_color_input': [{ type: core_2.Input, args: ['axisLineSettings.color',] },],
    'axisLineSettings_width_input': [{ type: core_2.Input, args: ['axisLineSettings.width',] },],
    'axisLineSettings_dashArray_input': [{ type: core_2.Input, args: ['axisLineSettings.dashArray',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'loaded_output': [{ type: core_2.Output, args: ['loaded',] },],
    'tooltipInitialize_output': [{ type: core_2.Output, args: ['tooltipInitialize',] },],
    'seriesRendering_output': [{ type: core_2.Output, args: ['seriesRendering',] },],
    'pointRegionMouseMove_output': [{ type: core_2.Output, args: ['pointRegionMouseMove',] },],
    'pointRegionMouseClick_output': [{ type: core_2.Output, args: ['pointRegionMouseClick',] },],
    'sparklineMouseMove_output': [{ type: core_2.Output, args: ['sparklineMouseMove',] },],
    'sparklineMouseLeave_output': [{ type: core_2.Output, args: ['sparklineMouseLeave',] },],
};
exports.SparklineComponent = SparklineComponent;
exports.EJ_SPARKLINE_COMPONENTS = [SparklineComponent
];
//# sourceMappingURL=sparkline.component.js.map
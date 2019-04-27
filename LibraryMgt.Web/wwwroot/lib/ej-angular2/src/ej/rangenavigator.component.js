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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.rangenavigator.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var RangeNavigatorComponent = (function (_super) {
    __extends(RangeNavigatorComponent, _super);
    function RangeNavigatorComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'RangeNavigator', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.load_output = new core_2.EventEmitter();
        _this.loaded_output = new core_2.EventEmitter();
        _this.rangeChanged_output = new core_2.EventEmitter();
        _this.scrollChanged_output = new core_2.EventEmitter();
        _this.scrollStart_output = new core_2.EventEmitter();
        _this.selectedRangeStart_output = new core_2.EventEmitter();
        _this.selectedRangeEnd_output = new core_2.EventEmitter();
        _this.scrollEnd_output = new core_2.EventEmitter();
        return _this;
    }
    return RangeNavigatorComponent;
}(core_1.EJComponents));
RangeNavigatorComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-rangenavigator',
                template: ''
            },] },
];
/** @nocollapse */
RangeNavigatorComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
RangeNavigatorComponent.propDecorators = {
    'allowSnapping_input': [{ type: core_2.Input, args: ['allowSnapping',] },],
    'border_input': [{ type: core_2.Input, args: ['border',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'enableDeferredUpdate_input': [{ type: core_2.Input, args: ['enableDeferredUpdate',] },],
    'enableScrollbar_input': [{ type: core_2.Input, args: ['enableScrollbar',] },],
    'enableAutoResizing_input': [{ type: core_2.Input, args: ['enableAutoResizing',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'labelSettings_input': [{ type: core_2.Input, args: ['labelSettings',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'navigatorStyleSettings_input': [{ type: core_2.Input, args: ['navigatorStyleSettings',] },],
    'padding_input': [{ type: core_2.Input, args: ['padding',] },],
    'rangePadding_input': [{ type: core_2.Input, args: ['rangePadding',] },],
    'rangeSettings_input': [{ type: core_2.Input, args: ['rangeSettings',] },],
    'selectedData_input': [{ type: core_2.Input, args: ['selectedData',] },],
    'selectedRangeSettings_input': [{ type: core_2.Input, args: ['selectedRangeSettings',] },],
    'scrollRangeSettings_input': [{ type: core_2.Input, args: ['scrollRangeSettings',] },],
    'sizeSettings_input': [{ type: core_2.Input, args: ['sizeSettings',] },],
    'theme_input': [{ type: core_2.Input, args: ['theme',] },],
    'tooltipSettings_input': [{ type: core_2.Input, args: ['tooltipSettings',] },],
    'valueAxisSettings_input': [{ type: core_2.Input, args: ['valueAxisSettings',] },],
    'valueType_input': [{ type: core_2.Input, args: ['valueType',] },],
    'xName_input': [{ type: core_2.Input, args: ['xName',] },],
    'yName_input': [{ type: core_2.Input, args: ['yName',] },],
    'border_color_input': [{ type: core_2.Input, args: ['border.color',] },],
    'border_opacity_input': [{ type: core_2.Input, args: ['border.opacity',] },],
    'border_width_input': [{ type: core_2.Input, args: ['border.width',] },],
    'labelSettings_higherLevel_input': [{ type: core_2.Input, args: ['labelSettings.higherLevel',] },],
    'labelSettings_higherLevel_border_input': [{ type: core_2.Input, args: ['labelSettings.higherLevel.border',] },],
    'labelSettings_higherLevel_fill_input': [{ type: core_2.Input, args: ['labelSettings.higherLevel.fill',] },],
    'labelSettings_higherLevel_gridLineStyle_input': [{ type: core_2.Input, args: ['labelSettings.higherLevel.gridLineStyle',] },],
    'labelSettings_higherLevel_intervalType_input': [{ type: core_2.Input, args: ['labelSettings.higherLevel.intervalType',] },],
    'labelSettings_higherLevel_labelPlacement_input': [{ type: core_2.Input, args: ['labelSettings.higherLevel.labelPlacement',] },],
    'labelSettings_higherLevel_position_input': [{ type: core_2.Input, args: ['labelSettings.higherLevel.position',] },],
    'labelSettings_higherLevel_style_input': [{ type: core_2.Input, args: ['labelSettings.higherLevel.style',] },],
    'labelSettings_higherLevel_visible_input': [{ type: core_2.Input, args: ['labelSettings.higherLevel.visible',] },],
    'labelSettings_lowerLevel_input': [{ type: core_2.Input, args: ['labelSettings.lowerLevel',] },],
    'labelSettings_lowerLevel_border_input': [{ type: core_2.Input, args: ['labelSettings.lowerLevel.border',] },],
    'labelSettings_lowerLevel_fill_input': [{ type: core_2.Input, args: ['labelSettings.lowerLevel.fill',] },],
    'labelSettings_lowerLevel_gridLineStyle_input': [{ type: core_2.Input, args: ['labelSettings.lowerLevel.gridLineStyle',] },],
    'labelSettings_lowerLevel_intervalType_input': [{ type: core_2.Input, args: ['labelSettings.lowerLevel.intervalType',] },],
    'labelSettings_lowerLevel_labelPlacement_input': [{ type: core_2.Input, args: ['labelSettings.lowerLevel.labelPlacement',] },],
    'labelSettings_lowerLevel_position_input': [{ type: core_2.Input, args: ['labelSettings.lowerLevel.position',] },],
    'labelSettings_lowerLevel_style_input': [{ type: core_2.Input, args: ['labelSettings.lowerLevel.style',] },],
    'labelSettings_lowerLevel_visible_input': [{ type: core_2.Input, args: ['labelSettings.lowerLevel.visible',] },],
    'labelSettings_style_input': [{ type: core_2.Input, args: ['labelSettings.style',] },],
    'labelSettings_style_font_input': [{ type: core_2.Input, args: ['labelSettings.style.font',] },],
    'labelSettings_style_horizontalAlignment_input': [{ type: core_2.Input, args: ['labelSettings.style.horizontalAlignment',] },],
    'navigatorStyleSettings_background_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.background',] },],
    'navigatorStyleSettings_border_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.border',] },],
    'navigatorStyleSettings_border_color_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.border.color',] },],
    'navigatorStyleSettings_border_dashArray_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.border.dashArray',] },],
    'navigatorStyleSettings_border_width_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.border.width',] },],
    'navigatorStyleSettings_leftThumbTemplate_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.leftThumbTemplate',] },],
    'navigatorStyleSettings_majorGridLineStyle_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.majorGridLineStyle',] },],
    'navigatorStyleSettings_majorGridLineStyle_color_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.majorGridLineStyle.color',] },],
    'navigatorStyleSettings_majorGridLineStyle_visible_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.majorGridLineStyle.visible',] },],
    'navigatorStyleSettings_minorGridLineStyle_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.minorGridLineStyle',] },],
    'navigatorStyleSettings_minorGridLineStyle_color_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.minorGridLineStyle.color',] },],
    'navigatorStyleSettings_minorGridLineStyle_visible_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.minorGridLineStyle.visible',] },],
    'navigatorStyleSettings_opacity_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.opacity',] },],
    'navigatorStyleSettings_rightThumbTemplate_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.rightThumbTemplate',] },],
    'navigatorStyleSettings_selectedRegionColor_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.selectedRegionColor',] },],
    'navigatorStyleSettings_selectedRegionOpacity_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.selectedRegionOpacity',] },],
    'navigatorStyleSettings_thumbColor_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.thumbColor',] },],
    'navigatorStyleSettings_thumbRadius_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.thumbRadius',] },],
    'navigatorStyleSettings_thumbStroke_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.thumbStroke',] },],
    'navigatorStyleSettings_unselectedRegionColor_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.unselectedRegionColor',] },],
    'navigatorStyleSettings_unselectedRegionOpacity_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.unselectedRegionOpacity',] },],
    'navigatorStyleSettings_highlightSettings_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.highlightSettings',] },],
    'navigatorStyleSettings_highlightSettings_enable_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.highlightSettings.enable',] },],
    'navigatorStyleSettings_highlightSettings_color_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.highlightSettings.color',] },],
    'navigatorStyleSettings_highlightSettings_opacity_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.highlightSettings.opacity',] },],
    'navigatorStyleSettings_highlightSettings_border_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.highlightSettings.border',] },],
    'navigatorStyleSettings_selectionSettings_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.selectionSettings',] },],
    'navigatorStyleSettings_selectionSettings_enable_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.selectionSettings.enable',] },],
    'navigatorStyleSettings_selectionSettings_color_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.selectionSettings.color',] },],
    'navigatorStyleSettings_selectionSettings_opacity_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.selectionSettings.opacity',] },],
    'navigatorStyleSettings_selectionSettings_border_input': [{ type: core_2.Input, args: ['navigatorStyleSettings.selectionSettings.border',] },],
    'rangeSettings_end_input': [{ type: core_2.Input, args: ['rangeSettings.end',] },],
    'rangeSettings_start_input': [{ type: core_2.Input, args: ['rangeSettings.start',] },],
    'selectedRangeSettings_end_input': [{ type: core_2.Input, args: ['selectedRangeSettings.end',] },],
    'selectedRangeSettings_start_input': [{ type: core_2.Input, args: ['selectedRangeSettings.start',] },],
    'scrollRangeSettings_end_input': [{ type: core_2.Input, args: ['scrollRangeSettings.end',] },],
    'scrollRangeSettings_start_input': [{ type: core_2.Input, args: ['scrollRangeSettings.start',] },],
    'sizeSettings_height_input': [{ type: core_2.Input, args: ['sizeSettings.height',] },],
    'sizeSettings_width_input': [{ type: core_2.Input, args: ['sizeSettings.width',] },],
    'tooltipSettings_backgroundColor_input': [{ type: core_2.Input, args: ['tooltipSettings.backgroundColor',] },],
    'tooltipSettings_font_input': [{ type: core_2.Input, args: ['tooltipSettings.font',] },],
    'tooltipSettings_font_color_input': [{ type: core_2.Input, args: ['tooltipSettings.font.color',] },],
    'tooltipSettings_font_family_input': [{ type: core_2.Input, args: ['tooltipSettings.font.family',] },],
    'tooltipSettings_font_fontStyle_input': [{ type: core_2.Input, args: ['tooltipSettings.font.fontStyle',] },],
    'tooltipSettings_font_opacity_input': [{ type: core_2.Input, args: ['tooltipSettings.font.opacity',] },],
    'tooltipSettings_font_size_input': [{ type: core_2.Input, args: ['tooltipSettings.font.size',] },],
    'tooltipSettings_font_weight_input': [{ type: core_2.Input, args: ['tooltipSettings.font.weight',] },],
    'tooltipSettings_labelFormat_input': [{ type: core_2.Input, args: ['tooltipSettings.labelFormat',] },],
    'tooltipSettings_tooltipDisplayMode_input': [{ type: core_2.Input, args: ['tooltipSettings.tooltipDisplayMode',] },],
    'tooltipSettings_visible_input': [{ type: core_2.Input, args: ['tooltipSettings.visible',] },],
    'valueAxisSettings_axisLine_input': [{ type: core_2.Input, args: ['valueAxisSettings.axisLine',] },],
    'valueAxisSettings_axisLine_visible_input': [{ type: core_2.Input, args: ['valueAxisSettings.axisLine.visible',] },],
    'valueAxisSettings_font_input': [{ type: core_2.Input, args: ['valueAxisSettings.font',] },],
    'valueAxisSettings_font_size_input': [{ type: core_2.Input, args: ['valueAxisSettings.font.size',] },],
    'valueAxisSettings_majorGridLines_input': [{ type: core_2.Input, args: ['valueAxisSettings.majorGridLines',] },],
    'valueAxisSettings_majorGridLines_visible_input': [{ type: core_2.Input, args: ['valueAxisSettings.majorGridLines.visible',] },],
    'valueAxisSettings_majorTickLines_input': [{ type: core_2.Input, args: ['valueAxisSettings.majorTickLines',] },],
    'valueAxisSettings_majorTickLines_size_input': [{ type: core_2.Input, args: ['valueAxisSettings.majorTickLines.size',] },],
    'valueAxisSettings_majorTickLines_visible_input': [{ type: core_2.Input, args: ['valueAxisSettings.majorTickLines.visible',] },],
    'valueAxisSettings_majorTickLines_width_input': [{ type: core_2.Input, args: ['valueAxisSettings.majorTickLines.width',] },],
    'valueAxisSettings_range_input': [{ type: core_2.Input, args: ['valueAxisSettings.range',] },],
    'valueAxisSettings_range_min_input': [{ type: core_2.Input, args: ['valueAxisSettings.range.min',] },],
    'valueAxisSettings_range_max_input': [{ type: core_2.Input, args: ['valueAxisSettings.range.max',] },],
    'valueAxisSettings_range_interval_input': [{ type: core_2.Input, args: ['valueAxisSettings.range.interval',] },],
    'valueAxisSettings_rangePadding_input': [{ type: core_2.Input, args: ['valueAxisSettings.rangePadding',] },],
    'valueAxisSettings_visible_input': [{ type: core_2.Input, args: ['valueAxisSettings.visible',] },],
    'series_input': [{ type: core_2.Input, args: ['series',] },],
    'seriesSettings_input': [{ type: core_2.Input, args: ['seriesSettings',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'loaded_output': [{ type: core_2.Output, args: ['loaded',] },],
    'rangeChanged_output': [{ type: core_2.Output, args: ['rangeChanged',] },],
    'scrollChanged_output': [{ type: core_2.Output, args: ['scrollChanged',] },],
    'scrollStart_output': [{ type: core_2.Output, args: ['scrollStart',] },],
    'selectedRangeStart_output': [{ type: core_2.Output, args: ['selectedRangeStart',] },],
    'selectedRangeEnd_output': [{ type: core_2.Output, args: ['selectedRangeEnd',] },],
    'scrollEnd_output': [{ type: core_2.Output, args: ['scrollEnd',] },],
};
exports.RangeNavigatorComponent = RangeNavigatorComponent;
exports.EJ_RANGENAVIGATOR_COMPONENTS = [RangeNavigatorComponent
];
//# sourceMappingURL=rangenavigator.component.js.map
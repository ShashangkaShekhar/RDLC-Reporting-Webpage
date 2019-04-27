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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.sunburstchart.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var SunburstChartComponent = (function (_super) {
    __extends(SunburstChartComponent, _super);
    function SunburstChartComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'SunburstChart', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.load_output = new core_2.EventEmitter();
        _this.preRender_output = new core_2.EventEmitter();
        _this.loaded_output = new core_2.EventEmitter();
        _this.dataLabelRendering_output = new core_2.EventEmitter();
        _this.segmentRendering_output = new core_2.EventEmitter();
        _this.titleRendering_output = new core_2.EventEmitter();
        _this.tooltipInitialize_output = new core_2.EventEmitter();
        _this.pointRegionClick_output = new core_2.EventEmitter();
        _this.pointRegionMouseMove_output = new core_2.EventEmitter();
        _this.drillDownClick_output = new core_2.EventEmitter();
        _this.drillDownBack_output = new core_2.EventEmitter();
        _this.drillDownReset_output = new core_2.EventEmitter();
        return _this;
    }
    return SunburstChartComponent;
}(core_1.EJComponents));
SunburstChartComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-sunburstchart',
                template: ''
            },] },
];
/** @nocollapse */
SunburstChartComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
SunburstChartComponent.propDecorators = {
    'background_input': [{ type: core_2.Input, args: ['background',] },],
    'valueMemberPath_input': [{ type: core_2.Input, args: ['valueMemberPath',] },],
    'border_input': [{ type: core_2.Input, args: ['border',] },],
    'segmentBorder_input': [{ type: core_2.Input, args: ['segmentBorder',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'palette_input': [{ type: core_2.Input, args: ['palette',] },],
    'parentNode_input': [{ type: core_2.Input, args: ['parentNode',] },],
    'xName_input': [{ type: core_2.Input, args: ['xName',] },],
    'yName_input': [{ type: core_2.Input, args: ['yName',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'size_input': [{ type: core_2.Input, args: ['size',] },],
    'visible_input': [{ type: core_2.Input, args: ['visible',] },],
    'tooltip_input': [{ type: core_2.Input, args: ['tooltip',] },],
    'points_input': [{ type: core_2.Input, args: ['points',] },],
    'startAngle_input': [{ type: core_2.Input, args: ['startAngle',] },],
    'endAngle_input': [{ type: core_2.Input, args: ['endAngle',] },],
    'radius_input': [{ type: core_2.Input, args: ['radius',] },],
    'innerRadius_input': [{ type: core_2.Input, args: ['innerRadius',] },],
    'dataLabelSettings_input': [{ type: core_2.Input, args: ['dataLabelSettings',] },],
    'title_input': [{ type: core_2.Input, args: ['title',] },],
    'highlightSettings_input': [{ type: core_2.Input, args: ['highlightSettings',] },],
    'selectionSettings_input': [{ type: core_2.Input, args: ['selectionSettings',] },],
    'legend_input': [{ type: core_2.Input, args: ['legend',] },],
    'theme_input': [{ type: core_2.Input, args: ['theme',] },],
    'margin_input': [{ type: core_2.Input, args: ['margin',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'opacity_input': [{ type: core_2.Input, args: ['opacity',] },],
    'zoomSettings_input': [{ type: core_2.Input, args: ['zoomSettings',] },],
    'animationType_input': [{ type: core_2.Input, args: ['animationType',] },],
    'border_color_input': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width_input': [{ type: core_2.Input, args: ['border.width',] },],
    'segmentBorder_color_input': [{ type: core_2.Input, args: ['segmentBorder.color',] },],
    'segmentBorder_width_input': [{ type: core_2.Input, args: ['segmentBorder.width',] },],
    'size_height_input': [{ type: core_2.Input, args: ['size.height',] },],
    'size_width_input': [{ type: core_2.Input, args: ['size.width',] },],
    'tooltip_visible_input': [{ type: core_2.Input, args: ['tooltip.visible',] },],
    'tooltip_border_input': [{ type: core_2.Input, args: ['tooltip.border',] },],
    'tooltip_border_color_input': [{ type: core_2.Input, args: ['tooltip.border.color',] },],
    'tooltip_border_width_input': [{ type: core_2.Input, args: ['tooltip.border.width',] },],
    'tooltip_fill_input': [{ type: core_2.Input, args: ['tooltip.fill',] },],
    'tooltip_font_input': [{ type: core_2.Input, args: ['tooltip.font',] },],
    'tooltip_font_color_input': [{ type: core_2.Input, args: ['tooltip.font.color',] },],
    'tooltip_font_fontFamily_input': [{ type: core_2.Input, args: ['tooltip.font.fontFamily',] },],
    'tooltip_font_fontStyle_input': [{ type: core_2.Input, args: ['tooltip.font.fontStyle',] },],
    'tooltip_font_fontWeight_input': [{ type: core_2.Input, args: ['tooltip.font.fontWeight',] },],
    'tooltip_font_opacity_input': [{ type: core_2.Input, args: ['tooltip.font.opacity',] },],
    'tooltip_font_size_input': [{ type: core_2.Input, args: ['tooltip.font.size',] },],
    'tooltip_template_input': [{ type: core_2.Input, args: ['tooltip.template',] },],
    'tooltip_format_input': [{ type: core_2.Input, args: ['tooltip.format',] },],
    'tooltip_opacity_input': [{ type: core_2.Input, args: ['tooltip.opacity',] },],
    'points_x_input': [{ type: core_2.Input, args: ['points.x',] },],
    'points_y_input': [{ type: core_2.Input, args: ['points.y',] },],
    'points_text_input': [{ type: core_2.Input, args: ['points.text',] },],
    'points_fill_input': [{ type: core_2.Input, args: ['points.fill',] },],
    'dataLabelSettings_visible_input': [{ type: core_2.Input, args: ['dataLabelSettings.visible',] },],
    'dataLabelSettings_labelRotationMode_input': [{ type: core_2.Input, args: ['dataLabelSettings.labelRotationMode',] },],
    'dataLabelSettings_font_input': [{ type: core_2.Input, args: ['dataLabelSettings.font',] },],
    'dataLabelSettings_font_fontFamily_input': [{ type: core_2.Input, args: ['dataLabelSettings.font.fontFamily',] },],
    'dataLabelSettings_font_fontStyle_input': [{ type: core_2.Input, args: ['dataLabelSettings.font.fontStyle',] },],
    'dataLabelSettings_font_fontWeight_input': [{ type: core_2.Input, args: ['dataLabelSettings.font.fontWeight',] },],
    'dataLabelSettings_font_opacity_input': [{ type: core_2.Input, args: ['dataLabelSettings.font.opacity',] },],
    'dataLabelSettings_font_color_input': [{ type: core_2.Input, args: ['dataLabelSettings.font.color',] },],
    'dataLabelSettings_font_size_input': [{ type: core_2.Input, args: ['dataLabelSettings.font.size',] },],
    'dataLabelSettings_template_input': [{ type: core_2.Input, args: ['dataLabelSettings.template',] },],
    'dataLabelSettings_fill_input': [{ type: core_2.Input, args: ['dataLabelSettings.fill',] },],
    'dataLabelSettings_labelOverflowMode_input': [{ type: core_2.Input, args: ['dataLabelSettings.labelOverflowMode',] },],
    'title_text_input': [{ type: core_2.Input, args: ['title.text',] },],
    'title_visible_input': [{ type: core_2.Input, args: ['title.visible',] },],
    'title_textAlignment_input': [{ type: core_2.Input, args: ['title.textAlignment',] },],
    'title_font_input': [{ type: core_2.Input, args: ['title.font',] },],
    'title_font_fontFamily_input': [{ type: core_2.Input, args: ['title.font.fontFamily',] },],
    'title_font_fontStyle_input': [{ type: core_2.Input, args: ['title.font.fontStyle',] },],
    'title_font_fontWeight_input': [{ type: core_2.Input, args: ['title.font.fontWeight',] },],
    'title_font_opacity_input': [{ type: core_2.Input, args: ['title.font.opacity',] },],
    'title_font_size_input': [{ type: core_2.Input, args: ['title.font.size',] },],
    'title_subtitle_input': [{ type: core_2.Input, args: ['title.subtitle',] },],
    'title_subtitle_text_input': [{ type: core_2.Input, args: ['title.subtitle.text',] },],
    'title_subtitle_visible_input': [{ type: core_2.Input, args: ['title.subtitle.visible',] },],
    'title_subtitle_textAlignment_input': [{ type: core_2.Input, args: ['title.subtitle.textAlignment',] },],
    'title_subtitle_font_input': [{ type: core_2.Input, args: ['title.subtitle.font',] },],
    'highlightSettings_enable_input': [{ type: core_2.Input, args: ['highlightSettings.enable',] },],
    'highlightSettings_mode_input': [{ type: core_2.Input, args: ['highlightSettings.mode',] },],
    'highlightSettings_color_input': [{ type: core_2.Input, args: ['highlightSettings.color',] },],
    'highlightSettings_opacity_input': [{ type: core_2.Input, args: ['highlightSettings.opacity',] },],
    'highlightSettings_type_input': [{ type: core_2.Input, args: ['highlightSettings.type',] },],
    'selectionSettings_enable_input': [{ type: core_2.Input, args: ['selectionSettings.enable',] },],
    'selectionSettings_mode_input': [{ type: core_2.Input, args: ['selectionSettings.mode',] },],
    'selectionSettings_color_input': [{ type: core_2.Input, args: ['selectionSettings.color',] },],
    'selectionSettings_opacity_input': [{ type: core_2.Input, args: ['selectionSettings.opacity',] },],
    'selectionSettings_type_input': [{ type: core_2.Input, args: ['selectionSettings.type',] },],
    'legend_visible_input': [{ type: core_2.Input, args: ['legend.visible',] },],
    'legend_clickAction_input': [{ type: core_2.Input, args: ['legend.clickAction',] },],
    'legend_alignment_input': [{ type: core_2.Input, args: ['legend.alignment',] },],
    'legend_border_input': [{ type: core_2.Input, args: ['legend.border',] },],
    'legend_border_color_input': [{ type: core_2.Input, args: ['legend.border.color',] },],
    'legend_border_width_input': [{ type: core_2.Input, args: ['legend.border.width',] },],
    'legend_columnCount_input': [{ type: core_2.Input, args: ['legend.columnCount',] },],
    'legend_rowCount_input': [{ type: core_2.Input, args: ['legend.rowCount',] },],
    'legend_font_input': [{ type: core_2.Input, args: ['legend.font',] },],
    'legend_font_fontFamily_input': [{ type: core_2.Input, args: ['legend.font.fontFamily',] },],
    'legend_font_fontStyle_input': [{ type: core_2.Input, args: ['legend.font.fontStyle',] },],
    'legend_font_fontWeight_input': [{ type: core_2.Input, args: ['legend.font.fontWeight',] },],
    'legend_font_size_input': [{ type: core_2.Input, args: ['legend.font.size',] },],
    'legend_itemPadding_input': [{ type: core_2.Input, args: ['legend.itemPadding',] },],
    'legend_itemStyle_input': [{ type: core_2.Input, args: ['legend.itemStyle',] },],
    'legend_itemStyle_height_input': [{ type: core_2.Input, args: ['legend.itemStyle.height',] },],
    'legend_itemStyle_width_input': [{ type: core_2.Input, args: ['legend.itemStyle.width',] },],
    'legend_location_input': [{ type: core_2.Input, args: ['legend.location',] },],
    'legend_location_x_input': [{ type: core_2.Input, args: ['legend.location.x',] },],
    'legend_location_y_input': [{ type: core_2.Input, args: ['legend.location.y',] },],
    'legend_position_input': [{ type: core_2.Input, args: ['legend.position',] },],
    'legend_shape_input': [{ type: core_2.Input, args: ['legend.shape',] },],
    'legend_size_input': [{ type: core_2.Input, args: ['legend.size',] },],
    'legend_size_height_input': [{ type: core_2.Input, args: ['legend.size.height',] },],
    'legend_size_width_input': [{ type: core_2.Input, args: ['legend.size.width',] },],
    'legend_title_input': [{ type: core_2.Input, args: ['legend.title',] },],
    'legend_title_font_input': [{ type: core_2.Input, args: ['legend.title.font',] },],
    'legend_title_visible_input': [{ type: core_2.Input, args: ['legend.title.visible',] },],
    'legend_title_text_input': [{ type: core_2.Input, args: ['legend.title.text',] },],
    'legend_title_textAlignment_input': [{ type: core_2.Input, args: ['legend.title.textAlignment',] },],
    'margin_left_input': [{ type: core_2.Input, args: ['margin.left',] },],
    'margin_right_input': [{ type: core_2.Input, args: ['margin.right',] },],
    'margin_top_input': [{ type: core_2.Input, args: ['margin.top',] },],
    'margin_bottom_input': [{ type: core_2.Input, args: ['margin.bottom',] },],
    'zoomSettings_enable_input': [{ type: core_2.Input, args: ['zoomSettings.enable',] },],
    'zoomSettings_toolbarHorizontalAlignment_input': [{ type: core_2.Input, args: ['zoomSettings.toolbarHorizontalAlignment',] },],
    'zoomSettings_toolbarVerticalAlignment_input': [{ type: core_2.Input, args: ['zoomSettings.toolbarVerticalAlignment',] },],
    'levels_input': [{ type: core_2.Input, args: ['levels',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'preRender_output': [{ type: core_2.Output, args: ['preRender',] },],
    'loaded_output': [{ type: core_2.Output, args: ['loaded',] },],
    'dataLabelRendering_output': [{ type: core_2.Output, args: ['dataLabelRendering',] },],
    'segmentRendering_output': [{ type: core_2.Output, args: ['segmentRendering',] },],
    'titleRendering_output': [{ type: core_2.Output, args: ['titleRendering',] },],
    'tooltipInitialize_output': [{ type: core_2.Output, args: ['tooltipInitialize',] },],
    'pointRegionClick_output': [{ type: core_2.Output, args: ['pointRegionClick',] },],
    'pointRegionMouseMove_output': [{ type: core_2.Output, args: ['pointRegionMouseMove',] },],
    'drillDownClick_output': [{ type: core_2.Output, args: ['drillDownClick',] },],
    'drillDownBack_output': [{ type: core_2.Output, args: ['drillDownBack',] },],
    'drillDownReset_output': [{ type: core_2.Output, args: ['drillDownReset',] },],
};
exports.SunburstChartComponent = SunburstChartComponent;
exports.EJ_SUNBURSTCHART_COMPONENTS = [SunburstChartComponent
];
//# sourceMappingURL=sunburstchart.component.js.map
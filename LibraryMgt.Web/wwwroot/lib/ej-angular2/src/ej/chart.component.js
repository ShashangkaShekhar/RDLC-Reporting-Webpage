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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.chart.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var ChartTrendlineDirective = (function (_super) {
    __extends(ChartTrendlineDirective, _super);
    function ChartTrendlineDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return ChartTrendlineDirective;
}(core_1.ComplexTagElement));
ChartTrendlineDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-trendlines>e-trendline',
            },] },
];
/** @nocollapse */
ChartTrendlineDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
ChartTrendlineDirective.propDecorators = {
    'visibility': [{ type: core_2.Input, args: ['visibility',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'name': [{ type: core_2.Input, args: ['name',] },],
    'fill': [{ type: core_2.Input, args: ['fill',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'dashArray': [{ type: core_2.Input, args: ['dashArray',] },],
    'forwardForecast': [{ type: core_2.Input, args: ['forwardForecast',] },],
    'backwardForecast': [{ type: core_2.Input, args: ['backwardForecast',] },],
    'polynomialOrder': [{ type: core_2.Input, args: ['polynomialOrder',] },],
    'period': [{ type: core_2.Input, args: ['period',] },],
    'tooltip': [{ type: core_2.Input, args: ['tooltip',] },],
    'tooltip_border': [{ type: core_2.Input, args: ['tooltip.border',] },],
    'tooltip_border_color': [{ type: core_2.Input, args: ['tooltip.border.color',] },],
    'tooltip_border_width': [{ type: core_2.Input, args: ['tooltip.border.width',] },],
    'tooltip_rx': [{ type: core_2.Input, args: ['tooltip.rx',] },],
    'tooltip_ry': [{ type: core_2.Input, args: ['tooltip.ry',] },],
    'tooltip_duration': [{ type: core_2.Input, args: ['tooltip.duration',] },],
    'tooltip_enableAnimation': [{ type: core_2.Input, args: ['tooltip.enableAnimation',] },],
    'tooltip_fill': [{ type: core_2.Input, args: ['tooltip.fill',] },],
    'tooltip_format': [{ type: core_2.Input, args: ['tooltip.format',] },],
    'tooltip_opacity': [{ type: core_2.Input, args: ['tooltip.opacity',] },],
    'visibleOnLegend': [{ type: core_2.Input, args: ['visibleOnLegend',] },],
    'intercept': [{ type: core_2.Input, args: ['intercept',] },],
};
exports.ChartTrendlineDirective = ChartTrendlineDirective;
var ChartTrendlinesDirective = (function (_super) {
    __extends(ChartTrendlinesDirective, _super);
    function ChartTrendlinesDirective(widget) {
        return _super.call(this, 'trendlines') || this;
    }
    return ChartTrendlinesDirective;
}(core_1.ArrayTagElement));
ChartTrendlinesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-series>e-trendlines',
                queries: {
                    children: new core_2.ContentChildren(ChartTrendlineDirective)
                }
            },] },
];
/** @nocollapse */
ChartTrendlinesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
exports.ChartTrendlinesDirective = ChartTrendlinesDirective;
var ChartPointDirective = (function (_super) {
    __extends(ChartPointDirective, _super);
    function ChartPointDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return ChartPointDirective;
}(core_1.ComplexTagElement));
ChartPointDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-points>e-point',
            },] },
];
/** @nocollapse */
ChartPointDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
ChartPointDirective.propDecorators = {
    'border': [{ type: core_2.Input, args: ['border',] },],
    'border_color': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width': [{ type: core_2.Input, args: ['border.width',] },],
    'visibleOnLegend': [{ type: core_2.Input, args: ['visibleOnLegend',] },],
    'showIntermediateSum': [{ type: core_2.Input, args: ['showIntermediateSum',] },],
    'showTotalSum': [{ type: core_2.Input, args: ['showTotalSum',] },],
    'close': [{ type: core_2.Input, args: ['close',] },],
    'size': [{ type: core_2.Input, args: ['size',] },],
    'fill': [{ type: core_2.Input, args: ['fill',] },],
    'high': [{ type: core_2.Input, args: ['high',] },],
    'low': [{ type: core_2.Input, args: ['low',] },],
    'marker': [{ type: core_2.Input, args: ['marker',] },],
    'marker_border': [{ type: core_2.Input, args: ['marker.border',] },],
    'marker_border_color': [{ type: core_2.Input, args: ['marker.border.color',] },],
    'marker_border_width': [{ type: core_2.Input, args: ['marker.border.width',] },],
    'marker_dataLabel': [{ type: core_2.Input, args: ['marker.dataLabel',] },],
    'marker_dataLabel_angle': [{ type: core_2.Input, args: ['marker.dataLabel.angle',] },],
    'marker_dataLabel_border': [{ type: core_2.Input, args: ['marker.dataLabel.border',] },],
    'marker_dataLabel_border_color': [{ type: core_2.Input, args: ['marker.dataLabel.border.color',] },],
    'marker_dataLabel_border_width': [{ type: core_2.Input, args: ['marker.dataLabel.border.width',] },],
    'marker_dataLabel_connectorLine': [{ type: core_2.Input, args: ['marker.dataLabel.connectorLine',] },],
    'marker_dataLabel_connectorLine_type': [{ type: core_2.Input, args: ['marker.dataLabel.connectorLine.type',] },],
    'marker_dataLabel_connectorLine_width': [{ type: core_2.Input, args: ['marker.dataLabel.connectorLine.width',] },],
    'marker_dataLabel_fill': [{ type: core_2.Input, args: ['marker.dataLabel.fill',] },],
    'marker_dataLabel_font': [{ type: core_2.Input, args: ['marker.dataLabel.font',] },],
    'marker_dataLabel_font_fontFamily': [{ type: core_2.Input, args: ['marker.dataLabel.font.fontFamily',] },],
    'marker_dataLabel_font_fontStyle': [{ type: core_2.Input, args: ['marker.dataLabel.font.fontStyle',] },],
    'marker_dataLabel_font_fontWeight': [{ type: core_2.Input, args: ['marker.dataLabel.font.fontWeight',] },],
    'marker_dataLabel_font_opacity': [{ type: core_2.Input, args: ['marker.dataLabel.font.opacity',] },],
    'marker_dataLabel_font_size': [{ type: core_2.Input, args: ['marker.dataLabel.font.size',] },],
    'marker_dataLabel_horizontalTextAlignment': [{ type: core_2.Input, args: ['marker.dataLabel.horizontalTextAlignment',] },],
    'marker_dataLabel_margin': [{ type: core_2.Input, args: ['marker.dataLabel.margin',] },],
    'marker_dataLabel_margin_bottom': [{ type: core_2.Input, args: ['marker.dataLabel.margin.bottom',] },],
    'marker_dataLabel_margin_left': [{ type: core_2.Input, args: ['marker.dataLabel.margin.left',] },],
    'marker_dataLabel_margin_right': [{ type: core_2.Input, args: ['marker.dataLabel.margin.right',] },],
    'marker_dataLabel_margin_top': [{ type: core_2.Input, args: ['marker.dataLabel.margin.top',] },],
    'marker_dataLabel_opacity': [{ type: core_2.Input, args: ['marker.dataLabel.opacity',] },],
    'marker_dataLabel_shape': [{ type: core_2.Input, args: ['marker.dataLabel.shape',] },],
    'marker_dataLabel_textPosition': [{ type: core_2.Input, args: ['marker.dataLabel.textPosition',] },],
    'marker_dataLabel_verticalTextAlignment': [{ type: core_2.Input, args: ['marker.dataLabel.verticalTextAlignment',] },],
    'marker_dataLabel_visible': [{ type: core_2.Input, args: ['marker.dataLabel.visible',] },],
    'marker_dataLabel_template': [{ type: core_2.Input, args: ['marker.dataLabel.template',] },],
    'marker_dataLabel_offset': [{ type: core_2.Input, args: ['marker.dataLabel.offset',] },],
    'marker_fill': [{ type: core_2.Input, args: ['marker.fill',] },],
    'marker_imageUrl': [{ type: core_2.Input, args: ['marker.imageUrl',] },],
    'marker_opacity': [{ type: core_2.Input, args: ['marker.opacity',] },],
    'marker_shape': [{ type: core_2.Input, args: ['marker.shape',] },],
    'marker_size': [{ type: core_2.Input, args: ['marker.size',] },],
    'marker_size_height': [{ type: core_2.Input, args: ['marker.size.height',] },],
    'marker_size_width': [{ type: core_2.Input, args: ['marker.size.width',] },],
    'marker_visible': [{ type: core_2.Input, args: ['marker.visible',] },],
    'open': [{ type: core_2.Input, args: ['open',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'x': [{ type: core_2.Input, args: ['x',] },],
    'y': [{ type: core_2.Input, args: ['y',] },],
};
exports.ChartPointDirective = ChartPointDirective;
var ChartPointsDirective = (function (_super) {
    __extends(ChartPointsDirective, _super);
    function ChartPointsDirective(widget) {
        return _super.call(this, 'points') || this;
    }
    return ChartPointsDirective;
}(core_1.ArrayTagElement));
ChartPointsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-series>e-points',
                queries: {
                    children: new core_2.ContentChildren(ChartPointDirective)
                }
            },] },
];
/** @nocollapse */
ChartPointsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
exports.ChartPointsDirective = ChartPointsDirective;
var ChartSeriesDirective = (function (_super) {
    __extends(ChartSeriesDirective, _super);
    function ChartSeriesDirective(widget) {
        var _this = _super.call(this, ['Trendlines', 'points']) || this;
        _this.parent = widget;
        return _this;
    }
    return ChartSeriesDirective;
}(core_1.ComplexTagElement));
ChartSeriesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-seriescollection>e-series',
            },] },
];
/** @nocollapse */
ChartSeriesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
ChartSeriesDirective.propDecorators = {
    'bearFillColor': [{ type: core_2.Input, args: ['bearFillColor',] },],
    'border': [{ type: core_2.Input, args: ['border',] },],
    'border_color': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width': [{ type: core_2.Input, args: ['border.width',] },],
    'border_dashArray': [{ type: core_2.Input, args: ['border.dashArray',] },],
    'animationDuration': [{ type: core_2.Input, args: ['animationDuration',] },],
    'bullFillColor': [{ type: core_2.Input, args: ['bullFillColor',] },],
    'columnFacet': [{ type: core_2.Input, args: ['columnFacet',] },],
    'columnWidth': [{ type: core_2.Input, args: ['columnWidth',] },],
    'columnSpacing': [{ type: core_2.Input, args: ['columnSpacing',] },],
    'stackingGroup': [{ type: core_2.Input, args: ['stackingGroup',] },],
    'dashArray': [{ type: core_2.Input, args: ['dashArray',] },],
    'dataSource': [{ type: core_2.Input, args: ['dataSource',] },],
    'cardinalSplineTension': [{ type: core_2.Input, args: ['cardinalSplineTension',] },],
    'doughnutCoefficient': [{ type: core_2.Input, args: ['doughnutCoefficient',] },],
    'doughnutSize': [{ type: core_2.Input, args: ['doughnutSize',] },],
    'drawType': [{ type: core_2.Input, args: ['drawType',] },],
    'enableAnimation': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enableSmartLabels': [{ type: core_2.Input, args: ['enableSmartLabels',] },],
    'endAngle': [{ type: core_2.Input, args: ['endAngle',] },],
    'explode': [{ type: core_2.Input, args: ['explode',] },],
    'explodeAll': [{ type: core_2.Input, args: ['explodeAll',] },],
    'explodeIndex': [{ type: core_2.Input, args: ['explodeIndex',] },],
    'explodeOffset': [{ type: core_2.Input, args: ['explodeOffset',] },],
    'fill': [{ type: core_2.Input, args: ['fill',] },],
    'font': [{ type: core_2.Input, args: ['font',] },],
    'font_color': [{ type: core_2.Input, args: ['font.color',] },],
    'font_fontFamily': [{ type: core_2.Input, args: ['font.fontFamily',] },],
    'font_fontStyle': [{ type: core_2.Input, args: ['font.fontStyle',] },],
    'font_fontWeight': [{ type: core_2.Input, args: ['font.fontWeight',] },],
    'font_opacity': [{ type: core_2.Input, args: ['font.opacity',] },],
    'font_size': [{ type: core_2.Input, args: ['font.size',] },],
    'funnelHeight': [{ type: core_2.Input, args: ['funnelHeight',] },],
    'funnelWidth': [{ type: core_2.Input, args: ['funnelWidth',] },],
    'gapRatio': [{ type: core_2.Input, args: ['gapRatio',] },],
    'isClosed': [{ type: core_2.Input, args: ['isClosed',] },],
    'isStacking': [{ type: core_2.Input, args: ['isStacking',] },],
    'isTransposed': [{ type: core_2.Input, args: ['isTransposed',] },],
    'showMedian': [{ type: core_2.Input, args: ['showMedian',] },],
    'labelPosition': [{ type: core_2.Input, args: ['labelPosition',] },],
    'splitMode': [{ type: core_2.Input, args: ['splitMode',] },],
    'boxPlotMode': [{ type: core_2.Input, args: ['boxPlotMode',] },],
    'bubbleOptions': [{ type: core_2.Input, args: ['bubbleOptions',] },],
    'bubbleOptions_radiusMode': [{ type: core_2.Input, args: ['bubbleOptions.radiusMode',] },],
    'bubbleOptions_minRadius': [{ type: core_2.Input, args: ['bubbleOptions.minRadius',] },],
    'bubbleOptions_maxRadius': [{ type: core_2.Input, args: ['bubbleOptions.maxRadius',] },],
    'splineType': [{ type: core_2.Input, args: ['splineType',] },],
    'lineCap': [{ type: core_2.Input, args: ['lineCap',] },],
    'lineJoin': [{ type: core_2.Input, args: ['lineJoin',] },],
    'marker': [{ type: core_2.Input, args: ['marker',] },],
    'marker_border': [{ type: core_2.Input, args: ['marker.border',] },],
    'marker_border_color': [{ type: core_2.Input, args: ['marker.border.color',] },],
    'marker_border_width': [{ type: core_2.Input, args: ['marker.border.width',] },],
    'marker_dataLabel': [{ type: core_2.Input, args: ['marker.dataLabel',] },],
    'marker_dataLabel_angle': [{ type: core_2.Input, args: ['marker.dataLabel.angle',] },],
    'marker_dataLabel_maximumLabelWidth': [{ type: core_2.Input, args: ['marker.dataLabel.maximumLabelWidth',] },],
    'marker_dataLabel_enableWrap': [{ type: core_2.Input, args: ['marker.dataLabel.enableWrap',] },],
    'marker_dataLabel_enableContrastColor': [{ type: core_2.Input, args: ['marker.dataLabel.enableContrastColor',] },],
    'marker_dataLabel_showEdgeLabels': [{ type: core_2.Input, args: ['marker.dataLabel.showEdgeLabels',] },],
    'marker_dataLabel_border': [{ type: core_2.Input, args: ['marker.dataLabel.border',] },],
    'marker_dataLabel_border_color': [{ type: core_2.Input, args: ['marker.dataLabel.border.color',] },],
    'marker_dataLabel_border_width': [{ type: core_2.Input, args: ['marker.dataLabel.border.width',] },],
    'marker_dataLabel_connectorLine': [{ type: core_2.Input, args: ['marker.dataLabel.connectorLine',] },],
    'marker_dataLabel_connectorLine_type': [{ type: core_2.Input, args: ['marker.dataLabel.connectorLine.type',] },],
    'marker_dataLabel_connectorLine_width': [{ type: core_2.Input, args: ['marker.dataLabel.connectorLine.width',] },],
    'marker_dataLabel_connectorLine_color': [{ type: core_2.Input, args: ['marker.dataLabel.connectorLine.color',] },],
    'marker_dataLabel_connectorLine_height': [{ type: core_2.Input, args: ['marker.dataLabel.connectorLine.height',] },],
    'marker_dataLabel_fill': [{ type: core_2.Input, args: ['marker.dataLabel.fill',] },],
    'marker_dataLabel_font': [{ type: core_2.Input, args: ['marker.dataLabel.font',] },],
    'marker_dataLabel_font_fontFamily': [{ type: core_2.Input, args: ['marker.dataLabel.font.fontFamily',] },],
    'marker_dataLabel_font_color': [{ type: core_2.Input, args: ['marker.dataLabel.font.color',] },],
    'marker_dataLabel_font_fontStyle': [{ type: core_2.Input, args: ['marker.dataLabel.font.fontStyle',] },],
    'marker_dataLabel_font_fontWeight': [{ type: core_2.Input, args: ['marker.dataLabel.font.fontWeight',] },],
    'marker_dataLabel_font_opacity': [{ type: core_2.Input, args: ['marker.dataLabel.font.opacity',] },],
    'marker_dataLabel_font_size': [{ type: core_2.Input, args: ['marker.dataLabel.font.size',] },],
    'marker_dataLabel_horizontalTextAlignment': [{ type: core_2.Input, args: ['marker.dataLabel.horizontalTextAlignment',] },],
    'marker_dataLabel_margin': [{ type: core_2.Input, args: ['marker.dataLabel.margin',] },],
    'marker_dataLabel_margin_bottom': [{ type: core_2.Input, args: ['marker.dataLabel.margin.bottom',] },],
    'marker_dataLabel_margin_left': [{ type: core_2.Input, args: ['marker.dataLabel.margin.left',] },],
    'marker_dataLabel_margin_right': [{ type: core_2.Input, args: ['marker.dataLabel.margin.right',] },],
    'marker_dataLabel_margin_top': [{ type: core_2.Input, args: ['marker.dataLabel.margin.top',] },],
    'marker_dataLabel_opacity': [{ type: core_2.Input, args: ['marker.dataLabel.opacity',] },],
    'marker_dataLabel_shape': [{ type: core_2.Input, args: ['marker.dataLabel.shape',] },],
    'marker_dataLabel_textMappingName': [{ type: core_2.Input, args: ['marker.dataLabel.textMappingName',] },],
    'marker_dataLabel_textPosition': [{ type: core_2.Input, args: ['marker.dataLabel.textPosition',] },],
    'marker_dataLabel_verticalTextAlignment': [{ type: core_2.Input, args: ['marker.dataLabel.verticalTextAlignment',] },],
    'marker_dataLabel_visible': [{ type: core_2.Input, args: ['marker.dataLabel.visible',] },],
    'marker_dataLabel_template': [{ type: core_2.Input, args: ['marker.dataLabel.template',] },],
    'marker_dataLabel_offset': [{ type: core_2.Input, args: ['marker.dataLabel.offset',] },],
    'marker_dataLabel_offset_x': [{ type: core_2.Input, args: ['marker.dataLabel.offset.x',] },],
    'marker_dataLabel_offset_y': [{ type: core_2.Input, args: ['marker.dataLabel.offset.y',] },],
    'marker_fill': [{ type: core_2.Input, args: ['marker.fill',] },],
    'marker_imageUrl': [{ type: core_2.Input, args: ['marker.imageUrl',] },],
    'marker_opacity': [{ type: core_2.Input, args: ['marker.opacity',] },],
    'marker_shape': [{ type: core_2.Input, args: ['marker.shape',] },],
    'marker_size': [{ type: core_2.Input, args: ['marker.size',] },],
    'marker_size_height': [{ type: core_2.Input, args: ['marker.size.height',] },],
    'marker_size_width': [{ type: core_2.Input, args: ['marker.size.width',] },],
    'marker_visible': [{ type: core_2.Input, args: ['marker.visible',] },],
    'name': [{ type: core_2.Input, args: ['name',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'outlierSettings': [{ type: core_2.Input, args: ['outlierSettings',] },],
    'outlierSettings_shape': [{ type: core_2.Input, args: ['outlierSettings.shape',] },],
    'outlierSettings_size': [{ type: core_2.Input, args: ['outlierSettings.size',] },],
    'outlierSettings_size_height': [{ type: core_2.Input, args: ['outlierSettings.size.height',] },],
    'outlierSettings_size_width': [{ type: core_2.Input, args: ['outlierSettings.size.width',] },],
    'palette': [{ type: core_2.Input, args: ['palette',] },],
    'pieCoefficient': [{ type: core_2.Input, args: ['pieCoefficient',] },],
    'pieOfPieCoefficient': [{ type: core_2.Input, args: ['pieOfPieCoefficient',] },],
    'splitValue': [{ type: core_2.Input, args: ['splitValue',] },],
    'gapWidth': [{ type: core_2.Input, args: ['gapWidth',] },],
    'emptyPointSettings': [{ type: core_2.Input, args: ['emptyPointSettings',] },],
    'emptyPointSettings_visible': [{ type: core_2.Input, args: ['emptyPointSettings.visible',] },],
    'emptyPointSettings_displayMode': [{ type: core_2.Input, args: ['emptyPointSettings.displayMode',] },],
    'emptyPointSettings_style': [{ type: core_2.Input, args: ['emptyPointSettings.style',] },],
    'emptyPointSettings_style_color': [{ type: core_2.Input, args: ['emptyPointSettings.style.color',] },],
    'emptyPointSettings_style_border': [{ type: core_2.Input, args: ['emptyPointSettings.style.border',] },],
    'emptyPointSettings_style_border_color': [{ type: core_2.Input, args: ['emptyPointSettings.style.border.color',] },],
    'emptyPointSettings_style_border_width': [{ type: core_2.Input, args: ['emptyPointSettings.style.border.width',] },],
    'positiveFill': [{ type: core_2.Input, args: ['positiveFill',] },],
    'connectorLine': [{ type: core_2.Input, args: ['connectorLine',] },],
    'connectorLine_width': [{ type: core_2.Input, args: ['connectorLine.width',] },],
    'connectorLine_color': [{ type: core_2.Input, args: ['connectorLine.color',] },],
    'connectorLine_dashArray': [{ type: core_2.Input, args: ['connectorLine.dashArray',] },],
    'connectorLine_opacity': [{ type: core_2.Input, args: ['connectorLine.opacity',] },],
    'dragSettings': [{ type: core_2.Input, args: ['dragSettings',] },],
    'dragSettings_enable': [{ type: core_2.Input, args: ['dragSettings.enable',] },],
    'dragSettings_type': [{ type: core_2.Input, args: ['dragSettings.type',] },],
    'errorBar': [{ type: core_2.Input, args: ['errorBar',] },],
    'errorBar_visibility': [{ type: core_2.Input, args: ['errorBar.visibility',] },],
    'errorBar_type': [{ type: core_2.Input, args: ['errorBar.type',] },],
    'errorBar_mode': [{ type: core_2.Input, args: ['errorBar.mode',] },],
    'errorBar_direction': [{ type: core_2.Input, args: ['errorBar.direction',] },],
    'errorBar_verticalErrorValue': [{ type: core_2.Input, args: ['errorBar.verticalErrorValue',] },],
    'errorBar_horizontalErrorValue': [{ type: core_2.Input, args: ['errorBar.horizontalErrorValue',] },],
    'errorBar_horizontalPositiveErrorValue': [{ type: core_2.Input, args: ['errorBar.horizontalPositiveErrorValue',] },],
    'errorBar_horizontalNegativeErrorValue': [{ type: core_2.Input, args: ['errorBar.horizontalNegativeErrorValue',] },],
    'errorBar_verticalPositiveErrorValue': [{ type: core_2.Input, args: ['errorBar.verticalPositiveErrorValue',] },],
    'errorBar_verticalNegativeErrorValue': [{ type: core_2.Input, args: ['errorBar.verticalNegativeErrorValue',] },],
    'errorBar_fill': [{ type: core_2.Input, args: ['errorBar.fill',] },],
    'errorBar_width': [{ type: core_2.Input, args: ['errorBar.width',] },],
    'errorBar_cap': [{ type: core_2.Input, args: ['errorBar.cap',] },],
    'errorBar_cap_visible': [{ type: core_2.Input, args: ['errorBar.cap.visible',] },],
    'errorBar_cap_width': [{ type: core_2.Input, args: ['errorBar.cap.width',] },],
    'errorBar_cap_length': [{ type: core_2.Input, args: ['errorBar.cap.length',] },],
    'errorBar_cap_fill': [{ type: core_2.Input, args: ['errorBar.cap.fill',] },],
    'points': [{ type: core_2.Input, args: ['points',] },],
    'pyramidMode': [{ type: core_2.Input, args: ['pyramidMode',] },],
    'query': [{ type: core_2.Input, args: ['query',] },],
    'startAngle': [{ type: core_2.Input, args: ['startAngle',] },],
    'cornerRadius': [{ type: core_2.Input, args: ['cornerRadius',] },],
    'cornerRadius_topLeft': [{ type: core_2.Input, args: ['cornerRadius.topLeft',] },],
    'cornerRadius_topRight': [{ type: core_2.Input, args: ['cornerRadius.topRight',] },],
    'cornerRadius_bottomLeft': [{ type: core_2.Input, args: ['cornerRadius.bottomLeft',] },],
    'cornerRadius_bottomRight': [{ type: core_2.Input, args: ['cornerRadius.bottomRight',] },],
    'tooltip': [{ type: core_2.Input, args: ['tooltip',] },],
    'tooltip_border': [{ type: core_2.Input, args: ['tooltip.border',] },],
    'tooltip_border_color': [{ type: core_2.Input, args: ['tooltip.border.color',] },],
    'tooltip_border_width': [{ type: core_2.Input, args: ['tooltip.border.width',] },],
    'tooltip_rx': [{ type: core_2.Input, args: ['tooltip.rx',] },],
    'tooltip_ry': [{ type: core_2.Input, args: ['tooltip.ry',] },],
    'tooltip_duration': [{ type: core_2.Input, args: ['tooltip.duration',] },],
    'tooltip_enableAnimation': [{ type: core_2.Input, args: ['tooltip.enableAnimation',] },],
    'tooltip_fill': [{ type: core_2.Input, args: ['tooltip.fill',] },],
    'tooltip_format': [{ type: core_2.Input, args: ['tooltip.format',] },],
    'tooltip_opacity': [{ type: core_2.Input, args: ['tooltip.opacity',] },],
    'tooltip_template': [{ type: core_2.Input, args: ['tooltip.template',] },],
    'tooltip_visible': [{ type: core_2.Input, args: ['tooltip.visible',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'visibility': [{ type: core_2.Input, args: ['visibility',] },],
    'visibleOnLegend': [{ type: core_2.Input, args: ['visibleOnLegend',] },],
    'xAxisName': [{ type: core_2.Input, args: ['xAxisName',] },],
    'xName': [{ type: core_2.Input, args: ['xName',] },],
    'yAxisName': [{ type: core_2.Input, args: ['yAxisName',] },],
    'yName': [{ type: core_2.Input, args: ['yName',] },],
    'high': [{ type: core_2.Input, args: ['high',] },],
    'low': [{ type: core_2.Input, args: ['low',] },],
    'open': [{ type: core_2.Input, args: ['open',] },],
    'close': [{ type: core_2.Input, args: ['close',] },],
    'pointColorMappingName': [{ type: core_2.Input, args: ['pointColorMappingName',] },],
    'zOrder': [{ type: core_2.Input, args: ['zOrder',] },],
    'size': [{ type: core_2.Input, args: ['size',] },],
    'trendlines': [{ type: core_2.Input, args: ['trendlines',] },],
    'highlightSettings': [{ type: core_2.Input, args: ['highlightSettings',] },],
    'highlightSettings_enable': [{ type: core_2.Input, args: ['highlightSettings.enable',] },],
    'highlightSettings_mode': [{ type: core_2.Input, args: ['highlightSettings.mode',] },],
    'highlightSettings_color': [{ type: core_2.Input, args: ['highlightSettings.color',] },],
    'highlightSettings_opacity': [{ type: core_2.Input, args: ['highlightSettings.opacity',] },],
    'highlightSettings_border': [{ type: core_2.Input, args: ['highlightSettings.border',] },],
    'highlightSettings_border_color': [{ type: core_2.Input, args: ['highlightSettings.border.color',] },],
    'highlightSettings_border_width': [{ type: core_2.Input, args: ['highlightSettings.border.width',] },],
    'highlightSettings_pattern': [{ type: core_2.Input, args: ['highlightSettings.pattern',] },],
    'highlightSettings_customPattern': [{ type: core_2.Input, args: ['highlightSettings.customPattern',] },],
    'selectionSettings': [{ type: core_2.Input, args: ['selectionSettings',] },],
    'selectionSettings_enable': [{ type: core_2.Input, args: ['selectionSettings.enable',] },],
    'selectionSettings_mode': [{ type: core_2.Input, args: ['selectionSettings.mode',] },],
    'selectionSettings_type': [{ type: core_2.Input, args: ['selectionSettings.type',] },],
    'selectionSettings_rangeType': [{ type: core_2.Input, args: ['selectionSettings.rangeType',] },],
    'selectionSettings_color': [{ type: core_2.Input, args: ['selectionSettings.color',] },],
    'selectionSettings_opacity': [{ type: core_2.Input, args: ['selectionSettings.opacity',] },],
    'selectionSettings_border': [{ type: core_2.Input, args: ['selectionSettings.border',] },],
    'selectionSettings_border_color': [{ type: core_2.Input, args: ['selectionSettings.border.color',] },],
    'selectionSettings_border_width': [{ type: core_2.Input, args: ['selectionSettings.border.width',] },],
    'selectionSettings_pattern': [{ type: core_2.Input, args: ['selectionSettings.pattern',] },],
    'selectionSettings_customPattern': [{ type: core_2.Input, args: ['selectionSettings.customPattern',] },],
    'tag_Trendlines': [{ type: core_2.ContentChild, args: [ChartTrendlinesDirective,] },],
    'tag_points': [{ type: core_2.ContentChild, args: [ChartPointsDirective,] },],
};
exports.ChartSeriesDirective = ChartSeriesDirective;
var ChartSeriesCollectionDirective = (function (_super) {
    __extends(ChartSeriesCollectionDirective, _super);
    function ChartSeriesCollectionDirective(widget) {
        return _super.call(this, 'series') || this;
    }
    return ChartSeriesCollectionDirective;
}(core_1.ArrayTagElement));
ChartSeriesCollectionDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-chart>e-seriescollection',
                queries: {
                    children: new core_2.ContentChildren(ChartSeriesDirective)
                }
            },] },
];
/** @nocollapse */
ChartSeriesCollectionDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
exports.ChartSeriesCollectionDirective = ChartSeriesCollectionDirective;
var ChartIndicatorDirective = (function (_super) {
    __extends(ChartIndicatorDirective, _super);
    function ChartIndicatorDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return ChartIndicatorDirective;
}(core_1.ComplexTagElement));
ChartIndicatorDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-chart-indicators>e-chart-indicator',
            },] },
];
/** @nocollapse */
ChartIndicatorDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
ChartIndicatorDirective.propDecorators = {
    'dPeriod': [{ type: core_2.Input, args: ['dPeriod',] },],
    'enableAnimation': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'animationDuration': [{ type: core_2.Input, args: ['animationDuration',] },],
    'fill': [{ type: core_2.Input, args: ['fill',] },],
    'histogram': [{ type: core_2.Input, args: ['histogram',] },],
    'histogram_border': [{ type: core_2.Input, args: ['histogram.border',] },],
    'histogram_border_color': [{ type: core_2.Input, args: ['histogram.border.color',] },],
    'histogram_border_width': [{ type: core_2.Input, args: ['histogram.border.width',] },],
    'histogram_fill': [{ type: core_2.Input, args: ['histogram.fill',] },],
    'histogram_opacity': [{ type: core_2.Input, args: ['histogram.opacity',] },],
    'kPeriod': [{ type: core_2.Input, args: ['kPeriod',] },],
    'longPeriod': [{ type: core_2.Input, args: ['longPeriod',] },],
    'lowerLine': [{ type: core_2.Input, args: ['lowerLine',] },],
    'lowerLine_fill': [{ type: core_2.Input, args: ['lowerLine.fill',] },],
    'lowerLine_width': [{ type: core_2.Input, args: ['lowerLine.width',] },],
    'macdLine': [{ type: core_2.Input, args: ['macdLine',] },],
    'macdLine_fill': [{ type: core_2.Input, args: ['macdLine.fill',] },],
    'macdLine_width': [{ type: core_2.Input, args: ['macdLine.width',] },],
    'macdType': [{ type: core_2.Input, args: ['macdType',] },],
    'period': [{ type: core_2.Input, args: ['period',] },],
    'periodLine': [{ type: core_2.Input, args: ['periodLine',] },],
    'periodLine_fill': [{ type: core_2.Input, args: ['periodLine.fill',] },],
    'periodLine_width': [{ type: core_2.Input, args: ['periodLine.width',] },],
    'seriesName': [{ type: core_2.Input, args: ['seriesName',] },],
    'shortPeriod': [{ type: core_2.Input, args: ['shortPeriod',] },],
    'standardDeviations': [{ type: core_2.Input, args: ['standardDeviations',] },],
    'tooltip': [{ type: core_2.Input, args: ['tooltip',] },],
    'tooltip_border': [{ type: core_2.Input, args: ['tooltip.border',] },],
    'tooltip_border_color': [{ type: core_2.Input, args: ['tooltip.border.color',] },],
    'tooltip_border_width': [{ type: core_2.Input, args: ['tooltip.border.width',] },],
    'tooltip_duration': [{ type: core_2.Input, args: ['tooltip.duration',] },],
    'tooltip_enableAnimation': [{ type: core_2.Input, args: ['tooltip.enableAnimation',] },],
    'tooltip_format': [{ type: core_2.Input, args: ['tooltip.format',] },],
    'tooltip_fill': [{ type: core_2.Input, args: ['tooltip.fill',] },],
    'tooltip_opacity': [{ type: core_2.Input, args: ['tooltip.opacity',] },],
    'tooltip_visible': [{ type: core_2.Input, args: ['tooltip.visible',] },],
    'trigger': [{ type: core_2.Input, args: ['trigger',] },],
    'visibility': [{ type: core_2.Input, args: ['visibility',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'upperLine': [{ type: core_2.Input, args: ['upperLine',] },],
    'upperLine_fill': [{ type: core_2.Input, args: ['upperLine.fill',] },],
    'upperLine_width': [{ type: core_2.Input, args: ['upperLine.width',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'xAxisName': [{ type: core_2.Input, args: ['xAxisName',] },],
    'yAxisName': [{ type: core_2.Input, args: ['yAxisName',] },],
};
exports.ChartIndicatorDirective = ChartIndicatorDirective;
var ChartIndicatorsDirective = (function (_super) {
    __extends(ChartIndicatorsDirective, _super);
    function ChartIndicatorsDirective(widget) {
        return _super.call(this, 'indicators') || this;
    }
    return ChartIndicatorsDirective;
}(core_1.ArrayTagElement));
ChartIndicatorsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-chart>e-chart-indicators',
                queries: {
                    children: new core_2.ContentChildren(ChartIndicatorDirective)
                }
            },] },
];
/** @nocollapse */
ChartIndicatorsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
exports.ChartIndicatorsDirective = ChartIndicatorsDirective;
var ChartAnnotationDirective = (function (_super) {
    __extends(ChartAnnotationDirective, _super);
    function ChartAnnotationDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return ChartAnnotationDirective;
}(core_1.ComplexTagElement));
ChartAnnotationDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-annotations>e-annotation',
            },] },
];
/** @nocollapse */
ChartAnnotationDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
ChartAnnotationDirective.propDecorators = {
    'angle': [{ type: core_2.Input, args: ['angle',] },],
    'content': [{ type: core_2.Input, args: ['content',] },],
    'coordinateUnit': [{ type: core_2.Input, args: ['coordinateUnit',] },],
    'horizontalAlignment': [{ type: core_2.Input, args: ['horizontalAlignment',] },],
    'margin': [{ type: core_2.Input, args: ['margin',] },],
    'margin_bottom': [{ type: core_2.Input, args: ['margin.bottom',] },],
    'margin_left': [{ type: core_2.Input, args: ['margin.left',] },],
    'margin_right': [{ type: core_2.Input, args: ['margin.right',] },],
    'margin_top': [{ type: core_2.Input, args: ['margin.top',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'region': [{ type: core_2.Input, args: ['region',] },],
    'verticalAlignment': [{ type: core_2.Input, args: ['verticalAlignment',] },],
    'visible': [{ type: core_2.Input, args: ['visible',] },],
    'x': [{ type: core_2.Input, args: ['x',] },],
    'xAxisName': [{ type: core_2.Input, args: ['xAxisName',] },],
    'y': [{ type: core_2.Input, args: ['y',] },],
    'yAxisName': [{ type: core_2.Input, args: ['yAxisName',] },],
};
exports.ChartAnnotationDirective = ChartAnnotationDirective;
var ChartAnnotationsDirective = (function (_super) {
    __extends(ChartAnnotationsDirective, _super);
    function ChartAnnotationsDirective(widget) {
        return _super.call(this, 'annotations') || this;
    }
    return ChartAnnotationsDirective;
}(core_1.ArrayTagElement));
ChartAnnotationsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-chart>e-annotations',
                queries: {
                    children: new core_2.ContentChildren(ChartAnnotationDirective)
                }
            },] },
];
/** @nocollapse */
ChartAnnotationsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
exports.ChartAnnotationsDirective = ChartAnnotationsDirective;
var ChartPrimaryXAxisStripLineDirective = (function (_super) {
    __extends(ChartPrimaryXAxisStripLineDirective, _super);
    function ChartPrimaryXAxisStripLineDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return ChartPrimaryXAxisStripLineDirective;
}(core_1.ComplexTagElement));
ChartPrimaryXAxisStripLineDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-primaryxaxis-striplinecollection>e-primaryxaxis-stripline',
            },] },
];
/** @nocollapse */
ChartPrimaryXAxisStripLineDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
ChartPrimaryXAxisStripLineDirective.propDecorators = {
    'borderColor': [{ type: core_2.Input, args: ['borderColor',] },],
    'color': [{ type: core_2.Input, args: ['color',] },],
    'end': [{ type: core_2.Input, args: ['end',] },],
    'font': [{ type: core_2.Input, args: ['font',] },],
    'font_color': [{ type: core_2.Input, args: ['font.color',] },],
    'font_fontFamily': [{ type: core_2.Input, args: ['font.fontFamily',] },],
    'font_fontStyle': [{ type: core_2.Input, args: ['font.fontStyle',] },],
    'font_fontWeight': [{ type: core_2.Input, args: ['font.fontWeight',] },],
    'font_opacity': [{ type: core_2.Input, args: ['font.opacity',] },],
    'font_size': [{ type: core_2.Input, args: ['font.size',] },],
    'start': [{ type: core_2.Input, args: ['start',] },],
    'startFromAxis': [{ type: core_2.Input, args: ['startFromAxis',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'textAlignment': [{ type: core_2.Input, args: ['textAlignment',] },],
    'visible': [{ type: core_2.Input, args: ['visible',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'zIndex': [{ type: core_2.Input, args: ['zIndex',] },],
};
exports.ChartPrimaryXAxisStripLineDirective = ChartPrimaryXAxisStripLineDirective;
var ChartPrimaryXAxisStripLineCollectionDirective = (function (_super) {
    __extends(ChartPrimaryXAxisStripLineCollectionDirective, _super);
    function ChartPrimaryXAxisStripLineCollectionDirective(widget) {
        return _super.call(this, 'primaryXAxis.stripLine') || this;
    }
    return ChartPrimaryXAxisStripLineCollectionDirective;
}(core_1.ArrayTagElement));
ChartPrimaryXAxisStripLineCollectionDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-chart>e-primaryxaxis-striplinecollection',
                queries: {
                    children: new core_2.ContentChildren(ChartPrimaryXAxisStripLineDirective)
                }
            },] },
];
/** @nocollapse */
ChartPrimaryXAxisStripLineCollectionDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
exports.ChartPrimaryXAxisStripLineCollectionDirective = ChartPrimaryXAxisStripLineCollectionDirective;
var ChartPrimaryYAxisStripLineDirective = (function (_super) {
    __extends(ChartPrimaryYAxisStripLineDirective, _super);
    function ChartPrimaryYAxisStripLineDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return ChartPrimaryYAxisStripLineDirective;
}(core_1.ComplexTagElement));
ChartPrimaryYAxisStripLineDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-primaryyaxis-striplinecollection>e-primaryyaxis-stripline',
            },] },
];
/** @nocollapse */
ChartPrimaryYAxisStripLineDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
ChartPrimaryYAxisStripLineDirective.propDecorators = {
    'borderColor': [{ type: core_2.Input, args: ['borderColor',] },],
    'color': [{ type: core_2.Input, args: ['color',] },],
    'end': [{ type: core_2.Input, args: ['end',] },],
    'font': [{ type: core_2.Input, args: ['font',] },],
    'font_color': [{ type: core_2.Input, args: ['font.color',] },],
    'font_fontFamily': [{ type: core_2.Input, args: ['font.fontFamily',] },],
    'font_fontStyle': [{ type: core_2.Input, args: ['font.fontStyle',] },],
    'font_fontWeight': [{ type: core_2.Input, args: ['font.fontWeight',] },],
    'font_opacity': [{ type: core_2.Input, args: ['font.opacity',] },],
    'font_size': [{ type: core_2.Input, args: ['font.size',] },],
    'start': [{ type: core_2.Input, args: ['start',] },],
    'startFromAxis': [{ type: core_2.Input, args: ['startFromAxis',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'textAlignment': [{ type: core_2.Input, args: ['textAlignment',] },],
    'visible': [{ type: core_2.Input, args: ['visible',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'zIndex': [{ type: core_2.Input, args: ['zIndex',] },],
};
exports.ChartPrimaryYAxisStripLineDirective = ChartPrimaryYAxisStripLineDirective;
var ChartPrimaryYAxisStripLineCollectionDirective = (function (_super) {
    __extends(ChartPrimaryYAxisStripLineCollectionDirective, _super);
    function ChartPrimaryYAxisStripLineCollectionDirective(widget) {
        return _super.call(this, 'primaryYAxis.stripLine') || this;
    }
    return ChartPrimaryYAxisStripLineCollectionDirective;
}(core_1.ArrayTagElement));
ChartPrimaryYAxisStripLineCollectionDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-chart>e-primaryyaxis-striplinecollection',
                queries: {
                    children: new core_2.ContentChildren(ChartPrimaryYAxisStripLineDirective)
                }
            },] },
];
/** @nocollapse */
ChartPrimaryYAxisStripLineCollectionDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
exports.ChartPrimaryYAxisStripLineCollectionDirective = ChartPrimaryYAxisStripLineCollectionDirective;
var ChartRowDefinitionDirective = (function (_super) {
    __extends(ChartRowDefinitionDirective, _super);
    function ChartRowDefinitionDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return ChartRowDefinitionDirective;
}(core_1.ComplexTagElement));
ChartRowDefinitionDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-rowdefinitions>e-rowdefinition',
            },] },
];
/** @nocollapse */
ChartRowDefinitionDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
ChartRowDefinitionDirective.propDecorators = {
    'unit': [{ type: core_2.Input, args: ['unit',] },],
    'rowHeight': [{ type: core_2.Input, args: ['rowHeight',] },],
    'lineColor': [{ type: core_2.Input, args: ['lineColor',] },],
    'lineWidth': [{ type: core_2.Input, args: ['lineWidth',] },],
};
exports.ChartRowDefinitionDirective = ChartRowDefinitionDirective;
var ChartRowDefinitionsDirective = (function (_super) {
    __extends(ChartRowDefinitionsDirective, _super);
    function ChartRowDefinitionsDirective(widget) {
        return _super.call(this, 'rowDefinitions') || this;
    }
    return ChartRowDefinitionsDirective;
}(core_1.ArrayTagElement));
ChartRowDefinitionsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-chart>e-rowdefinitions',
                queries: {
                    children: new core_2.ContentChildren(ChartRowDefinitionDirective)
                }
            },] },
];
/** @nocollapse */
ChartRowDefinitionsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
exports.ChartRowDefinitionsDirective = ChartRowDefinitionsDirective;
var ChartColumnDefinitionDirective = (function (_super) {
    __extends(ChartColumnDefinitionDirective, _super);
    function ChartColumnDefinitionDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return ChartColumnDefinitionDirective;
}(core_1.ComplexTagElement));
ChartColumnDefinitionDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-columndefinitions>e-columndefinition',
            },] },
];
/** @nocollapse */
ChartColumnDefinitionDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
ChartColumnDefinitionDirective.propDecorators = {
    'unit': [{ type: core_2.Input, args: ['unit',] },],
    'columnWidth': [{ type: core_2.Input, args: ['columnWidth',] },],
    'lineColor': [{ type: core_2.Input, args: ['lineColor',] },],
    'lineWidth': [{ type: core_2.Input, args: ['lineWidth',] },],
};
exports.ChartColumnDefinitionDirective = ChartColumnDefinitionDirective;
var ChartColumnDefinitionsDirective = (function (_super) {
    __extends(ChartColumnDefinitionsDirective, _super);
    function ChartColumnDefinitionsDirective(widget) {
        return _super.call(this, 'columnDefinitions') || this;
    }
    return ChartColumnDefinitionsDirective;
}(core_1.ArrayTagElement));
ChartColumnDefinitionsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-chart>e-columndefinitions',
                queries: {
                    children: new core_2.ContentChildren(ChartColumnDefinitionDirective)
                }
            },] },
];
/** @nocollapse */
ChartColumnDefinitionsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ChartComponent; }),] },] },
]; };
exports.ChartColumnDefinitionsDirective = ChartColumnDefinitionsDirective;
var ChartComponent = (function (_super) {
    __extends(ChartComponent, _super);
    function ChartComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Chart', el, cdRef, ['series', 'indicators', 'annotations', 'primaryXAxis.stripLine', 'primaryYAxis.stripLine', 'rowDefinitions', 'columnDefinitions'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.animationComplete_output = new core_2.EventEmitter();
        _this.axesLabelRendering_output = new core_2.EventEmitter();
        _this.axesLabelsInitialize_output = new core_2.EventEmitter();
        _this.axesRangeCalculate_output = new core_2.EventEmitter();
        _this.axesTitleRendering_output = new core_2.EventEmitter();
        _this.chartAreaBoundsCalculate_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.displayTextRendering_output = new core_2.EventEmitter();
        _this.legendBoundsCalculate_output = new core_2.EventEmitter();
        _this.legendItemClick_output = new core_2.EventEmitter();
        _this.legendItemMouseMove_output = new core_2.EventEmitter();
        _this.legendItemRendering_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.zoomed_output = new core_2.EventEmitter();
        _this.rangeSelected_output = new core_2.EventEmitter();
        _this.pointRegionClick_output = new core_2.EventEmitter();
        _this.pointRegionMouseMove_output = new core_2.EventEmitter();
        _this.preRender_output = new core_2.EventEmitter();
        _this.seriesRegionClick_output = new core_2.EventEmitter();
        _this.seriesRendering_output = new core_2.EventEmitter();
        _this.symbolRendering_output = new core_2.EventEmitter();
        _this.titleRendering_output = new core_2.EventEmitter();
        _this.toolTipInitialize_output = new core_2.EventEmitter();
        _this.trackAxisToolTip_output = new core_2.EventEmitter();
        _this.trackToolTip_output = new core_2.EventEmitter();
        _this.axisLabelClick_output = new core_2.EventEmitter();
        _this.axisLabelMouseMove_output = new core_2.EventEmitter();
        _this.chartClick_output = new core_2.EventEmitter();
        _this.multiLevelLabelClick_output = new core_2.EventEmitter();
        _this.chartMouseMove_output = new core_2.EventEmitter();
        _this.chartDoubleClick_output = new core_2.EventEmitter();
        _this.chartMouseLeave_output = new core_2.EventEmitter();
        _this.annotationClick_output = new core_2.EventEmitter();
        _this.afterResize_output = new core_2.EventEmitter();
        _this.beforeResize_output = new core_2.EventEmitter();
        _this.errorBarRendering_output = new core_2.EventEmitter();
        _this.multiLevelLabelRendering_output = new core_2.EventEmitter();
        _this.trendlineRendering_output = new core_2.EventEmitter();
        _this.scrollChanged_output = new core_2.EventEmitter();
        _this.scrollStart_output = new core_2.EventEmitter();
        _this.scrollEnd_output = new core_2.EventEmitter();
        _this.dragStart_output = new core_2.EventEmitter();
        _this.dragging_output = new core_2.EventEmitter();
        _this.dragEnd_output = new core_2.EventEmitter();
        _this.subTitleRendering_output = new core_2.EventEmitter();
        return _this;
    }
    return ChartComponent;
}(core_1.EJComponents));
ChartComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-chart',
                template: ''
            },] },
];
/** @nocollapse */
ChartComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ChartComponent.propDecorators = {
    'background_input': [{ type: core_2.Input, args: ['background',] },],
    'backGroundImageUrl_input': [{ type: core_2.Input, args: ['backGroundImageUrl',] },],
    'border_input': [{ type: core_2.Input, args: ['border',] },],
    'exportSettings_input': [{ type: core_2.Input, args: ['exportSettings',] },],
    'chartArea_input': [{ type: core_2.Input, args: ['chartArea',] },],
    'commonSeriesOptions_input': [{ type: core_2.Input, args: ['commonSeriesOptions',] },],
    'selectedDataPointIndexes_input': [{ type: core_2.Input, args: ['selectedDataPointIndexes',] },],
    'crosshair_input': [{ type: core_2.Input, args: ['crosshair',] },],
    'depth_input': [{ type: core_2.Input, args: ['depth',] },],
    'enable3D_input': [{ type: core_2.Input, args: ['enable3D',] },],
    'enableCanvasRendering_input': [{ type: core_2.Input, args: ['enableCanvasRendering',] },],
    'initSeriesRender_input': [{ type: core_2.Input, args: ['initSeriesRender',] },],
    'enableRotation_input': [{ type: core_2.Input, args: ['enableRotation',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'legend_input': [{ type: core_2.Input, args: ['legend',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'palette_input': [{ type: core_2.Input, args: ['palette',] },],
    'margin_input': [{ type: core_2.Input, args: ['margin',] },],
    'perspectiveAngle_input': [{ type: core_2.Input, args: ['perspectiveAngle',] },],
    'primaryXAxis_input': [{ type: core_2.Input, args: ['primaryXAxis',] },],
    'primaryYAxis_input': [{ type: core_2.Input, args: ['primaryYAxis',] },],
    'rotation_input': [{ type: core_2.Input, args: ['rotation',] },],
    'sideBySideSeriesPlacement_input': [{ type: core_2.Input, args: ['sideBySideSeriesPlacement',] },],
    'size_input': [{ type: core_2.Input, args: ['size',] },],
    'theme_input': [{ type: core_2.Input, args: ['theme',] },],
    'tilt_input': [{ type: core_2.Input, args: ['tilt',] },],
    'title_input': [{ type: core_2.Input, args: ['title',] },],
    'wallSize_input': [{ type: core_2.Input, args: ['wallSize',] },],
    'zooming_input': [{ type: core_2.Input, args: ['zooming',] },],
    'border_color_input': [{ type: core_2.Input, args: ['border.color',] },],
    'border_opacity_input': [{ type: core_2.Input, args: ['border.opacity',] },],
    'border_width_input': [{ type: core_2.Input, args: ['border.width',] },],
    'exportSettings_filename_input': [{ type: core_2.Input, args: ['exportSettings.filename',] },],
    'exportSettings_action_input': [{ type: core_2.Input, args: ['exportSettings.action',] },],
    'exportSettings_angle_input': [{ type: core_2.Input, args: ['exportSettings.angle',] },],
    'exportSettings_type_input': [{ type: core_2.Input, args: ['exportSettings.type',] },],
    'exportSettings_orientation_input': [{ type: core_2.Input, args: ['exportSettings.orientation',] },],
    'exportSettings_mode_input': [{ type: core_2.Input, args: ['exportSettings.mode',] },],
    'exportSettings_multipleExport_input': [{ type: core_2.Input, args: ['exportSettings.multipleExport',] },],
    'chartArea_background_input': [{ type: core_2.Input, args: ['chartArea.background',] },],
    'chartArea_border_input': [{ type: core_2.Input, args: ['chartArea.border',] },],
    'chartArea_border_color_input': [{ type: core_2.Input, args: ['chartArea.border.color',] },],
    'chartArea_border_opacity_input': [{ type: core_2.Input, args: ['chartArea.border.opacity',] },],
    'chartArea_border_width_input': [{ type: core_2.Input, args: ['chartArea.border.width',] },],
    'commonSeriesOptions_animationDuration_input': [{ type: core_2.Input, args: ['commonSeriesOptions.animationDuration',] },],
    'commonSeriesOptions_border_input': [{ type: core_2.Input, args: ['commonSeriesOptions.border',] },],
    'commonSeriesOptions_border_color_input': [{ type: core_2.Input, args: ['commonSeriesOptions.border.color',] },],
    'commonSeriesOptions_border_dashArray_input': [{ type: core_2.Input, args: ['commonSeriesOptions.border.dashArray',] },],
    'commonSeriesOptions_border_width_input': [{ type: core_2.Input, args: ['commonSeriesOptions.border.width',] },],
    'commonSeriesOptions_columnFacet_input': [{ type: core_2.Input, args: ['commonSeriesOptions.columnFacet',] },],
    'commonSeriesOptions_columnWidth_input': [{ type: core_2.Input, args: ['commonSeriesOptions.columnWidth',] },],
    'commonSeriesOptions_columnSpacing_input': [{ type: core_2.Input, args: ['commonSeriesOptions.columnSpacing',] },],
    'commonSeriesOptions_visibleOnLegend_input': [{ type: core_2.Input, args: ['commonSeriesOptions.visibleOnLegend',] },],
    'commonSeriesOptions_stackingGroup_input': [{ type: core_2.Input, args: ['commonSeriesOptions.stackingGroup',] },],
    'commonSeriesOptions_dashArray_input': [{ type: core_2.Input, args: ['commonSeriesOptions.dashArray',] },],
    'commonSeriesOptions_dataSource_input': [{ type: core_2.Input, args: ['commonSeriesOptions.dataSource',] },],
    'commonSeriesOptions_cardinalSplineTension_input': [{ type: core_2.Input, args: ['commonSeriesOptions.cardinalSplineTension',] },],
    'commonSeriesOptions_doughnutCoefficient_input': [{ type: core_2.Input, args: ['commonSeriesOptions.doughnutCoefficient',] },],
    'commonSeriesOptions_doughnutSize_input': [{ type: core_2.Input, args: ['commonSeriesOptions.doughnutSize',] },],
    'commonSeriesOptions_drawType_input': [{ type: core_2.Input, args: ['commonSeriesOptions.drawType',] },],
    'commonSeriesOptions_enableAnimation_input': [{ type: core_2.Input, args: ['commonSeriesOptions.enableAnimation',] },],
    'commonSeriesOptions_enableSmartLabels_input': [{ type: core_2.Input, args: ['commonSeriesOptions.enableSmartLabels',] },],
    'commonSeriesOptions_endAngle_input': [{ type: core_2.Input, args: ['commonSeriesOptions.endAngle',] },],
    'commonSeriesOptions_explode_input': [{ type: core_2.Input, args: ['commonSeriesOptions.explode',] },],
    'commonSeriesOptions_explodeAll_input': [{ type: core_2.Input, args: ['commonSeriesOptions.explodeAll',] },],
    'commonSeriesOptions_explodeIndex_input': [{ type: core_2.Input, args: ['commonSeriesOptions.explodeIndex',] },],
    'commonSeriesOptions_explodeOffset_input': [{ type: core_2.Input, args: ['commonSeriesOptions.explodeOffset',] },],
    'commonSeriesOptions_fill_input': [{ type: core_2.Input, args: ['commonSeriesOptions.fill',] },],
    'commonSeriesOptions_font_input': [{ type: core_2.Input, args: ['commonSeriesOptions.font',] },],
    'commonSeriesOptions_font_color_input': [{ type: core_2.Input, args: ['commonSeriesOptions.font.color',] },],
    'commonSeriesOptions_font_fontFamily_input': [{ type: core_2.Input, args: ['commonSeriesOptions.font.fontFamily',] },],
    'commonSeriesOptions_font_fontStyle_input': [{ type: core_2.Input, args: ['commonSeriesOptions.font.fontStyle',] },],
    'commonSeriesOptions_font_fontWeight_input': [{ type: core_2.Input, args: ['commonSeriesOptions.font.fontWeight',] },],
    'commonSeriesOptions_font_opacity_input': [{ type: core_2.Input, args: ['commonSeriesOptions.font.opacity',] },],
    'commonSeriesOptions_font_size_input': [{ type: core_2.Input, args: ['commonSeriesOptions.font.size',] },],
    'commonSeriesOptions_funnelHeight_input': [{ type: core_2.Input, args: ['commonSeriesOptions.funnelHeight',] },],
    'commonSeriesOptions_funnelWidth_input': [{ type: core_2.Input, args: ['commonSeriesOptions.funnelWidth',] },],
    'commonSeriesOptions_gapRatio_input': [{ type: core_2.Input, args: ['commonSeriesOptions.gapRatio',] },],
    'commonSeriesOptions_isClosed_input': [{ type: core_2.Input, args: ['commonSeriesOptions.isClosed',] },],
    'commonSeriesOptions_isStacking_input': [{ type: core_2.Input, args: ['commonSeriesOptions.isStacking',] },],
    'commonSeriesOptions_isTransposed_input': [{ type: core_2.Input, args: ['commonSeriesOptions.isTransposed',] },],
    'commonSeriesOptions_showMedian_input': [{ type: core_2.Input, args: ['commonSeriesOptions.showMedian',] },],
    'commonSeriesOptions_labelPosition_input': [{ type: core_2.Input, args: ['commonSeriesOptions.labelPosition',] },],
    'commonSeriesOptions_splitMode_input': [{ type: core_2.Input, args: ['commonSeriesOptions.splitMode',] },],
    'commonSeriesOptions_boxPlotMode_input': [{ type: core_2.Input, args: ['commonSeriesOptions.boxPlotMode',] },],
    'commonSeriesOptions_bubbleOptions_input': [{ type: core_2.Input, args: ['commonSeriesOptions.bubbleOptions',] },],
    'commonSeriesOptions_bubbleOptions_radiusMode_input': [{ type: core_2.Input, args: ['commonSeriesOptions.bubbleOptions.radiusMode',] },],
    'commonSeriesOptions_bubbleOptions_minRadius_input': [{ type: core_2.Input, args: ['commonSeriesOptions.bubbleOptions.minRadius',] },],
    'commonSeriesOptions_bubbleOptions_maxRadius_input': [{ type: core_2.Input, args: ['commonSeriesOptions.bubbleOptions.maxRadius',] },],
    'commonSeriesOptions_splineType_input': [{ type: core_2.Input, args: ['commonSeriesOptions.splineType',] },],
    'commonSeriesOptions_lineCap_input': [{ type: core_2.Input, args: ['commonSeriesOptions.lineCap',] },],
    'commonSeriesOptions_lineJoin_input': [{ type: core_2.Input, args: ['commonSeriesOptions.lineJoin',] },],
    'commonSeriesOptions_marker_input': [{ type: core_2.Input, args: ['commonSeriesOptions.marker',] },],
    'commonSeriesOptions_marker_border_input': [{ type: core_2.Input, args: ['commonSeriesOptions.marker.border',] },],
    'commonSeriesOptions_marker_dataLabel_input': [{ type: core_2.Input, args: ['commonSeriesOptions.marker.dataLabel',] },],
    'commonSeriesOptions_marker_fill_input': [{ type: core_2.Input, args: ['commonSeriesOptions.marker.fill',] },],
    'commonSeriesOptions_marker_imageUrl_input': [{ type: core_2.Input, args: ['commonSeriesOptions.marker.imageUrl',] },],
    'commonSeriesOptions_marker_opacity_input': [{ type: core_2.Input, args: ['commonSeriesOptions.marker.opacity',] },],
    'commonSeriesOptions_marker_shape_input': [{ type: core_2.Input, args: ['commonSeriesOptions.marker.shape',] },],
    'commonSeriesOptions_marker_size_input': [{ type: core_2.Input, args: ['commonSeriesOptions.marker.size',] },],
    'commonSeriesOptions_marker_visible_input': [{ type: core_2.Input, args: ['commonSeriesOptions.marker.visible',] },],
    'commonSeriesOptions_opacity_input': [{ type: core_2.Input, args: ['commonSeriesOptions.opacity',] },],
    'commonSeriesOptions_outlierSettings_input': [{ type: core_2.Input, args: ['commonSeriesOptions.outlierSettings',] },],
    'commonSeriesOptions_outlierSettings_shape_input': [{ type: core_2.Input, args: ['commonSeriesOptions.outlierSettings.shape',] },],
    'commonSeriesOptions_outlierSettings_size_input': [{ type: core_2.Input, args: ['commonSeriesOptions.outlierSettings.size',] },],
    'commonSeriesOptions_palette_input': [{ type: core_2.Input, args: ['commonSeriesOptions.palette',] },],
    'commonSeriesOptions_pieCoefficient_input': [{ type: core_2.Input, args: ['commonSeriesOptions.pieCoefficient',] },],
    'commonSeriesOptions_pieOfPieCoefficient_input': [{ type: core_2.Input, args: ['commonSeriesOptions.pieOfPieCoefficient',] },],
    'commonSeriesOptions_splitValue_input': [{ type: core_2.Input, args: ['commonSeriesOptions.splitValue',] },],
    'commonSeriesOptions_gapWidth_input': [{ type: core_2.Input, args: ['commonSeriesOptions.gapWidth',] },],
    'commonSeriesOptions_pointColorMappingName_input': [{ type: core_2.Input, args: ['commonSeriesOptions.pointColorMappingName',] },],
    'commonSeriesOptions_pyramidMode_input': [{ type: core_2.Input, args: ['commonSeriesOptions.pyramidMode',] },],
    'commonSeriesOptions_startAngle_input': [{ type: core_2.Input, args: ['commonSeriesOptions.startAngle',] },],
    'commonSeriesOptions_cornerRadius_input': [{ type: core_2.Input, args: ['commonSeriesOptions.cornerRadius',] },],
    'commonSeriesOptions_cornerRadius_topLeft_input': [{ type: core_2.Input, args: ['commonSeriesOptions.cornerRadius.topLeft',] },],
    'commonSeriesOptions_cornerRadius_topRight_input': [{ type: core_2.Input, args: ['commonSeriesOptions.cornerRadius.topRight',] },],
    'commonSeriesOptions_cornerRadius_bottomLeft_input': [{ type: core_2.Input, args: ['commonSeriesOptions.cornerRadius.bottomLeft',] },],
    'commonSeriesOptions_cornerRadius_bottomRight_input': [{ type: core_2.Input, args: ['commonSeriesOptions.cornerRadius.bottomRight',] },],
    'commonSeriesOptions_tooltip_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip',] },],
    'commonSeriesOptions_tooltip_border_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip.border',] },],
    'commonSeriesOptions_tooltip_rx_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip.rx',] },],
    'commonSeriesOptions_tooltip_ry_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip.ry',] },],
    'commonSeriesOptions_tooltip_duration_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip.duration',] },],
    'commonSeriesOptions_tooltip_enableAnimation_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip.enableAnimation',] },],
    'commonSeriesOptions_tooltip_fill_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip.fill',] },],
    'commonSeriesOptions_tooltip_format_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip.format',] },],
    'commonSeriesOptions_tooltip_opacity_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip.opacity',] },],
    'commonSeriesOptions_tooltip_template_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip.template',] },],
    'commonSeriesOptions_tooltip_visible_input': [{ type: core_2.Input, args: ['commonSeriesOptions.tooltip.visible',] },],
    'commonSeriesOptions_type_input': [{ type: core_2.Input, args: ['commonSeriesOptions.type',] },],
    'commonSeriesOptions_xAxisName_input': [{ type: core_2.Input, args: ['commonSeriesOptions.xAxisName',] },],
    'commonSeriesOptions_xName_input': [{ type: core_2.Input, args: ['commonSeriesOptions.xName',] },],
    'commonSeriesOptions_yAxisName_input': [{ type: core_2.Input, args: ['commonSeriesOptions.yAxisName',] },],
    'commonSeriesOptions_yName_input': [{ type: core_2.Input, args: ['commonSeriesOptions.yName',] },],
    'commonSeriesOptions_high_input': [{ type: core_2.Input, args: ['commonSeriesOptions.high',] },],
    'commonSeriesOptions_low_input': [{ type: core_2.Input, args: ['commonSeriesOptions.low',] },],
    'commonSeriesOptions_open_input': [{ type: core_2.Input, args: ['commonSeriesOptions.open',] },],
    'commonSeriesOptions_close_input': [{ type: core_2.Input, args: ['commonSeriesOptions.close',] },],
    'commonSeriesOptions_zOrder_input': [{ type: core_2.Input, args: ['commonSeriesOptions.zOrder',] },],
    'commonSeriesOptions_size_input': [{ type: core_2.Input, args: ['commonSeriesOptions.size',] },],
    'commonSeriesOptions_emptyPointSettings_input': [{ type: core_2.Input, args: ['commonSeriesOptions.emptyPointSettings',] },],
    'commonSeriesOptions_emptyPointSettings_visible_input': [{ type: core_2.Input, args: ['commonSeriesOptions.emptyPointSettings.visible',] },],
    'commonSeriesOptions_emptyPointSettings_displayMode_input': [{ type: core_2.Input, args: ['commonSeriesOptions.emptyPointSettings.displayMode',] },],
    'commonSeriesOptions_emptyPointSettings_style_input': [{ type: core_2.Input, args: ['commonSeriesOptions.emptyPointSettings.style',] },],
    'commonSeriesOptions_positiveFill_input': [{ type: core_2.Input, args: ['commonSeriesOptions.positiveFill',] },],
    'commonSeriesOptions_connectorLine_input': [{ type: core_2.Input, args: ['commonSeriesOptions.connectorLine',] },],
    'commonSeriesOptions_connectorLine_width_input': [{ type: core_2.Input, args: ['commonSeriesOptions.connectorLine.width',] },],
    'commonSeriesOptions_connectorLine_color_input': [{ type: core_2.Input, args: ['commonSeriesOptions.connectorLine.color',] },],
    'commonSeriesOptions_connectorLine_dashArray_input': [{ type: core_2.Input, args: ['commonSeriesOptions.connectorLine.dashArray',] },],
    'commonSeriesOptions_connectorLine_opacity_input': [{ type: core_2.Input, args: ['commonSeriesOptions.connectorLine.opacity',] },],
    'commonSeriesOptions_dragSettings_input': [{ type: core_2.Input, args: ['commonSeriesOptions.dragSettings',] },],
    'commonSeriesOptions_dragSettings_enable_input': [{ type: core_2.Input, args: ['commonSeriesOptions.dragSettings.enable',] },],
    'commonSeriesOptions_dragSettings_type_input': [{ type: core_2.Input, args: ['commonSeriesOptions.dragSettings.type',] },],
    'commonSeriesOptions_errorBar_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar',] },],
    'commonSeriesOptions_errorBar_visibility_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.visibility',] },],
    'commonSeriesOptions_errorBar_type_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.type',] },],
    'commonSeriesOptions_errorBar_mode_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.mode',] },],
    'commonSeriesOptions_errorBar_direction_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.direction',] },],
    'commonSeriesOptions_errorBar_verticalErrorValue_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.verticalErrorValue',] },],
    'commonSeriesOptions_errorBar_horizontalErrorValue_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.horizontalErrorValue',] },],
    'commonSeriesOptions_errorBar_horizontalPositiveErrorValue_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.horizontalPositiveErrorValue',] },],
    'commonSeriesOptions_errorBar_horizontalNegativeErrorValue_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.horizontalNegativeErrorValue',] },],
    'commonSeriesOptions_errorBar_verticalPositiveErrorValue_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.verticalPositiveErrorValue',] },],
    'commonSeriesOptions_errorBar_verticalNegativeErrorValue_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.verticalNegativeErrorValue',] },],
    'commonSeriesOptions_errorBar_fill_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.fill',] },],
    'commonSeriesOptions_errorBar_width_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.width',] },],
    'commonSeriesOptions_errorBar_cap_input': [{ type: core_2.Input, args: ['commonSeriesOptions.errorBar.cap',] },],
    'commonSeriesOptions_highlightSettings_input': [{ type: core_2.Input, args: ['commonSeriesOptions.highlightSettings',] },],
    'commonSeriesOptions_highlightSettings_enable_input': [{ type: core_2.Input, args: ['commonSeriesOptions.highlightSettings.enable',] },],
    'commonSeriesOptions_highlightSettings_mode_input': [{ type: core_2.Input, args: ['commonSeriesOptions.highlightSettings.mode',] },],
    'commonSeriesOptions_highlightSettings_color_input': [{ type: core_2.Input, args: ['commonSeriesOptions.highlightSettings.color',] },],
    'commonSeriesOptions_highlightSettings_opacity_input': [{ type: core_2.Input, args: ['commonSeriesOptions.highlightSettings.opacity',] },],
    'commonSeriesOptions_highlightSettings_border_input': [{ type: core_2.Input, args: ['commonSeriesOptions.highlightSettings.border',] },],
    'commonSeriesOptions_highlightSettings_pattern_input': [{ type: core_2.Input, args: ['commonSeriesOptions.highlightSettings.pattern',] },],
    'commonSeriesOptions_highlightSettings_customPattern_input': [{ type: core_2.Input, args: ['commonSeriesOptions.highlightSettings.customPattern',] },],
    'commonSeriesOptions_selectionSettings_input': [{ type: core_2.Input, args: ['commonSeriesOptions.selectionSettings',] },],
    'commonSeriesOptions_selectionSettings_enable_input': [{ type: core_2.Input, args: ['commonSeriesOptions.selectionSettings.enable',] },],
    'commonSeriesOptions_selectionSettings_type_input': [{ type: core_2.Input, args: ['commonSeriesOptions.selectionSettings.type',] },],
    'commonSeriesOptions_selectionSettings_mode_input': [{ type: core_2.Input, args: ['commonSeriesOptions.selectionSettings.mode',] },],
    'commonSeriesOptions_selectionSettings_rangeType_input': [{ type: core_2.Input, args: ['commonSeriesOptions.selectionSettings.rangeType',] },],
    'commonSeriesOptions_selectionSettings_color_input': [{ type: core_2.Input, args: ['commonSeriesOptions.selectionSettings.color',] },],
    'commonSeriesOptions_selectionSettings_opacity_input': [{ type: core_2.Input, args: ['commonSeriesOptions.selectionSettings.opacity',] },],
    'commonSeriesOptions_selectionSettings_border_input': [{ type: core_2.Input, args: ['commonSeriesOptions.selectionSettings.border',] },],
    'commonSeriesOptions_selectionSettings_pattern_input': [{ type: core_2.Input, args: ['commonSeriesOptions.selectionSettings.pattern',] },],
    'commonSeriesOptions_selectionSettings_customPattern_input': [{ type: core_2.Input, args: ['commonSeriesOptions.selectionSettings.customPattern',] },],
    'crosshair_trackballTooltipSettings_input': [{ type: core_2.Input, args: ['crosshair.trackballTooltipSettings',] },],
    'crosshair_trackballTooltipSettings_border_input': [{ type: core_2.Input, args: ['crosshair.trackballTooltipSettings.border',] },],
    'crosshair_trackballTooltipSettings_fill_input': [{ type: core_2.Input, args: ['crosshair.trackballTooltipSettings.fill',] },],
    'crosshair_trackballTooltipSettings_rx_input': [{ type: core_2.Input, args: ['crosshair.trackballTooltipSettings.rx',] },],
    'crosshair_trackballTooltipSettings_ry_input': [{ type: core_2.Input, args: ['crosshair.trackballTooltipSettings.ry',] },],
    'crosshair_trackballTooltipSettings_opacity_input': [{ type: core_2.Input, args: ['crosshair.trackballTooltipSettings.opacity',] },],
    'crosshair_trackballTooltipSettings_mode_input': [{ type: core_2.Input, args: ['crosshair.trackballTooltipSettings.mode',] },],
    'crosshair_marker_input': [{ type: core_2.Input, args: ['crosshair.marker',] },],
    'crosshair_marker_border_input': [{ type: core_2.Input, args: ['crosshair.marker.border',] },],
    'crosshair_marker_opacity_input': [{ type: core_2.Input, args: ['crosshair.marker.opacity',] },],
    'crosshair_marker_size_input': [{ type: core_2.Input, args: ['crosshair.marker.size',] },],
    'crosshair_marker_visible_input': [{ type: core_2.Input, args: ['crosshair.marker.visible',] },],
    'crosshair_line_input': [{ type: core_2.Input, args: ['crosshair.line',] },],
    'crosshair_line_color_input': [{ type: core_2.Input, args: ['crosshair.line.color',] },],
    'crosshair_line_width_input': [{ type: core_2.Input, args: ['crosshair.line.width',] },],
    'crosshair_type_input': [{ type: core_2.Input, args: ['crosshair.type',] },],
    'crosshair_visible_input': [{ type: core_2.Input, args: ['crosshair.visible',] },],
    'legend_alignment_input': [{ type: core_2.Input, args: ['legend.alignment',] },],
    'legend_background_input': [{ type: core_2.Input, args: ['legend.background',] },],
    'legend_border_input': [{ type: core_2.Input, args: ['legend.border',] },],
    'legend_border_color_input': [{ type: core_2.Input, args: ['legend.border.color',] },],
    'legend_border_width_input': [{ type: core_2.Input, args: ['legend.border.width',] },],
    'legend_columnCount_input': [{ type: core_2.Input, args: ['legend.columnCount',] },],
    'legend_enableScrollbar_input': [{ type: core_2.Input, args: ['legend.enableScrollbar',] },],
    'legend_fill_input': [{ type: core_2.Input, args: ['legend.fill',] },],
    'legend_font_input': [{ type: core_2.Input, args: ['legend.font',] },],
    'legend_font_fontFamily_input': [{ type: core_2.Input, args: ['legend.font.fontFamily',] },],
    'legend_font_fontStyle_input': [{ type: core_2.Input, args: ['legend.font.fontStyle',] },],
    'legend_font_fontWeight_input': [{ type: core_2.Input, args: ['legend.font.fontWeight',] },],
    'legend_font_size_input': [{ type: core_2.Input, args: ['legend.font.size',] },],
    'legend_itemPadding_input': [{ type: core_2.Input, args: ['legend.itemPadding',] },],
    'legend_itemStyle_input': [{ type: core_2.Input, args: ['legend.itemStyle',] },],
    'legend_itemStyle_border_input': [{ type: core_2.Input, args: ['legend.itemStyle.border',] },],
    'legend_itemStyle_height_input': [{ type: core_2.Input, args: ['legend.itemStyle.height',] },],
    'legend_itemStyle_width_input': [{ type: core_2.Input, args: ['legend.itemStyle.width',] },],
    'legend_location_input': [{ type: core_2.Input, args: ['legend.location',] },],
    'legend_location_x_input': [{ type: core_2.Input, args: ['legend.location.x',] },],
    'legend_location_y_input': [{ type: core_2.Input, args: ['legend.location.y',] },],
    'legend_opacity_input': [{ type: core_2.Input, args: ['legend.opacity',] },],
    'legend_position_input': [{ type: core_2.Input, args: ['legend.position',] },],
    'legend_rowCount_input': [{ type: core_2.Input, args: ['legend.rowCount',] },],
    'legend_shape_input': [{ type: core_2.Input, args: ['legend.shape',] },],
    'legend_size_input': [{ type: core_2.Input, args: ['legend.size',] },],
    'legend_size_height_input': [{ type: core_2.Input, args: ['legend.size.height',] },],
    'legend_size_width_input': [{ type: core_2.Input, args: ['legend.size.width',] },],
    'legend_title_input': [{ type: core_2.Input, args: ['legend.title',] },],
    'legend_title_font_input': [{ type: core_2.Input, args: ['legend.title.font',] },],
    'legend_title_text_input': [{ type: core_2.Input, args: ['legend.title.text',] },],
    'legend_title_textAlignment_input': [{ type: core_2.Input, args: ['legend.title.textAlignment',] },],
    'legend_textOverflow_input': [{ type: core_2.Input, args: ['legend.textOverflow',] },],
    'legend_textWidth_input': [{ type: core_2.Input, args: ['legend.textWidth',] },],
    'legend_visible_input': [{ type: core_2.Input, args: ['legend.visible',] },],
    'legend_toggleSeriesVisibility_input': [{ type: core_2.Input, args: ['legend.toggleSeriesVisibility',] },],
    'margin_left_input': [{ type: core_2.Input, args: ['margin.left',] },],
    'margin_right_input': [{ type: core_2.Input, args: ['margin.right',] },],
    'margin_top_input': [{ type: core_2.Input, args: ['margin.top',] },],
    'margin_bottom_input': [{ type: core_2.Input, args: ['margin.bottom',] },],
    'primaryXAxis_alternateGridBand_input': [{ type: core_2.Input, args: ['primaryXAxis.alternateGridBand',] },],
    'primaryXAxis_alternateGridBand_even_input': [{ type: core_2.Input, args: ['primaryXAxis.alternateGridBand.even',] },],
    'primaryXAxis_alternateGridBand_odd_input': [{ type: core_2.Input, args: ['primaryXAxis.alternateGridBand.odd',] },],
    'primaryXAxis_crossesAt_input': [{ type: core_2.Input, args: ['primaryXAxis.crossesAt',] },],
    'primaryXAxis_crossesInAxis_input': [{ type: core_2.Input, args: ['primaryXAxis.crossesInAxis',] },],
    'primaryXAxis_isIndexed_input': [{ type: core_2.Input, args: ['primaryXAxis.isIndexed',] },],
    'primaryXAxis_enableAutoIntervalOnZooming_input': [{ type: core_2.Input, args: ['primaryXAxis.enableAutoIntervalOnZooming',] },],
    'primaryXAxis_axisLine_input': [{ type: core_2.Input, args: ['primaryXAxis.axisLine',] },],
    'primaryXAxis_axisLine_dashArray_input': [{ type: core_2.Input, args: ['primaryXAxis.axisLine.dashArray',] },],
    'primaryXAxis_axisLine_offset_input': [{ type: core_2.Input, args: ['primaryXAxis.axisLine.offset',] },],
    'primaryXAxis_axisLine_visible_input': [{ type: core_2.Input, args: ['primaryXAxis.axisLine.visible',] },],
    'primaryXAxis_axisLine_color_input': [{ type: core_2.Input, args: ['primaryXAxis.axisLine.color',] },],
    'primaryXAxis_axisLine_width_input': [{ type: core_2.Input, args: ['primaryXAxis.axisLine.width',] },],
    'primaryXAxis_columnIndex_input': [{ type: core_2.Input, args: ['primaryXAxis.columnIndex',] },],
    'primaryXAxis_columnSpan_input': [{ type: core_2.Input, args: ['primaryXAxis.columnSpan',] },],
    'primaryXAxis_crosshairLabel_input': [{ type: core_2.Input, args: ['primaryXAxis.crosshairLabel',] },],
    'primaryXAxis_crosshairLabel_visible_input': [{ type: core_2.Input, args: ['primaryXAxis.crosshairLabel.visible',] },],
    'primaryXAxis_desiredIntervals_input': [{ type: core_2.Input, args: ['primaryXAxis.desiredIntervals',] },],
    'primaryXAxis_labelPlacement_input': [{ type: core_2.Input, args: ['primaryXAxis.labelPlacement',] },],
    'primaryXAxis_edgeLabelPlacement_input': [{ type: core_2.Input, args: ['primaryXAxis.edgeLabelPlacement',] },],
    'primaryXAxis_enableTrim_input': [{ type: core_2.Input, args: ['primaryXAxis.enableTrim',] },],
    'primaryXAxis_font_input': [{ type: core_2.Input, args: ['primaryXAxis.font',] },],
    'primaryXAxis_font_fontFamily_input': [{ type: core_2.Input, args: ['primaryXAxis.font.fontFamily',] },],
    'primaryXAxis_font_fontStyle_input': [{ type: core_2.Input, args: ['primaryXAxis.font.fontStyle',] },],
    'primaryXAxis_font_fontWeight_input': [{ type: core_2.Input, args: ['primaryXAxis.font.fontWeight',] },],
    'primaryXAxis_font_opacity_input': [{ type: core_2.Input, args: ['primaryXAxis.font.opacity',] },],
    'primaryXAxis_font_size_input': [{ type: core_2.Input, args: ['primaryXAxis.font.size',] },],
    'primaryXAxis_intervalType_input': [{ type: core_2.Input, args: ['primaryXAxis.intervalType',] },],
    'primaryXAxis_isInversed_input': [{ type: core_2.Input, args: ['primaryXAxis.isInversed',] },],
    'primaryXAxis_labelFormat_input': [{ type: core_2.Input, args: ['primaryXAxis.labelFormat',] },],
    'primaryXAxis_labelIntersectAction_input': [{ type: core_2.Input, args: ['primaryXAxis.labelIntersectAction',] },],
    'primaryXAxis_labelPosition_input': [{ type: core_2.Input, args: ['primaryXAxis.labelPosition',] },],
    'primaryXAxis_alignment_input': [{ type: core_2.Input, args: ['primaryXAxis.alignment',] },],
    'primaryXAxis_labelRotation_input': [{ type: core_2.Input, args: ['primaryXAxis.labelRotation',] },],
    'primaryXAxis_logBase_input': [{ type: core_2.Input, args: ['primaryXAxis.logBase',] },],
    'primaryXAxis_majorGridLines_input': [{ type: core_2.Input, args: ['primaryXAxis.majorGridLines',] },],
    'primaryXAxis_majorGridLines_dashArray_input': [{ type: core_2.Input, args: ['primaryXAxis.majorGridLines.dashArray',] },],
    'primaryXAxis_majorGridLines_color_input': [{ type: core_2.Input, args: ['primaryXAxis.majorGridLines.color',] },],
    'primaryXAxis_majorGridLines_opacity_input': [{ type: core_2.Input, args: ['primaryXAxis.majorGridLines.opacity',] },],
    'primaryXAxis_majorGridLines_visible_input': [{ type: core_2.Input, args: ['primaryXAxis.majorGridLines.visible',] },],
    'primaryXAxis_majorGridLines_width_input': [{ type: core_2.Input, args: ['primaryXAxis.majorGridLines.width',] },],
    'primaryXAxis_majorTickLines_input': [{ type: core_2.Input, args: ['primaryXAxis.majorTickLines',] },],
    'primaryXAxis_majorTickLines_size_input': [{ type: core_2.Input, args: ['primaryXAxis.majorTickLines.size',] },],
    'primaryXAxis_majorTickLines_visible_input': [{ type: core_2.Input, args: ['primaryXAxis.majorTickLines.visible',] },],
    'primaryXAxis_majorTickLines_width_input': [{ type: core_2.Input, args: ['primaryXAxis.majorTickLines.width',] },],
    'primaryXAxis_maximumLabels_input': [{ type: core_2.Input, args: ['primaryXAxis.maximumLabels',] },],
    'primaryXAxis_maximumLabelWidth_input': [{ type: core_2.Input, args: ['primaryXAxis.maximumLabelWidth',] },],
    'primaryXAxis_minorGridLines_input': [{ type: core_2.Input, args: ['primaryXAxis.minorGridLines',] },],
    'primaryXAxis_minorGridLines_dashArray_input': [{ type: core_2.Input, args: ['primaryXAxis.minorGridLines.dashArray',] },],
    'primaryXAxis_minorGridLines_visible_input': [{ type: core_2.Input, args: ['primaryXAxis.minorGridLines.visible',] },],
    'primaryXAxis_minorGridLines_width_input': [{ type: core_2.Input, args: ['primaryXAxis.minorGridLines.width',] },],
    'primaryXAxis_minorTickLines_input': [{ type: core_2.Input, args: ['primaryXAxis.minorTickLines',] },],
    'primaryXAxis_minorTickLines_size_input': [{ type: core_2.Input, args: ['primaryXAxis.minorTickLines.size',] },],
    'primaryXAxis_minorTickLines_visible_input': [{ type: core_2.Input, args: ['primaryXAxis.minorTickLines.visible',] },],
    'primaryXAxis_minorTickLines_width_input': [{ type: core_2.Input, args: ['primaryXAxis.minorTickLines.width',] },],
    'primaryXAxis_minorTicksPerInterval_input': [{ type: core_2.Input, args: ['primaryXAxis.minorTicksPerInterval',] },],
    'primaryXAxis_name_input': [{ type: core_2.Input, args: ['primaryXAxis.name',] },],
    'primaryXAxis_opposedPosition_input': [{ type: core_2.Input, args: ['primaryXAxis.opposedPosition',] },],
    'primaryXAxis_orientation_input': [{ type: core_2.Input, args: ['primaryXAxis.orientation',] },],
    'primaryXAxis_plotOffset_input': [{ type: core_2.Input, args: ['primaryXAxis.plotOffset',] },],
    'primaryXAxis_range_input': [{ type: core_2.Input, args: ['primaryXAxis.range',] },],
    'primaryXAxis_range_min_input': [{ type: core_2.Input, args: ['primaryXAxis.range.min',] },],
    'primaryXAxis_range_max_input': [{ type: core_2.Input, args: ['primaryXAxis.range.max',] },],
    'primaryXAxis_range_interval_input': [{ type: core_2.Input, args: ['primaryXAxis.range.interval',] },],
    'primaryXAxis_rangePadding_input': [{ type: core_2.Input, args: ['primaryXAxis.rangePadding',] },],
    'primaryXAxis_roundingPlaces_input': [{ type: core_2.Input, args: ['primaryXAxis.roundingPlaces',] },],
    'primaryXAxis_showNextToAxisLine_input': [{ type: core_2.Input, args: ['primaryXAxis.showNextToAxisLine',] },],
    'primaryXAxis_tickLinesPosition_input': [{ type: core_2.Input, args: ['primaryXAxis.tickLinesPosition',] },],
    'primaryXAxis_labelBorder_input': [{ type: core_2.Input, args: ['primaryXAxis.labelBorder',] },],
    'primaryXAxis_labelBorder_color_input': [{ type: core_2.Input, args: ['primaryXAxis.labelBorder.color',] },],
    'primaryXAxis_labelBorder_width_input': [{ type: core_2.Input, args: ['primaryXAxis.labelBorder.width',] },],
    'primaryXAxis_title_input': [{ type: core_2.Input, args: ['primaryXAxis.title',] },],
    'primaryXAxis_title_enableTrim_input': [{ type: core_2.Input, args: ['primaryXAxis.title.enableTrim',] },],
    'primaryXAxis_title_font_input': [{ type: core_2.Input, args: ['primaryXAxis.title.font',] },],
    'primaryXAxis_title_maximumTitleWidth_input': [{ type: core_2.Input, args: ['primaryXAxis.title.maximumTitleWidth',] },],
    'primaryXAxis_title_text_input': [{ type: core_2.Input, args: ['primaryXAxis.title.text',] },],
    'primaryXAxis_title_visible_input': [{ type: core_2.Input, args: ['primaryXAxis.title.visible',] },],
    'primaryXAxis_title_offset_input': [{ type: core_2.Input, args: ['primaryXAxis.title.offset',] },],
    'primaryXAxis_title_position_input': [{ type: core_2.Input, args: ['primaryXAxis.title.position',] },],
    'primaryXAxis_title_alignment_input': [{ type: core_2.Input, args: ['primaryXAxis.title.alignment',] },],
    'primaryXAxis_valueType_input': [{ type: core_2.Input, args: ['primaryXAxis.valueType',] },],
    'primaryXAxis_visible_input': [{ type: core_2.Input, args: ['primaryXAxis.visible',] },],
    'primaryXAxis_zoomFactor_input': [{ type: core_2.Input, args: ['primaryXAxis.zoomFactor',] },],
    'primaryXAxis_zoomPosition_input': [{ type: core_2.Input, args: ['primaryXAxis.zoomPosition',] },],
    'primaryXAxis_scrollbarSettings_input': [{ type: core_2.Input, args: ['primaryXAxis.scrollbarSettings',] },],
    'primaryXAxis_scrollbarSettings_visible_input': [{ type: core_2.Input, args: ['primaryXAxis.scrollbarSettings.visible',] },],
    'primaryXAxis_scrollbarSettings_canResize_input': [{ type: core_2.Input, args: ['primaryXAxis.scrollbarSettings.canResize',] },],
    'primaryXAxis_scrollbarSettings_range_input': [{ type: core_2.Input, args: ['primaryXAxis.scrollbarSettings.range',] },],
    'primaryXAxis_scrollbarSettings_pointsLength_input': [{ type: core_2.Input, args: ['primaryXAxis.scrollbarSettings.pointsLength',] },],
    'primaryYAxis_alternateGridBand_input': [{ type: core_2.Input, args: ['primaryYAxis.alternateGridBand',] },],
    'primaryYAxis_alternateGridBand_even_input': [{ type: core_2.Input, args: ['primaryYAxis.alternateGridBand.even',] },],
    'primaryYAxis_alternateGridBand_odd_input': [{ type: core_2.Input, args: ['primaryYAxis.alternateGridBand.odd',] },],
    'primaryYAxis_enableAutoIntervalOnZooming_input': [{ type: core_2.Input, args: ['primaryYAxis.enableAutoIntervalOnZooming',] },],
    'primaryYAxis_axisLine_input': [{ type: core_2.Input, args: ['primaryYAxis.axisLine',] },],
    'primaryYAxis_axisLine_dashArray_input': [{ type: core_2.Input, args: ['primaryYAxis.axisLine.dashArray',] },],
    'primaryYAxis_axisLine_offset_input': [{ type: core_2.Input, args: ['primaryYAxis.axisLine.offset',] },],
    'primaryYAxis_axisLine_visible_input': [{ type: core_2.Input, args: ['primaryYAxis.axisLine.visible',] },],
    'primaryYAxis_axisLine_color_input': [{ type: core_2.Input, args: ['primaryYAxis.axisLine.color',] },],
    'primaryYAxis_axisLine_width_input': [{ type: core_2.Input, args: ['primaryYAxis.axisLine.width',] },],
    'primaryYAxis_crossesAt_input': [{ type: core_2.Input, args: ['primaryYAxis.crossesAt',] },],
    'primaryYAxis_crossesInAxis_input': [{ type: core_2.Input, args: ['primaryYAxis.crossesInAxis',] },],
    'primaryYAxis_crosshairLabel_input': [{ type: core_2.Input, args: ['primaryYAxis.crosshairLabel',] },],
    'primaryYAxis_crosshairLabel_visible_input': [{ type: core_2.Input, args: ['primaryYAxis.crosshairLabel.visible',] },],
    'primaryYAxis_desiredIntervals_input': [{ type: core_2.Input, args: ['primaryYAxis.desiredIntervals',] },],
    'primaryYAxis_labelPlacement_input': [{ type: core_2.Input, args: ['primaryYAxis.labelPlacement',] },],
    'primaryYAxis_edgeLabelPlacement_input': [{ type: core_2.Input, args: ['primaryYAxis.edgeLabelPlacement',] },],
    'primaryYAxis_enableTrim_input': [{ type: core_2.Input, args: ['primaryYAxis.enableTrim',] },],
    'primaryYAxis_font_input': [{ type: core_2.Input, args: ['primaryYAxis.font',] },],
    'primaryYAxis_font_fontFamily_input': [{ type: core_2.Input, args: ['primaryYAxis.font.fontFamily',] },],
    'primaryYAxis_font_fontStyle_input': [{ type: core_2.Input, args: ['primaryYAxis.font.fontStyle',] },],
    'primaryYAxis_font_fontWeight_input': [{ type: core_2.Input, args: ['primaryYAxis.font.fontWeight',] },],
    'primaryYAxis_font_opacity_input': [{ type: core_2.Input, args: ['primaryYAxis.font.opacity',] },],
    'primaryYAxis_font_size_input': [{ type: core_2.Input, args: ['primaryYAxis.font.size',] },],
    'primaryYAxis_intervalType_input': [{ type: core_2.Input, args: ['primaryYAxis.intervalType',] },],
    'primaryYAxis_isInversed_input': [{ type: core_2.Input, args: ['primaryYAxis.isInversed',] },],
    'primaryYAxis_labelFormat_input': [{ type: core_2.Input, args: ['primaryYAxis.labelFormat',] },],
    'primaryYAxis_labelIntersectAction_input': [{ type: core_2.Input, args: ['primaryYAxis.labelIntersectAction',] },],
    'primaryYAxis_labelPosition_input': [{ type: core_2.Input, args: ['primaryYAxis.labelPosition',] },],
    'primaryYAxis_alignment_input': [{ type: core_2.Input, args: ['primaryYAxis.alignment',] },],
    'primaryYAxis_logBase_input': [{ type: core_2.Input, args: ['primaryYAxis.logBase',] },],
    'primaryYAxis_majorGridLines_input': [{ type: core_2.Input, args: ['primaryYAxis.majorGridLines',] },],
    'primaryYAxis_majorGridLines_dashArray_input': [{ type: core_2.Input, args: ['primaryYAxis.majorGridLines.dashArray',] },],
    'primaryYAxis_majorGridLines_color_input': [{ type: core_2.Input, args: ['primaryYAxis.majorGridLines.color',] },],
    'primaryYAxis_majorGridLines_opacity_input': [{ type: core_2.Input, args: ['primaryYAxis.majorGridLines.opacity',] },],
    'primaryYAxis_majorGridLines_visible_input': [{ type: core_2.Input, args: ['primaryYAxis.majorGridLines.visible',] },],
    'primaryYAxis_majorGridLines_width_input': [{ type: core_2.Input, args: ['primaryYAxis.majorGridLines.width',] },],
    'primaryYAxis_majorTickLines_input': [{ type: core_2.Input, args: ['primaryYAxis.majorTickLines',] },],
    'primaryYAxis_majorTickLines_size_input': [{ type: core_2.Input, args: ['primaryYAxis.majorTickLines.size',] },],
    'primaryYAxis_majorTickLines_visible_input': [{ type: core_2.Input, args: ['primaryYAxis.majorTickLines.visible',] },],
    'primaryYAxis_majorTickLines_width_input': [{ type: core_2.Input, args: ['primaryYAxis.majorTickLines.width',] },],
    'primaryYAxis_maximumLabels_input': [{ type: core_2.Input, args: ['primaryYAxis.maximumLabels',] },],
    'primaryYAxis_maximumLabelWidth_input': [{ type: core_2.Input, args: ['primaryYAxis.maximumLabelWidth',] },],
    'primaryYAxis_minorGridLines_input': [{ type: core_2.Input, args: ['primaryYAxis.minorGridLines',] },],
    'primaryYAxis_minorGridLines_dashArray_input': [{ type: core_2.Input, args: ['primaryYAxis.minorGridLines.dashArray',] },],
    'primaryYAxis_minorGridLines_visible_input': [{ type: core_2.Input, args: ['primaryYAxis.minorGridLines.visible',] },],
    'primaryYAxis_minorGridLines_width_input': [{ type: core_2.Input, args: ['primaryYAxis.minorGridLines.width',] },],
    'primaryYAxis_minorTickLines_input': [{ type: core_2.Input, args: ['primaryYAxis.minorTickLines',] },],
    'primaryYAxis_minorTickLines_size_input': [{ type: core_2.Input, args: ['primaryYAxis.minorTickLines.size',] },],
    'primaryYAxis_minorTickLines_visible_input': [{ type: core_2.Input, args: ['primaryYAxis.minorTickLines.visible',] },],
    'primaryYAxis_minorTickLines_width_input': [{ type: core_2.Input, args: ['primaryYAxis.minorTickLines.width',] },],
    'primaryYAxis_minorTicksPerInterval_input': [{ type: core_2.Input, args: ['primaryYAxis.minorTicksPerInterval',] },],
    'primaryYAxis_name_input': [{ type: core_2.Input, args: ['primaryYAxis.name',] },],
    'primaryYAxis_opposedPosition_input': [{ type: core_2.Input, args: ['primaryYAxis.opposedPosition',] },],
    'primaryYAxis_orientation_input': [{ type: core_2.Input, args: ['primaryYAxis.orientation',] },],
    'primaryYAxis_plotOffset_input': [{ type: core_2.Input, args: ['primaryYAxis.plotOffset',] },],
    'primaryYAxis_range_input': [{ type: core_2.Input, args: ['primaryYAxis.range',] },],
    'primaryYAxis_range_min_input': [{ type: core_2.Input, args: ['primaryYAxis.range.min',] },],
    'primaryYAxis_range_max_input': [{ type: core_2.Input, args: ['primaryYAxis.range.max',] },],
    'primaryYAxis_range_interval_input': [{ type: core_2.Input, args: ['primaryYAxis.range.interval',] },],
    'primaryYAxis_rangePadding_input': [{ type: core_2.Input, args: ['primaryYAxis.rangePadding',] },],
    'primaryYAxis_roundingPlaces_input': [{ type: core_2.Input, args: ['primaryYAxis.roundingPlaces',] },],
    'primaryYAxis_rowIndex_input': [{ type: core_2.Input, args: ['primaryYAxis.rowIndex',] },],
    'primaryYAxis_rowSpan_input': [{ type: core_2.Input, args: ['primaryYAxis.rowSpan',] },],
    'primaryYAxis_showNextToAxisLine_input': [{ type: core_2.Input, args: ['primaryYAxis.showNextToAxisLine',] },],
    'primaryYAxis_scrollbarSettings_input': [{ type: core_2.Input, args: ['primaryYAxis.scrollbarSettings',] },],
    'primaryYAxis_scrollbarSettings_visible_input': [{ type: core_2.Input, args: ['primaryYAxis.scrollbarSettings.visible',] },],
    'primaryYAxis_scrollbarSettings_canResize_input': [{ type: core_2.Input, args: ['primaryYAxis.scrollbarSettings.canResize',] },],
    'primaryYAxis_scrollbarSettings_range_input': [{ type: core_2.Input, args: ['primaryYAxis.scrollbarSettings.range',] },],
    'primaryYAxis_scrollbarSettings_pointsLength_input': [{ type: core_2.Input, args: ['primaryYAxis.scrollbarSettings.pointsLength',] },],
    'primaryYAxis_tickLinesPosition_input': [{ type: core_2.Input, args: ['primaryYAxis.tickLinesPosition',] },],
    'primaryYAxis_labelBorder_input': [{ type: core_2.Input, args: ['primaryYAxis.labelBorder',] },],
    'primaryYAxis_labelBorder_color_input': [{ type: core_2.Input, args: ['primaryYAxis.labelBorder.color',] },],
    'primaryYAxis_labelBorder_width_input': [{ type: core_2.Input, args: ['primaryYAxis.labelBorder.width',] },],
    'primaryYAxis_title_input': [{ type: core_2.Input, args: ['primaryYAxis.title',] },],
    'primaryYAxis_title_enableTrim_input': [{ type: core_2.Input, args: ['primaryYAxis.title.enableTrim',] },],
    'primaryYAxis_title_font_input': [{ type: core_2.Input, args: ['primaryYAxis.title.font',] },],
    'primaryYAxis_title_maximumTitleWidth_input': [{ type: core_2.Input, args: ['primaryYAxis.title.maximumTitleWidth',] },],
    'primaryYAxis_title_text_input': [{ type: core_2.Input, args: ['primaryYAxis.title.text',] },],
    'primaryYAxis_title_visible_input': [{ type: core_2.Input, args: ['primaryYAxis.title.visible',] },],
    'primaryYAxis_title_offset_input': [{ type: core_2.Input, args: ['primaryYAxis.title.offset',] },],
    'primaryYAxis_title_position_input': [{ type: core_2.Input, args: ['primaryYAxis.title.position',] },],
    'primaryYAxis_title_alignment_input': [{ type: core_2.Input, args: ['primaryYAxis.title.alignment',] },],
    'primaryYAxis_valueType_input': [{ type: core_2.Input, args: ['primaryYAxis.valueType',] },],
    'primaryYAxis_visible_input': [{ type: core_2.Input, args: ['primaryYAxis.visible',] },],
    'primaryYAxis_zoomFactor_input': [{ type: core_2.Input, args: ['primaryYAxis.zoomFactor',] },],
    'primaryYAxis_zoomPosition_input': [{ type: core_2.Input, args: ['primaryYAxis.zoomPosition',] },],
    'size_height_input': [{ type: core_2.Input, args: ['size.height',] },],
    'size_width_input': [{ type: core_2.Input, args: ['size.width',] },],
    'title_background_input': [{ type: core_2.Input, args: ['title.background',] },],
    'title_border_input': [{ type: core_2.Input, args: ['title.border',] },],
    'title_border_width_input': [{ type: core_2.Input, args: ['title.border.width',] },],
    'title_border_color_input': [{ type: core_2.Input, args: ['title.border.color',] },],
    'title_border_opacity_input': [{ type: core_2.Input, args: ['title.border.opacity',] },],
    'title_border_cornerRadius_input': [{ type: core_2.Input, args: ['title.border.cornerRadius',] },],
    'title_font_input': [{ type: core_2.Input, args: ['title.font',] },],
    'title_font_fontFamily_input': [{ type: core_2.Input, args: ['title.font.fontFamily',] },],
    'title_font_fontStyle_input': [{ type: core_2.Input, args: ['title.font.fontStyle',] },],
    'title_font_fontWeight_input': [{ type: core_2.Input, args: ['title.font.fontWeight',] },],
    'title_font_opacity_input': [{ type: core_2.Input, args: ['title.font.opacity',] },],
    'title_font_size_input': [{ type: core_2.Input, args: ['title.font.size',] },],
    'title_visible_input': [{ type: core_2.Input, args: ['title.visible',] },],
    'title_enableTrim_input': [{ type: core_2.Input, args: ['title.enableTrim',] },],
    'title_maximumWidth_input': [{ type: core_2.Input, args: ['title.maximumWidth',] },],
    'title_textOverflow_input': [{ type: core_2.Input, args: ['title.textOverflow',] },],
    'title_subTitle_input': [{ type: core_2.Input, args: ['title.subTitle',] },],
    'title_subTitle_font_input': [{ type: core_2.Input, args: ['title.subTitle.font',] },],
    'title_subTitle_background_input': [{ type: core_2.Input, args: ['title.subTitle.background',] },],
    'title_subTitle_border_input': [{ type: core_2.Input, args: ['title.subTitle.border',] },],
    'title_subTitle_text_input': [{ type: core_2.Input, args: ['title.subTitle.text',] },],
    'title_subTitle_textAlignment_input': [{ type: core_2.Input, args: ['title.subTitle.textAlignment',] },],
    'title_subTitle_visible_input': [{ type: core_2.Input, args: ['title.subTitle.visible',] },],
    'title_subTitle_enableTrim_input': [{ type: core_2.Input, args: ['title.subTitle.enableTrim',] },],
    'title_subTitle_maximumWidth_input': [{ type: core_2.Input, args: ['title.subTitle.maximumWidth',] },],
    'title_subTitle_textOverflow_input': [{ type: core_2.Input, args: ['title.subTitle.textOverflow',] },],
    'title_text_input': [{ type: core_2.Input, args: ['title.text',] },],
    'title_textAlignment_input': [{ type: core_2.Input, args: ['title.textAlignment',] },],
    'zooming_enable_input': [{ type: core_2.Input, args: ['zooming.enable',] },],
    'zooming_enablePinching_input': [{ type: core_2.Input, args: ['zooming.enablePinching',] },],
    'zooming_enableDeferredZoom_input': [{ type: core_2.Input, args: ['zooming.enableDeferredZoom',] },],
    'zooming_enableMouseWheel_input': [{ type: core_2.Input, args: ['zooming.enableMouseWheel',] },],
    'zooming_type_input': [{ type: core_2.Input, args: ['zooming.type',] },],
    'zooming_enableScrollbar_input': [{ type: core_2.Input, args: ['zooming.enableScrollbar',] },],
    'zooming_toolbarItems_input': [{ type: core_2.Input, args: ['zooming.toolbarItems',] },],
    'annotations_input': [{ type: core_2.Input, args: ['annotations',] },],
    'columnDefinitions_input': [{ type: core_2.Input, args: ['columnDefinitions',] },],
    'indicators_input': [{ type: core_2.Input, args: ['indicators',] },],
    'axes_input': [{ type: core_2.Input, args: ['axes',] },],
    'rowDefinitions_input': [{ type: core_2.Input, args: ['rowDefinitions',] },],
    'series_input': [{ type: core_2.Input, args: ['series',] },],
    'commonSeriesOptions_trendlines_input': [{ type: core_2.Input, args: ['commonSeriesOptions.trendlines',] },],
    'primaryXAxis_multiLevelLabels_input': [{ type: core_2.Input, args: ['primaryXAxis.multiLevelLabels',] },],
    'primaryXAxis_stripLine_input': [{ type: core_2.Input, args: ['primaryXAxis.stripLine',] },],
    'primaryYAxis_multiLevelLabels_input': [{ type: core_2.Input, args: ['primaryYAxis.multiLevelLabels',] },],
    'primaryYAxis_stripLine_input': [{ type: core_2.Input, args: ['primaryYAxis.stripLine',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'animationComplete_output': [{ type: core_2.Output, args: ['animationComplete',] },],
    'axesLabelRendering_output': [{ type: core_2.Output, args: ['axesLabelRendering',] },],
    'axesLabelsInitialize_output': [{ type: core_2.Output, args: ['axesLabelsInitialize',] },],
    'axesRangeCalculate_output': [{ type: core_2.Output, args: ['axesRangeCalculate',] },],
    'axesTitleRendering_output': [{ type: core_2.Output, args: ['axesTitleRendering',] },],
    'chartAreaBoundsCalculate_output': [{ type: core_2.Output, args: ['chartAreaBoundsCalculate',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'displayTextRendering_output': [{ type: core_2.Output, args: ['displayTextRendering',] },],
    'legendBoundsCalculate_output': [{ type: core_2.Output, args: ['legendBoundsCalculate',] },],
    'legendItemClick_output': [{ type: core_2.Output, args: ['legendItemClick',] },],
    'legendItemMouseMove_output': [{ type: core_2.Output, args: ['legendItemMouseMove',] },],
    'legendItemRendering_output': [{ type: core_2.Output, args: ['legendItemRendering',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'zoomed_output': [{ type: core_2.Output, args: ['zoomed',] },],
    'rangeSelected_output': [{ type: core_2.Output, args: ['rangeSelected',] },],
    'pointRegionClick_output': [{ type: core_2.Output, args: ['pointRegionClick',] },],
    'pointRegionMouseMove_output': [{ type: core_2.Output, args: ['pointRegionMouseMove',] },],
    'preRender_output': [{ type: core_2.Output, args: ['preRender',] },],
    'seriesRegionClick_output': [{ type: core_2.Output, args: ['seriesRegionClick',] },],
    'seriesRendering_output': [{ type: core_2.Output, args: ['seriesRendering',] },],
    'symbolRendering_output': [{ type: core_2.Output, args: ['symbolRendering',] },],
    'titleRendering_output': [{ type: core_2.Output, args: ['titleRendering',] },],
    'toolTipInitialize_output': [{ type: core_2.Output, args: ['toolTipInitialize',] },],
    'trackAxisToolTip_output': [{ type: core_2.Output, args: ['trackAxisToolTip',] },],
    'trackToolTip_output': [{ type: core_2.Output, args: ['trackToolTip',] },],
    'axisLabelClick_output': [{ type: core_2.Output, args: ['axisLabelClick',] },],
    'axisLabelMouseMove_output': [{ type: core_2.Output, args: ['axisLabelMouseMove',] },],
    'chartClick_output': [{ type: core_2.Output, args: ['chartClick',] },],
    'multiLevelLabelClick_output': [{ type: core_2.Output, args: ['multiLevelLabelClick',] },],
    'chartMouseMove_output': [{ type: core_2.Output, args: ['chartMouseMove',] },],
    'chartDoubleClick_output': [{ type: core_2.Output, args: ['chartDoubleClick',] },],
    'chartMouseLeave_output': [{ type: core_2.Output, args: ['chartMouseLeave',] },],
    'annotationClick_output': [{ type: core_2.Output, args: ['annotationClick',] },],
    'afterResize_output': [{ type: core_2.Output, args: ['afterResize',] },],
    'beforeResize_output': [{ type: core_2.Output, args: ['beforeResize',] },],
    'errorBarRendering_output': [{ type: core_2.Output, args: ['errorBarRendering',] },],
    'multiLevelLabelRendering_output': [{ type: core_2.Output, args: ['multiLevelLabelRendering',] },],
    'trendlineRendering_output': [{ type: core_2.Output, args: ['trendlineRendering',] },],
    'scrollChanged_output': [{ type: core_2.Output, args: ['scrollChanged',] },],
    'scrollStart_output': [{ type: core_2.Output, args: ['scrollStart',] },],
    'scrollEnd_output': [{ type: core_2.Output, args: ['scrollEnd',] },],
    'dragStart_output': [{ type: core_2.Output, args: ['dragStart',] },],
    'dragging_output': [{ type: core_2.Output, args: ['dragging',] },],
    'dragEnd_output': [{ type: core_2.Output, args: ['dragEnd',] },],
    'subTitleRendering_output': [{ type: core_2.Output, args: ['subTitleRendering',] },],
    'tag_series': [{ type: core_2.ContentChild, args: [ChartSeriesCollectionDirective,] },],
    'tag_indicators': [{ type: core_2.ContentChild, args: [ChartIndicatorsDirective,] },],
    'tag_annotations': [{ type: core_2.ContentChild, args: [ChartAnnotationsDirective,] },],
    'tag_primaryXAxis_stripLine': [{ type: core_2.ContentChild, args: [ChartPrimaryXAxisStripLineCollectionDirective,] },],
    'tag_primaryYAxis_stripLine': [{ type: core_2.ContentChild, args: [ChartPrimaryYAxisStripLineCollectionDirective,] },],
    'tag_rowDefinitions': [{ type: core_2.ContentChild, args: [ChartRowDefinitionsDirective,] },],
    'tag_columnDefinitions': [{ type: core_2.ContentChild, args: [ChartColumnDefinitionsDirective,] },],
};
exports.ChartComponent = ChartComponent;
exports.EJ_CHART_COMPONENTS = [ChartComponent,
    ChartTrendlinesDirective, ChartPointsDirective, ChartSeriesCollectionDirective, ChartIndicatorsDirective, ChartAnnotationsDirective, ChartPrimaryXAxisStripLineCollectionDirective, ChartPrimaryYAxisStripLineCollectionDirective, ChartRowDefinitionsDirective, ChartColumnDefinitionsDirective, ChartTrendlineDirective, ChartPointDirective, ChartSeriesDirective, ChartIndicatorDirective, ChartAnnotationDirective, ChartPrimaryXAxisStripLineDirective, ChartPrimaryYAxisStripLineDirective, ChartRowDefinitionDirective, ChartColumnDefinitionDirective];
//# sourceMappingURL=chart.component.js.map
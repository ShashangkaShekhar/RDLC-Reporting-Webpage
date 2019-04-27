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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.map.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var MapLayerDirective = (function (_super) {
    __extends(MapLayerDirective, _super);
    function MapLayerDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return MapLayerDirective;
}(core_1.ComplexTagElement));
MapLayerDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-layers>e-layer',
            },] },
];
/** @nocollapse */
MapLayerDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return MapComponent; }),] },] },
]; };
MapLayerDirective.propDecorators = {
    'bingMapType': [{ type: core_2.Input, args: ['bingMapType',] },],
    'bubbleSettings': [{ type: core_2.Input, args: ['bubbleSettings',] },],
    'bubbleSettings_bubbleOpacity': [{ type: core_2.Input, args: ['bubbleSettings.bubbleOpacity',] },],
    'bubbleSettings_color': [{ type: core_2.Input, args: ['bubbleSettings.color',] },],
    'bubbleSettings_colorMappings': [{ type: core_2.Input, args: ['bubbleSettings.colorMappings',] },],
    'bubbleSettings_colorMappings_rangeColorMapping': [{ type: core_2.Input, args: ['bubbleSettings.colorMappings.rangeColorMapping',] },],
    'bubbleSettings_colorValuePath': [{ type: core_2.Input, args: ['bubbleSettings.colorValuePath',] },],
    'bubbleSettings_maxValue': [{ type: core_2.Input, args: ['bubbleSettings.maxValue',] },],
    'bubbleSettings_minValue': [{ type: core_2.Input, args: ['bubbleSettings.minValue',] },],
    'bubbleSettings_showBubble': [{ type: core_2.Input, args: ['bubbleSettings.showBubble',] },],
    'bubbleSettings_showTooltip': [{ type: core_2.Input, args: ['bubbleSettings.showTooltip',] },],
    'bubbleSettings_tooltipTemplate': [{ type: core_2.Input, args: ['bubbleSettings.tooltipTemplate',] },],
    'bubbleSettings_valuePath': [{ type: core_2.Input, args: ['bubbleSettings.valuePath',] },],
    'dataSource': [{ type: core_2.Input, args: ['dataSource',] },],
    'shapeDataPath': [{ type: core_2.Input, args: ['shapeDataPath',] },],
    'shapePropertyPath': [{ type: core_2.Input, args: ['shapePropertyPath',] },],
    'enableMouseHover': [{ type: core_2.Input, args: ['enableMouseHover',] },],
    'enableSelection': [{ type: core_2.Input, args: ['enableSelection',] },],
    'key': [{ type: core_2.Input, args: ['key',] },],
    'labelSettings': [{ type: core_2.Input, args: ['labelSettings',] },],
    'labelSettings_enableSmartLabel': [{ type: core_2.Input, args: ['labelSettings.enableSmartLabel',] },],
    'labelSettings_labelLength': [{ type: core_2.Input, args: ['labelSettings.labelLength',] },],
    'labelSettings_labelPath': [{ type: core_2.Input, args: ['labelSettings.labelPath',] },],
    'labelSettings_showLabels': [{ type: core_2.Input, args: ['labelSettings.showLabels',] },],
    'labelSettings_smartLabelSize': [{ type: core_2.Input, args: ['labelSettings.smartLabelSize',] },],
    'geometryType': [{ type: core_2.Input, args: ['geometryType',] },],
    'layerType': [{ type: core_2.Input, args: ['layerType',] },],
    'legendSettings': [{ type: core_2.Input, args: ['legendSettings',] },],
    'legendSettings_dockOnMap': [{ type: core_2.Input, args: ['legendSettings.dockOnMap',] },],
    'legendSettings_dockPosition': [{ type: core_2.Input, args: ['legendSettings.dockPosition',] },],
    'legendSettings_height': [{ type: core_2.Input, args: ['legendSettings.height',] },],
    'legendSettings_icon': [{ type: core_2.Input, args: ['legendSettings.icon',] },],
    'legendSettings_iconHeight': [{ type: core_2.Input, args: ['legendSettings.iconHeight',] },],
    'legendSettings_iconWidth': [{ type: core_2.Input, args: ['legendSettings.iconWidth',] },],
    'legendSettings_labelOrientation': [{ type: core_2.Input, args: ['legendSettings.labelOrientation',] },],
    'legendSettings_leftLabel': [{ type: core_2.Input, args: ['legendSettings.leftLabel',] },],
    'legendSettings_mode': [{ type: core_2.Input, args: ['legendSettings.mode',] },],
    'legendSettings_position': [{ type: core_2.Input, args: ['legendSettings.position',] },],
    'legendSettings_positionX': [{ type: core_2.Input, args: ['legendSettings.positionX',] },],
    'legendSettings_positionY': [{ type: core_2.Input, args: ['legendSettings.positionY',] },],
    'legendSettings_rightLabel': [{ type: core_2.Input, args: ['legendSettings.rightLabel',] },],
    'legendSettings_showLabels': [{ type: core_2.Input, args: ['legendSettings.showLabels',] },],
    'legendSettings_showLegend': [{ type: core_2.Input, args: ['legendSettings.showLegend',] },],
    'legendSettings_title': [{ type: core_2.Input, args: ['legendSettings.title',] },],
    'legendSettings_type': [{ type: core_2.Input, args: ['legendSettings.type',] },],
    'legendSettings_width': [{ type: core_2.Input, args: ['legendSettings.width',] },],
    'mapItemsTemplate': [{ type: core_2.Input, args: ['mapItemsTemplate',] },],
    'markers': [{ type: core_2.Input, args: ['markers',] },],
    'markerTemplate': [{ type: core_2.Input, args: ['markerTemplate',] },],
    'selectedMapShapes': [{ type: core_2.Input, args: ['selectedMapShapes',] },],
    'selectionMode': [{ type: core_2.Input, args: ['selectionMode',] },],
    'shapeData': [{ type: core_2.Input, args: ['shapeData',] },],
    'shapeSettings': [{ type: core_2.Input, args: ['shapeSettings',] },],
    'shapeSettings_autoFill': [{ type: core_2.Input, args: ['shapeSettings.autoFill',] },],
    'shapeSettings_colorMappings': [{ type: core_2.Input, args: ['shapeSettings.colorMappings',] },],
    'shapeSettings_colorMappings_rangeColorMapping': [{ type: core_2.Input, args: ['shapeSettings.colorMappings.rangeColorMapping',] },],
    'shapeSettings_colorMappings_equalColorMapping': [{ type: core_2.Input, args: ['shapeSettings.colorMappings.equalColorMapping',] },],
    'shapeSettings_colorPalette': [{ type: core_2.Input, args: ['shapeSettings.colorPalette',] },],
    'shapeSettings_colorValuePath': [{ type: core_2.Input, args: ['shapeSettings.colorValuePath',] },],
    'shapeSettings_enableGradient': [{ type: core_2.Input, args: ['shapeSettings.enableGradient',] },],
    'shapeSettings_fill': [{ type: core_2.Input, args: ['shapeSettings.fill',] },],
    'shapeSettings_highlightBorderWidth': [{ type: core_2.Input, args: ['shapeSettings.highlightBorderWidth',] },],
    'shapeSettings_highlightColor': [{ type: core_2.Input, args: ['shapeSettings.highlightColor',] },],
    'shapeSettings_highlightStroke': [{ type: core_2.Input, args: ['shapeSettings.highlightStroke',] },],
    'shapeSettings_selectionColor': [{ type: core_2.Input, args: ['shapeSettings.selectionColor',] },],
    'shapeSettings_selectionStroke': [{ type: core_2.Input, args: ['shapeSettings.selectionStroke',] },],
    'shapeSettings_selectionStrokeWidth': [{ type: core_2.Input, args: ['shapeSettings.selectionStrokeWidth',] },],
    'shapeSettings_stroke': [{ type: core_2.Input, args: ['shapeSettings.stroke',] },],
    'shapeSettings_strokeThickness': [{ type: core_2.Input, args: ['shapeSettings.strokeThickness',] },],
    'shapeSettings_valuePath': [{ type: core_2.Input, args: ['shapeSettings.valuePath',] },],
    'showMapItems': [{ type: core_2.Input, args: ['showMapItems',] },],
    'showTooltip': [{ type: core_2.Input, args: ['showTooltip',] },],
    'tooltipTemplate': [{ type: core_2.Input, args: ['tooltipTemplate',] },],
    'urlTemplate': [{ type: core_2.Input, args: ['urlTemplate',] },],
    'subLayers': [{ type: core_2.Input, args: ['subLayers',] },],
};
exports.MapLayerDirective = MapLayerDirective;
var MapLayersDirective = (function (_super) {
    __extends(MapLayersDirective, _super);
    function MapLayersDirective(widget) {
        return _super.call(this, 'layers') || this;
    }
    return MapLayersDirective;
}(core_1.ArrayTagElement));
MapLayersDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-map>e-layers',
                queries: {
                    children: new core_2.ContentChildren(MapLayerDirective)
                }
            },] },
];
/** @nocollapse */
MapLayersDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return MapComponent; }),] },] },
]; };
exports.MapLayersDirective = MapLayersDirective;
var MapComponent = (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Map', el, cdRef, ['layers'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.baseMapIndex_twoChange = new core_2.EventEmitter();
        _this.enablePan_twoChange = new core_2.EventEmitter();
        _this.enableResize_twoChange = new core_2.EventEmitter();
        _this.enableAnimation_twoChange = new core_2.EventEmitter();
        _this.zoomSettings_level_twoChange = new core_2.EventEmitter();
        _this.zoomSettings_minValue_twoChange = new core_2.EventEmitter();
        _this.zoomSettings_maxValue_twoChange = new core_2.EventEmitter();
        _this.zoomSettings_factor_twoChange = new core_2.EventEmitter();
        _this.zoomSettings_enableZoom_twoChange = new core_2.EventEmitter();
        _this.zoomSettings_enableZoomOnSelection_twoChange = new core_2.EventEmitter();
        _this.navigationControl_enableNavigation_twoChange = new core_2.EventEmitter();
        _this.navigationControl_orientation_twoChange = new core_2.EventEmitter();
        _this.navigationControl_absolutePosition_twoChange = new core_2.EventEmitter();
        _this.navigationControl_dockPosition_twoChange = new core_2.EventEmitter();
        _this.markerSelected_output = new core_2.EventEmitter();
        _this.mouseleave_output = new core_2.EventEmitter();
        _this.mouseover_output = new core_2.EventEmitter();
        _this.onRenderComplete_output = new core_2.EventEmitter();
        _this.panned_output = new core_2.EventEmitter();
        _this.shapeSelected_output = new core_2.EventEmitter();
        _this.zoomedIn_output = new core_2.EventEmitter();
        _this.zoomedOut_output = new core_2.EventEmitter();
        return _this;
    }
    return MapComponent;
}(core_1.EJComponents));
MapComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-map',
                template: ''
            },] },
];
/** @nocollapse */
MapComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
MapComponent.propDecorators = {
    'background_input': [{ type: core_2.Input, args: ['background',] },],
    'centerPosition_input': [{ type: core_2.Input, args: ['centerPosition',] },],
    'draggingOnSelection_input': [{ type: core_2.Input, args: ['draggingOnSelection',] },],
    'enableLayerChangeAnimation_input': [{ type: core_2.Input, args: ['enableLayerChangeAnimation',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'zoomSettings_input': [{ type: core_2.Input, args: ['zoomSettings',] },],
    'navigationControl_input': [{ type: core_2.Input, args: ['navigationControl',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'navigationControl_content_input': [{ type: core_2.Input, args: ['navigationControl.content',] },],
    'layers_input': [{ type: core_2.Input, args: ['layers',] },],
    'layers_bubbleSettings_colorMappings_rangeColorMapping_input': [{ type: core_2.Input, args: ['layers.bubbleSettings.colorMappings.rangeColorMapping',] },],
    'layers_shapeSettings_colorMappings_rangeColorMapping_input': [{ type: core_2.Input, args: ['layers.shapeSettings.colorMappings.rangeColorMapping',] },],
    'layers_shapeSettings_colorMappings_equalColorMapping_input': [{ type: core_2.Input, args: ['layers.shapeSettings.colorMappings.equalColorMapping',] },],
    'layers_subLayers_bubbleSettings_colorMappings_rangeColorMapping_input': [{ type: core_2.Input, args: ['layers.subLayers.bubbleSettings.colorMappings.rangeColorMapping',] },],
    'layers_subLayers_shapeSettings_colorMappings_rangeColorMapping_input': [{ type: core_2.Input, args: ['layers.subLayers.shapeSettings.colorMappings.rangeColorMapping',] },],
    'layers_subLayers_shapeSettings_colorMappings_equalColorMapping_input': [{ type: core_2.Input, args: ['layers.subLayers.shapeSettings.colorMappings.equalColorMapping',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'baseMapIndex_two': [{ type: core_2.Input, args: ['baseMapIndex',] },],
    'baseMapIndex_twoChange': [{ type: core_2.Output, args: ['baseMapIndexChange',] },],
    'enablePan_two': [{ type: core_2.Input, args: ['enablePan',] },],
    'enablePan_twoChange': [{ type: core_2.Output, args: ['enablePanChange',] },],
    'enableResize_two': [{ type: core_2.Input, args: ['enableResize',] },],
    'enableResize_twoChange': [{ type: core_2.Output, args: ['enableResizeChange',] },],
    'enableAnimation_two': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enableAnimation_twoChange': [{ type: core_2.Output, args: ['enableAnimationChange',] },],
    'zoomSettings_level_two': [{ type: core_2.Input, args: ['zoomSettings.level',] },],
    'zoomSettings_level_twoChange': [{ type: core_2.Output, args: ['zoomSettings.levelChange',] },],
    'zoomSettings_minValue_two': [{ type: core_2.Input, args: ['zoomSettings.minValue',] },],
    'zoomSettings_minValue_twoChange': [{ type: core_2.Output, args: ['zoomSettings.minValueChange',] },],
    'zoomSettings_maxValue_two': [{ type: core_2.Input, args: ['zoomSettings.maxValue',] },],
    'zoomSettings_maxValue_twoChange': [{ type: core_2.Output, args: ['zoomSettings.maxValueChange',] },],
    'zoomSettings_factor_two': [{ type: core_2.Input, args: ['zoomSettings.factor',] },],
    'zoomSettings_factor_twoChange': [{ type: core_2.Output, args: ['zoomSettings.factorChange',] },],
    'zoomSettings_enableZoom_two': [{ type: core_2.Input, args: ['zoomSettings.enableZoom',] },],
    'zoomSettings_enableZoom_twoChange': [{ type: core_2.Output, args: ['zoomSettings.enableZoomChange',] },],
    'zoomSettings_enableZoomOnSelection_two': [{ type: core_2.Input, args: ['zoomSettings.enableZoomOnSelection',] },],
    'zoomSettings_enableZoomOnSelection_twoChange': [{ type: core_2.Output, args: ['zoomSettings.enableZoomOnSelectionChange',] },],
    'navigationControl_enableNavigation_two': [{ type: core_2.Input, args: ['navigationControl.enableNavigation',] },],
    'navigationControl_enableNavigation_twoChange': [{ type: core_2.Output, args: ['navigationControl.enableNavigationChange',] },],
    'navigationControl_orientation_two': [{ type: core_2.Input, args: ['navigationControl.orientation',] },],
    'navigationControl_orientation_twoChange': [{ type: core_2.Output, args: ['navigationControl.orientationChange',] },],
    'navigationControl_absolutePosition_two': [{ type: core_2.Input, args: ['navigationControl.absolutePosition',] },],
    'navigationControl_absolutePosition_twoChange': [{ type: core_2.Output, args: ['navigationControl.absolutePositionChange',] },],
    'navigationControl_dockPosition_two': [{ type: core_2.Input, args: ['navigationControl.dockPosition',] },],
    'navigationControl_dockPosition_twoChange': [{ type: core_2.Output, args: ['navigationControl.dockPositionChange',] },],
    'markerSelected_output': [{ type: core_2.Output, args: ['markerSelected',] },],
    'mouseleave_output': [{ type: core_2.Output, args: ['mouseleave',] },],
    'mouseover_output': [{ type: core_2.Output, args: ['mouseover',] },],
    'onRenderComplete_output': [{ type: core_2.Output, args: ['onRenderComplete',] },],
    'panned_output': [{ type: core_2.Output, args: ['panned',] },],
    'shapeSelected_output': [{ type: core_2.Output, args: ['shapeSelected',] },],
    'zoomedIn_output': [{ type: core_2.Output, args: ['zoomedIn',] },],
    'zoomedOut_output': [{ type: core_2.Output, args: ['zoomedOut',] },],
    'tag_layers': [{ type: core_2.ContentChild, args: [MapLayersDirective,] },],
};
exports.MapComponent = MapComponent;
exports.EJ_MAP_COMPONENTS = [MapComponent,
    MapLayersDirective, MapLayerDirective];
//# sourceMappingURL=map.component.js.map
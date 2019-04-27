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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.treemap.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var TreeMapLevelDirective = (function (_super) {
    __extends(TreeMapLevelDirective, _super);
    function TreeMapLevelDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return TreeMapLevelDirective;
}(core_1.ComplexTagElement));
TreeMapLevelDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-levels>e-level',
            },] },
];
/** @nocollapse */
TreeMapLevelDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return TreeMapComponent; }),] },] },
]; };
TreeMapLevelDirective.propDecorators = {
    'groupBackground': [{ type: core_2.Input, args: ['groupBackground',] },],
    'groupBorderColor': [{ type: core_2.Input, args: ['groupBorderColor',] },],
    'groupBorderThickness': [{ type: core_2.Input, args: ['groupBorderThickness',] },],
    'groupGap': [{ type: core_2.Input, args: ['groupGap',] },],
    'groupPadding': [{ type: core_2.Input, args: ['groupPadding',] },],
    'groupPath': [{ type: core_2.Input, args: ['groupPath',] },],
    'headerHeight': [{ type: core_2.Input, args: ['headerHeight',] },],
    'headerTemplate': [{ type: core_2.Input, args: ['headerTemplate',] },],
    'headerVisibilityMode': [{ type: core_2.Input, args: ['headerVisibilityMode',] },],
    'labelPosition': [{ type: core_2.Input, args: ['labelPosition',] },],
    'textOverflow': [{ type: core_2.Input, args: ['textOverflow',] },],
    'labelTemplate': [{ type: core_2.Input, args: ['labelTemplate',] },],
    'labelVisibilityMode': [{ type: core_2.Input, args: ['labelVisibilityMode',] },],
    'showHeader': [{ type: core_2.Input, args: ['showHeader',] },],
    'showLabels': [{ type: core_2.Input, args: ['showLabels',] },],
};
exports.TreeMapLevelDirective = TreeMapLevelDirective;
var TreeMapLevelsDirective = (function (_super) {
    __extends(TreeMapLevelsDirective, _super);
    function TreeMapLevelsDirective(widget) {
        return _super.call(this, 'levels') || this;
    }
    return TreeMapLevelsDirective;
}(core_1.ArrayTagElement));
TreeMapLevelsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-treemap>e-levels',
                queries: {
                    children: new core_2.ContentChildren(TreeMapLevelDirective)
                }
            },] },
];
/** @nocollapse */
TreeMapLevelsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return TreeMapComponent; }),] },] },
]; };
exports.TreeMapLevelsDirective = TreeMapLevelsDirective;
var TreeMapRangeColorDirective = (function (_super) {
    __extends(TreeMapRangeColorDirective, _super);
    function TreeMapRangeColorDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return TreeMapRangeColorDirective;
}(core_1.ComplexTagElement));
TreeMapRangeColorDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-rangecolormapping>e-rangecolor',
            },] },
];
/** @nocollapse */
TreeMapRangeColorDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return TreeMapComponent; }),] },] },
]; };
TreeMapRangeColorDirective.propDecorators = {
    'color': [{ type: core_2.Input, args: ['color',] },],
    'gradientColors': [{ type: core_2.Input, args: ['gradientColors',] },],
    'from': [{ type: core_2.Input, args: ['from',] },],
    'legendLabel': [{ type: core_2.Input, args: ['legendLabel',] },],
    'to': [{ type: core_2.Input, args: ['to',] },],
};
exports.TreeMapRangeColorDirective = TreeMapRangeColorDirective;
var TreeMapRangeColorMappingDirective = (function (_super) {
    __extends(TreeMapRangeColorMappingDirective, _super);
    function TreeMapRangeColorMappingDirective(widget) {
        return _super.call(this, 'rangeColorMapping') || this;
    }
    return TreeMapRangeColorMappingDirective;
}(core_1.ArrayTagElement));
TreeMapRangeColorMappingDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-treemap>e-rangecolormapping',
                queries: {
                    children: new core_2.ContentChildren(TreeMapRangeColorDirective)
                }
            },] },
];
/** @nocollapse */
TreeMapRangeColorMappingDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return TreeMapComponent; }),] },] },
]; };
exports.TreeMapRangeColorMappingDirective = TreeMapRangeColorMappingDirective;
var TreeMapComponent = (function (_super) {
    __extends(TreeMapComponent, _super);
    function TreeMapComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'TreeMap', el, cdRef, ['levels', 'rangeColorMapping'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.dataSource_twoChange = new core_2.EventEmitter();
        _this.weightValuePath_twoChange = new core_2.EventEmitter();
        _this.treeMapItemSelected_output = new core_2.EventEmitter();
        _this.drillStarted_output = new core_2.EventEmitter();
        _this.drillDownItemSelected_output = new core_2.EventEmitter();
        _this.headerTemplateRendering_output = new core_2.EventEmitter();
        _this.refreshed_output = new core_2.EventEmitter();
        _this.treeMapGroupSelected_output = new core_2.EventEmitter();
        return _this;
    }
    return TreeMapComponent;
}(core_1.EJComponents));
TreeMapComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-treemap',
                template: ''
            },] },
];
/** @nocollapse */
TreeMapComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
TreeMapComponent.propDecorators = {
    'borderBrush_input': [{ type: core_2.Input, args: ['borderBrush',] },],
    'borderThickness_input': [{ type: core_2.Input, args: ['borderThickness',] },],
    'uniColorMapping_input': [{ type: core_2.Input, args: ['uniColorMapping',] },],
    'desaturationColorMapping_input': [{ type: core_2.Input, args: ['desaturationColorMapping',] },],
    'paletteColorMapping_input': [{ type: core_2.Input, args: ['paletteColorMapping',] },],
    'colorValuePath_input': [{ type: core_2.Input, args: ['colorValuePath',] },],
    'dockPosition_input': [{ type: core_2.Input, args: ['dockPosition',] },],
    'drillDownHeaderColor_input': [{ type: core_2.Input, args: ['drillDownHeaderColor',] },],
    'drillDownSelectionColor_input': [{ type: core_2.Input, args: ['drillDownSelectionColor',] },],
    'isHierarchicalDatasource_input': [{ type: core_2.Input, args: ['isHierarchicalDatasource',] },],
    'header_input': [{ type: core_2.Input, args: ['header',] },],
    'enableDrillDown_input': [{ type: core_2.Input, args: ['enableDrillDown',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'enableResize_input': [{ type: core_2.Input, args: ['enableResize',] },],
    'draggingOnSelection_input': [{ type: core_2.Input, args: ['draggingOnSelection',] },],
    'draggingGroupOnSelection_input': [{ type: core_2.Input, args: ['draggingGroupOnSelection',] },],
    'legendSettings_input': [{ type: core_2.Input, args: ['legendSettings',] },],
    'highlightBorderBrush_input': [{ type: core_2.Input, args: ['highlightBorderBrush',] },],
    'highlightBorderThickness_input': [{ type: core_2.Input, args: ['highlightBorderThickness',] },],
    'highlightGroupBorderBrush_input': [{ type: core_2.Input, args: ['highlightGroupBorderBrush',] },],
    'highlightGroupBorderThickness_input': [{ type: core_2.Input, args: ['highlightGroupBorderThickness',] },],
    'highlightGroupOnSelection_input': [{ type: core_2.Input, args: ['highlightGroupOnSelection',] },],
    'highlightOnSelection_input': [{ type: core_2.Input, args: ['highlightOnSelection',] },],
    'itemsLayoutMode_input': [{ type: core_2.Input, args: ['itemsLayoutMode',] },],
    'enableGroupSeparator_input': [{ type: core_2.Input, args: ['enableGroupSeparator',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'leafItemSettings_input': [{ type: core_2.Input, args: ['leafItemSettings',] },],
    'selectionMode_input': [{ type: core_2.Input, args: ['selectionMode',] },],
    'groupSelectionMode_input': [{ type: core_2.Input, args: ['groupSelectionMode',] },],
    'showLegend_input': [{ type: core_2.Input, args: ['showLegend',] },],
    'enableGradient_input': [{ type: core_2.Input, args: ['enableGradient',] },],
    'showTooltip_input': [{ type: core_2.Input, args: ['showTooltip',] },],
    'tooltipTemplate_input': [{ type: core_2.Input, args: ['tooltipTemplate',] },],
    'treeMapItems_input': [{ type: core_2.Input, args: ['treeMapItems',] },],
    'uniColorMapping_color_input': [{ type: core_2.Input, args: ['uniColorMapping.color',] },],
    'desaturationColorMapping_to_input': [{ type: core_2.Input, args: ['desaturationColorMapping.to',] },],
    'desaturationColorMapping_color_input': [{ type: core_2.Input, args: ['desaturationColorMapping.color',] },],
    'desaturationColorMapping_from_input': [{ type: core_2.Input, args: ['desaturationColorMapping.from',] },],
    'desaturationColorMapping_rangeMaximum_input': [{ type: core_2.Input, args: ['desaturationColorMapping.rangeMaximum',] },],
    'desaturationColorMapping_rangeMinimum_input': [{ type: core_2.Input, args: ['desaturationColorMapping.rangeMinimum',] },],
    'paletteColorMapping_colors_input': [{ type: core_2.Input, args: ['paletteColorMapping.colors',] },],
    'legendSettings_height_input': [{ type: core_2.Input, args: ['legendSettings.height',] },],
    'legendSettings_width_input': [{ type: core_2.Input, args: ['legendSettings.width',] },],
    'legendSettings_iconHeight_input': [{ type: core_2.Input, args: ['legendSettings.iconHeight',] },],
    'legendSettings_iconWidth_input': [{ type: core_2.Input, args: ['legendSettings.iconWidth',] },],
    'legendSettings_template_input': [{ type: core_2.Input, args: ['legendSettings.template',] },],
    'legendSettings_mode_input': [{ type: core_2.Input, args: ['legendSettings.mode',] },],
    'legendSettings_title_input': [{ type: core_2.Input, args: ['legendSettings.title',] },],
    'legendSettings_leftLabel_input': [{ type: core_2.Input, args: ['legendSettings.leftLabel',] },],
    'legendSettings_rightLabel_input': [{ type: core_2.Input, args: ['legendSettings.rightLabel',] },],
    'legendSettings_dockPosition_input': [{ type: core_2.Input, args: ['legendSettings.dockPosition',] },],
    'legendSettings_alignment_input': [{ type: core_2.Input, args: ['legendSettings.alignment',] },],
    'legendSettings_columnCount_input': [{ type: core_2.Input, args: ['legendSettings.columnCount',] },],
    'leafItemSettings_borderBrush_input': [{ type: core_2.Input, args: ['leafItemSettings.borderBrush',] },],
    'leafItemSettings_borderThickness_input': [{ type: core_2.Input, args: ['leafItemSettings.borderThickness',] },],
    'leafItemSettings_gap_input': [{ type: core_2.Input, args: ['leafItemSettings.gap',] },],
    'leafItemSettings_itemTemplate_input': [{ type: core_2.Input, args: ['leafItemSettings.itemTemplate',] },],
    'leafItemSettings_labelPath_input': [{ type: core_2.Input, args: ['leafItemSettings.labelPath',] },],
    'leafItemSettings_labelPosition_input': [{ type: core_2.Input, args: ['leafItemSettings.labelPosition',] },],
    'leafItemSettings_textOverflow_input': [{ type: core_2.Input, args: ['leafItemSettings.textOverflow',] },],
    'leafItemSettings_labelVisibilityMode_input': [{ type: core_2.Input, args: ['leafItemSettings.labelVisibilityMode',] },],
    'leafItemSettings_showLabels_input': [{ type: core_2.Input, args: ['leafItemSettings.showLabels',] },],
    'groupColorMapping_input': [{ type: core_2.Input, args: ['groupColorMapping',] },],
    'rangeColorMapping_input': [{ type: core_2.Input, args: ['rangeColorMapping',] },],
    'levels_input': [{ type: core_2.Input, args: ['levels',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'dataSource_two': [{ type: core_2.Input, args: ['dataSource',] },],
    'dataSource_twoChange': [{ type: core_2.Output, args: ['dataSourceChange',] },],
    'weightValuePath_two': [{ type: core_2.Input, args: ['weightValuePath',] },],
    'weightValuePath_twoChange': [{ type: core_2.Output, args: ['weightValuePathChange',] },],
    'treeMapItemSelected_output': [{ type: core_2.Output, args: ['treeMapItemSelected',] },],
    'drillStarted_output': [{ type: core_2.Output, args: ['drillStarted',] },],
    'drillDownItemSelected_output': [{ type: core_2.Output, args: ['drillDownItemSelected',] },],
    'headerTemplateRendering_output': [{ type: core_2.Output, args: ['headerTemplateRendering',] },],
    'refreshed_output': [{ type: core_2.Output, args: ['refreshed',] },],
    'treeMapGroupSelected_output': [{ type: core_2.Output, args: ['treeMapGroupSelected',] },],
    'tag_levels': [{ type: core_2.ContentChild, args: [TreeMapLevelsDirective,] },],
    'tag_rangeColorMapping': [{ type: core_2.ContentChild, args: [TreeMapRangeColorMappingDirective,] },],
};
exports.TreeMapComponent = TreeMapComponent;
exports.EJ_TREEMAP_COMPONENTS = [TreeMapComponent,
    TreeMapLevelsDirective, TreeMapRangeColorMappingDirective, TreeMapLevelDirective, TreeMapRangeColorDirective];
//# sourceMappingURL=treemap.component.js.map
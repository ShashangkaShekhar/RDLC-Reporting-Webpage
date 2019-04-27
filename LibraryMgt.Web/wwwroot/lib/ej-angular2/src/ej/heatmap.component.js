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
var HeatMapColorMappingDirective = (function (_super) {
    __extends(HeatMapColorMappingDirective, _super);
    function HeatMapColorMappingDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return HeatMapColorMappingDirective;
}(core_1.ComplexTagElement));
HeatMapColorMappingDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-colormappingcollection>e-colormapping',
            },] },
];
/** @nocollapse */
HeatMapColorMappingDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return HeatMapComponent; }),] },] },
]; };
HeatMapColorMappingDirective.propDecorators = {
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
exports.HeatMapColorMappingDirective = HeatMapColorMappingDirective;
var HeatMapColorMappingCollectionDirective = (function (_super) {
    __extends(HeatMapColorMappingCollectionDirective, _super);
    function HeatMapColorMappingCollectionDirective(widget) {
        return _super.call(this, 'colorMappingCollection') || this;
    }
    return HeatMapColorMappingCollectionDirective;
}(core_1.ArrayTagElement));
HeatMapColorMappingCollectionDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-heatmap>e-colormappingcollection',
                queries: {
                    children: new core_2.ContentChildren(HeatMapColorMappingDirective)
                }
            },] },
];
/** @nocollapse */
HeatMapColorMappingCollectionDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return HeatMapComponent; }),] },] },
]; };
exports.HeatMapColorMappingCollectionDirective = HeatMapColorMappingCollectionDirective;
var HeatMapComponent = (function (_super) {
    __extends(HeatMapComponent, _super);
    function HeatMapComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'HeatMap', el, cdRef, ['colorMappingCollection'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.cellMouseOver_output = new core_2.EventEmitter();
        _this.cellMouseEnter_output = new core_2.EventEmitter();
        _this.cellMouseLeave_output = new core_2.EventEmitter();
        _this.cellSelected_output = new core_2.EventEmitter();
        return _this;
    }
    return HeatMapComponent;
}(core_1.EJComponents));
HeatMapComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-heatmap',
                template: ''
            },] },
];
/** @nocollapse */
HeatMapComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
HeatMapComponent.propDecorators = {
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'id_input': [{ type: core_2.Input, args: ['id',] },],
    'showTooltip_input': [{ type: core_2.Input, args: ['showTooltip',] },],
    'tooltipSettings_input': [{ type: core_2.Input, args: ['tooltipSettings',] },],
    'itemsSource_input': [{ type: core_2.Input, args: ['itemsSource',] },],
    'heatMapCell_input': [{ type: core_2.Input, args: ['heatMapCell',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'enableVirtualization_input': [{ type: core_2.Input, args: ['enableVirtualization',] },],
    'defaultColumnStyle_input': [{ type: core_2.Input, args: ['defaultColumnStyle',] },],
    'legendCollection_input': [{ type: core_2.Input, args: ['legendCollection',] },],
    'itemsMapping_input': [{ type: core_2.Input, args: ['itemsMapping',] },],
    'tooltipSettings_templateId_input': [{ type: core_2.Input, args: ['tooltipSettings.templateId',] },],
    'tooltipSettings_associate_input': [{ type: core_2.Input, args: ['tooltipSettings.associate',] },],
    'tooltipSettings_isBalloon_input': [{ type: core_2.Input, args: ['tooltipSettings.isBalloon',] },],
    'tooltipSettings_position_input': [{ type: core_2.Input, args: ['tooltipSettings.position',] },],
    'tooltipSettings_position_target_input': [{ type: core_2.Input, args: ['tooltipSettings.position.target',] },],
    'tooltipSettings_position_stem_input': [{ type: core_2.Input, args: ['tooltipSettings.position.stem',] },],
    'tooltipSettings_trigger_input': [{ type: core_2.Input, args: ['tooltipSettings.trigger',] },],
    'tooltipSettings_animation_input': [{ type: core_2.Input, args: ['tooltipSettings.animation',] },],
    'tooltipSettings_animation_effect_input': [{ type: core_2.Input, args: ['tooltipSettings.animation.effect',] },],
    'tooltipSettings_animation_speed_input': [{ type: core_2.Input, args: ['tooltipSettings.animation.speed',] },],
    'heatMapCell_showContent_input': [{ type: core_2.Input, args: ['heatMapCell.showContent',] },],
    'heatMapCell_showColor_input': [{ type: core_2.Input, args: ['heatMapCell.showColor',] },],
    'defaultColumnStyle_textAlign_input': [{ type: core_2.Input, args: ['defaultColumnStyle.textAlign',] },],
    'defaultColumnStyle_headerTemplateID_input': [{ type: core_2.Input, args: ['defaultColumnStyle.headerTemplateID',] },],
    'defaultColumnStyle_templateID_input': [{ type: core_2.Input, args: ['defaultColumnStyle.templateID',] },],
    'itemsMapping_columnStyle_input': [{ type: core_2.Input, args: ['itemsMapping.columnStyle',] },],
    'itemsMapping_columnStyle_width_input': [{ type: core_2.Input, args: ['itemsMapping.columnStyle.width',] },],
    'itemsMapping_columnStyle_textAlign_input': [{ type: core_2.Input, args: ['itemsMapping.columnStyle.textAlign',] },],
    'itemsMapping_columnStyle_headerTemplateID_input': [{ type: core_2.Input, args: ['itemsMapping.columnStyle.headerTemplateID',] },],
    'itemsMapping_columnStyle_templateID_input': [{ type: core_2.Input, args: ['itemsMapping.columnStyle.templateID',] },],
    'itemsMapping_column_input': [{ type: core_2.Input, args: ['itemsMapping.column',] },],
    'itemsMapping_column_propertyName_input': [{ type: core_2.Input, args: ['itemsMapping.column.propertyName',] },],
    'itemsMapping_column_displayName_input': [{ type: core_2.Input, args: ['itemsMapping.column.displayName',] },],
    'itemsMapping_row_input': [{ type: core_2.Input, args: ['itemsMapping.row',] },],
    'itemsMapping_row_propertyName_input': [{ type: core_2.Input, args: ['itemsMapping.row.propertyName',] },],
    'itemsMapping_row_displayName_input': [{ type: core_2.Input, args: ['itemsMapping.row.displayName',] },],
    'itemsMapping_value_input': [{ type: core_2.Input, args: ['itemsMapping.value',] },],
    'itemsMapping_value_propertyName_input': [{ type: core_2.Input, args: ['itemsMapping.value.propertyName',] },],
    'itemsMapping_value_displayName_input': [{ type: core_2.Input, args: ['itemsMapping.value.displayName',] },],
    'itemsMapping_headerMapping_input': [{ type: core_2.Input, args: ['itemsMapping.headerMapping',] },],
    'itemsMapping_headerMapping_propertyName_input': [{ type: core_2.Input, args: ['itemsMapping.headerMapping.propertyName',] },],
    'itemsMapping_headerMapping_displayName_input': [{ type: core_2.Input, args: ['itemsMapping.headerMapping.displayName',] },],
    'itemsMapping_headerMapping_columnStyle_input': [{ type: core_2.Input, args: ['itemsMapping.headerMapping.columnStyle',] },],
    'itemsMapping_columnMapping_input': [{ type: core_2.Input, args: ['itemsMapping.columnMapping',] },],
    'colorMappingCollection_input': [{ type: core_2.Input, args: ['colorMappingCollection',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'cellMouseOver_output': [{ type: core_2.Output, args: ['cellMouseOver',] },],
    'cellMouseEnter_output': [{ type: core_2.Output, args: ['cellMouseEnter',] },],
    'cellMouseLeave_output': [{ type: core_2.Output, args: ['cellMouseLeave',] },],
    'cellSelected_output': [{ type: core_2.Output, args: ['cellSelected',] },],
    'tag_colorMappingCollection': [{ type: core_2.ContentChild, args: [HeatMapColorMappingCollectionDirective,] },],
};
exports.HeatMapComponent = HeatMapComponent;
exports.EJ_HEATMAP_COMPONENTS = [HeatMapComponent,
    HeatMapColorMappingCollectionDirective, HeatMapColorMappingDirective];
//# sourceMappingURL=heatmap.component.js.map
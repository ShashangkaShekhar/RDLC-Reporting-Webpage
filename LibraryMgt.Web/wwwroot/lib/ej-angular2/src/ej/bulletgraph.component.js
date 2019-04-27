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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.bulletgraph.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var BulletGraphQualitativeRangeDirective = (function (_super) {
    __extends(BulletGraphQualitativeRangeDirective, _super);
    function BulletGraphQualitativeRangeDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return BulletGraphQualitativeRangeDirective;
}(core_1.ComplexTagElement));
BulletGraphQualitativeRangeDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-qualitativeranges>e-qualitativerange',
            },] },
];
/** @nocollapse */
BulletGraphQualitativeRangeDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return BulletGraphComponent; }),] },] },
]; };
BulletGraphQualitativeRangeDirective.propDecorators = {
    'rangeEnd': [{ type: core_2.Input, args: ['rangeEnd',] },],
    'rangeOpacity': [{ type: core_2.Input, args: ['rangeOpacity',] },],
    'rangeStroke': [{ type: core_2.Input, args: ['rangeStroke',] },],
};
exports.BulletGraphQualitativeRangeDirective = BulletGraphQualitativeRangeDirective;
var BulletGraphQualitativeRangesDirective = (function (_super) {
    __extends(BulletGraphQualitativeRangesDirective, _super);
    function BulletGraphQualitativeRangesDirective(widget) {
        return _super.call(this, 'qualitativeRanges') || this;
    }
    return BulletGraphQualitativeRangesDirective;
}(core_1.ArrayTagElement));
BulletGraphQualitativeRangesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-bulletgraph>e-qualitativeranges',
                queries: {
                    children: new core_2.ContentChildren(BulletGraphQualitativeRangeDirective)
                }
            },] },
];
/** @nocollapse */
BulletGraphQualitativeRangesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return BulletGraphComponent; }),] },] },
]; };
exports.BulletGraphQualitativeRangesDirective = BulletGraphQualitativeRangesDirective;
var BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective = (function (_super) {
    __extends(BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective, _super);
    function BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective;
}(core_1.ComplexTagElement));
BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-quantitativescalesettings-featuremeasures>e-quantitativescalesettings-featuremeasure',
            },] },
];
/** @nocollapse */
BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return BulletGraphComponent; }),] },] },
]; };
BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective.propDecorators = {
    'category': [{ type: core_2.Input, args: ['category',] },],
    'comparativeMeasureValue': [{ type: core_2.Input, args: ['comparativeMeasureValue',] },],
    'value': [{ type: core_2.Input, args: ['value',] },],
};
exports.BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective = BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective;
var BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective = (function (_super) {
    __extends(BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective, _super);
    function BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective(widget) {
        return _super.call(this, 'quantitativeScaleSettings.featureMeasures') || this;
    }
    return BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective;
}(core_1.ArrayTagElement));
BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-bulletgraph>e-quantitativescalesettings-featuremeasures',
                queries: {
                    children: new core_2.ContentChildren(BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective)
                }
            },] },
];
/** @nocollapse */
BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return BulletGraphComponent; }),] },] },
]; };
exports.BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective = BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective;
var BulletGraphComponent = (function (_super) {
    __extends(BulletGraphComponent, _super);
    function BulletGraphComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'BulletGraph', el, cdRef, ['qualitativeRanges', 'quantitativeScaleSettings.featureMeasures'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.drawCaption_output = new core_2.EventEmitter();
        _this.drawCategory_output = new core_2.EventEmitter();
        _this.drawComparativeMeasureSymbol_output = new core_2.EventEmitter();
        _this.drawFeatureMeasureBar_output = new core_2.EventEmitter();
        _this.drawIndicator_output = new core_2.EventEmitter();
        _this.drawLabels_output = new core_2.EventEmitter();
        _this.drawTicks_output = new core_2.EventEmitter();
        _this.drawQualitativeRanges_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        return _this;
    }
    return BulletGraphComponent;
}(core_1.EJComponents));
BulletGraphComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-bulletgraph',
                template: ''
            },] },
];
/** @nocollapse */
BulletGraphComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
BulletGraphComponent.propDecorators = {
    'applyRangeStrokeToLabels_input': [{ type: core_2.Input, args: ['applyRangeStrokeToLabels',] },],
    'applyRangeStrokeToTicks_input': [{ type: core_2.Input, args: ['applyRangeStrokeToTicks',] },],
    'captionSettings_input': [{ type: core_2.Input, args: ['captionSettings',] },],
    'comparativeMeasureValue_input': [{ type: core_2.Input, args: ['comparativeMeasureValue',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enableResizing_input': [{ type: core_2.Input, args: ['enableResizing',] },],
    'flowDirection_input': [{ type: core_2.Input, args: ['flowDirection',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'enableGroupSeparator_input': [{ type: core_2.Input, args: ['enableGroupSeparator',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'qualitativeRangeSize_input': [{ type: core_2.Input, args: ['qualitativeRangeSize',] },],
    'quantitativeScaleLength_input': [{ type: core_2.Input, args: ['quantitativeScaleLength',] },],
    'quantitativeScaleSettings_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings',] },],
    'theme_input': [{ type: core_2.Input, args: ['theme',] },],
    'tooltipSettings_input': [{ type: core_2.Input, args: ['tooltipSettings',] },],
    'value_input': [{ type: core_2.Input, args: ['value',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'captionSettings_enableTrim_input': [{ type: core_2.Input, args: ['captionSettings.enableTrim',] },],
    'captionSettings_font_input': [{ type: core_2.Input, args: ['captionSettings.font',] },],
    'captionSettings_font_color_input': [{ type: core_2.Input, args: ['captionSettings.font.color',] },],
    'captionSettings_font_fontFamily_input': [{ type: core_2.Input, args: ['captionSettings.font.fontFamily',] },],
    'captionSettings_font_fontStyle_input': [{ type: core_2.Input, args: ['captionSettings.font.fontStyle',] },],
    'captionSettings_font_fontWeight_input': [{ type: core_2.Input, args: ['captionSettings.font.fontWeight',] },],
    'captionSettings_font_opacity_input': [{ type: core_2.Input, args: ['captionSettings.font.opacity',] },],
    'captionSettings_font_size_input': [{ type: core_2.Input, args: ['captionSettings.font.size',] },],
    'captionSettings_indicator_input': [{ type: core_2.Input, args: ['captionSettings.indicator',] },],
    'captionSettings_indicator_font_input': [{ type: core_2.Input, args: ['captionSettings.indicator.font',] },],
    'captionSettings_indicator_location_input': [{ type: core_2.Input, args: ['captionSettings.indicator.location',] },],
    'captionSettings_indicator_padding_input': [{ type: core_2.Input, args: ['captionSettings.indicator.padding',] },],
    'captionSettings_indicator_symbol_input': [{ type: core_2.Input, args: ['captionSettings.indicator.symbol',] },],
    'captionSettings_indicator_text_input': [{ type: core_2.Input, args: ['captionSettings.indicator.text',] },],
    'captionSettings_indicator_textAlignment_input': [{ type: core_2.Input, args: ['captionSettings.indicator.textAlignment',] },],
    'captionSettings_indicator_textAnchor_input': [{ type: core_2.Input, args: ['captionSettings.indicator.textAnchor',] },],
    'captionSettings_indicator_textAngle_input': [{ type: core_2.Input, args: ['captionSettings.indicator.textAngle',] },],
    'captionSettings_indicator_textPosition_input': [{ type: core_2.Input, args: ['captionSettings.indicator.textPosition',] },],
    'captionSettings_indicator_textSpacing_input': [{ type: core_2.Input, args: ['captionSettings.indicator.textSpacing',] },],
    'captionSettings_indicator_visible_input': [{ type: core_2.Input, args: ['captionSettings.indicator.visible',] },],
    'captionSettings_location_input': [{ type: core_2.Input, args: ['captionSettings.location',] },],
    'captionSettings_location_x_input': [{ type: core_2.Input, args: ['captionSettings.location.x',] },],
    'captionSettings_location_y_input': [{ type: core_2.Input, args: ['captionSettings.location.y',] },],
    'captionSettings_padding_input': [{ type: core_2.Input, args: ['captionSettings.padding',] },],
    'captionSettings_subTitle_input': [{ type: core_2.Input, args: ['captionSettings.subTitle',] },],
    'captionSettings_subTitle_font_input': [{ type: core_2.Input, args: ['captionSettings.subTitle.font',] },],
    'captionSettings_subTitle_location_input': [{ type: core_2.Input, args: ['captionSettings.subTitle.location',] },],
    'captionSettings_subTitle_padding_input': [{ type: core_2.Input, args: ['captionSettings.subTitle.padding',] },],
    'captionSettings_subTitle_text_input': [{ type: core_2.Input, args: ['captionSettings.subTitle.text',] },],
    'captionSettings_subTitle_textAlignment_input': [{ type: core_2.Input, args: ['captionSettings.subTitle.textAlignment',] },],
    'captionSettings_subTitle_textAnchor_input': [{ type: core_2.Input, args: ['captionSettings.subTitle.textAnchor',] },],
    'captionSettings_subTitle_textAngle_input': [{ type: core_2.Input, args: ['captionSettings.subTitle.textAngle',] },],
    'captionSettings_subTitle_textPosition_input': [{ type: core_2.Input, args: ['captionSettings.subTitle.textPosition',] },],
    'captionSettings_text_input': [{ type: core_2.Input, args: ['captionSettings.text',] },],
    'captionSettings_textAlignment_input': [{ type: core_2.Input, args: ['captionSettings.textAlignment',] },],
    'captionSettings_textAnchor_input': [{ type: core_2.Input, args: ['captionSettings.textAnchor',] },],
    'captionSettings_textAngle_input': [{ type: core_2.Input, args: ['captionSettings.textAngle',] },],
    'captionSettings_textPosition_input': [{ type: core_2.Input, args: ['captionSettings.textPosition',] },],
    'quantitativeScaleSettings_comparativeMeasureSettings_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.comparativeMeasureSettings',] },],
    'quantitativeScaleSettings_comparativeMeasureSettings_stroke_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.comparativeMeasureSettings.stroke',] },],
    'quantitativeScaleSettings_comparativeMeasureSettings_width_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.comparativeMeasureSettings.width',] },],
    'quantitativeScaleSettings_featuredMeasureSettings_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.featuredMeasureSettings',] },],
    'quantitativeScaleSettings_featuredMeasureSettings_stroke_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.featuredMeasureSettings.stroke',] },],
    'quantitativeScaleSettings_featuredMeasureSettings_width_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.featuredMeasureSettings.width',] },],
    'quantitativeScaleSettings_fields_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.fields',] },],
    'quantitativeScaleSettings_fields_category_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.fields.category',] },],
    'quantitativeScaleSettings_fields_comparativeMeasure_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.fields.comparativeMeasure',] },],
    'quantitativeScaleSettings_fields_dataSource_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.fields.dataSource',] },],
    'quantitativeScaleSettings_fields_featureMeasures_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.fields.featureMeasures',] },],
    'quantitativeScaleSettings_fields_query_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.fields.query',] },],
    'quantitativeScaleSettings_fields_tableName_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.fields.tableName',] },],
    'quantitativeScaleSettings_interval_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.interval',] },],
    'quantitativeScaleSettings_labelSettings_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.labelSettings',] },],
    'quantitativeScaleSettings_labelSettings_font_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.labelSettings.font',] },],
    'quantitativeScaleSettings_labelSettings_labelPlacement_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.labelSettings.labelPlacement',] },],
    'quantitativeScaleSettings_labelSettings_labelPrefix_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.labelSettings.labelPrefix',] },],
    'quantitativeScaleSettings_labelSettings_labelSuffix_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.labelSettings.labelSuffix',] },],
    'quantitativeScaleSettings_labelSettings_offset_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.labelSettings.offset',] },],
    'quantitativeScaleSettings_labelSettings_position_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.labelSettings.position',] },],
    'quantitativeScaleSettings_labelSettings_size_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.labelSettings.size',] },],
    'quantitativeScaleSettings_labelSettings_stroke_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.labelSettings.stroke',] },],
    'quantitativeScaleSettings_location_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.location',] },],
    'quantitativeScaleSettings_location_x_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.location.x',] },],
    'quantitativeScaleSettings_location_y_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.location.y',] },],
    'quantitativeScaleSettings_majorTickSettings_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.majorTickSettings',] },],
    'quantitativeScaleSettings_majorTickSettings_size_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.majorTickSettings.size',] },],
    'quantitativeScaleSettings_majorTickSettings_stroke_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.majorTickSettings.stroke',] },],
    'quantitativeScaleSettings_majorTickSettings_width_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.majorTickSettings.width',] },],
    'quantitativeScaleSettings_maximum_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.maximum',] },],
    'quantitativeScaleSettings_minimum_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.minimum',] },],
    'quantitativeScaleSettings_minorTickSettings_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.minorTickSettings',] },],
    'quantitativeScaleSettings_minorTickSettings_size_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.minorTickSettings.size',] },],
    'quantitativeScaleSettings_minorTickSettings_stroke_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.minorTickSettings.stroke',] },],
    'quantitativeScaleSettings_minorTickSettings_width_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.minorTickSettings.width',] },],
    'quantitativeScaleSettings_minorTicksPerInterval_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.minorTicksPerInterval',] },],
    'quantitativeScaleSettings_tickPlacement_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.tickPlacement',] },],
    'quantitativeScaleSettings_tickPosition_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.tickPosition',] },],
    'tooltipSettings_captionTemplate_input': [{ type: core_2.Input, args: ['tooltipSettings.captionTemplate',] },],
    'tooltipSettings_enableCaptionTooltip_input': [{ type: core_2.Input, args: ['tooltipSettings.enableCaptionTooltip',] },],
    'tooltipSettings_template_input': [{ type: core_2.Input, args: ['tooltipSettings.template',] },],
    'tooltipSettings_visible_input': [{ type: core_2.Input, args: ['tooltipSettings.visible',] },],
    'qualitativeRanges_input': [{ type: core_2.Input, args: ['qualitativeRanges',] },],
    'quantitativeScaleSettings_featureMeasures_input': [{ type: core_2.Input, args: ['quantitativeScaleSettings.featureMeasures',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'drawCaption_output': [{ type: core_2.Output, args: ['drawCaption',] },],
    'drawCategory_output': [{ type: core_2.Output, args: ['drawCategory',] },],
    'drawComparativeMeasureSymbol_output': [{ type: core_2.Output, args: ['drawComparativeMeasureSymbol',] },],
    'drawFeatureMeasureBar_output': [{ type: core_2.Output, args: ['drawFeatureMeasureBar',] },],
    'drawIndicator_output': [{ type: core_2.Output, args: ['drawIndicator',] },],
    'drawLabels_output': [{ type: core_2.Output, args: ['drawLabels',] },],
    'drawTicks_output': [{ type: core_2.Output, args: ['drawTicks',] },],
    'drawQualitativeRanges_output': [{ type: core_2.Output, args: ['drawQualitativeRanges',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'tag_qualitativeRanges': [{ type: core_2.ContentChild, args: [BulletGraphQualitativeRangesDirective,] },],
    'tag_quantitativeScaleSettings_featureMeasures': [{ type: core_2.ContentChild, args: [BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective,] },],
};
exports.BulletGraphComponent = BulletGraphComponent;
exports.EJ_BULLETGRAPH_COMPONENTS = [BulletGraphComponent,
    BulletGraphQualitativeRangesDirective, BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective, BulletGraphQualitativeRangeDirective, BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective];
//# sourceMappingURL=bulletgraph.component.js.map
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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.circulargauge.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var CircularGaugePointerDirective = (function (_super) {
    __extends(CircularGaugePointerDirective, _super);
    function CircularGaugePointerDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return CircularGaugePointerDirective;
}(core_1.ComplexTagElement));
CircularGaugePointerDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-pointers>e-pointer',
            },] },
];
/** @nocollapse */
CircularGaugePointerDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
CircularGaugePointerDirective.propDecorators = {
    'backgroundColor': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'backNeedleLength': [{ type: core_2.Input, args: ['backNeedleLength',] },],
    'border': [{ type: core_2.Input, args: ['border',] },],
    'border_color': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width': [{ type: core_2.Input, args: ['border.width',] },],
    'distanceFromScale': [{ type: core_2.Input, args: ['distanceFromScale',] },],
    'gradients': [{ type: core_2.Input, args: ['gradients',] },],
    'imageUrl': [{ type: core_2.Input, args: ['imageUrl',] },],
    'length': [{ type: core_2.Input, args: ['length',] },],
    'markerType': [{ type: core_2.Input, args: ['markerType',] },],
    'needleType': [{ type: core_2.Input, args: ['needleType',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'radius': [{ type: core_2.Input, args: ['radius',] },],
    'placement': [{ type: core_2.Input, args: ['placement',] },],
    'pointerValueText': [{ type: core_2.Input, args: ['pointerValueText',] },],
    'pointerValueText_angle': [{ type: core_2.Input, args: ['pointerValueText.angle',] },],
    'pointerValueText_autoAngle': [{ type: core_2.Input, args: ['pointerValueText.autoAngle',] },],
    'pointerValueText_color': [{ type: core_2.Input, args: ['pointerValueText.color',] },],
    'pointerValueText_distance': [{ type: core_2.Input, args: ['pointerValueText.distance',] },],
    'pointerValueText_font': [{ type: core_2.Input, args: ['pointerValueText.font',] },],
    'pointerValueText_font_fontFamily': [{ type: core_2.Input, args: ['pointerValueText.font.fontFamily',] },],
    'pointerValueText_font_fontStyle': [{ type: core_2.Input, args: ['pointerValueText.font.fontStyle',] },],
    'pointerValueText_font_size': [{ type: core_2.Input, args: ['pointerValueText.font.size',] },],
    'pointerValueText_opacity': [{ type: core_2.Input, args: ['pointerValueText.opacity',] },],
    'pointerValueText_showValue': [{ type: core_2.Input, args: ['pointerValueText.showValue',] },],
    'showBackNeedle': [{ type: core_2.Input, args: ['showBackNeedle',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'value': [{ type: core_2.Input, args: ['value',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
};
exports.CircularGaugePointerDirective = CircularGaugePointerDirective;
var CircularGaugePointersDirective = (function (_super) {
    __extends(CircularGaugePointersDirective, _super);
    function CircularGaugePointersDirective(widget) {
        return _super.call(this, 'pointers') || this;
    }
    return CircularGaugePointersDirective;
}(core_1.ArrayTagElement));
CircularGaugePointersDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-pointers',
                queries: {
                    children: new core_2.ContentChildren(CircularGaugePointerDirective)
                }
            },] },
];
/** @nocollapse */
CircularGaugePointersDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
exports.CircularGaugePointersDirective = CircularGaugePointersDirective;
var CircularGaugeLabelDirective = (function (_super) {
    __extends(CircularGaugeLabelDirective, _super);
    function CircularGaugeLabelDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return CircularGaugeLabelDirective;
}(core_1.ComplexTagElement));
CircularGaugeLabelDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-labels>e-label',
            },] },
];
/** @nocollapse */
CircularGaugeLabelDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
CircularGaugeLabelDirective.propDecorators = {
    'angle': [{ type: core_2.Input, args: ['angle',] },],
    'autoAngle': [{ type: core_2.Input, args: ['autoAngle',] },],
    'color': [{ type: core_2.Input, args: ['color',] },],
    'distanceFromScale': [{ type: core_2.Input, args: ['distanceFromScale',] },],
    'font': [{ type: core_2.Input, args: ['font',] },],
    'font_fontFamily': [{ type: core_2.Input, args: ['font.fontFamily',] },],
    'font_fontStyle': [{ type: core_2.Input, args: ['font.fontStyle',] },],
    'font_size': [{ type: core_2.Input, args: ['font.size',] },],
    'includeFirstValue': [{ type: core_2.Input, args: ['includeFirstValue',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'placement': [{ type: core_2.Input, args: ['placement',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'unitText': [{ type: core_2.Input, args: ['unitText',] },],
    'unitTextPosition': [{ type: core_2.Input, args: ['unitTextPosition',] },],
};
exports.CircularGaugeLabelDirective = CircularGaugeLabelDirective;
var CircularGaugeLabelsDirective = (function (_super) {
    __extends(CircularGaugeLabelsDirective, _super);
    function CircularGaugeLabelsDirective(widget) {
        return _super.call(this, 'labels') || this;
    }
    return CircularGaugeLabelsDirective;
}(core_1.ArrayTagElement));
CircularGaugeLabelsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-labels',
                queries: {
                    children: new core_2.ContentChildren(CircularGaugeLabelDirective)
                }
            },] },
];
/** @nocollapse */
CircularGaugeLabelsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
exports.CircularGaugeLabelsDirective = CircularGaugeLabelsDirective;
var CircularGaugeTickDirective = (function (_super) {
    __extends(CircularGaugeTickDirective, _super);
    function CircularGaugeTickDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return CircularGaugeTickDirective;
}(core_1.ComplexTagElement));
CircularGaugeTickDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-ticks>e-tick',
            },] },
];
/** @nocollapse */
CircularGaugeTickDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
CircularGaugeTickDirective.propDecorators = {
    'angle': [{ type: core_2.Input, args: ['angle',] },],
    'color': [{ type: core_2.Input, args: ['color',] },],
    'distanceFromScale': [{ type: core_2.Input, args: ['distanceFromScale',] },],
    'height': [{ type: core_2.Input, args: ['height',] },],
    'placement': [{ type: core_2.Input, args: ['placement',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
};
exports.CircularGaugeTickDirective = CircularGaugeTickDirective;
var CircularGaugeTicksDirective = (function (_super) {
    __extends(CircularGaugeTicksDirective, _super);
    function CircularGaugeTicksDirective(widget) {
        return _super.call(this, 'ticks') || this;
    }
    return CircularGaugeTicksDirective;
}(core_1.ArrayTagElement));
CircularGaugeTicksDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-ticks',
                queries: {
                    children: new core_2.ContentChildren(CircularGaugeTickDirective)
                }
            },] },
];
/** @nocollapse */
CircularGaugeTicksDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
exports.CircularGaugeTicksDirective = CircularGaugeTicksDirective;
var CircularGaugeRangeDirective = (function (_super) {
    __extends(CircularGaugeRangeDirective, _super);
    function CircularGaugeRangeDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return CircularGaugeRangeDirective;
}(core_1.ComplexTagElement));
CircularGaugeRangeDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-ranges>e-range',
            },] },
];
/** @nocollapse */
CircularGaugeRangeDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
CircularGaugeRangeDirective.propDecorators = {
    'backgroundColor': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'legendText': [{ type: core_2.Input, args: ['legendText',] },],
    'border': [{ type: core_2.Input, args: ['border',] },],
    'border_color': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width': [{ type: core_2.Input, args: ['border.width',] },],
    'distanceFromScale': [{ type: core_2.Input, args: ['distanceFromScale',] },],
    'endValue': [{ type: core_2.Input, args: ['endValue',] },],
    'endWidth': [{ type: core_2.Input, args: ['endWidth',] },],
    'gradients': [{ type: core_2.Input, args: ['gradients',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'placement': [{ type: core_2.Input, args: ['placement',] },],
    'size': [{ type: core_2.Input, args: ['size',] },],
    'startValue': [{ type: core_2.Input, args: ['startValue',] },],
    'startWidth': [{ type: core_2.Input, args: ['startWidth',] },],
};
exports.CircularGaugeRangeDirective = CircularGaugeRangeDirective;
var CircularGaugeRangesDirective = (function (_super) {
    __extends(CircularGaugeRangesDirective, _super);
    function CircularGaugeRangesDirective(widget) {
        return _super.call(this, 'ranges') || this;
    }
    return CircularGaugeRangesDirective;
}(core_1.ArrayTagElement));
CircularGaugeRangesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-ranges',
                queries: {
                    children: new core_2.ContentChildren(CircularGaugeRangeDirective)
                }
            },] },
];
/** @nocollapse */
CircularGaugeRangesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
exports.CircularGaugeRangesDirective = CircularGaugeRangesDirective;
var CircularGaugeStateRangeDirective = (function (_super) {
    __extends(CircularGaugeStateRangeDirective, _super);
    function CircularGaugeStateRangeDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return CircularGaugeStateRangeDirective;
}(core_1.ComplexTagElement));
CircularGaugeStateRangeDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-stateranges>e-staterange',
            },] },
];
/** @nocollapse */
CircularGaugeStateRangeDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
CircularGaugeStateRangeDirective.propDecorators = {
    'backgroundColor': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'borderColor': [{ type: core_2.Input, args: ['borderColor',] },],
    'endValue': [{ type: core_2.Input, args: ['endValue',] },],
    'font': [{ type: core_2.Input, args: ['font',] },],
    'startValue': [{ type: core_2.Input, args: ['startValue',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'textColor': [{ type: core_2.Input, args: ['textColor',] },],
};
exports.CircularGaugeStateRangeDirective = CircularGaugeStateRangeDirective;
var CircularGaugeStateRangesDirective = (function (_super) {
    __extends(CircularGaugeStateRangesDirective, _super);
    function CircularGaugeStateRangesDirective(widget) {
        return _super.call(this, 'stateRanges') || this;
    }
    return CircularGaugeStateRangesDirective;
}(core_1.ArrayTagElement));
CircularGaugeStateRangesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-indicators>e-stateranges',
                queries: {
                    children: new core_2.ContentChildren(CircularGaugeStateRangeDirective)
                }
            },] },
];
/** @nocollapse */
CircularGaugeStateRangesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
exports.CircularGaugeStateRangesDirective = CircularGaugeStateRangesDirective;
var CircularGaugeIndicatorDirective = (function (_super) {
    __extends(CircularGaugeIndicatorDirective, _super);
    function CircularGaugeIndicatorDirective(widget) {
        var _this = _super.call(this, ['stateRanges']) || this;
        _this.parent = widget;
        return _this;
    }
    return CircularGaugeIndicatorDirective;
}(core_1.ComplexTagElement));
CircularGaugeIndicatorDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-indicators>e-indicator',
            },] },
];
/** @nocollapse */
CircularGaugeIndicatorDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
CircularGaugeIndicatorDirective.propDecorators = {
    'height': [{ type: core_2.Input, args: ['height',] },],
    'imageUrl': [{ type: core_2.Input, args: ['imageUrl',] },],
    'position': [{ type: core_2.Input, args: ['position',] },],
    'position_x': [{ type: core_2.Input, args: ['position.x',] },],
    'position_y': [{ type: core_2.Input, args: ['position.y',] },],
    'stateRanges': [{ type: core_2.Input, args: ['stateRanges',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'tag_stateRanges': [{ type: core_2.ContentChild, args: [CircularGaugeStateRangesDirective,] },],
};
exports.CircularGaugeIndicatorDirective = CircularGaugeIndicatorDirective;
var CircularGaugeIndicatorsDirective = (function (_super) {
    __extends(CircularGaugeIndicatorsDirective, _super);
    function CircularGaugeIndicatorsDirective(widget) {
        return _super.call(this, 'indicators') || this;
    }
    return CircularGaugeIndicatorsDirective;
}(core_1.ArrayTagElement));
CircularGaugeIndicatorsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-indicators',
                queries: {
                    children: new core_2.ContentChildren(CircularGaugeIndicatorDirective)
                }
            },] },
];
/** @nocollapse */
CircularGaugeIndicatorsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
exports.CircularGaugeIndicatorsDirective = CircularGaugeIndicatorsDirective;
var CircularGaugeSubGaugeDirective = (function (_super) {
    __extends(CircularGaugeSubGaugeDirective, _super);
    function CircularGaugeSubGaugeDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return CircularGaugeSubGaugeDirective;
}(core_1.ComplexTagElement));
CircularGaugeSubGaugeDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-subgauges>e-subgauge',
            },] },
];
/** @nocollapse */
CircularGaugeSubGaugeDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
CircularGaugeSubGaugeDirective.propDecorators = {
    'height': [{ type: core_2.Input, args: ['height',] },],
    'position': [{ type: core_2.Input, args: ['position',] },],
    'position_x': [{ type: core_2.Input, args: ['position.x',] },],
    'position_y': [{ type: core_2.Input, args: ['position.y',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
};
exports.CircularGaugeSubGaugeDirective = CircularGaugeSubGaugeDirective;
var CircularGaugeSubGaugesDirective = (function (_super) {
    __extends(CircularGaugeSubGaugesDirective, _super);
    function CircularGaugeSubGaugesDirective(widget) {
        return _super.call(this, 'subGauges') || this;
    }
    return CircularGaugeSubGaugesDirective;
}(core_1.ArrayTagElement));
CircularGaugeSubGaugesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-subgauges',
                queries: {
                    children: new core_2.ContentChildren(CircularGaugeSubGaugeDirective)
                }
            },] },
];
/** @nocollapse */
CircularGaugeSubGaugesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
exports.CircularGaugeSubGaugesDirective = CircularGaugeSubGaugesDirective;
var CircularGaugeScaleDirective = (function (_super) {
    __extends(CircularGaugeScaleDirective, _super);
    function CircularGaugeScaleDirective(widget) {
        var _this = _super.call(this, ['pointers', 'labels', 'ticks', 'ranges', 'indicators', 'subGauges']) || this;
        _this.parent = widget;
        return _this;
    }
    return CircularGaugeScaleDirective;
}(core_1.ComplexTagElement));
CircularGaugeScaleDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-scale',
            },] },
];
/** @nocollapse */
CircularGaugeScaleDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
CircularGaugeScaleDirective.propDecorators = {
    'backgroundColor': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'border': [{ type: core_2.Input, args: ['border',] },],
    'border_color': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width': [{ type: core_2.Input, args: ['border.width',] },],
    'direction': [{ type: core_2.Input, args: ['direction',] },],
    'customLabels': [{ type: core_2.Input, args: ['customLabels',] },],
    'indicators': [{ type: core_2.Input, args: ['indicators',] },],
    'labels': [{ type: core_2.Input, args: ['labels',] },],
    'majorIntervalValue': [{ type: core_2.Input, args: ['majorIntervalValue',] },],
    'maximum': [{ type: core_2.Input, args: ['maximum',] },],
    'minimum': [{ type: core_2.Input, args: ['minimum',] },],
    'minorIntervalValue': [{ type: core_2.Input, args: ['minorIntervalValue',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'pointerCap': [{ type: core_2.Input, args: ['pointerCap',] },],
    'pointerCap_backgroundColor': [{ type: core_2.Input, args: ['pointerCap.backgroundColor',] },],
    'pointerCap_borderColor': [{ type: core_2.Input, args: ['pointerCap.borderColor',] },],
    'pointerCap_borderWidth': [{ type: core_2.Input, args: ['pointerCap.borderWidth',] },],
    'pointerCap_interiorGradient': [{ type: core_2.Input, args: ['pointerCap.interiorGradient',] },],
    'pointerCap_radius': [{ type: core_2.Input, args: ['pointerCap.radius',] },],
    'pointers': [{ type: core_2.Input, args: ['pointers',] },],
    'radius': [{ type: core_2.Input, args: ['radius',] },],
    'ranges': [{ type: core_2.Input, args: ['ranges',] },],
    'shadowOffset': [{ type: core_2.Input, args: ['shadowOffset',] },],
    'showIndicators': [{ type: core_2.Input, args: ['showIndicators',] },],
    'showLabels': [{ type: core_2.Input, args: ['showLabels',] },],
    'showPointers': [{ type: core_2.Input, args: ['showPointers',] },],
    'showRanges': [{ type: core_2.Input, args: ['showRanges',] },],
    'showScaleBar': [{ type: core_2.Input, args: ['showScaleBar',] },],
    'showTicks': [{ type: core_2.Input, args: ['showTicks',] },],
    'size': [{ type: core_2.Input, args: ['size',] },],
    'startAngle': [{ type: core_2.Input, args: ['startAngle',] },],
    'subGauges': [{ type: core_2.Input, args: ['subGauges',] },],
    'sweepAngle': [{ type: core_2.Input, args: ['sweepAngle',] },],
    'ticks': [{ type: core_2.Input, args: ['ticks',] },],
    'tag_pointers': [{ type: core_2.ContentChild, args: [CircularGaugePointersDirective,] },],
    'tag_labels': [{ type: core_2.ContentChild, args: [CircularGaugeLabelsDirective,] },],
    'tag_ticks': [{ type: core_2.ContentChild, args: [CircularGaugeTicksDirective,] },],
    'tag_ranges': [{ type: core_2.ContentChild, args: [CircularGaugeRangesDirective,] },],
    'tag_indicators': [{ type: core_2.ContentChild, args: [CircularGaugeIndicatorsDirective,] },],
    'tag_subGauges': [{ type: core_2.ContentChild, args: [CircularGaugeSubGaugesDirective,] },],
};
exports.CircularGaugeScaleDirective = CircularGaugeScaleDirective;
var CircularGaugeScalesDirective = (function (_super) {
    __extends(CircularGaugeScalesDirective, _super);
    function CircularGaugeScalesDirective(widget) {
        return _super.call(this, 'scales') || this;
    }
    return CircularGaugeScalesDirective;
}(core_1.ArrayTagElement));
CircularGaugeScalesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-circulargauge>e-scales',
                queries: {
                    children: new core_2.ContentChildren(CircularGaugeScaleDirective)
                }
            },] },
];
/** @nocollapse */
CircularGaugeScalesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return CircularGaugeComponent; }),] },] },
]; };
exports.CircularGaugeScalesDirective = CircularGaugeScalesDirective;
var CircularGaugeComponent = (function (_super) {
    __extends(CircularGaugeComponent, _super);
    function CircularGaugeComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'CircularGauge', el, cdRef, ['scales'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.value_twoChange = new core_2.EventEmitter();
        _this.minimum_twoChange = new core_2.EventEmitter();
        _this.maximum_twoChange = new core_2.EventEmitter();
        _this.legendItemRender_output = new core_2.EventEmitter();
        _this.legendItemClick_output = new core_2.EventEmitter();
        _this.rangeMouseMove_output = new core_2.EventEmitter();
        _this.drawCustomLabel_output = new core_2.EventEmitter();
        _this.drawIndicators_output = new core_2.EventEmitter();
        _this.drawLabels_output = new core_2.EventEmitter();
        _this.drawPointerCap_output = new core_2.EventEmitter();
        _this.drawPointers_output = new core_2.EventEmitter();
        _this.drawRange_output = new core_2.EventEmitter();
        _this.drawTicks_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.mouseClick_output = new core_2.EventEmitter();
        _this.mouseClickMove_output = new core_2.EventEmitter();
        _this.mouseClickUp_output = new core_2.EventEmitter();
        _this.renderComplete_output = new core_2.EventEmitter();
        return _this;
    }
    return CircularGaugeComponent;
}(core_1.EJComponents));
CircularGaugeComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-circulargauge',
                template: ''
            },] },
];
/** @nocollapse */
CircularGaugeComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
CircularGaugeComponent.propDecorators = {
    'animationSpeed_input': [{ type: core_2.Input, args: ['animationSpeed',] },],
    'backgroundColor_input': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'distanceFromCorner_input': [{ type: core_2.Input, args: ['distanceFromCorner',] },],
    'rangeZOrder_input': [{ type: core_2.Input, args: ['rangeZOrder',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enableGroupSeparator_input': [{ type: core_2.Input, args: ['enableGroupSeparator',] },],
    'enableResize_input': [{ type: core_2.Input, args: ['enableResize',] },],
    'frame_input': [{ type: core_2.Input, args: ['frame',] },],
    'gaugePosition_input': [{ type: core_2.Input, args: ['gaugePosition',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'interiorGradient_input': [{ type: core_2.Input, args: ['interiorGradient',] },],
    'isRadialGradient_input': [{ type: core_2.Input, args: ['isRadialGradient',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'outerCustomLabelPosition_input': [{ type: core_2.Input, args: ['outerCustomLabelPosition',] },],
    'radius_input': [{ type: core_2.Input, args: ['radius',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'theme_input': [{ type: core_2.Input, args: ['theme',] },],
    'legend_input': [{ type: core_2.Input, args: ['legend',] },],
    'tooltip_input': [{ type: core_2.Input, args: ['tooltip',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'frame_backgroundImageUrl_input': [{ type: core_2.Input, args: ['frame.backgroundImageUrl',] },],
    'frame_frameType_input': [{ type: core_2.Input, args: ['frame.frameType',] },],
    'frame_halfCircleFrameEndAngle_input': [{ type: core_2.Input, args: ['frame.halfCircleFrameEndAngle',] },],
    'frame_halfCircleFrameStartAngle_input': [{ type: core_2.Input, args: ['frame.halfCircleFrameStartAngle',] },],
    'legend_visible_input': [{ type: core_2.Input, args: ['legend.visible',] },],
    'legend_toggleVisibility_input': [{ type: core_2.Input, args: ['legend.toggleVisibility',] },],
    'legend_alignment_input': [{ type: core_2.Input, args: ['legend.alignment',] },],
    'legend_border_input': [{ type: core_2.Input, args: ['legend.border',] },],
    'legend_border_color_input': [{ type: core_2.Input, args: ['legend.border.color',] },],
    'legend_border_width_input': [{ type: core_2.Input, args: ['legend.border.width',] },],
    'legend_fill_input': [{ type: core_2.Input, args: ['legend.fill',] },],
    'legend_itemPadding_input': [{ type: core_2.Input, args: ['legend.itemPadding',] },],
    'legend_itemStyle_input': [{ type: core_2.Input, args: ['legend.itemStyle',] },],
    'legend_itemStyle_border_input': [{ type: core_2.Input, args: ['legend.itemStyle.border',] },],
    'legend_itemStyle_height_input': [{ type: core_2.Input, args: ['legend.itemStyle.height',] },],
    'legend_itemStyle_width_input': [{ type: core_2.Input, args: ['legend.itemStyle.width',] },],
    'legend_opacity_input': [{ type: core_2.Input, args: ['legend.opacity',] },],
    'legend_position_input': [{ type: core_2.Input, args: ['legend.position',] },],
    'legend_shape_input': [{ type: core_2.Input, args: ['legend.shape',] },],
    'legend_size_input': [{ type: core_2.Input, args: ['legend.size',] },],
    'legend_size_height_input': [{ type: core_2.Input, args: ['legend.size.height',] },],
    'legend_size_width_input': [{ type: core_2.Input, args: ['legend.size.width',] },],
    'legend_font_input': [{ type: core_2.Input, args: ['legend.font',] },],
    'legend_font_fontFamily_input': [{ type: core_2.Input, args: ['legend.font.fontFamily',] },],
    'legend_font_fontStyle_input': [{ type: core_2.Input, args: ['legend.font.fontStyle',] },],
    'legend_font_fontWeight_input': [{ type: core_2.Input, args: ['legend.font.fontWeight',] },],
    'legend_font_size_input': [{ type: core_2.Input, args: ['legend.font.size',] },],
    'legend_font_color_input': [{ type: core_2.Input, args: ['legend.font.color',] },],
    'tooltip_showCustomLabelTooltip_input': [{ type: core_2.Input, args: ['tooltip.showCustomLabelTooltip',] },],
    'tooltip_showLabelTooltip_input': [{ type: core_2.Input, args: ['tooltip.showLabelTooltip',] },],
    'tooltip_templateID_input': [{ type: core_2.Input, args: ['tooltip.templateID',] },],
    'scales_input': [{ type: core_2.Input, args: ['scales',] },],
    'scales_indicators_stateRanges_input': [{ type: core_2.Input, args: ['scales.indicators.stateRanges',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'value_two': [{ type: core_2.Input, args: ['value',] },],
    'value_twoChange': [{ type: core_2.Output, args: ['valueChange',] },],
    'minimum_two': [{ type: core_2.Input, args: ['minimum',] },],
    'minimum_twoChange': [{ type: core_2.Output, args: ['minimumChange',] },],
    'maximum_two': [{ type: core_2.Input, args: ['maximum',] },],
    'maximum_twoChange': [{ type: core_2.Output, args: ['maximumChange',] },],
    'legendItemRender_output': [{ type: core_2.Output, args: ['legendItemRender',] },],
    'legendItemClick_output': [{ type: core_2.Output, args: ['legendItemClick',] },],
    'rangeMouseMove_output': [{ type: core_2.Output, args: ['rangeMouseMove',] },],
    'drawCustomLabel_output': [{ type: core_2.Output, args: ['drawCustomLabel',] },],
    'drawIndicators_output': [{ type: core_2.Output, args: ['drawIndicators',] },],
    'drawLabels_output': [{ type: core_2.Output, args: ['drawLabels',] },],
    'drawPointerCap_output': [{ type: core_2.Output, args: ['drawPointerCap',] },],
    'drawPointers_output': [{ type: core_2.Output, args: ['drawPointers',] },],
    'drawRange_output': [{ type: core_2.Output, args: ['drawRange',] },],
    'drawTicks_output': [{ type: core_2.Output, args: ['drawTicks',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'mouseClick_output': [{ type: core_2.Output, args: ['mouseClick',] },],
    'mouseClickMove_output': [{ type: core_2.Output, args: ['mouseClickMove',] },],
    'mouseClickUp_output': [{ type: core_2.Output, args: ['mouseClickUp',] },],
    'renderComplete_output': [{ type: core_2.Output, args: ['renderComplete',] },],
    'tag_scales': [{ type: core_2.ContentChild, args: [CircularGaugeScalesDirective,] },],
};
exports.CircularGaugeComponent = CircularGaugeComponent;
exports.EJ_CIRCULARGAUGE_COMPONENTS = [CircularGaugeComponent,
    CircularGaugePointersDirective, CircularGaugeLabelsDirective, CircularGaugeTicksDirective, CircularGaugeRangesDirective, CircularGaugeStateRangesDirective, CircularGaugeIndicatorsDirective, CircularGaugeSubGaugesDirective, CircularGaugeScalesDirective, CircularGaugePointerDirective, CircularGaugeLabelDirective, CircularGaugeTickDirective, CircularGaugeRangeDirective, CircularGaugeStateRangeDirective, CircularGaugeIndicatorDirective, CircularGaugeSubGaugeDirective, CircularGaugeScaleDirective];
//# sourceMappingURL=circulargauge.component.js.map
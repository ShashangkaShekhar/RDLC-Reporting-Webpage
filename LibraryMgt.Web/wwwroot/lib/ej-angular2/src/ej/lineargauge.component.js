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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.lineargauge.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var LinearGaugeMarkerPointerDirective = (function (_super) {
    __extends(LinearGaugeMarkerPointerDirective, _super);
    function LinearGaugeMarkerPointerDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return LinearGaugeMarkerPointerDirective;
}(core_1.ComplexTagElement));
LinearGaugeMarkerPointerDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-markerpointers>e-markerpointer',
            },] },
];
/** @nocollapse */
LinearGaugeMarkerPointerDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
LinearGaugeMarkerPointerDirective.propDecorators = {
    'backgroundColor': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'border': [{ type: core_2.Input, args: ['border',] },],
    'border_color': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width': [{ type: core_2.Input, args: ['border.width',] },],
    'distanceFromScale': [{ type: core_2.Input, args: ['distanceFromScale',] },],
    'gradients': [{ type: core_2.Input, args: ['gradients',] },],
    'length': [{ type: core_2.Input, args: ['length',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'placement': [{ type: core_2.Input, args: ['placement',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'value': [{ type: core_2.Input, args: ['value',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
};
exports.LinearGaugeMarkerPointerDirective = LinearGaugeMarkerPointerDirective;
var LinearGaugeMarkerPointersDirective = (function (_super) {
    __extends(LinearGaugeMarkerPointersDirective, _super);
    function LinearGaugeMarkerPointersDirective(widget) {
        return _super.call(this, 'markerPointers') || this;
    }
    return LinearGaugeMarkerPointersDirective;
}(core_1.ArrayTagElement));
LinearGaugeMarkerPointersDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-markerpointers',
                queries: {
                    children: new core_2.ContentChildren(LinearGaugeMarkerPointerDirective)
                }
            },] },
];
/** @nocollapse */
LinearGaugeMarkerPointersDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
exports.LinearGaugeMarkerPointersDirective = LinearGaugeMarkerPointersDirective;
var LinearGaugeBarPointerDirective = (function (_super) {
    __extends(LinearGaugeBarPointerDirective, _super);
    function LinearGaugeBarPointerDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return LinearGaugeBarPointerDirective;
}(core_1.ComplexTagElement));
LinearGaugeBarPointerDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-barpointers>e-barpointer',
            },] },
];
/** @nocollapse */
LinearGaugeBarPointerDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
LinearGaugeBarPointerDirective.propDecorators = {
    'backgroundColor': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'border': [{ type: core_2.Input, args: ['border',] },],
    'border_color': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width': [{ type: core_2.Input, args: ['border.width',] },],
    'distanceFromScale': [{ type: core_2.Input, args: ['distanceFromScale',] },],
    'gradients': [{ type: core_2.Input, args: ['gradients',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'value': [{ type: core_2.Input, args: ['value',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
};
exports.LinearGaugeBarPointerDirective = LinearGaugeBarPointerDirective;
var LinearGaugeBarPointersDirective = (function (_super) {
    __extends(LinearGaugeBarPointersDirective, _super);
    function LinearGaugeBarPointersDirective(widget) {
        return _super.call(this, 'barPointers') || this;
    }
    return LinearGaugeBarPointersDirective;
}(core_1.ArrayTagElement));
LinearGaugeBarPointersDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-barpointers',
                queries: {
                    children: new core_2.ContentChildren(LinearGaugeBarPointerDirective)
                }
            },] },
];
/** @nocollapse */
LinearGaugeBarPointersDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
exports.LinearGaugeBarPointersDirective = LinearGaugeBarPointersDirective;
var LinearGaugeRangeDirective = (function (_super) {
    __extends(LinearGaugeRangeDirective, _super);
    function LinearGaugeRangeDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return LinearGaugeRangeDirective;
}(core_1.ComplexTagElement));
LinearGaugeRangeDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-ranges>e-range',
            },] },
];
/** @nocollapse */
LinearGaugeRangeDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
LinearGaugeRangeDirective.propDecorators = {
    'backgroundColor': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'border': [{ type: core_2.Input, args: ['border',] },],
    'border_color': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width': [{ type: core_2.Input, args: ['border.width',] },],
    'distanceFromScale': [{ type: core_2.Input, args: ['distanceFromScale',] },],
    'endValue': [{ type: core_2.Input, args: ['endValue',] },],
    'endWidth': [{ type: core_2.Input, args: ['endWidth',] },],
    'gradients': [{ type: core_2.Input, args: ['gradients',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'placement': [{ type: core_2.Input, args: ['placement',] },],
    'startValue': [{ type: core_2.Input, args: ['startValue',] },],
    'startWidth': [{ type: core_2.Input, args: ['startWidth',] },],
};
exports.LinearGaugeRangeDirective = LinearGaugeRangeDirective;
var LinearGaugeRangesDirective = (function (_super) {
    __extends(LinearGaugeRangesDirective, _super);
    function LinearGaugeRangesDirective(widget) {
        return _super.call(this, 'ranges') || this;
    }
    return LinearGaugeRangesDirective;
}(core_1.ArrayTagElement));
LinearGaugeRangesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-ranges',
                queries: {
                    children: new core_2.ContentChildren(LinearGaugeRangeDirective)
                }
            },] },
];
/** @nocollapse */
LinearGaugeRangesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
exports.LinearGaugeRangesDirective = LinearGaugeRangesDirective;
var LinearGaugeTickDirective = (function (_super) {
    __extends(LinearGaugeTickDirective, _super);
    function LinearGaugeTickDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return LinearGaugeTickDirective;
}(core_1.ComplexTagElement));
LinearGaugeTickDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-ticks>e-tick',
            },] },
];
/** @nocollapse */
LinearGaugeTickDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
LinearGaugeTickDirective.propDecorators = {
    'angle': [{ type: core_2.Input, args: ['angle',] },],
    'color': [{ type: core_2.Input, args: ['color',] },],
    'distanceFromScale': [{ type: core_2.Input, args: ['distanceFromScale',] },],
    'distanceFromScale_x': [{ type: core_2.Input, args: ['distanceFromScale.x',] },],
    'distanceFromScale_y': [{ type: core_2.Input, args: ['distanceFromScale.y',] },],
    'height': [{ type: core_2.Input, args: ['height',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'placement': [{ type: core_2.Input, args: ['placement',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
};
exports.LinearGaugeTickDirective = LinearGaugeTickDirective;
var LinearGaugeTicksDirective = (function (_super) {
    __extends(LinearGaugeTicksDirective, _super);
    function LinearGaugeTicksDirective(widget) {
        return _super.call(this, 'ticks') || this;
    }
    return LinearGaugeTicksDirective;
}(core_1.ArrayTagElement));
LinearGaugeTicksDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-ticks',
                queries: {
                    children: new core_2.ContentChildren(LinearGaugeTickDirective)
                }
            },] },
];
/** @nocollapse */
LinearGaugeTicksDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
exports.LinearGaugeTicksDirective = LinearGaugeTicksDirective;
var LinearGaugeStateRangeDirective = (function (_super) {
    __extends(LinearGaugeStateRangeDirective, _super);
    function LinearGaugeStateRangeDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return LinearGaugeStateRangeDirective;
}(core_1.ComplexTagElement));
LinearGaugeStateRangeDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-stateranges>e-staterange',
            },] },
];
/** @nocollapse */
LinearGaugeStateRangeDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
LinearGaugeStateRangeDirective.propDecorators = {
    'backgroundColor': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'borderColor': [{ type: core_2.Input, args: ['borderColor',] },],
    'endValue': [{ type: core_2.Input, args: ['endValue',] },],
    'startValue': [{ type: core_2.Input, args: ['startValue',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'textColor': [{ type: core_2.Input, args: ['textColor',] },],
};
exports.LinearGaugeStateRangeDirective = LinearGaugeStateRangeDirective;
var LinearGaugeStateRangesDirective = (function (_super) {
    __extends(LinearGaugeStateRangesDirective, _super);
    function LinearGaugeStateRangesDirective(widget) {
        return _super.call(this, 'stateRanges') || this;
    }
    return LinearGaugeStateRangesDirective;
}(core_1.ArrayTagElement));
LinearGaugeStateRangesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-indicators>e-stateranges',
                queries: {
                    children: new core_2.ContentChildren(LinearGaugeStateRangeDirective)
                }
            },] },
];
/** @nocollapse */
LinearGaugeStateRangesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
exports.LinearGaugeStateRangesDirective = LinearGaugeStateRangesDirective;
var LinearGaugeIndicatorDirective = (function (_super) {
    __extends(LinearGaugeIndicatorDirective, _super);
    function LinearGaugeIndicatorDirective(widget) {
        var _this = _super.call(this, ['stateRanges']) || this;
        _this.parent = widget;
        return _this;
    }
    return LinearGaugeIndicatorDirective;
}(core_1.ComplexTagElement));
LinearGaugeIndicatorDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-indicators>e-indicator',
            },] },
];
/** @nocollapse */
LinearGaugeIndicatorDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
LinearGaugeIndicatorDirective.propDecorators = {
    'backgroundColor': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'border': [{ type: core_2.Input, args: ['border',] },],
    'border_color': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width': [{ type: core_2.Input, args: ['border.width',] },],
    'font': [{ type: core_2.Input, args: ['font',] },],
    'font_fontFamily': [{ type: core_2.Input, args: ['font.fontFamily',] },],
    'font_fontStyle': [{ type: core_2.Input, args: ['font.fontStyle',] },],
    'font_size': [{ type: core_2.Input, args: ['font.size',] },],
    'height': [{ type: core_2.Input, args: ['height',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'position': [{ type: core_2.Input, args: ['position',] },],
    'position_x': [{ type: core_2.Input, args: ['position.x',] },],
    'position_y': [{ type: core_2.Input, args: ['position.y',] },],
    'stateRanges': [{ type: core_2.Input, args: ['stateRanges',] },],
    'textLocation': [{ type: core_2.Input, args: ['textLocation',] },],
    'textLocation_x': [{ type: core_2.Input, args: ['textLocation.x',] },],
    'textLocation_y': [{ type: core_2.Input, args: ['textLocation.y',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'tag_stateRanges': [{ type: core_2.ContentChild, args: [LinearGaugeStateRangesDirective,] },],
};
exports.LinearGaugeIndicatorDirective = LinearGaugeIndicatorDirective;
var LinearGaugeIndicatorsDirective = (function (_super) {
    __extends(LinearGaugeIndicatorsDirective, _super);
    function LinearGaugeIndicatorsDirective(widget) {
        return _super.call(this, 'indicators') || this;
    }
    return LinearGaugeIndicatorsDirective;
}(core_1.ArrayTagElement));
LinearGaugeIndicatorsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-indicators',
                queries: {
                    children: new core_2.ContentChildren(LinearGaugeIndicatorDirective)
                }
            },] },
];
/** @nocollapse */
LinearGaugeIndicatorsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
exports.LinearGaugeIndicatorsDirective = LinearGaugeIndicatorsDirective;
var LinearGaugeLabelDirective = (function (_super) {
    __extends(LinearGaugeLabelDirective, _super);
    function LinearGaugeLabelDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return LinearGaugeLabelDirective;
}(core_1.ComplexTagElement));
LinearGaugeLabelDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-labels>e-label',
            },] },
];
/** @nocollapse */
LinearGaugeLabelDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
LinearGaugeLabelDirective.propDecorators = {
    'angle': [{ type: core_2.Input, args: ['angle',] },],
    'distanceFromScale': [{ type: core_2.Input, args: ['distanceFromScale',] },],
    'distanceFromScale_x': [{ type: core_2.Input, args: ['distanceFromScale.x',] },],
    'distanceFromScale_y': [{ type: core_2.Input, args: ['distanceFromScale.y',] },],
    'font': [{ type: core_2.Input, args: ['font',] },],
    'font_fontFamily': [{ type: core_2.Input, args: ['font.fontFamily',] },],
    'font_fontStyle': [{ type: core_2.Input, args: ['font.fontStyle',] },],
    'font_size': [{ type: core_2.Input, args: ['font.size',] },],
    'includeFirstValue': [{ type: core_2.Input, args: ['includeFirstValue',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'placement': [{ type: core_2.Input, args: ['placement',] },],
    'textColor': [{ type: core_2.Input, args: ['textColor',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'unitText': [{ type: core_2.Input, args: ['unitText',] },],
    'unitTextPlacement': [{ type: core_2.Input, args: ['unitTextPlacement',] },],
};
exports.LinearGaugeLabelDirective = LinearGaugeLabelDirective;
var LinearGaugeLabelsDirective = (function (_super) {
    __extends(LinearGaugeLabelsDirective, _super);
    function LinearGaugeLabelsDirective(widget) {
        return _super.call(this, 'labels') || this;
    }
    return LinearGaugeLabelsDirective;
}(core_1.ArrayTagElement));
LinearGaugeLabelsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-labels',
                queries: {
                    children: new core_2.ContentChildren(LinearGaugeLabelDirective)
                }
            },] },
];
/** @nocollapse */
LinearGaugeLabelsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
exports.LinearGaugeLabelsDirective = LinearGaugeLabelsDirective;
var LinearGaugeScaleDirective = (function (_super) {
    __extends(LinearGaugeScaleDirective, _super);
    function LinearGaugeScaleDirective(widget) {
        var _this = _super.call(this, ['markerPointers', 'barPointers', 'ranges', 'ticks', 'indicators', 'labels']) || this;
        _this.parent = widget;
        return _this;
    }
    return LinearGaugeScaleDirective;
}(core_1.ComplexTagElement));
LinearGaugeScaleDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-scales>e-scale',
            },] },
];
/** @nocollapse */
LinearGaugeScaleDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
LinearGaugeScaleDirective.propDecorators = {
    'backgroundColor': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'barPointers': [{ type: core_2.Input, args: ['barPointers',] },],
    'border': [{ type: core_2.Input, args: ['border',] },],
    'border_color': [{ type: core_2.Input, args: ['border.color',] },],
    'border_width': [{ type: core_2.Input, args: ['border.width',] },],
    'customLabels': [{ type: core_2.Input, args: ['customLabels',] },],
    'direction': [{ type: core_2.Input, args: ['direction',] },],
    'indicators': [{ type: core_2.Input, args: ['indicators',] },],
    'labels': [{ type: core_2.Input, args: ['labels',] },],
    'length': [{ type: core_2.Input, args: ['length',] },],
    'majorIntervalValue': [{ type: core_2.Input, args: ['majorIntervalValue',] },],
    'markerPointers': [{ type: core_2.Input, args: ['markerPointers',] },],
    'maximum': [{ type: core_2.Input, args: ['maximum',] },],
    'minimum': [{ type: core_2.Input, args: ['minimum',] },],
    'minorIntervalValue': [{ type: core_2.Input, args: ['minorIntervalValue',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'position': [{ type: core_2.Input, args: ['position',] },],
    'position_x': [{ type: core_2.Input, args: ['position.x',] },],
    'position_y': [{ type: core_2.Input, args: ['position.y',] },],
    'ranges': [{ type: core_2.Input, args: ['ranges',] },],
    'shadowOffset': [{ type: core_2.Input, args: ['shadowOffset',] },],
    'showBarPointers': [{ type: core_2.Input, args: ['showBarPointers',] },],
    'showCustomLabels': [{ type: core_2.Input, args: ['showCustomLabels',] },],
    'showIndicators': [{ type: core_2.Input, args: ['showIndicators',] },],
    'showLabels': [{ type: core_2.Input, args: ['showLabels',] },],
    'showMarkerPointers': [{ type: core_2.Input, args: ['showMarkerPointers',] },],
    'showRanges': [{ type: core_2.Input, args: ['showRanges',] },],
    'showTicks': [{ type: core_2.Input, args: ['showTicks',] },],
    'ticks': [{ type: core_2.Input, args: ['ticks',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'tag_markerPointers': [{ type: core_2.ContentChild, args: [LinearGaugeMarkerPointersDirective,] },],
    'tag_barPointers': [{ type: core_2.ContentChild, args: [LinearGaugeBarPointersDirective,] },],
    'tag_ranges': [{ type: core_2.ContentChild, args: [LinearGaugeRangesDirective,] },],
    'tag_ticks': [{ type: core_2.ContentChild, args: [LinearGaugeTicksDirective,] },],
    'tag_indicators': [{ type: core_2.ContentChild, args: [LinearGaugeIndicatorsDirective,] },],
    'tag_labels': [{ type: core_2.ContentChild, args: [LinearGaugeLabelsDirective,] },],
};
exports.LinearGaugeScaleDirective = LinearGaugeScaleDirective;
var LinearGaugeScalesDirective = (function (_super) {
    __extends(LinearGaugeScalesDirective, _super);
    function LinearGaugeScalesDirective(widget) {
        return _super.call(this, 'scales') || this;
    }
    return LinearGaugeScalesDirective;
}(core_1.ArrayTagElement));
LinearGaugeScalesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-lineargauge>e-scales',
                queries: {
                    children: new core_2.ContentChildren(LinearGaugeScaleDirective)
                }
            },] },
];
/** @nocollapse */
LinearGaugeScalesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return LinearGaugeComponent; }),] },] },
]; };
exports.LinearGaugeScalesDirective = LinearGaugeScalesDirective;
var LinearGaugeComponent = (function (_super) {
    __extends(LinearGaugeComponent, _super);
    function LinearGaugeComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'LinearGauge', el, cdRef, ['scales'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.value_twoChange = new core_2.EventEmitter();
        _this.minimum_twoChange = new core_2.EventEmitter();
        _this.maximum_twoChange = new core_2.EventEmitter();
        _this.drawBarPointers_output = new core_2.EventEmitter();
        _this.drawCustomLabel_output = new core_2.EventEmitter();
        _this.drawIndicators_output = new core_2.EventEmitter();
        _this.drawLabels_output = new core_2.EventEmitter();
        _this.drawMarkerPointers_output = new core_2.EventEmitter();
        _this.drawRange_output = new core_2.EventEmitter();
        _this.drawTicks_output = new core_2.EventEmitter();
        _this.init_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.mouseClick_output = new core_2.EventEmitter();
        _this.mouseClickMove_output = new core_2.EventEmitter();
        _this.mouseClickUp_output = new core_2.EventEmitter();
        _this.renderComplete_output = new core_2.EventEmitter();
        return _this;
    }
    return LinearGaugeComponent;
}(core_1.EJComponents));
LinearGaugeComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-lineargauge',
                template: ''
            },] },
];
/** @nocollapse */
LinearGaugeComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
LinearGaugeComponent.propDecorators = {
    'animationSpeed_input': [{ type: core_2.Input, args: ['animationSpeed',] },],
    'backgroundColor_input': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'borderColor_input': [{ type: core_2.Input, args: ['borderColor',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enableMarkerPointerAnimation_input': [{ type: core_2.Input, args: ['enableMarkerPointerAnimation',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'enableGroupSeparator_input': [{ type: core_2.Input, args: ['enableGroupSeparator',] },],
    'enableResize_input': [{ type: core_2.Input, args: ['enableResize',] },],
    'frame_input': [{ type: core_2.Input, args: ['frame',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'labelColor_input': [{ type: core_2.Input, args: ['labelColor',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'outerCustomLabelPosition_input': [{ type: core_2.Input, args: ['outerCustomLabelPosition',] },],
    'pointerGradient1_input': [{ type: core_2.Input, args: ['pointerGradient1',] },],
    'pointerGradient2_input': [{ type: core_2.Input, args: ['pointerGradient2',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'theme_input': [{ type: core_2.Input, args: ['theme',] },],
    'tickColor_input': [{ type: core_2.Input, args: ['tickColor',] },],
    'tooltip_input': [{ type: core_2.Input, args: ['tooltip',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'frame_backgroundImageUrl_input': [{ type: core_2.Input, args: ['frame.backgroundImageUrl',] },],
    'frame_innerWidth_input': [{ type: core_2.Input, args: ['frame.innerWidth',] },],
    'frame_outerWidth_input': [{ type: core_2.Input, args: ['frame.outerWidth',] },],
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
    'drawBarPointers_output': [{ type: core_2.Output, args: ['drawBarPointers',] },],
    'drawCustomLabel_output': [{ type: core_2.Output, args: ['drawCustomLabel',] },],
    'drawIndicators_output': [{ type: core_2.Output, args: ['drawIndicators',] },],
    'drawLabels_output': [{ type: core_2.Output, args: ['drawLabels',] },],
    'drawMarkerPointers_output': [{ type: core_2.Output, args: ['drawMarkerPointers',] },],
    'drawRange_output': [{ type: core_2.Output, args: ['drawRange',] },],
    'drawTicks_output': [{ type: core_2.Output, args: ['drawTicks',] },],
    'init_output': [{ type: core_2.Output, args: ['init',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'mouseClick_output': [{ type: core_2.Output, args: ['mouseClick',] },],
    'mouseClickMove_output': [{ type: core_2.Output, args: ['mouseClickMove',] },],
    'mouseClickUp_output': [{ type: core_2.Output, args: ['mouseClickUp',] },],
    'renderComplete_output': [{ type: core_2.Output, args: ['renderComplete',] },],
    'tag_scales': [{ type: core_2.ContentChild, args: [LinearGaugeScalesDirective,] },],
};
exports.LinearGaugeComponent = LinearGaugeComponent;
exports.EJ_LINEARGAUGE_COMPONENTS = [LinearGaugeComponent,
    LinearGaugeMarkerPointersDirective, LinearGaugeBarPointersDirective, LinearGaugeRangesDirective, LinearGaugeTicksDirective, LinearGaugeStateRangesDirective, LinearGaugeIndicatorsDirective, LinearGaugeLabelsDirective, LinearGaugeScalesDirective, LinearGaugeMarkerPointerDirective, LinearGaugeBarPointerDirective, LinearGaugeRangeDirective, LinearGaugeTickDirective, LinearGaugeStateRangeDirective, LinearGaugeIndicatorDirective, LinearGaugeLabelDirective, LinearGaugeScaleDirective];
//# sourceMappingURL=lineargauge.component.js.map
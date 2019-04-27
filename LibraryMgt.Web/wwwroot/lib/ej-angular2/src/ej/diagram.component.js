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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var DiagramCommandManagerCommandDirective = (function (_super) {
    __extends(DiagramCommandManagerCommandDirective, _super);
    function DiagramCommandManagerCommandDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return DiagramCommandManagerCommandDirective;
}(core_1.ComplexTagElement));
DiagramCommandManagerCommandDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-commandmanager-commands>e-commandmanager-command',
            },] },
];
/** @nocollapse */
DiagramCommandManagerCommandDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
DiagramCommandManagerCommandDirective.propDecorators = {
    'canExecute': [{ type: core_2.Input, args: ['canExecute',] },],
    'execute': [{ type: core_2.Input, args: ['execute',] },],
    'gesture': [{ type: core_2.Input, args: ['gesture',] },],
    'gesture_key': [{ type: core_2.Input, args: ['gesture.key',] },],
    'gesture_keyModifiers': [{ type: core_2.Input, args: ['gesture.keyModifiers',] },],
    'parameter': [{ type: core_2.Input, args: ['parameter',] },],
};
exports.DiagramCommandManagerCommandDirective = DiagramCommandManagerCommandDirective;
var DiagramCommandManagerCommandsDirective = (function (_super) {
    __extends(DiagramCommandManagerCommandsDirective, _super);
    function DiagramCommandManagerCommandsDirective(widget) {
        return _super.call(this, 'commandManager.commands') || this;
    }
    return DiagramCommandManagerCommandsDirective;
}(core_1.ArrayTagElement));
DiagramCommandManagerCommandsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-diagram>e-commandmanager-commands',
                queries: {
                    children: new core_2.ContentChildren(DiagramCommandManagerCommandDirective)
                }
            },] },
];
/** @nocollapse */
DiagramCommandManagerCommandsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
exports.DiagramCommandManagerCommandsDirective = DiagramCommandManagerCommandsDirective;
var DiagramSegmentDirective = (function (_super) {
    __extends(DiagramSegmentDirective, _super);
    function DiagramSegmentDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return DiagramSegmentDirective;
}(core_1.ComplexTagElement));
DiagramSegmentDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-segments>e-segment',
            },] },
];
/** @nocollapse */
DiagramSegmentDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
DiagramSegmentDirective.propDecorators = {
    'direction': [{ type: core_2.Input, args: ['direction',] },],
    'length': [{ type: core_2.Input, args: ['length',] },],
    'point': [{ type: core_2.Input, args: ['point',] },],
    'point1': [{ type: core_2.Input, args: ['point1',] },],
    'point2': [{ type: core_2.Input, args: ['point2',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'vector1': [{ type: core_2.Input, args: ['vector1',] },],
    'vector2': [{ type: core_2.Input, args: ['vector2',] },],
};
exports.DiagramSegmentDirective = DiagramSegmentDirective;
var DiagramSegmentsDirective = (function (_super) {
    __extends(DiagramSegmentsDirective, _super);
    function DiagramSegmentsDirective(widget) {
        return _super.call(this, 'segments') || this;
    }
    return DiagramSegmentsDirective;
}(core_1.ArrayTagElement));
DiagramSegmentsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-connectors>e-segments',
                queries: {
                    children: new core_2.ContentChildren(DiagramSegmentDirective)
                }
            },] },
];
/** @nocollapse */
DiagramSegmentsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
exports.DiagramSegmentsDirective = DiagramSegmentsDirective;
var DiagramConnectorLabelDirective = (function (_super) {
    __extends(DiagramConnectorLabelDirective, _super);
    function DiagramConnectorLabelDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return DiagramConnectorLabelDirective;
}(core_1.ComplexTagElement));
DiagramConnectorLabelDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-connectorlabels>e-connectorlabel',
            },] },
];
/** @nocollapse */
DiagramConnectorLabelDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
DiagramConnectorLabelDirective.propDecorators = {
    'alignment': [{ type: core_2.Input, args: ['alignment',] },],
    'bold': [{ type: core_2.Input, args: ['bold',] },],
    'borderColor': [{ type: core_2.Input, args: ['borderColor',] },],
    'borderWidth': [{ type: core_2.Input, args: ['borderWidth',] },],
    'boundaryConstraints': [{ type: core_2.Input, args: ['boundaryConstraints',] },],
    'constraints': [{ type: core_2.Input, args: ['constraints',] },],
    'fillColor': [{ type: core_2.Input, args: ['fillColor',] },],
    'fontColor': [{ type: core_2.Input, args: ['fontColor',] },],
    'fontFamily': [{ type: core_2.Input, args: ['fontFamily',] },],
    'fontSize': [{ type: core_2.Input, args: ['fontSize',] },],
    'height': [{ type: core_2.Input, args: ['height',] },],
    'horizontalAlignment': [{ type: core_2.Input, args: ['horizontalAlignment',] },],
    'hyperlink': [{ type: core_2.Input, args: ['hyperlink',] },],
    'italic': [{ type: core_2.Input, args: ['italic',] },],
    'mode': [{ type: core_2.Input, args: ['mode',] },],
    'name': [{ type: core_2.Input, args: ['name',] },],
    'offset': [{ type: core_2.Input, args: ['offset',] },],
    'margin': [{ type: core_2.Input, args: ['margin',] },],
    'margin_right': [{ type: core_2.Input, args: ['margin.right',] },],
    'margin_left': [{ type: core_2.Input, args: ['margin.left',] },],
    'margin_top': [{ type: core_2.Input, args: ['margin.top',] },],
    'margin_bottom': [{ type: core_2.Input, args: ['margin.bottom',] },],
    'dragLimit': [{ type: core_2.Input, args: ['dragLimit',] },],
    'dragLimit_right': [{ type: core_2.Input, args: ['dragLimit.right',] },],
    'dragLimit_left': [{ type: core_2.Input, args: ['dragLimit.left',] },],
    'dragLimit_top': [{ type: core_2.Input, args: ['dragLimit.top',] },],
    'dragLimit_bottom': [{ type: core_2.Input, args: ['dragLimit.bottom',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'readOnly': [{ type: core_2.Input, args: ['readOnly',] },],
    'relativeMode': [{ type: core_2.Input, args: ['relativeMode',] },],
    'rotateAngle': [{ type: core_2.Input, args: ['rotateAngle',] },],
    'segmentOffset': [{ type: core_2.Input, args: ['segmentOffset',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'textAlign': [{ type: core_2.Input, args: ['textAlign',] },],
    'textDecoration': [{ type: core_2.Input, args: ['textDecoration',] },],
    'verticalAlignment': [{ type: core_2.Input, args: ['verticalAlignment',] },],
    'visible': [{ type: core_2.Input, args: ['visible',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'wrapping': [{ type: core_2.Input, args: ['wrapping',] },],
};
exports.DiagramConnectorLabelDirective = DiagramConnectorLabelDirective;
var DiagramConnectorLabelsDirective = (function (_super) {
    __extends(DiagramConnectorLabelsDirective, _super);
    function DiagramConnectorLabelsDirective(widget) {
        return _super.call(this, 'labels') || this;
    }
    return DiagramConnectorLabelsDirective;
}(core_1.ArrayTagElement));
DiagramConnectorLabelsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-connectors>e-connectorlabels',
                queries: {
                    children: new core_2.ContentChildren(DiagramConnectorLabelDirective)
                }
            },] },
];
/** @nocollapse */
DiagramConnectorLabelsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
exports.DiagramConnectorLabelsDirective = DiagramConnectorLabelsDirective;
var DiagramConnectorDirective = (function (_super) {
    __extends(DiagramConnectorDirective, _super);
    function DiagramConnectorDirective(widget) {
        var _this = _super.call(this, ['segments', 'labels']) || this;
        _this.parent = widget;
        return _this;
    }
    return DiagramConnectorDirective;
}(core_1.ComplexTagElement));
DiagramConnectorDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-connectors>e-connector',
            },] },
];
/** @nocollapse */
DiagramConnectorDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
DiagramConnectorDirective.propDecorators = {
    'addInfo': [{ type: core_2.Input, args: ['addInfo',] },],
    'bridgeSpace': [{ type: core_2.Input, args: ['bridgeSpace',] },],
    'constraints': [{ type: core_2.Input, args: ['constraints',] },],
    'cornerRadius': [{ type: core_2.Input, args: ['cornerRadius',] },],
    'cssClass': [{ type: core_2.Input, args: ['cssClass',] },],
    'horizontalAlign': [{ type: core_2.Input, args: ['horizontalAlign',] },],
    'labels': [{ type: core_2.Input, args: ['labels',] },],
    'lineColor': [{ type: core_2.Input, args: ['lineColor',] },],
    'lineDashArray': [{ type: core_2.Input, args: ['lineDashArray',] },],
    'lineHitPadding': [{ type: core_2.Input, args: ['lineHitPadding',] },],
    'lineWidth': [{ type: core_2.Input, args: ['lineWidth',] },],
    'marginBottom': [{ type: core_2.Input, args: ['marginBottom',] },],
    'marginLeft': [{ type: core_2.Input, args: ['marginLeft',] },],
    'marginRight': [{ type: core_2.Input, args: ['marginRight',] },],
    'marginTop': [{ type: core_2.Input, args: ['marginTop',] },],
    'name': [{ type: core_2.Input, args: ['name',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'paletteItem': [{ type: core_2.Input, args: ['paletteItem',] },],
    'parent': [{ type: core_2.Input, args: ['parent',] },],
    'segments': [{ type: core_2.Input, args: ['segments',] },],
    'shape': [{ type: core_2.Input, args: ['shape',] },],
    'shape_type': [{ type: core_2.Input, args: ['shape.type',] },],
    'shape_flow': [{ type: core_2.Input, args: ['shape.flow',] },],
    'shape_association': [{ type: core_2.Input, args: ['shape.association',] },],
    'shape_message': [{ type: core_2.Input, args: ['shape.message',] },],
    'shape_sequence': [{ type: core_2.Input, args: ['shape.sequence',] },],
    'shape_relationship': [{ type: core_2.Input, args: ['shape.relationship',] },],
    'shape_multiplicity': [{ type: core_2.Input, args: ['shape.multiplicity',] },],
    'shape_multiplicity_type': [{ type: core_2.Input, args: ['shape.multiplicity.type',] },],
    'shape_multiplicity_source': [{ type: core_2.Input, args: ['shape.multiplicity.source',] },],
    'shape_multiplicity_source_optional': [{ type: core_2.Input, args: ['shape.multiplicity.source.optional',] },],
    'shape_multiplicity_source_lowerBounds': [{ type: core_2.Input, args: ['shape.multiplicity.source.lowerBounds',] },],
    'shape_multiplicity_source_upperBounds': [{ type: core_2.Input, args: ['shape.multiplicity.source.upperBounds',] },],
    'shape_multiplicity_target': [{ type: core_2.Input, args: ['shape.multiplicity.target',] },],
    'shape_ActivityFlow': [{ type: core_2.Input, args: ['shape.ActivityFlow',] },],
    'sourceDecorator': [{ type: core_2.Input, args: ['sourceDecorator',] },],
    'sourceDecorator_borderColor': [{ type: core_2.Input, args: ['sourceDecorator.borderColor',] },],
    'sourceDecorator_borderWidth': [{ type: core_2.Input, args: ['sourceDecorator.borderWidth',] },],
    'sourceDecorator_cssClass': [{ type: core_2.Input, args: ['sourceDecorator.cssClass',] },],
    'sourceDecorator_fillColor': [{ type: core_2.Input, args: ['sourceDecorator.fillColor',] },],
    'sourceDecorator_height': [{ type: core_2.Input, args: ['sourceDecorator.height',] },],
    'sourceDecorator_pathData': [{ type: core_2.Input, args: ['sourceDecorator.pathData',] },],
    'sourceDecorator_shape': [{ type: core_2.Input, args: ['sourceDecorator.shape',] },],
    'sourceDecorator_width': [{ type: core_2.Input, args: ['sourceDecorator.width',] },],
    'sourceNode': [{ type: core_2.Input, args: ['sourceNode',] },],
    'sourcePadding': [{ type: core_2.Input, args: ['sourcePadding',] },],
    'sourcePoint': [{ type: core_2.Input, args: ['sourcePoint',] },],
    'sourcePoint_x': [{ type: core_2.Input, args: ['sourcePoint.x',] },],
    'sourcePoint_y': [{ type: core_2.Input, args: ['sourcePoint.y',] },],
    'sourcePort': [{ type: core_2.Input, args: ['sourcePort',] },],
    'targetDecorator': [{ type: core_2.Input, args: ['targetDecorator',] },],
    'targetDecorator_borderColor': [{ type: core_2.Input, args: ['targetDecorator.borderColor',] },],
    'targetDecorator_cssClass': [{ type: core_2.Input, args: ['targetDecorator.cssClass',] },],
    'targetDecorator_fillColor': [{ type: core_2.Input, args: ['targetDecorator.fillColor',] },],
    'targetDecorator_height': [{ type: core_2.Input, args: ['targetDecorator.height',] },],
    'targetDecorator_pathData': [{ type: core_2.Input, args: ['targetDecorator.pathData',] },],
    'targetDecorator_shape': [{ type: core_2.Input, args: ['targetDecorator.shape',] },],
    'targetDecorator_width': [{ type: core_2.Input, args: ['targetDecorator.width',] },],
    'targetNode': [{ type: core_2.Input, args: ['targetNode',] },],
    'targetPadding': [{ type: core_2.Input, args: ['targetPadding',] },],
    'targetPoint': [{ type: core_2.Input, args: ['targetPoint',] },],
    'targetPort': [{ type: core_2.Input, args: ['targetPort',] },],
    'tooltip': [{ type: core_2.Input, args: ['tooltip',] },],
    'verticalAlign': [{ type: core_2.Input, args: ['verticalAlign',] },],
    'visible': [{ type: core_2.Input, args: ['visible',] },],
    'zOrder': [{ type: core_2.Input, args: ['zOrder',] },],
    'tag_segments': [{ type: core_2.ContentChild, args: [DiagramSegmentsDirective,] },],
    'tag_labels': [{ type: core_2.ContentChild, args: [DiagramConnectorLabelsDirective,] },],
};
exports.DiagramConnectorDirective = DiagramConnectorDirective;
var DiagramConnectorsDirective = (function (_super) {
    __extends(DiagramConnectorsDirective, _super);
    function DiagramConnectorsDirective(widget) {
        return _super.call(this, 'connectors') || this;
    }
    return DiagramConnectorsDirective;
}(core_1.ArrayTagElement));
DiagramConnectorsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-diagram>e-connectors',
                queries: {
                    children: new core_2.ContentChildren(DiagramConnectorDirective)
                }
            },] },
];
/** @nocollapse */
DiagramConnectorsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
exports.DiagramConnectorsDirective = DiagramConnectorsDirective;
var DiagramNodeLabelDirective = (function (_super) {
    __extends(DiagramNodeLabelDirective, _super);
    function DiagramNodeLabelDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return DiagramNodeLabelDirective;
}(core_1.ComplexTagElement));
DiagramNodeLabelDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-nodelabels>e-nodelabel',
            },] },
];
/** @nocollapse */
DiagramNodeLabelDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
DiagramNodeLabelDirective.propDecorators = {
    'bold': [{ type: core_2.Input, args: ['bold',] },],
    'borderColor': [{ type: core_2.Input, args: ['borderColor',] },],
    'borderWidth': [{ type: core_2.Input, args: ['borderWidth',] },],
    'cssClass': [{ type: core_2.Input, args: ['cssClass',] },],
    'constraints': [{ type: core_2.Input, args: ['constraints',] },],
    'fillColor': [{ type: core_2.Input, args: ['fillColor',] },],
    'fontColor': [{ type: core_2.Input, args: ['fontColor',] },],
    'fontFamily': [{ type: core_2.Input, args: ['fontFamily',] },],
    'fontSize': [{ type: core_2.Input, args: ['fontSize',] },],
    'height': [{ type: core_2.Input, args: ['height',] },],
    'horizontalAlignment': [{ type: core_2.Input, args: ['horizontalAlignment',] },],
    'italic': [{ type: core_2.Input, args: ['italic',] },],
    'margin': [{ type: core_2.Input, args: ['margin',] },],
    'mode': [{ type: core_2.Input, args: ['mode',] },],
    'name': [{ type: core_2.Input, args: ['name',] },],
    'offset': [{ type: core_2.Input, args: ['offset',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'overflowType': [{ type: core_2.Input, args: ['overflowType',] },],
    'readOnly': [{ type: core_2.Input, args: ['readOnly',] },],
    'rotateAngle': [{ type: core_2.Input, args: ['rotateAngle',] },],
    'templateId': [{ type: core_2.Input, args: ['templateId',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'textAlign': [{ type: core_2.Input, args: ['textAlign',] },],
    'textDecoration': [{ type: core_2.Input, args: ['textDecoration',] },],
    'textOverflow': [{ type: core_2.Input, args: ['textOverflow',] },],
    'verticalAlignment': [{ type: core_2.Input, args: ['verticalAlignment',] },],
    'visible': [{ type: core_2.Input, args: ['visible',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'wrapping': [{ type: core_2.Input, args: ['wrapping',] },],
};
exports.DiagramNodeLabelDirective = DiagramNodeLabelDirective;
var DiagramNodeLabelsDirective = (function (_super) {
    __extends(DiagramNodeLabelsDirective, _super);
    function DiagramNodeLabelsDirective(widget) {
        return _super.call(this, 'labels') || this;
    }
    return DiagramNodeLabelsDirective;
}(core_1.ArrayTagElement));
DiagramNodeLabelsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-nodes>e-nodelabels',
                queries: {
                    children: new core_2.ContentChildren(DiagramNodeLabelDirective)
                }
            },] },
];
/** @nocollapse */
DiagramNodeLabelsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
exports.DiagramNodeLabelsDirective = DiagramNodeLabelsDirective;
var DiagramPhaseDirective = (function (_super) {
    __extends(DiagramPhaseDirective, _super);
    function DiagramPhaseDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return DiagramPhaseDirective;
}(core_1.ComplexTagElement));
DiagramPhaseDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-phases>e-phase',
            },] },
];
/** @nocollapse */
DiagramPhaseDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
DiagramPhaseDirective.propDecorators = {
    'label': [{ type: core_2.Input, args: ['label',] },],
    'lineColor': [{ type: core_2.Input, args: ['lineColor',] },],
    'lineDashArray': [{ type: core_2.Input, args: ['lineDashArray',] },],
    'lineWidth': [{ type: core_2.Input, args: ['lineWidth',] },],
    'name': [{ type: core_2.Input, args: ['name',] },],
    'offset': [{ type: core_2.Input, args: ['offset',] },],
    'orientation': [{ type: core_2.Input, args: ['orientation',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
};
exports.DiagramPhaseDirective = DiagramPhaseDirective;
var DiagramPhasesDirective = (function (_super) {
    __extends(DiagramPhasesDirective, _super);
    function DiagramPhasesDirective(widget) {
        return _super.call(this, 'phases') || this;
    }
    return DiagramPhasesDirective;
}(core_1.ArrayTagElement));
DiagramPhasesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-nodes>e-phases',
                queries: {
                    children: new core_2.ContentChildren(DiagramPhaseDirective)
                }
            },] },
];
/** @nocollapse */
DiagramPhasesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
exports.DiagramPhasesDirective = DiagramPhasesDirective;
var DiagramPortDirective = (function (_super) {
    __extends(DiagramPortDirective, _super);
    function DiagramPortDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return DiagramPortDirective;
}(core_1.ComplexTagElement));
DiagramPortDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-ports>e-port',
            },] },
];
/** @nocollapse */
DiagramPortDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
DiagramPortDirective.propDecorators = {
    'borderColor': [{ type: core_2.Input, args: ['borderColor',] },],
    'borderWidth': [{ type: core_2.Input, args: ['borderWidth',] },],
    'connectorPadding': [{ type: core_2.Input, args: ['connectorPadding',] },],
    'constraints': [{ type: core_2.Input, args: ['constraints',] },],
    'cssClass': [{ type: core_2.Input, args: ['cssClass',] },],
    'fillColor': [{ type: core_2.Input, args: ['fillColor',] },],
    'name': [{ type: core_2.Input, args: ['name',] },],
    'offset': [{ type: core_2.Input, args: ['offset',] },],
    'pathData': [{ type: core_2.Input, args: ['pathData',] },],
    'shape': [{ type: core_2.Input, args: ['shape',] },],
    'size': [{ type: core_2.Input, args: ['size',] },],
    'visibility': [{ type: core_2.Input, args: ['visibility',] },],
    'parent': [{ type: core_2.Input, args: ['parent',] },],
};
exports.DiagramPortDirective = DiagramPortDirective;
var DiagramPortsDirective = (function (_super) {
    __extends(DiagramPortsDirective, _super);
    function DiagramPortsDirective(widget) {
        return _super.call(this, 'ports') || this;
    }
    return DiagramPortsDirective;
}(core_1.ArrayTagElement));
DiagramPortsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-nodes>e-ports',
                queries: {
                    children: new core_2.ContentChildren(DiagramPortDirective)
                }
            },] },
];
/** @nocollapse */
DiagramPortsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
exports.DiagramPortsDirective = DiagramPortsDirective;
var DiagramNodeDirective = (function (_super) {
    __extends(DiagramNodeDirective, _super);
    function DiagramNodeDirective(widget) {
        var _this = _super.call(this, ['labels', 'phases', 'ports']) || this;
        _this.parent = widget;
        return _this;
    }
    return DiagramNodeDirective;
}(core_1.ComplexTagElement));
DiagramNodeDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-nodes>e-node',
            },] },
];
/** @nocollapse */
DiagramNodeDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
DiagramNodeDirective.propDecorators = {
    'activity': [{ type: core_2.Input, args: ['activity',] },],
    'addInfo': [{ type: core_2.Input, args: ['addInfo',] },],
    'annotation': [{ type: core_2.Input, args: ['annotation',] },],
    'annotation_angle': [{ type: core_2.Input, args: ['annotation.angle',] },],
    'annotation_direction': [{ type: core_2.Input, args: ['annotation.direction',] },],
    'annotation_height': [{ type: core_2.Input, args: ['annotation.height',] },],
    'annotation_length': [{ type: core_2.Input, args: ['annotation.length',] },],
    'annotation_text': [{ type: core_2.Input, args: ['annotation.text',] },],
    'annotation_width': [{ type: core_2.Input, args: ['annotation.width',] },],
    'borderColor': [{ type: core_2.Input, args: ['borderColor',] },],
    'borderDashArray': [{ type: core_2.Input, args: ['borderDashArray',] },],
    'borderWidth': [{ type: core_2.Input, args: ['borderWidth',] },],
    'canUngroup': [{ type: core_2.Input, args: ['canUngroup',] },],
    'children': [{ type: core_2.Input, args: ['children',] },],
    'classifier': [{ type: core_2.Input, args: ['classifier',] },],
    'class': [{ type: core_2.Input, args: ['class',] },],
    'class_name': [{ type: core_2.Input, args: ['class.name',] },],
    'class_attributes': [{ type: core_2.Input, args: ['class.attributes',] },],
    'class_methods': [{ type: core_2.Input, args: ['class.methods',] },],
    'collapseIcon': [{ type: core_2.Input, args: ['collapseIcon',] },],
    'collapseIcon_borderColor': [{ type: core_2.Input, args: ['collapseIcon.borderColor',] },],
    'collapseIcon_borderWidth': [{ type: core_2.Input, args: ['collapseIcon.borderWidth',] },],
    'collapseIcon_fillColor': [{ type: core_2.Input, args: ['collapseIcon.fillColor',] },],
    'collapseIcon_height': [{ type: core_2.Input, args: ['collapseIcon.height',] },],
    'collapseIcon_horizontalAlignment': [{ type: core_2.Input, args: ['collapseIcon.horizontalAlignment',] },],
    'collapseIcon_margin': [{ type: core_2.Input, args: ['collapseIcon.margin',] },],
    'collapseIcon_offset': [{ type: core_2.Input, args: ['collapseIcon.offset',] },],
    'collapseIcon_shape': [{ type: core_2.Input, args: ['collapseIcon.shape',] },],
    'collapseIcon_verticalAlignment': [{ type: core_2.Input, args: ['collapseIcon.verticalAlignment',] },],
    'connectorPadding': [{ type: core_2.Input, args: ['connectorPadding',] },],
    'constraints': [{ type: core_2.Input, args: ['constraints',] },],
    'container': [{ type: core_2.Input, args: ['container',] },],
    'container_orientation': [{ type: core_2.Input, args: ['container.orientation',] },],
    'container_type': [{ type: core_2.Input, args: ['container.type',] },],
    'cornerRadius': [{ type: core_2.Input, args: ['cornerRadius',] },],
    'cssClass': [{ type: core_2.Input, args: ['cssClass',] },],
    'data': [{ type: core_2.Input, args: ['data',] },],
    'data_type': [{ type: core_2.Input, args: ['data.type',] },],
    'data_collection': [{ type: core_2.Input, args: ['data.collection',] },],
    'enumeration': [{ type: core_2.Input, args: ['enumeration',] },],
    'enumeration_name': [{ type: core_2.Input, args: ['enumeration.name',] },],
    'enumeration_members': [{ type: core_2.Input, args: ['enumeration.members',] },],
    'event': [{ type: core_2.Input, args: ['event',] },],
    'excludeFromLayout': [{ type: core_2.Input, args: ['excludeFromLayout',] },],
    'expandIcon': [{ type: core_2.Input, args: ['expandIcon',] },],
    'expandIcon_borderColor': [{ type: core_2.Input, args: ['expandIcon.borderColor',] },],
    'expandIcon_borderWidth': [{ type: core_2.Input, args: ['expandIcon.borderWidth',] },],
    'expandIcon_fillColor': [{ type: core_2.Input, args: ['expandIcon.fillColor',] },],
    'expandIcon_height': [{ type: core_2.Input, args: ['expandIcon.height',] },],
    'expandIcon_horizontalAlignment': [{ type: core_2.Input, args: ['expandIcon.horizontalAlignment',] },],
    'expandIcon_margin': [{ type: core_2.Input, args: ['expandIcon.margin',] },],
    'expandIcon_offset': [{ type: core_2.Input, args: ['expandIcon.offset',] },],
    'expandIcon_shape': [{ type: core_2.Input, args: ['expandIcon.shape',] },],
    'expandIcon_verticalAlignment': [{ type: core_2.Input, args: ['expandIcon.verticalAlignment',] },],
    'fillColor': [{ type: core_2.Input, args: ['fillColor',] },],
    'gateway': [{ type: core_2.Input, args: ['gateway',] },],
    'gradient': [{ type: core_2.Input, args: ['gradient',] },],
    'gradient_LinearGradient': [{ type: core_2.Input, args: ['gradient.LinearGradient',] },],
    'gradient_LinearGradient_stops': [{ type: core_2.Input, args: ['gradient.LinearGradient.stops',] },],
    'gradient_LinearGradient_type': [{ type: core_2.Input, args: ['gradient.LinearGradient.type',] },],
    'gradient_LinearGradient_x1': [{ type: core_2.Input, args: ['gradient.LinearGradient.x1',] },],
    'gradient_LinearGradient_x2': [{ type: core_2.Input, args: ['gradient.LinearGradient.x2',] },],
    'gradient_LinearGradient_y1': [{ type: core_2.Input, args: ['gradient.LinearGradient.y1',] },],
    'gradient_LinearGradient_y2': [{ type: core_2.Input, args: ['gradient.LinearGradient.y2',] },],
    'gradient_RadialGradient': [{ type: core_2.Input, args: ['gradient.RadialGradient',] },],
    'gradient_RadialGradient_type': [{ type: core_2.Input, args: ['gradient.RadialGradient.type',] },],
    'gradient_RadialGradient_cx': [{ type: core_2.Input, args: ['gradient.RadialGradient.cx',] },],
    'gradient_RadialGradient_cy': [{ type: core_2.Input, args: ['gradient.RadialGradient.cy',] },],
    'gradient_RadialGradient_fx': [{ type: core_2.Input, args: ['gradient.RadialGradient.fx',] },],
    'gradient_RadialGradient_fy': [{ type: core_2.Input, args: ['gradient.RadialGradient.fy',] },],
    'gradient_RadialGradient_stops': [{ type: core_2.Input, args: ['gradient.RadialGradient.stops',] },],
    'gradient_Stop': [{ type: core_2.Input, args: ['gradient.Stop',] },],
    'gradient_Stop_color': [{ type: core_2.Input, args: ['gradient.Stop.color',] },],
    'gradient_Stop_offset': [{ type: core_2.Input, args: ['gradient.Stop.offset',] },],
    'gradient_Stop_opacity': [{ type: core_2.Input, args: ['gradient.Stop.opacity',] },],
    'group': [{ type: core_2.Input, args: ['group',] },],
    'header': [{ type: core_2.Input, args: ['header',] },],
    'height': [{ type: core_2.Input, args: ['height',] },],
    'horizontalAlign': [{ type: core_2.Input, args: ['horizontalAlign',] },],
    'inEdges': [{ type: core_2.Input, args: ['inEdges',] },],
    'interface': [{ type: core_2.Input, args: ['interface',] },],
    'interface_name': [{ type: core_2.Input, args: ['interface.name',] },],
    'interface_attributes': [{ type: core_2.Input, args: ['interface.attributes',] },],
    'interface_methods': [{ type: core_2.Input, args: ['interface.methods',] },],
    'isExpanded': [{ type: core_2.Input, args: ['isExpanded',] },],
    'isSwimlane': [{ type: core_2.Input, args: ['isSwimlane',] },],
    'labels': [{ type: core_2.Input, args: ['labels',] },],
    'lanes': [{ type: core_2.Input, args: ['lanes',] },],
    'marginBottom': [{ type: core_2.Input, args: ['marginBottom',] },],
    'marginLeft': [{ type: core_2.Input, args: ['marginLeft',] },],
    'marginRight': [{ type: core_2.Input, args: ['marginRight',] },],
    'marginTop': [{ type: core_2.Input, args: ['marginTop',] },],
    'maxHeight': [{ type: core_2.Input, args: ['maxHeight',] },],
    'maxWidth': [{ type: core_2.Input, args: ['maxWidth',] },],
    'minHeight': [{ type: core_2.Input, args: ['minHeight',] },],
    'minWidth': [{ type: core_2.Input, args: ['minWidth',] },],
    'name': [{ type: core_2.Input, args: ['name',] },],
    'offsetX': [{ type: core_2.Input, args: ['offsetX',] },],
    'offsetY': [{ type: core_2.Input, args: ['offsetY',] },],
    'opacity': [{ type: core_2.Input, args: ['opacity',] },],
    'orientation': [{ type: core_2.Input, args: ['orientation',] },],
    'outEdges': [{ type: core_2.Input, args: ['outEdges',] },],
    'paddingBottom': [{ type: core_2.Input, args: ['paddingBottom',] },],
    'paddingLeft': [{ type: core_2.Input, args: ['paddingLeft',] },],
    'paddingRight': [{ type: core_2.Input, args: ['paddingRight',] },],
    'paddingTop': [{ type: core_2.Input, args: ['paddingTop',] },],
    'paletteItem': [{ type: core_2.Input, args: ['paletteItem',] },],
    'paletteItem_enableScale': [{ type: core_2.Input, args: ['paletteItem.enableScale',] },],
    'paletteItem_height': [{ type: core_2.Input, args: ['paletteItem.height',] },],
    'paletteItem_label': [{ type: core_2.Input, args: ['paletteItem.label',] },],
    'paletteItem_margin': [{ type: core_2.Input, args: ['paletteItem.margin',] },],
    'paletteItem_previewHeight': [{ type: core_2.Input, args: ['paletteItem.previewHeight',] },],
    'paletteItem_previewWidth': [{ type: core_2.Input, args: ['paletteItem.previewWidth',] },],
    'paletteItem_width': [{ type: core_2.Input, args: ['paletteItem.width',] },],
    'parent': [{ type: core_2.Input, args: ['parent',] },],
    'pathData': [{ type: core_2.Input, args: ['pathData',] },],
    'phases': [{ type: core_2.Input, args: ['phases',] },],
    'phaseSize': [{ type: core_2.Input, args: ['phaseSize',] },],
    'pivot': [{ type: core_2.Input, args: ['pivot',] },],
    'points': [{ type: core_2.Input, args: ['points',] },],
    'ports': [{ type: core_2.Input, args: ['ports',] },],
    'rotateAngle': [{ type: core_2.Input, args: ['rotateAngle',] },],
    'shadow': [{ type: core_2.Input, args: ['shadow',] },],
    'shadow_angle': [{ type: core_2.Input, args: ['shadow.angle',] },],
    'shadow_distance': [{ type: core_2.Input, args: ['shadow.distance',] },],
    'shadow_opacity': [{ type: core_2.Input, args: ['shadow.opacity',] },],
    'shape': [{ type: core_2.Input, args: ['shape',] },],
    'source': [{ type: core_2.Input, args: ['source',] },],
    'subProcess': [{ type: core_2.Input, args: ['subProcess',] },],
    'subProcess_adhoc': [{ type: core_2.Input, args: ['subProcess.adhoc',] },],
    'subProcess_boundary': [{ type: core_2.Input, args: ['subProcess.boundary',] },],
    'subProcess_compensation': [{ type: core_2.Input, args: ['subProcess.compensation',] },],
    'subProcess_collapsed': [{ type: core_2.Input, args: ['subProcess.collapsed',] },],
    'subProcess_event': [{ type: core_2.Input, args: ['subProcess.event',] },],
    'subProcess_events': [{ type: core_2.Input, args: ['subProcess.events',] },],
    'subProcess_loop': [{ type: core_2.Input, args: ['subProcess.loop',] },],
    'subProcess_Processes': [{ type: core_2.Input, args: ['subProcess.Processes',] },],
    'subProcess_trigger': [{ type: core_2.Input, args: ['subProcess.trigger',] },],
    'subProcess_type': [{ type: core_2.Input, args: ['subProcess.type',] },],
    'task': [{ type: core_2.Input, args: ['task',] },],
    'task_call': [{ type: core_2.Input, args: ['task.call',] },],
    'task_compensation': [{ type: core_2.Input, args: ['task.compensation',] },],
    'task_loop': [{ type: core_2.Input, args: ['task.loop',] },],
    'task_type': [{ type: core_2.Input, args: ['task.type',] },],
    'task_events': [{ type: core_2.Input, args: ['task.events',] },],
    'templateId': [{ type: core_2.Input, args: ['templateId',] },],
    'textBlock': [{ type: core_2.Input, args: ['textBlock',] },],
    'tooltip': [{ type: core_2.Input, args: ['tooltip',] },],
    'trigger': [{ type: core_2.Input, args: ['trigger',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'verticalAlign': [{ type: core_2.Input, args: ['verticalAlign',] },],
    'visible': [{ type: core_2.Input, args: ['visible',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'zOrder': [{ type: core_2.Input, args: ['zOrder',] },],
    'tag_labels': [{ type: core_2.ContentChild, args: [DiagramNodeLabelsDirective,] },],
    'tag_phases': [{ type: core_2.ContentChild, args: [DiagramPhasesDirective,] },],
    'tag_ports': [{ type: core_2.ContentChild, args: [DiagramPortsDirective,] },],
};
exports.DiagramNodeDirective = DiagramNodeDirective;
var DiagramNodesDirective = (function (_super) {
    __extends(DiagramNodesDirective, _super);
    function DiagramNodesDirective(widget) {
        return _super.call(this, 'nodes') || this;
    }
    return DiagramNodesDirective;
}(core_1.ArrayTagElement));
DiagramNodesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-diagram>e-nodes',
                queries: {
                    children: new core_2.ContentChildren(DiagramNodeDirective)
                }
            },] },
];
/** @nocollapse */
DiagramNodesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return DiagramComponent; }),] },] },
]; };
exports.DiagramNodesDirective = DiagramNodesDirective;
var DiagramComponent = (function (_super) {
    __extends(DiagramComponent, _super);
    function DiagramComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Diagram', el, cdRef, ['commandManager.commands', 'connectors', 'nodes'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.autoScrollChange_output = new core_2.EventEmitter();
        _this.click_output = new core_2.EventEmitter();
        _this.ejclick_output = new core_2.EventEmitter();
        _this.connectionChange_output = new core_2.EventEmitter();
        _this.connectorCollectionChange_output = new core_2.EventEmitter();
        _this.connectorSourceChange_output = new core_2.EventEmitter();
        _this.connectorTargetChange_output = new core_2.EventEmitter();
        _this.contextMenuBeforeOpen_output = new core_2.EventEmitter();
        _this.contextMenuClick_output = new core_2.EventEmitter();
        _this.doubleClick_output = new core_2.EventEmitter();
        _this.drag_output = new core_2.EventEmitter();
        _this.dragEnter_output = new core_2.EventEmitter();
        _this.dragLeave_output = new core_2.EventEmitter();
        _this.dragOver_output = new core_2.EventEmitter();
        _this.drop_output = new core_2.EventEmitter();
        _this.editorFocusChange_output = new core_2.EventEmitter();
        _this.groupChange_output = new core_2.EventEmitter();
        _this.historyChange_output = new core_2.EventEmitter();
        _this.itemClick_output = new core_2.EventEmitter();
        _this.mouseEnter_output = new core_2.EventEmitter();
        _this.mouseLeave_output = new core_2.EventEmitter();
        _this.mouseOver_output = new core_2.EventEmitter();
        _this.nodeCollectionChange_output = new core_2.EventEmitter();
        _this.propertyChange_output = new core_2.EventEmitter();
        _this.rotationChange_output = new core_2.EventEmitter();
        _this.scrollChange_output = new core_2.EventEmitter();
        _this.segmentChange_output = new core_2.EventEmitter();
        _this.selectionChange_output = new core_2.EventEmitter();
        _this.sizeChange_output = new core_2.EventEmitter();
        _this.textChange_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.setTool_output = new core_2.EventEmitter();
        return _this;
    }
    return DiagramComponent;
}(core_1.EJComponents));
DiagramComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-diagram',
                template: ''
            },] },
];
/** @nocollapse */
DiagramComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
DiagramComponent.propDecorators = {
    'backgroundColor_input': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'backgroundImage_input': [{ type: core_2.Input, args: ['backgroundImage',] },],
    'bridgeDirection_input': [{ type: core_2.Input, args: ['bridgeDirection',] },],
    'commandManager_input': [{ type: core_2.Input, args: ['commandManager',] },],
    'connectorTemplate_input': [{ type: core_2.Input, args: ['connectorTemplate',] },],
    'constraints_input': [{ type: core_2.Input, args: ['constraints',] },],
    'contextMenu_input': [{ type: core_2.Input, args: ['contextMenu',] },],
    'dataSourceSettings_input': [{ type: core_2.Input, args: ['dataSourceSettings',] },],
    'defaultSettings_input': [{ type: core_2.Input, args: ['defaultSettings',] },],
    'drawType_input': [{ type: core_2.Input, args: ['drawType',] },],
    'enableAutoScroll_input': [{ type: core_2.Input, args: ['enableAutoScroll',] },],
    'enableContextMenu_input': [{ type: core_2.Input, args: ['enableContextMenu',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'historyManager_input': [{ type: core_2.Input, args: ['historyManager',] },],
    'labelRenderingMode_input': [{ type: core_2.Input, args: ['labelRenderingMode',] },],
    'layout_input': [{ type: core_2.Input, args: ['layout',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'nodeTemplate_input': [{ type: core_2.Input, args: ['nodeTemplate',] },],
    'pageSettings_input': [{ type: core_2.Input, args: ['pageSettings',] },],
    'scrollSettings_input': [{ type: core_2.Input, args: ['scrollSettings',] },],
    'selectedItems_input': [{ type: core_2.Input, args: ['selectedItems',] },],
    'showTooltip_input': [{ type: core_2.Input, args: ['showTooltip',] },],
    'serializationSettings_input': [{ type: core_2.Input, args: ['serializationSettings',] },],
    'rulerSettings_input': [{ type: core_2.Input, args: ['rulerSettings',] },],
    'snapSettings_input': [{ type: core_2.Input, args: ['snapSettings',] },],
    'tool_input': [{ type: core_2.Input, args: ['tool',] },],
    'tooltip_input': [{ type: core_2.Input, args: ['tooltip',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'zoomFactor_input': [{ type: core_2.Input, args: ['zoomFactor',] },],
    'backgroundImage_alignment_input': [{ type: core_2.Input, args: ['backgroundImage.alignment',] },],
    'commandManager_commands_input': [{ type: core_2.Input, args: ['commandManager.commands',] },],
    'commandManager_commands_canExecute_input': [{ type: core_2.Input, args: ['commandManager.commands.canExecute',] },],
    'commandManager_commands_execute_input': [{ type: core_2.Input, args: ['commandManager.commands.execute',] },],
    'commandManager_commands_gesture_input': [{ type: core_2.Input, args: ['commandManager.commands.gesture',] },],
    'commandManager_commands_parameter_input': [{ type: core_2.Input, args: ['commandManager.commands.parameter',] },],
    'contextMenu_showCustomMenuItemsOnly_input': [{ type: core_2.Input, args: ['contextMenu.showCustomMenuItemsOnly',] },],
    'dataSourceSettings_dataSource_input': [{ type: core_2.Input, args: ['dataSourceSettings.dataSource',] },],
    'dataSourceSettings_id_input': [{ type: core_2.Input, args: ['dataSourceSettings.id',] },],
    'dataSourceSettings_parent_input': [{ type: core_2.Input, args: ['dataSourceSettings.parent',] },],
    'dataSourceSettings_query_input': [{ type: core_2.Input, args: ['dataSourceSettings.query',] },],
    'dataSourceSettings_root_input': [{ type: core_2.Input, args: ['dataSourceSettings.root',] },],
    'dataSourceSettings_tableName_input': [{ type: core_2.Input, args: ['dataSourceSettings.tableName',] },],
    'dataSourceSettings_crudAction_input': [{ type: core_2.Input, args: ['dataSourceSettings.crudAction',] },],
    'dataSourceSettings_crudAction_create_input': [{ type: core_2.Input, args: ['dataSourceSettings.crudAction.create',] },],
    'dataSourceSettings_crudAction_update_input': [{ type: core_2.Input, args: ['dataSourceSettings.crudAction.update',] },],
    'dataSourceSettings_crudAction_destroy_input': [{ type: core_2.Input, args: ['dataSourceSettings.crudAction.destroy',] },],
    'dataSourceSettings_crudAction_read_input': [{ type: core_2.Input, args: ['dataSourceSettings.crudAction.read',] },],
    'dataSourceSettings_customFields_input': [{ type: core_2.Input, args: ['dataSourceSettings.customFields',] },],
    'dataSourceSettings_connectionDataSource_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource',] },],
    'dataSourceSettings_connectionDataSource_dataSource_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource.dataSource',] },],
    'dataSourceSettings_connectionDataSource_id_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource.id',] },],
    'dataSourceSettings_connectionDataSource_sourceNode_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource.sourceNode',] },],
    'dataSourceSettings_connectionDataSource_targetNode_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource.targetNode',] },],
    'dataSourceSettings_connectionDataSource_sourcePointX_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource.sourcePointX',] },],
    'dataSourceSettings_connectionDataSource_sourcePointY_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource.sourcePointY',] },],
    'dataSourceSettings_connectionDataSource_targetPointX_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource.targetPointX',] },],
    'dataSourceSettings_connectionDataSource_targetPointY_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource.targetPointY',] },],
    'dataSourceSettings_connectionDataSource_crudAction_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource.crudAction',] },],
    'dataSourceSettings_connectionDataSource_customFields_input': [{ type: core_2.Input, args: ['dataSourceSettings.connectionDataSource.customFields',] },],
    'defaultSettings_connector_input': [{ type: core_2.Input, args: ['defaultSettings.connector',] },],
    'defaultSettings_group_input': [{ type: core_2.Input, args: ['defaultSettings.group',] },],
    'defaultSettings_node_input': [{ type: core_2.Input, args: ['defaultSettings.node',] },],
    'historyManager_canPop_input': [{ type: core_2.Input, args: ['historyManager.canPop',] },],
    'historyManager_closeGroupAction_input': [{ type: core_2.Input, args: ['historyManager.closeGroupAction',] },],
    'historyManager_pop_input': [{ type: core_2.Input, args: ['historyManager.pop',] },],
    'historyManager_push_input': [{ type: core_2.Input, args: ['historyManager.push',] },],
    'historyManager_redo_input': [{ type: core_2.Input, args: ['historyManager.redo',] },],
    'historyManager_redoStack_input': [{ type: core_2.Input, args: ['historyManager.redoStack',] },],
    'historyManager_stackLimit_input': [{ type: core_2.Input, args: ['historyManager.stackLimit',] },],
    'historyManager_startGroupAction_input': [{ type: core_2.Input, args: ['historyManager.startGroupAction',] },],
    'historyManager_undo_input': [{ type: core_2.Input, args: ['historyManager.undo',] },],
    'historyManager_undoStack_input': [{ type: core_2.Input, args: ['historyManager.undoStack',] },],
    'layout_bounds_input': [{ type: core_2.Input, args: ['layout.bounds',] },],
    'layout_fixedNode_input': [{ type: core_2.Input, args: ['layout.fixedNode',] },],
    'layout_getLayoutInfo_input': [{ type: core_2.Input, args: ['layout.getLayoutInfo',] },],
    'layout_getConnectorSegments_input': [{ type: core_2.Input, args: ['layout.getConnectorSegments',] },],
    'layout_horizontalSpacing_input': [{ type: core_2.Input, args: ['layout.horizontalSpacing',] },],
    'layout_margin_input': [{ type: core_2.Input, args: ['layout.margin',] },],
    'layout_horizontalAlignment_input': [{ type: core_2.Input, args: ['layout.horizontalAlignment',] },],
    'layout_verticalAlignment_input': [{ type: core_2.Input, args: ['layout.verticalAlignment',] },],
    'layout_orientation_input': [{ type: core_2.Input, args: ['layout.orientation',] },],
    'layout_type_input': [{ type: core_2.Input, args: ['layout.type',] },],
    'layout_verticalSpacing_input': [{ type: core_2.Input, args: ['layout.verticalSpacing',] },],
    'layout_root_input': [{ type: core_2.Input, args: ['layout.root',] },],
    'layout_springLength_input': [{ type: core_2.Input, args: ['layout.springLength',] },],
    'layout_springFactor_input': [{ type: core_2.Input, args: ['layout.springFactor',] },],
    'layout_maxIteration_input': [{ type: core_2.Input, args: ['layout.maxIteration',] },],
    'pageSettings_autoScrollBorder_input': [{ type: core_2.Input, args: ['pageSettings.autoScrollBorder',] },],
    'pageSettings_multiplePage_input': [{ type: core_2.Input, args: ['pageSettings.multiplePage',] },],
    'pageSettings_pageBackgroundColor_input': [{ type: core_2.Input, args: ['pageSettings.pageBackgroundColor',] },],
    'pageSettings_pageBorderColor_input': [{ type: core_2.Input, args: ['pageSettings.pageBorderColor',] },],
    'pageSettings_pageBorderWidth_input': [{ type: core_2.Input, args: ['pageSettings.pageBorderWidth',] },],
    'pageSettings_pageHeight_input': [{ type: core_2.Input, args: ['pageSettings.pageHeight',] },],
    'pageSettings_pageMargin_input': [{ type: core_2.Input, args: ['pageSettings.pageMargin',] },],
    'pageSettings_pageOrientation_input': [{ type: core_2.Input, args: ['pageSettings.pageOrientation',] },],
    'pageSettings_pageWidth_input': [{ type: core_2.Input, args: ['pageSettings.pageWidth',] },],
    'pageSettings_scrollableArea_input': [{ type: core_2.Input, args: ['pageSettings.scrollableArea',] },],
    'pageSettings_scrollLimit_input': [{ type: core_2.Input, args: ['pageSettings.scrollLimit',] },],
    'pageSettings_boundaryConstraints_input': [{ type: core_2.Input, args: ['pageSettings.boundaryConstraints',] },],
    'pageSettings_showPageBreak_input': [{ type: core_2.Input, args: ['pageSettings.showPageBreak',] },],
    'scrollSettings_currentZoom_input': [{ type: core_2.Input, args: ['scrollSettings.currentZoom',] },],
    'scrollSettings_horizontalOffset_input': [{ type: core_2.Input, args: ['scrollSettings.horizontalOffset',] },],
    'scrollSettings_padding_input': [{ type: core_2.Input, args: ['scrollSettings.padding',] },],
    'scrollSettings_verticalOffset_input': [{ type: core_2.Input, args: ['scrollSettings.verticalOffset',] },],
    'scrollSettings_viewPortHeight_input': [{ type: core_2.Input, args: ['scrollSettings.viewPortHeight',] },],
    'scrollSettings_viewPortWidth_input': [{ type: core_2.Input, args: ['scrollSettings.viewPortWidth',] },],
    'selectedItems_children_input': [{ type: core_2.Input, args: ['selectedItems.children',] },],
    'selectedItems_constraints_input': [{ type: core_2.Input, args: ['selectedItems.constraints',] },],
    'selectedItems_getConstraints_input': [{ type: core_2.Input, args: ['selectedItems.getConstraints',] },],
    'selectedItems_height_input': [{ type: core_2.Input, args: ['selectedItems.height',] },],
    'selectedItems_offsetX_input': [{ type: core_2.Input, args: ['selectedItems.offsetX',] },],
    'selectedItems_offsetY_input': [{ type: core_2.Input, args: ['selectedItems.offsetY',] },],
    'selectedItems_rotateAngle_input': [{ type: core_2.Input, args: ['selectedItems.rotateAngle',] },],
    'selectedItems_tooltip_input': [{ type: core_2.Input, args: ['selectedItems.tooltip',] },],
    'selectedItems_width_input': [{ type: core_2.Input, args: ['selectedItems.width',] },],
    'serializationSettings_preventDefaultValues_input': [{ type: core_2.Input, args: ['serializationSettings.preventDefaultValues',] },],
    'rulerSettings_showRulers_input': [{ type: core_2.Input, args: ['rulerSettings.showRulers',] },],
    'rulerSettings_horizontalRuler_input': [{ type: core_2.Input, args: ['rulerSettings.horizontalRuler',] },],
    'rulerSettings_horizontalRuler_interval_input': [{ type: core_2.Input, args: ['rulerSettings.horizontalRuler.interval',] },],
    'rulerSettings_horizontalRuler_segmentWidth_input': [{ type: core_2.Input, args: ['rulerSettings.horizontalRuler.segmentWidth',] },],
    'rulerSettings_horizontalRuler_arrangeTick_input': [{ type: core_2.Input, args: ['rulerSettings.horizontalRuler.arrangeTick',] },],
    'rulerSettings_horizontalRuler_tickAlignment_input': [{ type: core_2.Input, args: ['rulerSettings.horizontalRuler.tickAlignment',] },],
    'rulerSettings_horizontalRuler_markerColor_input': [{ type: core_2.Input, args: ['rulerSettings.horizontalRuler.markerColor',] },],
    'rulerSettings_horizontalRuler_length_input': [{ type: core_2.Input, args: ['rulerSettings.horizontalRuler.length',] },],
    'rulerSettings_horizontalRuler_thickness_input': [{ type: core_2.Input, args: ['rulerSettings.horizontalRuler.thickness',] },],
    'rulerSettings_verticalRuler_input': [{ type: core_2.Input, args: ['rulerSettings.verticalRuler',] },],
    'rulerSettings_verticalRuler_interval_input': [{ type: core_2.Input, args: ['rulerSettings.verticalRuler.interval',] },],
    'rulerSettings_verticalRuler_segmentWidth_input': [{ type: core_2.Input, args: ['rulerSettings.verticalRuler.segmentWidth',] },],
    'rulerSettings_verticalRuler_arrangeTick_input': [{ type: core_2.Input, args: ['rulerSettings.verticalRuler.arrangeTick',] },],
    'rulerSettings_verticalRuler_tickAlignment_input': [{ type: core_2.Input, args: ['rulerSettings.verticalRuler.tickAlignment',] },],
    'rulerSettings_verticalRuler_markerColor_input': [{ type: core_2.Input, args: ['rulerSettings.verticalRuler.markerColor',] },],
    'rulerSettings_verticalRuler_length_input': [{ type: core_2.Input, args: ['rulerSettings.verticalRuler.length',] },],
    'rulerSettings_verticalRuler_thickness_input': [{ type: core_2.Input, args: ['rulerSettings.verticalRuler.thickness',] },],
    'snapSettings_enableSnapToObject_input': [{ type: core_2.Input, args: ['snapSettings.enableSnapToObject',] },],
    'snapSettings_horizontalGridLines_input': [{ type: core_2.Input, args: ['snapSettings.horizontalGridLines',] },],
    'snapSettings_horizontalGridLines_lineColor_input': [{ type: core_2.Input, args: ['snapSettings.horizontalGridLines.lineColor',] },],
    'snapSettings_horizontalGridLines_lineDashArray_input': [{ type: core_2.Input, args: ['snapSettings.horizontalGridLines.lineDashArray',] },],
    'snapSettings_horizontalGridLines_linesInterval_input': [{ type: core_2.Input, args: ['snapSettings.horizontalGridLines.linesInterval',] },],
    'snapSettings_horizontalGridLines_snapInterval_input': [{ type: core_2.Input, args: ['snapSettings.horizontalGridLines.snapInterval',] },],
    'snapSettings_snapAngle_input': [{ type: core_2.Input, args: ['snapSettings.snapAngle',] },],
    'snapSettings_snapConstraints_input': [{ type: core_2.Input, args: ['snapSettings.snapConstraints',] },],
    'snapSettings_snapObjectDistance_input': [{ type: core_2.Input, args: ['snapSettings.snapObjectDistance',] },],
    'snapSettings_verticalGridLines_input': [{ type: core_2.Input, args: ['snapSettings.verticalGridLines',] },],
    'snapSettings_verticalGridLines_lineColor_input': [{ type: core_2.Input, args: ['snapSettings.verticalGridLines.lineColor',] },],
    'snapSettings_verticalGridLines_lineDashArray_input': [{ type: core_2.Input, args: ['snapSettings.verticalGridLines.lineDashArray',] },],
    'snapSettings_verticalGridLines_linesInterval_input': [{ type: core_2.Input, args: ['snapSettings.verticalGridLines.linesInterval',] },],
    'snapSettings_verticalGridLines_snapInterval_input': [{ type: core_2.Input, args: ['snapSettings.verticalGridLines.snapInterval',] },],
    'tooltip_alignment_input': [{ type: core_2.Input, args: ['tooltip.alignment',] },],
    'tooltip_alignment_horizontal_input': [{ type: core_2.Input, args: ['tooltip.alignment.horizontal',] },],
    'tooltip_alignment_vertical_input': [{ type: core_2.Input, args: ['tooltip.alignment.vertical',] },],
    'tooltip_margin_input': [{ type: core_2.Input, args: ['tooltip.margin',] },],
    'tooltip_relativeMode_input': [{ type: core_2.Input, args: ['tooltip.relativeMode',] },],
    'tooltip_templateId_input': [{ type: core_2.Input, args: ['tooltip.templateId',] },],
    'connectors_input': [{ type: core_2.Input, args: ['connectors',] },],
    'nodes_input': [{ type: core_2.Input, args: ['nodes',] },],
    'contextMenu_items_input': [{ type: core_2.Input, args: ['contextMenu.items',] },],
    'nodes_class_attributes_input': [{ type: core_2.Input, args: ['nodes.class.attributes',] },],
    'nodes_class_methods_input': [{ type: core_2.Input, args: ['nodes.class.methods',] },],
    'nodes_enumeration_members_input': [{ type: core_2.Input, args: ['nodes.enumeration.members',] },],
    'nodes_interface_attributes_input': [{ type: core_2.Input, args: ['nodes.interface.attributes',] },],
    'nodes_interface_methods_input': [{ type: core_2.Input, args: ['nodes.interface.methods',] },],
    'nodes_subProcess_events_input': [{ type: core_2.Input, args: ['nodes.subProcess.events',] },],
    'selectedItems_userHandles_input': [{ type: core_2.Input, args: ['selectedItems.userHandles',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'autoScrollChange_output': [{ type: core_2.Output, args: ['autoScrollChange',] },],
    'click_output': [{ type: core_2.Output, args: ['click',] },],
    'ejclick_output': [{ type: core_2.Output, args: ['ejclick',] },],
    'connectionChange_output': [{ type: core_2.Output, args: ['connectionChange',] },],
    'connectorCollectionChange_output': [{ type: core_2.Output, args: ['connectorCollectionChange',] },],
    'connectorSourceChange_output': [{ type: core_2.Output, args: ['connectorSourceChange',] },],
    'connectorTargetChange_output': [{ type: core_2.Output, args: ['connectorTargetChange',] },],
    'contextMenuBeforeOpen_output': [{ type: core_2.Output, args: ['contextMenuBeforeOpen',] },],
    'contextMenuClick_output': [{ type: core_2.Output, args: ['contextMenuClick',] },],
    'doubleClick_output': [{ type: core_2.Output, args: ['doubleClick',] },],
    'drag_output': [{ type: core_2.Output, args: ['drag',] },],
    'dragEnter_output': [{ type: core_2.Output, args: ['dragEnter',] },],
    'dragLeave_output': [{ type: core_2.Output, args: ['dragLeave',] },],
    'dragOver_output': [{ type: core_2.Output, args: ['dragOver',] },],
    'drop_output': [{ type: core_2.Output, args: ['drop',] },],
    'editorFocusChange_output': [{ type: core_2.Output, args: ['editorFocusChange',] },],
    'groupChange_output': [{ type: core_2.Output, args: ['groupChange',] },],
    'historyChange_output': [{ type: core_2.Output, args: ['historyChange',] },],
    'itemClick_output': [{ type: core_2.Output, args: ['itemClick',] },],
    'mouseEnter_output': [{ type: core_2.Output, args: ['mouseEnter',] },],
    'mouseLeave_output': [{ type: core_2.Output, args: ['mouseLeave',] },],
    'mouseOver_output': [{ type: core_2.Output, args: ['mouseOver',] },],
    'nodeCollectionChange_output': [{ type: core_2.Output, args: ['nodeCollectionChange',] },],
    'propertyChange_output': [{ type: core_2.Output, args: ['propertyChange',] },],
    'rotationChange_output': [{ type: core_2.Output, args: ['rotationChange',] },],
    'scrollChange_output': [{ type: core_2.Output, args: ['scrollChange',] },],
    'segmentChange_output': [{ type: core_2.Output, args: ['segmentChange',] },],
    'selectionChange_output': [{ type: core_2.Output, args: ['selectionChange',] },],
    'sizeChange_output': [{ type: core_2.Output, args: ['sizeChange',] },],
    'textChange_output': [{ type: core_2.Output, args: ['textChange',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'setTool_output': [{ type: core_2.Output, args: ['setTool',] },],
    'tag_commandManager_commands': [{ type: core_2.ContentChild, args: [DiagramCommandManagerCommandsDirective,] },],
    'tag_connectors': [{ type: core_2.ContentChild, args: [DiagramConnectorsDirective,] },],
    'tag_nodes': [{ type: core_2.ContentChild, args: [DiagramNodesDirective,] },],
};
exports.DiagramComponent = DiagramComponent;
exports.EJ_DIAGRAM_COMPONENTS = [DiagramComponent,
    DiagramCommandManagerCommandsDirective, DiagramSegmentsDirective, DiagramConnectorLabelsDirective, DiagramConnectorsDirective, DiagramNodeLabelsDirective, DiagramPhasesDirective, DiagramPortsDirective, DiagramNodesDirective, DiagramCommandManagerCommandDirective, DiagramSegmentDirective, DiagramConnectorLabelDirective, DiagramConnectorDirective, DiagramNodeLabelDirective, DiagramPhaseDirective, DiagramPortDirective, DiagramNodeDirective];
//# sourceMappingURL=diagram.component.js.map
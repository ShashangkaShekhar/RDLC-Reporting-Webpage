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
var SymbolPaletteComponent = (function (_super) {
    __extends(SymbolPaletteComponent, _super);
    function SymbolPaletteComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'SymbolPalette', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.selectionChange_output = new core_2.EventEmitter();
        return _this;
    }
    return SymbolPaletteComponent;
}(core_1.EJComponents));
SymbolPaletteComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-symbolpalette',
                template: ''
            },] },
];
/** @nocollapse */
SymbolPaletteComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
SymbolPaletteComponent.propDecorators = {
    'allowDrag_input': [{ type: core_2.Input, args: ['allowDrag',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'defaultSettings_input': [{ type: core_2.Input, args: ['defaultSettings',] },],
    'diagramId_input': [{ type: core_2.Input, args: ['diagramId',] },],
    'headerHeight_input': [{ type: core_2.Input, args: ['headerHeight',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'paletteItemHeight_input': [{ type: core_2.Input, args: ['paletteItemHeight',] },],
    'paletteItemWidth_input': [{ type: core_2.Input, args: ['paletteItemWidth',] },],
    'previewHeight_input': [{ type: core_2.Input, args: ['previewHeight',] },],
    'previewOffset_input': [{ type: core_2.Input, args: ['previewOffset',] },],
    'previewWidth_input': [{ type: core_2.Input, args: ['previewWidth',] },],
    'showPaletteItemText_input': [{ type: core_2.Input, args: ['showPaletteItemText',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'defaultSettings_node_input': [{ type: core_2.Input, args: ['defaultSettings.node',] },],
    'defaultSettings_connector_input': [{ type: core_2.Input, args: ['defaultSettings.connector',] },],
    'palettes_input': [{ type: core_2.Input, args: ['palettes',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'selectionChange_output': [{ type: core_2.Output, args: ['selectionChange',] },],
};
exports.SymbolPaletteComponent = SymbolPaletteComponent;
exports.EJ_SYMBOLPALETTE_COMPONENTS = [SymbolPaletteComponent
];
//# sourceMappingURL=symbolpalette.component.js.map
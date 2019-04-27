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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.barcode.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var BarcodeComponent = (function (_super) {
    __extends(BarcodeComponent, _super);
    function BarcodeComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Barcode', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.load_output = new core_2.EventEmitter();
        return _this;
    }
    return BarcodeComponent;
}(core_1.EJComponents));
BarcodeComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-barcode',
                template: ''
            },] },
];
/** @nocollapse */
BarcodeComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
BarcodeComponent.propDecorators = {
    'barcodeToTextGapHeight_input': [{ type: core_2.Input, args: ['barcodeToTextGapHeight',] },],
    'barHeight_input': [{ type: core_2.Input, args: ['barHeight',] },],
    'darkBarColor_input': [{ type: core_2.Input, args: ['darkBarColor',] },],
    'displayText_input': [{ type: core_2.Input, args: ['displayText',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'encodeStartStopSymbol_input': [{ type: core_2.Input, args: ['encodeStartStopSymbol',] },],
    'lightBarColor_input': [{ type: core_2.Input, args: ['lightBarColor',] },],
    'narrowBarWidth_input': [{ type: core_2.Input, args: ['narrowBarWidth',] },],
    'quietZone_input': [{ type: core_2.Input, args: ['quietZone',] },],
    'symbologyType_input': [{ type: core_2.Input, args: ['symbologyType',] },],
    'text_input': [{ type: core_2.Input, args: ['text',] },],
    'textColor_input': [{ type: core_2.Input, args: ['textColor',] },],
    'wideBarWidth_input': [{ type: core_2.Input, args: ['wideBarWidth',] },],
    'xDimension_input': [{ type: core_2.Input, args: ['xDimension',] },],
    'quietZone_all_input': [{ type: core_2.Input, args: ['quietZone.all',] },],
    'quietZone_bottom_input': [{ type: core_2.Input, args: ['quietZone.bottom',] },],
    'quietZone_left_input': [{ type: core_2.Input, args: ['quietZone.left',] },],
    'quietZone_right_input': [{ type: core_2.Input, args: ['quietZone.right',] },],
    'quietZone_top_input': [{ type: core_2.Input, args: ['quietZone.top',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
};
exports.BarcodeComponent = BarcodeComponent;
exports.EJ_BARCODE_COMPONENTS = [BarcodeComponent
];
//# sourceMappingURL=barcode.component.js.map
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
require("syncfusion-javascript/Scripts/ej/web/ej.signature.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var SignatureComponent = (function (_super) {
    __extends(SignatureComponent, _super);
    function SignatureComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Signature', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.mouseDown_output = new core_2.EventEmitter();
        _this.mouseMove_output = new core_2.EventEmitter();
        _this.mouseUp_output = new core_2.EventEmitter();
        return _this;
    }
    return SignatureComponent;
}(core_1.EJComponents));
SignatureComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-signature',
                template: ''
            },] },
];
/** @nocollapse */
SignatureComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
SignatureComponent.propDecorators = {
    'backgroundColor_input': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'backgroundImage_input': [{ type: core_2.Input, args: ['backgroundImage',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'saveImageFormat_input': [{ type: core_2.Input, args: ['saveImageFormat',] },],
    'saveWithBackground_input': [{ type: core_2.Input, args: ['saveWithBackground',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'strokeColor_input': [{ type: core_2.Input, args: ['strokeColor',] },],
    'strokeWidth_input': [{ type: core_2.Input, args: ['strokeWidth',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'mouseDown_output': [{ type: core_2.Output, args: ['mouseDown',] },],
    'mouseMove_output': [{ type: core_2.Output, args: ['mouseMove',] },],
    'mouseUp_output': [{ type: core_2.Output, args: ['mouseUp',] },],
};
exports.SignatureComponent = SignatureComponent;
exports.EJ_SIGNATURE_COMPONENTS = [SignatureComponent
];
//# sourceMappingURL=signature.component.js.map
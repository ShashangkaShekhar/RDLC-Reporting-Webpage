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
require("syncfusion-javascript/Scripts/ej/web/ej.waitingpopup.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var WaitingPopupComponent = (function (_super) {
    __extends(WaitingPopupComponent, _super);
    function WaitingPopupComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'WaitingPopup', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        return _this;
    }
    return WaitingPopupComponent;
}(core_1.EJComponents));
WaitingPopupComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-waitingpopup',
                template: ''
            },] },
];
/** @nocollapse */
WaitingPopupComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
WaitingPopupComponent.propDecorators = {
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'showImage_input': [{ type: core_2.Input, args: ['showImage',] },],
    'showOnInit_input': [{ type: core_2.Input, args: ['showOnInit',] },],
    'target_input': [{ type: core_2.Input, args: ['target',] },],
    'appendTo_input': [{ type: core_2.Input, args: ['appendTo',] },],
    'template_input': [{ type: core_2.Input, args: ['template',] },],
    'text_input': [{ type: core_2.Input, args: ['text',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
};
exports.WaitingPopupComponent = WaitingPopupComponent;
exports.EJ_WAITINGPOPUP_COMPONENTS = [WaitingPopupComponent
];
//# sourceMappingURL=waitingpopup.component.js.map
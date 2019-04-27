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
require("syncfusion-javascript/Scripts/ej/web/ej.splitbutton.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var SplitButtonComponent = (function (_super) {
    __extends(SplitButtonComponent, _super);
    function SplitButtonComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'SplitButton', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeOpen_output = new core_2.EventEmitter();
        _this.click_output = new core_2.EventEmitter();
        _this.ejclick_output = new core_2.EventEmitter();
        _this.close_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.itemMouseOut_output = new core_2.EventEmitter();
        _this.itemMouseOver_output = new core_2.EventEmitter();
        _this.itemSelected_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        return _this;
    }
    return SplitButtonComponent;
}(core_1.EJComponents));
SplitButtonComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-splitbutton',
                template: ''
            },] },
];
/** @nocollapse */
SplitButtonComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
SplitButtonComponent.propDecorators = {
    'arrowPosition_input': [{ type: core_2.Input, args: ['arrowPosition',] },],
    'buttonMode_input': [{ type: core_2.Input, args: ['buttonMode',] },],
    'contentType_input': [{ type: core_2.Input, args: ['contentType',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'imagePosition_input': [{ type: core_2.Input, args: ['imagePosition',] },],
    'prefixIcon_input': [{ type: core_2.Input, args: ['prefixIcon',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'size_input': [{ type: core_2.Input, args: ['size',] },],
    'suffixIcon_input': [{ type: core_2.Input, args: ['suffixIcon',] },],
    'targetID_input': [{ type: core_2.Input, args: ['targetID',] },],
    'target_input': [{ type: core_2.Input, args: ['target',] },],
    'text_input': [{ type: core_2.Input, args: ['text',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeOpen_output': [{ type: core_2.Output, args: ['beforeOpen',] },],
    'click_output': [{ type: core_2.Output, args: ['click',] },],
    'ejclick_output': [{ type: core_2.Output, args: ['ejclick',] },],
    'close_output': [{ type: core_2.Output, args: ['close',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'itemMouseOut_output': [{ type: core_2.Output, args: ['itemMouseOut',] },],
    'itemMouseOver_output': [{ type: core_2.Output, args: ['itemMouseOver',] },],
    'itemSelected_output': [{ type: core_2.Output, args: ['itemSelected',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
};
exports.SplitButtonComponent = SplitButtonComponent;
exports.EJ_SPLITBUTTON_COMPONENTS = [SplitButtonComponent
];
//# sourceMappingURL=splitbutton.component.js.map
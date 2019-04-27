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
require("syncfusion-javascript/Scripts/ej/web/ej.button.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.ButtonValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return ButtonComponent; }),
    multi: true
};
var ButtonComponent = (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Button', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.click_output = new core_2.EventEmitter();
        _this.ejclick_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    ButtonComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    ButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ButtonComponent;
}(core_1.EJComponents));
ButtonComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-button]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.ButtonValueAccessor]
            },] },
];
/** @nocollapse */
ButtonComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ButtonComponent.propDecorators = {
    'contentType_input': [{ type: core_2.Input, args: ['contentType',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'imagePosition_input': [{ type: core_2.Input, args: ['imagePosition',] },],
    'prefixIcon_input': [{ type: core_2.Input, args: ['prefixIcon',] },],
    'repeatButton_input': [{ type: core_2.Input, args: ['repeatButton',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'size_input': [{ type: core_2.Input, args: ['size',] },],
    'suffixIcon_input': [{ type: core_2.Input, args: ['suffixIcon',] },],
    'text_input': [{ type: core_2.Input, args: ['text',] },],
    'timeInterval_input': [{ type: core_2.Input, args: ['timeInterval',] },],
    'type_input': [{ type: core_2.Input, args: ['type',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'click_output': [{ type: core_2.Output, args: ['click',] },],
    'ejclick_output': [{ type: core_2.Output, args: ['ejclick',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
};
exports.ButtonComponent = ButtonComponent;
exports.EJ_BUTTON_COMPONENTS = [ButtonComponent
];
//# sourceMappingURL=button.component.js.map
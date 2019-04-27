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
require("syncfusion-javascript/Scripts/ej/web/ej.radiobutton.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.RadioButtonValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return RadioButtonComponent; }),
    multi: true
};
var RadioButtonComponent = (function (_super) {
    __extends(RadioButtonComponent, _super);
    function RadioButtonComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'RadioButton', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeChange_output = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    RadioButtonComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    RadioButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return RadioButtonComponent;
}(core_1.EJComponents));
RadioButtonComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-radiobutton]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.RadioButtonValueAccessor]
            },] },
];
/** @nocollapse */
RadioButtonComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
RadioButtonComponent.propDecorators = {
    'checked_input': [{ type: core_2.Input, args: ['checked',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'id_input': [{ type: core_2.Input, args: ['id',] },],
    'idPrefix_input': [{ type: core_2.Input, args: ['idPrefix',] },],
    'name_input': [{ type: core_2.Input, args: ['name',] },],
    'size_input': [{ type: core_2.Input, args: ['size',] },],
    'text_input': [{ type: core_2.Input, args: ['text',] },],
    'validationMessage_input': [{ type: core_2.Input, args: ['validationMessage',] },],
    'validationRules_input': [{ type: core_2.Input, args: ['validationRules',] },],
    'value_input': [{ type: core_2.Input, args: ['value',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeChange_output': [{ type: core_2.Output, args: ['beforeChange',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
};
exports.RadioButtonComponent = RadioButtonComponent;
exports.EJ_RADIOBUTTON_COMPONENTS = [RadioButtonComponent
];
//# sourceMappingURL=radiobutton.component.js.map
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
require("syncfusion-javascript/Scripts/ej/web/ej.editor.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.NumericTextboxValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return NumericTextboxComponent; }),
    multi: true
};
var NumericTextboxComponent = (function (_super) {
    __extends(NumericTextboxComponent, _super);
    function NumericTextboxComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'NumericTextbox', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.focusIn_output = new core_2.EventEmitter();
        _this.focusOut_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    NumericTextboxComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    NumericTextboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NumericTextboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return NumericTextboxComponent;
}(core_1.EJComponents));
NumericTextboxComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-numerictextbox]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.NumericTextboxValueAccessor]
            },] },
];
/** @nocollapse */
NumericTextboxComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
NumericTextboxComponent.propDecorators = {
    'currencySymbol_input': [{ type: core_2.Input, args: ['currencySymbol',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'decimalPlaces_input': [{ type: core_2.Input, args: ['decimalPlaces',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableStrictMode_input': [{ type: core_2.Input, args: ['enableStrictMode',] },],
    'groupSize_input': [{ type: core_2.Input, args: ['groupSize',] },],
    'groupSeparator_input': [{ type: core_2.Input, args: ['groupSeparator',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'incrementStep_input': [{ type: core_2.Input, args: ['incrementStep',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maxValue_input': [{ type: core_2.Input, args: ['maxValue',] },],
    'minValue_input': [{ type: core_2.Input, args: ['minValue',] },],
    'name_input': [{ type: core_2.Input, args: ['name',] },],
    'negativePattern_input': [{ type: core_2.Input, args: ['negativePattern',] },],
    'positivePattern_input': [{ type: core_2.Input, args: ['positivePattern',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'showSpinButton_input': [{ type: core_2.Input, args: ['showSpinButton',] },],
    'validateOnType_input': [{ type: core_2.Input, args: ['validateOnType',] },],
    'validationMessage_input': [{ type: core_2.Input, args: ['validationMessage',] },],
    'validationRules_input': [{ type: core_2.Input, args: ['validationRules',] },],
    'value_input': [{ type: core_2.Input, args: ['value',] },],
    'watermarkText_input': [{ type: core_2.Input, args: ['watermarkText',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'focusIn_output': [{ type: core_2.Output, args: ['focusIn',] },],
    'focusOut_output': [{ type: core_2.Output, args: ['focusOut',] },],
};
exports.NumericTextboxComponent = NumericTextboxComponent;
exports.EJ_NUMERICTEXTBOX_COMPONENTS = [NumericTextboxComponent
];
//# sourceMappingURL=numerictextbox.component.js.map
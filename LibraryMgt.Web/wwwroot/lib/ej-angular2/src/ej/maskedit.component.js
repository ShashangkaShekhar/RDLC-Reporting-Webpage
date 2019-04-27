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
require("syncfusion-javascript/Scripts/ej/web/ej.maskedit.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.MaskEditValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return MaskEditComponent; }),
    multi: true
};
var MaskEditComponent = (function (_super) {
    __extends(MaskEditComponent, _super);
    function MaskEditComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'MaskEdit', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
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
        _this.onKeyDown_output = new core_2.EventEmitter();
        _this.keyPress_output = new core_2.EventEmitter();
        _this.keyUp_output = new core_2.EventEmitter();
        _this.mouseOut_output = new core_2.EventEmitter();
        _this.mouseOver_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    MaskEditComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    MaskEditComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MaskEditComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return MaskEditComponent;
}(core_1.EJComponents));
MaskEditComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-maskedit]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.MaskEditValueAccessor]
            },] },
];
/** @nocollapse */
MaskEditComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
MaskEditComponent.propDecorators = {
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'customCharacter_input': [{ type: core_2.Input, args: ['customCharacter',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'hidePromptOnLeave_input': [{ type: core_2.Input, args: ['hidePromptOnLeave',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'inputMode_input': [{ type: core_2.Input, args: ['inputMode',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maskFormat_input': [{ type: core_2.Input, args: ['maskFormat',] },],
    'name_input': [{ type: core_2.Input, args: ['name',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'showError_input': [{ type: core_2.Input, args: ['showError',] },],
    'showPromptChar_input': [{ type: core_2.Input, args: ['showPromptChar',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'textAlign_input': [{ type: core_2.Input, args: ['textAlign',] },],
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
    'onKeyDown_output': [{ type: core_2.Output, args: ['onKeyDown',] },],
    'keyPress_output': [{ type: core_2.Output, args: ['keyPress',] },],
    'keyUp_output': [{ type: core_2.Output, args: ['keyUp',] },],
    'mouseOut_output': [{ type: core_2.Output, args: ['mouseOut',] },],
    'mouseOver_output': [{ type: core_2.Output, args: ['mouseOver',] },],
};
exports.MaskEditComponent = MaskEditComponent;
exports.EJ_MASKEDIT_COMPONENTS = [MaskEditComponent
];
//# sourceMappingURL=maskedit.component.js.map
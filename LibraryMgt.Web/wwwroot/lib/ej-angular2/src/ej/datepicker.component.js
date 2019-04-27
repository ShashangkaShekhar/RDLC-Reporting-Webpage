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
require("syncfusion-javascript/Scripts/ej/web/ej.datepicker.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.DatePickerValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function (_super) {
    __extends(DatePickerComponent, _super);
    function DatePickerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'DatePicker', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeClose_output = new core_2.EventEmitter();
        _this.beforeDateCreate_output = new core_2.EventEmitter();
        _this.beforeOpen_output = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.close_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.focusIn_output = new core_2.EventEmitter();
        _this.focusOut_output = new core_2.EventEmitter();
        _this.navigate_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.select_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    DatePickerComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return DatePickerComponent;
}(core_1.EJComponents));
DatePickerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-datepicker]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.DatePickerValueAccessor]
            },] },
];
/** @nocollapse */
DatePickerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
DatePickerComponent.propDecorators = {
    'allowEdit_input': [{ type: core_2.Input, args: ['allowEdit',] },],
    'allowDrillDown_input': [{ type: core_2.Input, args: ['allowDrillDown',] },],
    'blackoutDates_input': [{ type: core_2.Input, args: ['blackoutDates',] },],
    'buttonText_input': [{ type: core_2.Input, args: ['buttonText',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dateFormat_input': [{ type: core_2.Input, args: ['dateFormat',] },],
    'dayHeaderFormat_input': [{ type: core_2.Input, args: ['dayHeaderFormat',] },],
    'depthLevel_input': [{ type: core_2.Input, args: ['depthLevel',] },],
    'displayInline_input': [{ type: core_2.Input, args: ['displayInline',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableStrictMode_input': [{ type: core_2.Input, args: ['enableStrictMode',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'headerFormat_input': [{ type: core_2.Input, args: ['headerFormat',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'highlightSection_input': [{ type: core_2.Input, args: ['highlightSection',] },],
    'highlightWeekend_input': [{ type: core_2.Input, args: ['highlightWeekend',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maxDate_input': [{ type: core_2.Input, args: ['maxDate',] },],
    'minDate_input': [{ type: core_2.Input, args: ['minDate',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'showDisabledRange_input': [{ type: core_2.Input, args: ['showDisabledRange',] },],
    'showFooter_input': [{ type: core_2.Input, args: ['showFooter',] },],
    'showOtherMonths_input': [{ type: core_2.Input, args: ['showOtherMonths',] },],
    'showPopupButton_input': [{ type: core_2.Input, args: ['showPopupButton',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'showTooltip_input': [{ type: core_2.Input, args: ['showTooltip',] },],
    'specialDates_input': [{ type: core_2.Input, args: ['specialDates',] },],
    'startDay_input': [{ type: core_2.Input, args: ['startDay',] },],
    'startLevel_input': [{ type: core_2.Input, args: ['startLevel',] },],
    'stepMonths_input': [{ type: core_2.Input, args: ['stepMonths',] },],
    'tooltipFormat_input': [{ type: core_2.Input, args: ['tooltipFormat',] },],
    'validationMessage_input': [{ type: core_2.Input, args: ['validationMessage',] },],
    'validationRules_input': [{ type: core_2.Input, args: ['validationRules',] },],
    'value_input': [{ type: core_2.Input, args: ['value',] },],
    'watermarkText_input': [{ type: core_2.Input, args: ['watermarkText',] },],
    'weekNumber_input': [{ type: core_2.Input, args: ['weekNumber',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'fields_date_input': [{ type: core_2.Input, args: ['fields.date',] },],
    'fields_iconClass_input': [{ type: core_2.Input, args: ['fields.iconClass',] },],
    'fields_tooltip_input': [{ type: core_2.Input, args: ['fields.tooltip',] },],
    'fields_cssClass_input': [{ type: core_2.Input, args: ['fields.cssClass',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeClose_output': [{ type: core_2.Output, args: ['beforeClose',] },],
    'beforeDateCreate_output': [{ type: core_2.Output, args: ['beforeDateCreate',] },],
    'beforeOpen_output': [{ type: core_2.Output, args: ['beforeOpen',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'close_output': [{ type: core_2.Output, args: ['close',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'focusIn_output': [{ type: core_2.Output, args: ['focusIn',] },],
    'focusOut_output': [{ type: core_2.Output, args: ['focusOut',] },],
    'navigate_output': [{ type: core_2.Output, args: ['navigate',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
    'select_output': [{ type: core_2.Output, args: ['select',] },],
};
exports.DatePickerComponent = DatePickerComponent;
exports.EJ_DATEPICKER_COMPONENTS = [DatePickerComponent
];
//# sourceMappingURL=datepicker.component.js.map
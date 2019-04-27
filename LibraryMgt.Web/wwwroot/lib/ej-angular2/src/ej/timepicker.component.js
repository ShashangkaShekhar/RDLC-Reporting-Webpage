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
require("syncfusion-javascript/Scripts/ej/web/ej.timepicker.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.TimePickerValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return TimePickerComponent; }),
    multi: true
};
var TimePickerComponent = (function (_super) {
    __extends(TimePickerComponent, _super);
    function TimePickerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'TimePicker', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeChange_output = new core_2.EventEmitter();
        _this.beforeOpen_output = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.close_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.focusIn_output = new core_2.EventEmitter();
        _this.focusOut_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.select_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    TimePickerComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    TimePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TimePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return TimePickerComponent;
}(core_1.EJComponents));
TimePickerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-timepicker]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.TimePickerValueAccessor]
            },] },
];
/** @nocollapse */
TimePickerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
TimePickerComponent.propDecorators = {
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'disableTimeRanges_input': [{ type: core_2.Input, args: ['disableTimeRanges',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableStrictMode_input': [{ type: core_2.Input, args: ['enableStrictMode',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'hourInterval_input': [{ type: core_2.Input, args: ['hourInterval',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'interval_input': [{ type: core_2.Input, args: ['interval',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maxTime_input': [{ type: core_2.Input, args: ['maxTime',] },],
    'minTime_input': [{ type: core_2.Input, args: ['minTime',] },],
    'minutesInterval_input': [{ type: core_2.Input, args: ['minutesInterval',] },],
    'popupHeight_input': [{ type: core_2.Input, args: ['popupHeight',] },],
    'popupWidth_input': [{ type: core_2.Input, args: ['popupWidth',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'secondsInterval_input': [{ type: core_2.Input, args: ['secondsInterval',] },],
    'showPopupButton_input': [{ type: core_2.Input, args: ['showPopupButton',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'timeFormat_input': [{ type: core_2.Input, args: ['timeFormat',] },],
    'value_input': [{ type: core_2.Input, args: ['value',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeChange_output': [{ type: core_2.Output, args: ['beforeChange',] },],
    'beforeOpen_output': [{ type: core_2.Output, args: ['beforeOpen',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'close_output': [{ type: core_2.Output, args: ['close',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'focusIn_output': [{ type: core_2.Output, args: ['focusIn',] },],
    'focusOut_output': [{ type: core_2.Output, args: ['focusOut',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
    'select_output': [{ type: core_2.Output, args: ['select',] },],
};
exports.TimePickerComponent = TimePickerComponent;
exports.EJ_TIMEPICKER_COMPONENTS = [TimePickerComponent
];
//# sourceMappingURL=timepicker.component.js.map
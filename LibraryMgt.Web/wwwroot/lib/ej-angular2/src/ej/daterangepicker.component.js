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
require("syncfusion-javascript/Scripts/ej/web/ej.daterangepicker.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.DateRangePickerValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return DateRangePickerComponent; }),
    multi: true
};
var DateRangePickerComponent = (function (_super) {
    __extends(DateRangePickerComponent, _super);
    function DateRangePickerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'DateRangePicker', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeClose_output = new core_2.EventEmitter();
        _this.beforeOpen_output = new core_2.EventEmitter();
        _this.Change_output = new core_2.EventEmitter();
        _this.close_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.select_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    DateRangePickerComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    DateRangePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DateRangePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return DateRangePickerComponent;
}(core_1.EJComponents));
DateRangePickerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-daterangepicker]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.DateRangePickerValueAccessor]
            },] },
];
/** @nocollapse */
DateRangePickerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
DateRangePickerComponent.propDecorators = {
    'allowEdit_input': [{ type: core_2.Input, args: ['allowEdit',] },],
    'buttonText_input': [{ type: core_2.Input, args: ['buttonText',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dateFormat_input': [{ type: core_2.Input, args: ['dateFormat',] },],
    'enableTimePicker_input': [{ type: core_2.Input, args: ['enableTimePicker',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'endDate_input': [{ type: core_2.Input, args: ['endDate',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'ranges_input': [{ type: core_2.Input, args: ['ranges',] },],
    'separator_input': [{ type: core_2.Input, args: ['separator',] },],
    'startDate_input': [{ type: core_2.Input, args: ['startDate',] },],
    'showPopupButton_input': [{ type: core_2.Input, args: ['showPopupButton',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'timeFormat_input': [{ type: core_2.Input, args: ['timeFormat',] },],
    'value_input': [{ type: core_2.Input, args: ['value',] },],
    'watermarkText_input': [{ type: core_2.Input, args: ['watermarkText',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeClose_output': [{ type: core_2.Output, args: ['beforeClose',] },],
    'beforeOpen_output': [{ type: core_2.Output, args: ['beforeOpen',] },],
    'Change_output': [{ type: core_2.Output, args: ['Change',] },],
    'close_output': [{ type: core_2.Output, args: ['close',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
    'select_output': [{ type: core_2.Output, args: ['select',] },],
};
exports.DateRangePickerComponent = DateRangePickerComponent;
exports.EJ_DATERANGEPICKER_COMPONENTS = [DateRangePickerComponent
];
//# sourceMappingURL=daterangepicker.component.js.map
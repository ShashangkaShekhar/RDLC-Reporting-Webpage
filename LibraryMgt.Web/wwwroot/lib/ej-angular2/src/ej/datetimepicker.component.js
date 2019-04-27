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
require("syncfusion-javascript/Scripts/ej/web/ej.datetimepicker.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.DateTimePickerValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return DateTimePickerComponent; }),
    multi: true
};
var DateTimePickerComponent = (function (_super) {
    __extends(DateTimePickerComponent, _super);
    function DateTimePickerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'DateTimePicker', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeClose_output = new core_2.EventEmitter();
        _this.beforeOpen_output = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.close_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.focusIn_output = new core_2.EventEmitter();
        _this.focusOut_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    DateTimePickerComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    DateTimePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DateTimePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return DateTimePickerComponent;
}(core_1.EJComponents));
DateTimePickerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-datetimepicker]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.DateTimePickerValueAccessor]
            },] },
];
/** @nocollapse */
DateTimePickerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
DateTimePickerComponent.propDecorators = {
    'allowEdit_input': [{ type: core_2.Input, args: ['allowEdit',] },],
    'buttonText_input': [{ type: core_2.Input, args: ['buttonText',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dateTimeFormat_input': [{ type: core_2.Input, args: ['dateTimeFormat',] },],
    'dayHeaderFormat_input': [{ type: core_2.Input, args: ['dayHeaderFormat',] },],
    'depthLevel_input': [{ type: core_2.Input, args: ['depthLevel',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableStrictMode_input': [{ type: core_2.Input, args: ['enableStrictMode',] },],
    'headerFormat_input': [{ type: core_2.Input, args: ['headerFormat',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'interval_input': [{ type: core_2.Input, args: ['interval',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maxDateTime_input': [{ type: core_2.Input, args: ['maxDateTime',] },],
    'minDateTime_input': [{ type: core_2.Input, args: ['minDateTime',] },],
    'popupPosition_input': [{ type: core_2.Input, args: ['popupPosition',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'showOtherMonths_input': [{ type: core_2.Input, args: ['showOtherMonths',] },],
    'showPopupButton_input': [{ type: core_2.Input, args: ['showPopupButton',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'startDay_input': [{ type: core_2.Input, args: ['startDay',] },],
    'startLevel_input': [{ type: core_2.Input, args: ['startLevel',] },],
    'stepMonths_input': [{ type: core_2.Input, args: ['stepMonths',] },],
    'timeDisplayFormat_input': [{ type: core_2.Input, args: ['timeDisplayFormat',] },],
    'timeDrillDown_input': [{ type: core_2.Input, args: ['timeDrillDown',] },],
    'timePopupWidth_input': [{ type: core_2.Input, args: ['timePopupWidth',] },],
    'validationMessage_input': [{ type: core_2.Input, args: ['validationMessage',] },],
    'validationRules_input': [{ type: core_2.Input, args: ['validationRules',] },],
    'value_input': [{ type: core_2.Input, args: ['value',] },],
    'watermarkText_input': [{ type: core_2.Input, args: ['watermarkText',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'buttonText_done_input': [{ type: core_2.Input, args: ['buttonText.done',] },],
    'buttonText_timeNow_input': [{ type: core_2.Input, args: ['buttonText.timeNow',] },],
    'buttonText_timeTitle_input': [{ type: core_2.Input, args: ['buttonText.timeTitle',] },],
    'buttonText_today_input': [{ type: core_2.Input, args: ['buttonText.today',] },],
    'timeDrillDown_enabled_input': [{ type: core_2.Input, args: ['timeDrillDown.enabled',] },],
    'timeDrillDown_interval_input': [{ type: core_2.Input, args: ['timeDrillDown.interval',] },],
    'timeDrillDown_showMeridian_input': [{ type: core_2.Input, args: ['timeDrillDown.showMeridian',] },],
    'timeDrillDown_autoClose_input': [{ type: core_2.Input, args: ['timeDrillDown.autoClose',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeClose_output': [{ type: core_2.Output, args: ['beforeClose',] },],
    'beforeOpen_output': [{ type: core_2.Output, args: ['beforeOpen',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'close_output': [{ type: core_2.Output, args: ['close',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'focusIn_output': [{ type: core_2.Output, args: ['focusIn',] },],
    'focusOut_output': [{ type: core_2.Output, args: ['focusOut',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
};
exports.DateTimePickerComponent = DateTimePickerComponent;
exports.EJ_DATETIMEPICKER_COMPONENTS = [DateTimePickerComponent
];
//# sourceMappingURL=datetimepicker.component.js.map
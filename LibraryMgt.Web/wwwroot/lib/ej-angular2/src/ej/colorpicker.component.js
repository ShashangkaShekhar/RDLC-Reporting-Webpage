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
require("syncfusion-javascript/Scripts/ej/web/ej.colorpicker.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.ColorPickerValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return ColorPickerComponent; }),
    multi: true
};
var ColorPickerComponent = (function (_super) {
    __extends(ColorPickerComponent, _super);
    function ColorPickerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'ColorPicker', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.value_twoChange = new core_2.EventEmitter();
        _this.opacityValue_twoChange = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.close_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.select_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    ColorPickerComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    ColorPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ColorPickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ColorPickerComponent;
}(core_1.EJComponents));
ColorPickerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-colorpicker]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.ColorPickerValueAccessor]
            },] },
];
/** @nocollapse */
ColorPickerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ColorPickerComponent.propDecorators = {
    'buttonText_input': [{ type: core_2.Input, args: ['buttonText',] },],
    'buttonMode_input': [{ type: core_2.Input, args: ['buttonMode',] },],
    'columns_input': [{ type: core_2.Input, args: ['columns',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'custom_input': [{ type: core_2.Input, args: ['custom',] },],
    'displayInline_input': [{ type: core_2.Input, args: ['displayInline',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableOpacity_input': [{ type: core_2.Input, args: ['enableOpacity',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'modelType_input': [{ type: core_2.Input, args: ['modelType',] },],
    'palette_input': [{ type: core_2.Input, args: ['palette',] },],
    'presetType_input': [{ type: core_2.Input, args: ['presetType',] },],
    'showApplyCancel_input': [{ type: core_2.Input, args: ['showApplyCancel',] },],
    'showClearButton_input': [{ type: core_2.Input, args: ['showClearButton',] },],
    'showPreview_input': [{ type: core_2.Input, args: ['showPreview',] },],
    'showRecentColors_input': [{ type: core_2.Input, args: ['showRecentColors',] },],
    'showSwitcher_input': [{ type: core_2.Input, args: ['showSwitcher',] },],
    'showTooltip_input': [{ type: core_2.Input, args: ['showTooltip',] },],
    'toolIcon_input': [{ type: core_2.Input, args: ['toolIcon',] },],
    'tooltipText_input': [{ type: core_2.Input, args: ['tooltipText',] },],
    'buttonText_apply_input': [{ type: core_2.Input, args: ['buttonText.apply',] },],
    'buttonText_cancel_input': [{ type: core_2.Input, args: ['buttonText.cancel',] },],
    'buttonText_swatches_input': [{ type: core_2.Input, args: ['buttonText.swatches',] },],
    'tooltipText_switcher_input': [{ type: core_2.Input, args: ['tooltipText.switcher',] },],
    'tooltipText_addButton_input': [{ type: core_2.Input, args: ['tooltipText.addButton',] },],
    'tooltipText_basic_input': [{ type: core_2.Input, args: ['tooltipText.basic',] },],
    'tooltipText_monoChrome_input': [{ type: core_2.Input, args: ['tooltipText.monoChrome',] },],
    'tooltipText_flatColors_input': [{ type: core_2.Input, args: ['tooltipText.flatColors',] },],
    'tooltipText_seaWolf_input': [{ type: core_2.Input, args: ['tooltipText.seaWolf',] },],
    'tooltipText_webColors_input': [{ type: core_2.Input, args: ['tooltipText.webColors',] },],
    'tooltipText_sandy_input': [{ type: core_2.Input, args: ['tooltipText.sandy',] },],
    'tooltipText_pinkShades_input': [{ type: core_2.Input, args: ['tooltipText.pinkShades',] },],
    'tooltipText_misty_input': [{ type: core_2.Input, args: ['tooltipText.misty',] },],
    'tooltipText_citrus_input': [{ type: core_2.Input, args: ['tooltipText.citrus',] },],
    'tooltipText_vintage_input': [{ type: core_2.Input, args: ['tooltipText.vintage',] },],
    'tooltipText_moonLight_input': [{ type: core_2.Input, args: ['tooltipText.moonLight',] },],
    'tooltipText_candyCrush_input': [{ type: core_2.Input, args: ['tooltipText.candyCrush',] },],
    'tooltipText_currentColor_input': [{ type: core_2.Input, args: ['tooltipText.currentColor',] },],
    'tooltipText_selectedColor_input': [{ type: core_2.Input, args: ['tooltipText.selectedColor',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'value_two': [{ type: core_2.Input, args: ['value',] },],
    'value_twoChange': [{ type: core_2.Output, args: ['valueChange',] },],
    'opacityValue_two': [{ type: core_2.Input, args: ['opacityValue',] },],
    'opacityValue_twoChange': [{ type: core_2.Output, args: ['opacityValueChange',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'close_output': [{ type: core_2.Output, args: ['close',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
    'select_output': [{ type: core_2.Output, args: ['select',] },],
};
exports.ColorPickerComponent = ColorPickerComponent;
exports.EJ_COLORPICKER_COMPONENTS = [ColorPickerComponent
];
//# sourceMappingURL=colorpicker.component.js.map
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
require("syncfusion-javascript/Scripts/ej/web/ej.autocomplete.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.AutocompleteValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return AutocompleteComponent; }),
    multi: true
};
var AutocompleteComponent = (function (_super) {
    __extends(AutocompleteComponent, _super);
    function AutocompleteComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Autocomplete', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.actionBegin_output = new core_2.EventEmitter();
        _this.actionSuccess_output = new core_2.EventEmitter();
        _this.actionComplete_output = new core_2.EventEmitter();
        _this.actionFailure_output = new core_2.EventEmitter();
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
    AutocompleteComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    AutocompleteComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    AutocompleteComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return AutocompleteComponent;
}(core_1.EJComponents));
AutocompleteComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-autocomplete]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.AutocompleteValueAccessor]
            },] },
];
/** @nocollapse */
AutocompleteComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
AutocompleteComponent.propDecorators = {
    'addNewText_input': [{ type: core_2.Input, args: ['addNewText',] },],
    'allowAddNew_input': [{ type: core_2.Input, args: ['allowAddNew',] },],
    'allowSorting_input': [{ type: core_2.Input, args: ['allowSorting',] },],
    'animateType_input': [{ type: core_2.Input, args: ['animateType',] },],
    'autoFocus_input': [{ type: core_2.Input, args: ['autoFocus',] },],
    'caseSensitiveSearch_input': [{ type: core_2.Input, args: ['caseSensitiveSearch',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'delaySuggestionTimeout_input': [{ type: core_2.Input, args: ['delaySuggestionTimeout',] },],
    'delimiterChar_input': [{ type: core_2.Input, args: ['delimiterChar',] },],
    'emptyResultText_input': [{ type: core_2.Input, args: ['emptyResultText',] },],
    'enableAutoFill_input': [{ type: core_2.Input, args: ['enableAutoFill',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableDistinct_input': [{ type: core_2.Input, args: ['enableDistinct',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'filterType_input': [{ type: core_2.Input, args: ['filterType',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'highlightSearch_input': [{ type: core_2.Input, args: ['highlightSearch',] },],
    'itemsCount_input': [{ type: core_2.Input, args: ['itemsCount',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'minCharacter_input': [{ type: core_2.Input, args: ['minCharacter',] },],
    'multiColumnSettings_input': [{ type: core_2.Input, args: ['multiColumnSettings',] },],
    'multiSelectMode_input': [{ type: core_2.Input, args: ['multiSelectMode',] },],
    'popupHeight_input': [{ type: core_2.Input, args: ['popupHeight',] },],
    'popupWidth_input': [{ type: core_2.Input, args: ['popupWidth',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'selectValueByKey_input': [{ type: core_2.Input, args: ['selectValueByKey',] },],
    'showEmptyResultText_input': [{ type: core_2.Input, args: ['showEmptyResultText',] },],
    'showLoadingIcon_input': [{ type: core_2.Input, args: ['showLoadingIcon',] },],
    'showPopupButton_input': [{ type: core_2.Input, args: ['showPopupButton',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'showResetIcon_input': [{ type: core_2.Input, args: ['showResetIcon',] },],
    'sortOrder_input': [{ type: core_2.Input, args: ['sortOrder',] },],
    'template_input': [{ type: core_2.Input, args: ['template',] },],
    'validationMessage_input': [{ type: core_2.Input, args: ['validationMessage',] },],
    'validationRules_input': [{ type: core_2.Input, args: ['validationRules',] },],
    'value_input': [{ type: core_2.Input, args: ['value',] },],
    'visible_input': [{ type: core_2.Input, args: ['visible',] },],
    'watermarkText_input': [{ type: core_2.Input, args: ['watermarkText',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'fields_groupBy_input': [{ type: core_2.Input, args: ['fields.groupBy',] },],
    'fields_htmlAttributes_input': [{ type: core_2.Input, args: ['fields.htmlAttributes',] },],
    'fields_key_input': [{ type: core_2.Input, args: ['fields.key',] },],
    'fields_text_input': [{ type: core_2.Input, args: ['fields.text',] },],
    'multiColumnSettings_enable_input': [{ type: core_2.Input, args: ['multiColumnSettings.enable',] },],
    'multiColumnSettings_showHeader_input': [{ type: core_2.Input, args: ['multiColumnSettings.showHeader',] },],
    'multiColumnSettings_stringFormat_input': [{ type: core_2.Input, args: ['multiColumnSettings.stringFormat',] },],
    'multiColumnSettings_searchColumnIndices_input': [{ type: core_2.Input, args: ['multiColumnSettings.searchColumnIndices',] },],
    'multiColumnSettings_columns_input': [{ type: core_2.Input, args: ['multiColumnSettings.columns',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'actionBegin_output': [{ type: core_2.Output, args: ['actionBegin',] },],
    'actionSuccess_output': [{ type: core_2.Output, args: ['actionSuccess',] },],
    'actionComplete_output': [{ type: core_2.Output, args: ['actionComplete',] },],
    'actionFailure_output': [{ type: core_2.Output, args: ['actionFailure',] },],
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
exports.AutocompleteComponent = AutocompleteComponent;
exports.EJ_AUTOCOMPLETE_COMPONENTS = [AutocompleteComponent
];
//# sourceMappingURL=autocomplete.component.js.map
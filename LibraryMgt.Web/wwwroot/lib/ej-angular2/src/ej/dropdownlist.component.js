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
require("syncfusion-javascript/Scripts/ej/web/ej.dropdownlist.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.DropDownListValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return DropDownListComponent; }),
    multi: true
};
var DropDownListComponent = (function (_super) {
    __extends(DropDownListComponent, _super);
    function DropDownListComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'DropDownList', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.value_twoChange = new core_2.EventEmitter();
        _this.actionBegin_output = new core_2.EventEmitter();
        _this.actionComplete_output = new core_2.EventEmitter();
        _this.actionFailure_output = new core_2.EventEmitter();
        _this.actionSuccess_output = new core_2.EventEmitter();
        _this.beforePopupHide_output = new core_2.EventEmitter();
        _this.beforePopupShown_output = new core_2.EventEmitter();
        _this.cascade_output = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.checkChange_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.dataBound_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.focusIn_output = new core_2.EventEmitter();
        _this.focusOut_output = new core_2.EventEmitter();
        _this.popupHide_output = new core_2.EventEmitter();
        _this.popupResize_output = new core_2.EventEmitter();
        _this.popupShown_output = new core_2.EventEmitter();
        _this.popupResizeStart_output = new core_2.EventEmitter();
        _this.popupResizeStop_output = new core_2.EventEmitter();
        _this.search_output = new core_2.EventEmitter();
        _this.select_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    DropDownListComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    DropDownListComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DropDownListComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return DropDownListComponent;
}(core_1.EJComponents));
DropDownListComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-dropdownlist]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.DropDownListValueAccessor]
            },] },
];
/** @nocollapse */
DropDownListComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
DropDownListComponent.propDecorators = {
    'allowVirtualScrolling_input': [{ type: core_2.Input, args: ['allowVirtualScrolling',] },],
    'cascadeTo_input': [{ type: core_2.Input, args: ['cascadeTo',] },],
    'caseSensitiveSearch_input': [{ type: core_2.Input, args: ['caseSensitiveSearch',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'delimiterChar_input': [{ type: core_2.Input, args: ['delimiterChar',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableIncrementalSearch_input': [{ type: core_2.Input, args: ['enableIncrementalSearch',] },],
    'enableFilterSearch_input': [{ type: core_2.Input, args: ['enableFilterSearch',] },],
    'enableServerFiltering_input': [{ type: core_2.Input, args: ['enableServerFiltering',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enablePopupResize_input': [{ type: core_2.Input, args: ['enablePopupResize',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableSorting_input': [{ type: core_2.Input, args: ['enableSorting',] },],
    'loadOnDemand_input': [{ type: core_2.Input, args: ['loadOnDemand',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'filterType_input': [{ type: core_2.Input, args: ['filterType',] },],
    'headerTemplate_input': [{ type: core_2.Input, args: ['headerTemplate',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'itemsCount_input': [{ type: core_2.Input, args: ['itemsCount',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maxPopupHeight_input': [{ type: core_2.Input, args: ['maxPopupHeight',] },],
    'minPopupHeight_input': [{ type: core_2.Input, args: ['minPopupHeight',] },],
    'maxPopupWidth_input': [{ type: core_2.Input, args: ['maxPopupWidth',] },],
    'minPopupWidth_input': [{ type: core_2.Input, args: ['minPopupWidth',] },],
    'multiSelectMode_input': [{ type: core_2.Input, args: ['multiSelectMode',] },],
    'popupHeight_input': [{ type: core_2.Input, args: ['popupHeight',] },],
    'popupWidth_input': [{ type: core_2.Input, args: ['popupWidth',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'selectedIndex_input': [{ type: core_2.Input, args: ['selectedIndex',] },],
    'selectedIndices_input': [{ type: core_2.Input, args: ['selectedIndices',] },],
    'showCheckbox_input': [{ type: core_2.Input, args: ['showCheckbox',] },],
    'showPopupOnLoad_input': [{ type: core_2.Input, args: ['showPopupOnLoad',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'sortOrder_input': [{ type: core_2.Input, args: ['sortOrder',] },],
    'targetID_input': [{ type: core_2.Input, args: ['targetID',] },],
    'template_input': [{ type: core_2.Input, args: ['template',] },],
    'text_input': [{ type: core_2.Input, args: ['text',] },],
    'validationMessage_input': [{ type: core_2.Input, args: ['validationMessage',] },],
    'validationRules_input': [{ type: core_2.Input, args: ['validationRules',] },],
    'watermarkText_input': [{ type: core_2.Input, args: ['watermarkText',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'virtualScrollMode_input': [{ type: core_2.Input, args: ['virtualScrollMode',] },],
    'fields_groupBy_input': [{ type: core_2.Input, args: ['fields.groupBy',] },],
    'fields_htmlAttributes_input': [{ type: core_2.Input, args: ['fields.htmlAttributes',] },],
    'fields_id_input': [{ type: core_2.Input, args: ['fields.id',] },],
    'fields_imageAttributes_input': [{ type: core_2.Input, args: ['fields.imageAttributes',] },],
    'fields_imageUrl_input': [{ type: core_2.Input, args: ['fields.imageUrl',] },],
    'fields_selected_input': [{ type: core_2.Input, args: ['fields.selected',] },],
    'fields_spriteCssClass_input': [{ type: core_2.Input, args: ['fields.spriteCssClass',] },],
    'fields_tableName_input': [{ type: core_2.Input, args: ['fields.tableName',] },],
    'fields_text_input': [{ type: core_2.Input, args: ['fields.text',] },],
    'fields_value_input': [{ type: core_2.Input, args: ['fields.value',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'value_two': [{ type: core_2.Input, args: ['value',] },],
    'value_twoChange': [{ type: core_2.Output, args: ['valueChange',] },],
    'actionBegin_output': [{ type: core_2.Output, args: ['actionBegin',] },],
    'actionComplete_output': [{ type: core_2.Output, args: ['actionComplete',] },],
    'actionFailure_output': [{ type: core_2.Output, args: ['actionFailure',] },],
    'actionSuccess_output': [{ type: core_2.Output, args: ['actionSuccess',] },],
    'beforePopupHide_output': [{ type: core_2.Output, args: ['beforePopupHide',] },],
    'beforePopupShown_output': [{ type: core_2.Output, args: ['beforePopupShown',] },],
    'cascade_output': [{ type: core_2.Output, args: ['cascade',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'checkChange_output': [{ type: core_2.Output, args: ['checkChange',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'dataBound_output': [{ type: core_2.Output, args: ['dataBound',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'focusIn_output': [{ type: core_2.Output, args: ['focusIn',] },],
    'focusOut_output': [{ type: core_2.Output, args: ['focusOut',] },],
    'popupHide_output': [{ type: core_2.Output, args: ['popupHide',] },],
    'popupResize_output': [{ type: core_2.Output, args: ['popupResize',] },],
    'popupShown_output': [{ type: core_2.Output, args: ['popupShown',] },],
    'popupResizeStart_output': [{ type: core_2.Output, args: ['popupResizeStart',] },],
    'popupResizeStop_output': [{ type: core_2.Output, args: ['popupResizeStop',] },],
    'search_output': [{ type: core_2.Output, args: ['search',] },],
    'select_output': [{ type: core_2.Output, args: ['select',] },],
};
exports.DropDownListComponent = DropDownListComponent;
exports.EJ_DROPDOWNLIST_COMPONENTS = [DropDownListComponent
];
//# sourceMappingURL=dropdownlist.component.js.map
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
require("syncfusion-javascript/Scripts/ej/web/ej.listbox.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var ListBoxComponent = (function (_super) {
    __extends(ListBoxComponent, _super);
    function ListBoxComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'ListBox', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.value_twoChange = new core_2.EventEmitter();
        _this.actionBegin_output = new core_2.EventEmitter();
        _this.actionSuccess_output = new core_2.EventEmitter();
        _this.actionComplete_output = new core_2.EventEmitter();
        _this.actionFailure_output = new core_2.EventEmitter();
        _this.actionBeforeSuccess_output = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.checkChange_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.focusIn_output = new core_2.EventEmitter();
        _this.focusOut_output = new core_2.EventEmitter();
        _this.itemDrag_output = new core_2.EventEmitter();
        _this.itemDragStart_output = new core_2.EventEmitter();
        _this.itemDragStop_output = new core_2.EventEmitter();
        _this.itemDrop_output = new core_2.EventEmitter();
        _this.select_output = new core_2.EventEmitter();
        _this.unselect_output = new core_2.EventEmitter();
        return _this;
    }
    return ListBoxComponent;
}(core_1.EJComponents));
ListBoxComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-listbox',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
ListBoxComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ListBoxComponent.propDecorators = {
    'allowDrag_input': [{ type: core_2.Input, args: ['allowDrag',] },],
    'allowDrop_input': [{ type: core_2.Input, args: ['allowDrop',] },],
    'allowMultiSelection_input': [{ type: core_2.Input, args: ['allowMultiSelection',] },],
    'allowVirtualScrolling_input': [{ type: core_2.Input, args: ['allowVirtualScrolling',] },],
    'caseSensitiveSearch_input': [{ type: core_2.Input, args: ['caseSensitiveSearch',] },],
    'cascadeTo_input': [{ type: core_2.Input, args: ['cascadeTo',] },],
    'checkedIndices_input': [{ type: core_2.Input, args: ['checkedIndices',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableIncrementalSearch_input': [{ type: core_2.Input, args: ['enableIncrementalSearch',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableWordWrap_input': [{ type: core_2.Input, args: ['enableWordWrap',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'itemHeight_input': [{ type: core_2.Input, args: ['itemHeight',] },],
    'itemsCount_input': [{ type: core_2.Input, args: ['itemsCount',] },],
    'totalItemsCount_input': [{ type: core_2.Input, args: ['totalItemsCount',] },],
    'itemRequestCount_input': [{ type: core_2.Input, args: ['itemRequestCount',] },],
    'loadDataOnInit_input': [{ type: core_2.Input, args: ['loadDataOnInit',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'selectedIndex_input': [{ type: core_2.Input, args: ['selectedIndex',] },],
    'selectedIndices_input': [{ type: core_2.Input, args: ['selectedIndices',] },],
    'showCheckbox_input': [{ type: core_2.Input, args: ['showCheckbox',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'sortOrder_input': [{ type: core_2.Input, args: ['sortOrder',] },],
    'template_input': [{ type: core_2.Input, args: ['template',] },],
    'virtualScrollMode_input': [{ type: core_2.Input, args: ['virtualScrollMode',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'targetID_input': [{ type: core_2.Input, args: ['targetID',] },],
    'fields_checkBy_input': [{ type: core_2.Input, args: ['fields.checkBy',] },],
    'fields_groupBy_input': [{ type: core_2.Input, args: ['fields.groupBy',] },],
    'fields_htmlAttributes_input': [{ type: core_2.Input, args: ['fields.htmlAttributes',] },],
    'fields_id_input': [{ type: core_2.Input, args: ['fields.id',] },],
    'fields_imageUrl_input': [{ type: core_2.Input, args: ['fields.imageUrl',] },],
    'fields_imageAttributes_input': [{ type: core_2.Input, args: ['fields.imageAttributes',] },],
    'fields_selectBy_input': [{ type: core_2.Input, args: ['fields.selectBy',] },],
    'fields_spriteCssClass_input': [{ type: core_2.Input, args: ['fields.spriteCssClass',] },],
    'fields_tableName_input': [{ type: core_2.Input, args: ['fields.tableName',] },],
    'fields_text_input': [{ type: core_2.Input, args: ['fields.text',] },],
    'fields_value_input': [{ type: core_2.Input, args: ['fields.value',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'value_two': [{ type: core_2.Input, args: ['value',] },],
    'value_twoChange': [{ type: core_2.Output, args: ['valueChange',] },],
    'actionBegin_output': [{ type: core_2.Output, args: ['actionBegin',] },],
    'actionSuccess_output': [{ type: core_2.Output, args: ['actionSuccess',] },],
    'actionComplete_output': [{ type: core_2.Output, args: ['actionComplete',] },],
    'actionFailure_output': [{ type: core_2.Output, args: ['actionFailure',] },],
    'actionBeforeSuccess_output': [{ type: core_2.Output, args: ['actionBeforeSuccess',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'checkChange_output': [{ type: core_2.Output, args: ['checkChange',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'focusIn_output': [{ type: core_2.Output, args: ['focusIn',] },],
    'focusOut_output': [{ type: core_2.Output, args: ['focusOut',] },],
    'itemDrag_output': [{ type: core_2.Output, args: ['itemDrag',] },],
    'itemDragStart_output': [{ type: core_2.Output, args: ['itemDragStart',] },],
    'itemDragStop_output': [{ type: core_2.Output, args: ['itemDragStop',] },],
    'itemDrop_output': [{ type: core_2.Output, args: ['itemDrop',] },],
    'select_output': [{ type: core_2.Output, args: ['select',] },],
    'unselect_output': [{ type: core_2.Output, args: ['unselect',] },],
};
exports.ListBoxComponent = ListBoxComponent;
exports.EJ_LISTBOX_COMPONENTS = [ListBoxComponent
];
//# sourceMappingURL=listbox.component.js.map
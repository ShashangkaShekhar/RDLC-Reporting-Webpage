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
require("syncfusion-javascript/Scripts/ej/web/ej.listview.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var ListViewComponent = (function (_super) {
    __extends(ListViewComponent, _super);
    function ListViewComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'ListView', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.dataSource_twoChange = new core_2.EventEmitter();
        _this.ajaxBeforeLoad_output = new core_2.EventEmitter();
        _this.ajaxComplete_output = new core_2.EventEmitter();
        _this.ajaxError_output = new core_2.EventEmitter();
        _this.ajaxSuccess_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.loadComplete_output = new core_2.EventEmitter();
        _this.mouseDown_output = new core_2.EventEmitter();
        _this.mouseUp_output = new core_2.EventEmitter();
        return _this;
    }
    return ListViewComponent;
}(core_1.EJComponents));
ListViewComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-listview',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
ListViewComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ListViewComponent.propDecorators = {
    'ajaxSettings_input': [{ type: core_2.Input, args: ['ajaxSettings',] },],
    'checkedIndices_input': [{ type: core_2.Input, args: ['checkedIndices',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enableAjax_input': [{ type: core_2.Input, args: ['enableAjax',] },],
    'enableCache_input': [{ type: core_2.Input, args: ['enableCache',] },],
    'enableCheckMark_input': [{ type: core_2.Input, args: ['enableCheckMark',] },],
    'enableFiltering_input': [{ type: core_2.Input, args: ['enableFiltering',] },],
    'enableGroupList_input': [{ type: core_2.Input, args: ['enableGroupList',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'fieldSettings_input': [{ type: core_2.Input, args: ['fieldSettings',] },],
    'items_input': [{ type: core_2.Input, args: ['items',] },],
    'headerBackButtonText_input': [{ type: core_2.Input, args: ['headerBackButtonText',] },],
    'headerTitle_input': [{ type: core_2.Input, args: ['headerTitle',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'persistSelection_input': [{ type: core_2.Input, args: ['persistSelection',] },],
    'preventSelection_input': [{ type: core_2.Input, args: ['preventSelection',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'renderTemplate_input': [{ type: core_2.Input, args: ['renderTemplate',] },],
    'selectedItemIndex_input': [{ type: core_2.Input, args: ['selectedItemIndex',] },],
    'showHeader_input': [{ type: core_2.Input, args: ['showHeader',] },],
    'showHeaderBackButton_input': [{ type: core_2.Input, args: ['showHeaderBackButton',] },],
    'templateId_input': [{ type: core_2.Input, args: ['templateId',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'itemRequestCount_input': [{ type: core_2.Input, args: ['itemRequestCount',] },],
    'totalItemsCount_input': [{ type: core_2.Input, args: ['totalItemsCount',] },],
    'allowVirtualScrolling_input': [{ type: core_2.Input, args: ['allowVirtualScrolling',] },],
    'virtualScrollMode_input': [{ type: core_2.Input, args: ['virtualScrollMode',] },],
    'ajaxSettings_async_input': [{ type: core_2.Input, args: ['ajaxSettings.async',] },],
    'ajaxSettings_cache_input': [{ type: core_2.Input, args: ['ajaxSettings.cache',] },],
    'ajaxSettings_contentType_input': [{ type: core_2.Input, args: ['ajaxSettings.contentType',] },],
    'ajaxSettings_data_input': [{ type: core_2.Input, args: ['ajaxSettings.data',] },],
    'ajaxSettings_dataType_input': [{ type: core_2.Input, args: ['ajaxSettings.dataType',] },],
    'ajaxSettings_type_input': [{ type: core_2.Input, args: ['ajaxSettings.type',] },],
    'fieldSettings_checked_input': [{ type: core_2.Input, args: ['fieldSettings.checked',] },],
    'fieldSettings_navigateUrl_input': [{ type: core_2.Input, args: ['fieldSettings.navigateUrl',] },],
    'fieldSettings_attributes_input': [{ type: core_2.Input, args: ['fieldSettings.attributes',] },],
    'fieldSettings_id_input': [{ type: core_2.Input, args: ['fieldSettings.id',] },],
    'fieldSettings_imageUrl_input': [{ type: core_2.Input, args: ['fieldSettings.imageUrl',] },],
    'fieldSettings_imageClass_input': [{ type: core_2.Input, args: ['fieldSettings.imageClass',] },],
    'fieldSettings_preventSelection_input': [{ type: core_2.Input, args: ['fieldSettings.preventSelection',] },],
    'fieldSettings_persistSelection_input': [{ type: core_2.Input, args: ['fieldSettings.persistSelection',] },],
    'fieldSettings_primaryKey_input': [{ type: core_2.Input, args: ['fieldSettings.primaryKey',] },],
    'fieldSettings_parentPrimaryKey_input': [{ type: core_2.Input, args: ['fieldSettings.parentPrimaryKey',] },],
    'fieldSettings_text_input': [{ type: core_2.Input, args: ['fieldSettings.text',] },],
    'fieldSettings_mouseUP_input': [{ type: core_2.Input, args: ['fieldSettings.mouseUP',] },],
    'fieldSettings_mouseDown_input': [{ type: core_2.Input, args: ['fieldSettings.mouseDown',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'dataSource_two': [{ type: core_2.Input, args: ['dataSource',] },],
    'dataSource_twoChange': [{ type: core_2.Output, args: ['dataSourceChange',] },],
    'ajaxBeforeLoad_output': [{ type: core_2.Output, args: ['ajaxBeforeLoad',] },],
    'ajaxComplete_output': [{ type: core_2.Output, args: ['ajaxComplete',] },],
    'ajaxError_output': [{ type: core_2.Output, args: ['ajaxError',] },],
    'ajaxSuccess_output': [{ type: core_2.Output, args: ['ajaxSuccess',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'loadComplete_output': [{ type: core_2.Output, args: ['loadComplete',] },],
    'mouseDown_output': [{ type: core_2.Output, args: ['mouseDown',] },],
    'mouseUp_output': [{ type: core_2.Output, args: ['mouseUp',] },],
};
exports.ListViewComponent = ListViewComponent;
exports.EJ_LISTVIEW_COMPONENTS = [ListViewComponent
];
//# sourceMappingURL=listview.component.js.map
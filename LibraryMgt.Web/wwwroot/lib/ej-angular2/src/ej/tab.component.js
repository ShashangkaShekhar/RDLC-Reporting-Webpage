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
require("syncfusion-javascript/Scripts/ej/web/ej.tab.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var TabComponent = (function (_super) {
    __extends(TabComponent, _super);
    function TabComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Tab', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.selectedItemIndex_twoChange = new core_2.EventEmitter();
        _this.itemActive_output = new core_2.EventEmitter();
        _this.ajaxBeforeLoad_output = new core_2.EventEmitter();
        _this.ajaxError_output = new core_2.EventEmitter();
        _this.ajaxLoad_output = new core_2.EventEmitter();
        _this.ajaxSuccess_output = new core_2.EventEmitter();
        _this.beforeActive_output = new core_2.EventEmitter();
        _this.beforeItemRemove_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.itemAdd_output = new core_2.EventEmitter();
        _this.itemRemove_output = new core_2.EventEmitter();
        return _this;
    }
    return TabComponent;
}(core_1.EJComponents));
TabComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-tab',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
TabComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
TabComponent.propDecorators = {
    'ajaxSettings_input': [{ type: core_2.Input, args: ['ajaxSettings',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'collapsible_input': [{ type: core_2.Input, args: ['collapsible',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'disabledItemIndex_input': [{ type: core_2.Input, args: ['disabledItemIndex',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enabledItemIndex_input': [{ type: core_2.Input, args: ['enabledItemIndex',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableTabScroll_input': [{ type: core_2.Input, args: ['enableTabScroll',] },],
    'events_input': [{ type: core_2.Input, args: ['events',] },],
    'headerPosition_input': [{ type: core_2.Input, args: ['headerPosition',] },],
    'headerSize_input': [{ type: core_2.Input, args: ['headerSize',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'heightAdjustMode_input': [{ type: core_2.Input, args: ['heightAdjustMode',] },],
    'hiddenItemIndex_input': [{ type: core_2.Input, args: ['hiddenItemIndex',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'idPrefix_input': [{ type: core_2.Input, args: ['idPrefix',] },],
    'showCloseButton_input': [{ type: core_2.Input, args: ['showCloseButton',] },],
    'showReloadIcon_input': [{ type: core_2.Input, args: ['showReloadIcon',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'ajaxSettings_async_input': [{ type: core_2.Input, args: ['ajaxSettings.async',] },],
    'ajaxSettings_cache_input': [{ type: core_2.Input, args: ['ajaxSettings.cache',] },],
    'ajaxSettings_contentType_input': [{ type: core_2.Input, args: ['ajaxSettings.contentType',] },],
    'ajaxSettings_data_input': [{ type: core_2.Input, args: ['ajaxSettings.data',] },],
    'ajaxSettings_dataType_input': [{ type: core_2.Input, args: ['ajaxSettings.dataType',] },],
    'ajaxSettings_type_input': [{ type: core_2.Input, args: ['ajaxSettings.type',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'selectedItemIndex_two': [{ type: core_2.Input, args: ['selectedItemIndex',] },],
    'selectedItemIndex_twoChange': [{ type: core_2.Output, args: ['selectedItemIndexChange',] },],
    'itemActive_output': [{ type: core_2.Output, args: ['itemActive',] },],
    'ajaxBeforeLoad_output': [{ type: core_2.Output, args: ['ajaxBeforeLoad',] },],
    'ajaxError_output': [{ type: core_2.Output, args: ['ajaxError',] },],
    'ajaxLoad_output': [{ type: core_2.Output, args: ['ajaxLoad',] },],
    'ajaxSuccess_output': [{ type: core_2.Output, args: ['ajaxSuccess',] },],
    'beforeActive_output': [{ type: core_2.Output, args: ['beforeActive',] },],
    'beforeItemRemove_output': [{ type: core_2.Output, args: ['beforeItemRemove',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'itemAdd_output': [{ type: core_2.Output, args: ['itemAdd',] },],
    'itemRemove_output': [{ type: core_2.Output, args: ['itemRemove',] },],
};
exports.TabComponent = TabComponent;
exports.EJ_TAB_COMPONENTS = [TabComponent
];
//# sourceMappingURL=tab.component.js.map
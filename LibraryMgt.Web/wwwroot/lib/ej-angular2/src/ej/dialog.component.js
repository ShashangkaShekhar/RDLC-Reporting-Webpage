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
require("syncfusion-javascript/Scripts/ej/web/ej.dialog.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var DialogComponent = (function (_super) {
    __extends(DialogComponent, _super);
    function DialogComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Dialog', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeOpen_output = new core_2.EventEmitter();
        _this.ajaxError_output = new core_2.EventEmitter();
        _this.ajaxSuccess_output = new core_2.EventEmitter();
        _this.beforeClose_output = new core_2.EventEmitter();
        _this.close_output = new core_2.EventEmitter();
        _this.contentLoad_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.drag_output = new core_2.EventEmitter();
        _this.dragStart_output = new core_2.EventEmitter();
        _this.dragStop_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.resize_output = new core_2.EventEmitter();
        _this.resizeStart_output = new core_2.EventEmitter();
        _this.resizeStop_output = new core_2.EventEmitter();
        _this.expand_output = new core_2.EventEmitter();
        _this.collapse_output = new core_2.EventEmitter();
        _this.actionButtonClick_output = new core_2.EventEmitter();
        return _this;
    }
    return DialogComponent;
}(core_1.EJComponents));
DialogComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-dialog',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
DialogComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
DialogComponent.propDecorators = {
    'actionButtons_input': [{ type: core_2.Input, args: ['actionButtons',] },],
    'ajaxSettings_input': [{ type: core_2.Input, args: ['ajaxSettings',] },],
    'allowDraggable_input': [{ type: core_2.Input, args: ['allowDraggable',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'animation_input': [{ type: core_2.Input, args: ['animation',] },],
    'backgroundScroll_input': [{ type: core_2.Input, args: ['backgroundScroll',] },],
    'closeOnEscape_input': [{ type: core_2.Input, args: ['closeOnEscape',] },],
    'containment_input': [{ type: core_2.Input, args: ['containment',] },],
    'contentType_input': [{ type: core_2.Input, args: ['contentType',] },],
    'contentUrl_input': [{ type: core_2.Input, args: ['contentUrl',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableModal_input': [{ type: core_2.Input, args: ['enableModal',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableResize_input': [{ type: core_2.Input, args: ['enableResize',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'faviconCSS_input': [{ type: core_2.Input, args: ['faviconCSS',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maxHeight_input': [{ type: core_2.Input, args: ['maxHeight',] },],
    'maxWidth_input': [{ type: core_2.Input, args: ['maxWidth',] },],
    'minHeight_input': [{ type: core_2.Input, args: ['minHeight',] },],
    'minWidth_input': [{ type: core_2.Input, args: ['minWidth',] },],
    'position_input': [{ type: core_2.Input, args: ['position',] },],
    'showHeader_input': [{ type: core_2.Input, args: ['showHeader',] },],
    'showOnInit_input': [{ type: core_2.Input, args: ['showOnInit',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'target_input': [{ type: core_2.Input, args: ['target',] },],
    'title_input': [{ type: core_2.Input, args: ['title',] },],
    'tooltip_input': [{ type: core_2.Input, args: ['tooltip',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'zIndex_input': [{ type: core_2.Input, args: ['zIndex',] },],
    'showFooter_input': [{ type: core_2.Input, args: ['showFooter',] },],
    'footerTemplateId_input': [{ type: core_2.Input, args: ['footerTemplateId',] },],
    'ajaxSettings_async_input': [{ type: core_2.Input, args: ['ajaxSettings.async',] },],
    'ajaxSettings_cache_input': [{ type: core_2.Input, args: ['ajaxSettings.cache',] },],
    'ajaxSettings_contentType_input': [{ type: core_2.Input, args: ['ajaxSettings.contentType',] },],
    'ajaxSettings_data_input': [{ type: core_2.Input, args: ['ajaxSettings.data',] },],
    'ajaxSettings_dataType_input': [{ type: core_2.Input, args: ['ajaxSettings.dataType',] },],
    'ajaxSettings_type_input': [{ type: core_2.Input, args: ['ajaxSettings.type',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeOpen_output': [{ type: core_2.Output, args: ['beforeOpen',] },],
    'ajaxError_output': [{ type: core_2.Output, args: ['ajaxError',] },],
    'ajaxSuccess_output': [{ type: core_2.Output, args: ['ajaxSuccess',] },],
    'beforeClose_output': [{ type: core_2.Output, args: ['beforeClose',] },],
    'close_output': [{ type: core_2.Output, args: ['close',] },],
    'contentLoad_output': [{ type: core_2.Output, args: ['contentLoad',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'drag_output': [{ type: core_2.Output, args: ['drag',] },],
    'dragStart_output': [{ type: core_2.Output, args: ['dragStart',] },],
    'dragStop_output': [{ type: core_2.Output, args: ['dragStop',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
    'resize_output': [{ type: core_2.Output, args: ['resize',] },],
    'resizeStart_output': [{ type: core_2.Output, args: ['resizeStart',] },],
    'resizeStop_output': [{ type: core_2.Output, args: ['resizeStop',] },],
    'expand_output': [{ type: core_2.Output, args: ['expand',] },],
    'collapse_output': [{ type: core_2.Output, args: ['collapse',] },],
    'actionButtonClick_output': [{ type: core_2.Output, args: ['actionButtonClick',] },],
};
exports.DialogComponent = DialogComponent;
exports.EJ_DIALOG_COMPONENTS = [DialogComponent
];
//# sourceMappingURL=dialog.component.js.map
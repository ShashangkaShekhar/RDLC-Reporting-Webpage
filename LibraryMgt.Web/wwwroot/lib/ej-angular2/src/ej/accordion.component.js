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
require("syncfusion-javascript/Scripts/ej/web/ej.accordion.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var AccordionComponent = (function (_super) {
    __extends(AccordionComponent, _super);
    function AccordionComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Accordion', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.activate_output = new core_2.EventEmitter();
        _this.ajaxBeforeLoad_output = new core_2.EventEmitter();
        _this.ajaxError_output = new core_2.EventEmitter();
        _this.ajaxLoad_output = new core_2.EventEmitter();
        _this.ajaxSuccess_output = new core_2.EventEmitter();
        _this.beforeActivate_output = new core_2.EventEmitter();
        _this.beforeInactivate_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.inActivate_output = new core_2.EventEmitter();
        return _this;
    }
    return AccordionComponent;
}(core_1.EJComponents));
AccordionComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-accordion',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
AccordionComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
AccordionComponent.propDecorators = {
    'ajaxSettings_input': [{ type: core_2.Input, args: ['ajaxSettings',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'collapseSpeed_input': [{ type: core_2.Input, args: ['collapseSpeed',] },],
    'collapsible_input': [{ type: core_2.Input, args: ['collapsible',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'customIcon_input': [{ type: core_2.Input, args: ['customIcon',] },],
    'disabledItems_input': [{ type: core_2.Input, args: ['disabledItems',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enabledItems_input': [{ type: core_2.Input, args: ['enabledItems',] },],
    'enableMultipleOpen_input': [{ type: core_2.Input, args: ['enableMultipleOpen',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'events_input': [{ type: core_2.Input, args: ['events',] },],
    'expandSpeed_input': [{ type: core_2.Input, args: ['expandSpeed',] },],
    'headerSize_input': [{ type: core_2.Input, args: ['headerSize',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'heightAdjustMode_input': [{ type: core_2.Input, args: ['heightAdjustMode',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'selectedItemIndex_input': [{ type: core_2.Input, args: ['selectedItemIndex',] },],
    'selectedItems_input': [{ type: core_2.Input, args: ['selectedItems',] },],
    'showCloseButton_input': [{ type: core_2.Input, args: ['showCloseButton',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'ajaxSettings_async_input': [{ type: core_2.Input, args: ['ajaxSettings.async',] },],
    'ajaxSettings_cache_input': [{ type: core_2.Input, args: ['ajaxSettings.cache',] },],
    'ajaxSettings_contentType_input': [{ type: core_2.Input, args: ['ajaxSettings.contentType',] },],
    'ajaxSettings_data_input': [{ type: core_2.Input, args: ['ajaxSettings.data',] },],
    'ajaxSettings_dataType_input': [{ type: core_2.Input, args: ['ajaxSettings.dataType',] },],
    'ajaxSettings_type_input': [{ type: core_2.Input, args: ['ajaxSettings.type',] },],
    'customIcon_header_input': [{ type: core_2.Input, args: ['customIcon.header',] },],
    'customIcon_selectedHeader_input': [{ type: core_2.Input, args: ['customIcon.selectedHeader',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'activate_output': [{ type: core_2.Output, args: ['activate',] },],
    'ajaxBeforeLoad_output': [{ type: core_2.Output, args: ['ajaxBeforeLoad',] },],
    'ajaxError_output': [{ type: core_2.Output, args: ['ajaxError',] },],
    'ajaxLoad_output': [{ type: core_2.Output, args: ['ajaxLoad',] },],
    'ajaxSuccess_output': [{ type: core_2.Output, args: ['ajaxSuccess',] },],
    'beforeActivate_output': [{ type: core_2.Output, args: ['beforeActivate',] },],
    'beforeInactivate_output': [{ type: core_2.Output, args: ['beforeInactivate',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'inActivate_output': [{ type: core_2.Output, args: ['inActivate',] },],
};
exports.AccordionComponent = AccordionComponent;
exports.EJ_ACCORDION_COMPONENTS = [AccordionComponent
];
//# sourceMappingURL=accordion.component.js.map
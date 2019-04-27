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
require("syncfusion-javascript/Scripts/ej/web/ej.toolbar.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var ToolbarComponent = (function (_super) {
    __extends(ToolbarComponent, _super);
    function ToolbarComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Toolbar', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.click_output = new core_2.EventEmitter();
        _this.ejclick_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.focusOut_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.itemHover_output = new core_2.EventEmitter();
        _this.itemLeave_output = new core_2.EventEmitter();
        _this.overflowOpen_output = new core_2.EventEmitter();
        _this.overflowClose_output = new core_2.EventEmitter();
        return _this;
    }
    return ToolbarComponent;
}(core_1.EJComponents));
ToolbarComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-toolbar',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
ToolbarComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ToolbarComponent.propDecorators = {
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'disabledItemIndices_input': [{ type: core_2.Input, args: ['disabledItemIndices',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enabledItemIndices_input': [{ type: core_2.Input, args: ['enabledItemIndices',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableSeparator_input': [{ type: core_2.Input, args: ['enableSeparator',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'hide_input': [{ type: core_2.Input, args: ['hide',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'Items_input': [{ type: core_2.Input, args: ['Items',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'responsiveType_input': [{ type: core_2.Input, args: ['responsiveType',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'fields_group_input': [{ type: core_2.Input, args: ['fields.group',] },],
    'fields_htmlAttributes_input': [{ type: core_2.Input, args: ['fields.htmlAttributes',] },],
    'fields_id_input': [{ type: core_2.Input, args: ['fields.id',] },],
    'fields_imageAttributes_input': [{ type: core_2.Input, args: ['fields.imageAttributes',] },],
    'fields_imageUrl_input': [{ type: core_2.Input, args: ['fields.imageUrl',] },],
    'fields_spriteCssClass_input': [{ type: core_2.Input, args: ['fields.spriteCssClass',] },],
    'fields_text_input': [{ type: core_2.Input, args: ['fields.text',] },],
    'fields_tooltipText_input': [{ type: core_2.Input, args: ['fields.tooltipText',] },],
    'fields_template_input': [{ type: core_2.Input, args: ['fields.template',] },],
    'Items_group_input': [{ type: core_2.Input, args: ['Items.group',] },],
    'Items_htmlAttributes_input': [{ type: core_2.Input, args: ['Items.htmlAttributes',] },],
    'Items_id_input': [{ type: core_2.Input, args: ['Items.id',] },],
    'Items_imageAttributes_input': [{ type: core_2.Input, args: ['Items.imageAttributes',] },],
    'Items_imageUrl_input': [{ type: core_2.Input, args: ['Items.imageUrl',] },],
    'Items_spriteCssClass_input': [{ type: core_2.Input, args: ['Items.spriteCssClass',] },],
    'Items_text_input': [{ type: core_2.Input, args: ['Items.text',] },],
    'Items_tooltipText_input': [{ type: core_2.Input, args: ['Items.tooltipText',] },],
    'Items_template_input': [{ type: core_2.Input, args: ['Items.template',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'click_output': [{ type: core_2.Output, args: ['click',] },],
    'ejclick_output': [{ type: core_2.Output, args: ['ejclick',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'focusOut_output': [{ type: core_2.Output, args: ['focusOut',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'itemHover_output': [{ type: core_2.Output, args: ['itemHover',] },],
    'itemLeave_output': [{ type: core_2.Output, args: ['itemLeave',] },],
    'overflowOpen_output': [{ type: core_2.Output, args: ['overflowOpen',] },],
    'overflowClose_output': [{ type: core_2.Output, args: ['overflowClose',] },],
};
exports.ToolbarComponent = ToolbarComponent;
exports.EJ_TOOLBAR_COMPONENTS = [ToolbarComponent
];
//# sourceMappingURL=toolbar.component.js.map
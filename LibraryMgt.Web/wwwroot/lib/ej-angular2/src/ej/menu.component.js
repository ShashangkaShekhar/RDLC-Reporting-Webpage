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
require("syncfusion-javascript/Scripts/ej/web/ej.menu.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var MenuComponent = (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Menu', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeOpen_output = new core_2.EventEmitter();
        _this.click_output = new core_2.EventEmitter();
        _this.ejclick_output = new core_2.EventEmitter();
        _this.close_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.keydown_output = new core_2.EventEmitter();
        _this.mouseout_output = new core_2.EventEmitter();
        _this.mouseover_output = new core_2.EventEmitter();
        _this.overflowOpen_output = new core_2.EventEmitter();
        _this.overflowClose_output = new core_2.EventEmitter();
        return _this;
    }
    return MenuComponent;
}(core_1.EJComponents));
MenuComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-menu',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
MenuComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
MenuComponent.propDecorators = {
    'animationType_input': [{ type: core_2.Input, args: ['animationType',] },],
    'contextMenuTarget_input': [{ type: core_2.Input, args: ['contextMenuTarget',] },],
    'container_input': [{ type: core_2.Input, args: ['container',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enableCenterAlign_input': [{ type: core_2.Input, args: ['enableCenterAlign',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableSeparator_input': [{ type: core_2.Input, args: ['enableSeparator',] },],
    'excludeTarget_input': [{ type: core_2.Input, args: ['excludeTarget',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'menuType_input': [{ type: core_2.Input, args: ['menuType',] },],
    'openOnClick_input': [{ type: core_2.Input, args: ['openOnClick',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'showRootLevelArrows_input': [{ type: core_2.Input, args: ['showRootLevelArrows',] },],
    'showSubLevelArrows_input': [{ type: core_2.Input, args: ['showSubLevelArrows',] },],
    'subMenuDirection_input': [{ type: core_2.Input, args: ['subMenuDirection',] },],
    'titleText_input': [{ type: core_2.Input, args: ['titleText',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'overflowHeight_input': [{ type: core_2.Input, args: ['overflowHeight',] },],
    'overflowWidth_input': [{ type: core_2.Input, args: ['overflowWidth',] },],
    'fields_child_input': [{ type: core_2.Input, args: ['fields.child',] },],
    'fields_dataSource_input': [{ type: core_2.Input, args: ['fields.dataSource',] },],
    'fields_htmlAttribute_input': [{ type: core_2.Input, args: ['fields.htmlAttribute',] },],
    'fields_id_input': [{ type: core_2.Input, args: ['fields.id',] },],
    'fields_imageAttribute_input': [{ type: core_2.Input, args: ['fields.imageAttribute',] },],
    'fields_imageUrl_input': [{ type: core_2.Input, args: ['fields.imageUrl',] },],
    'fields_linkAttribute_input': [{ type: core_2.Input, args: ['fields.linkAttribute',] },],
    'fields_parentId_input': [{ type: core_2.Input, args: ['fields.parentId',] },],
    'fields_query_input': [{ type: core_2.Input, args: ['fields.query',] },],
    'fields_spriteCssClass_input': [{ type: core_2.Input, args: ['fields.spriteCssClass',] },],
    'fields_tableName_input': [{ type: core_2.Input, args: ['fields.tableName',] },],
    'fields_text_input': [{ type: core_2.Input, args: ['fields.text',] },],
    'fields_url_input': [{ type: core_2.Input, args: ['fields.url',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeOpen_output': [{ type: core_2.Output, args: ['beforeOpen',] },],
    'click_output': [{ type: core_2.Output, args: ['click',] },],
    'ejclick_output': [{ type: core_2.Output, args: ['ejclick',] },],
    'close_output': [{ type: core_2.Output, args: ['close',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'keydown_output': [{ type: core_2.Output, args: ['keydown',] },],
    'mouseout_output': [{ type: core_2.Output, args: ['mouseout',] },],
    'mouseover_output': [{ type: core_2.Output, args: ['mouseover',] },],
    'overflowOpen_output': [{ type: core_2.Output, args: ['overflowOpen',] },],
    'overflowClose_output': [{ type: core_2.Output, args: ['overflowClose',] },],
};
exports.MenuComponent = MenuComponent;
exports.EJ_MENU_COMPONENTS = [MenuComponent
];
//# sourceMappingURL=menu.component.js.map
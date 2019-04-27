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
require("syncfusion-javascript/Scripts/ej/web/ej.radialmenu.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var RadialMenuItemDirective = (function (_super) {
    __extends(RadialMenuItemDirective, _super);
    function RadialMenuItemDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return RadialMenuItemDirective;
}(core_1.ComplexTagElement));
RadialMenuItemDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-items>e-item',
            },] },
];
/** @nocollapse */
RadialMenuItemDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RadialMenuComponent; }),] },] },
]; };
RadialMenuItemDirective.propDecorators = {
    'imageUrl': [{ type: core_2.Input, args: ['imageUrl',] },],
    'prependTo': [{ type: core_2.Input, args: ['prependTo',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'enabled': [{ type: core_2.Input, args: ['enabled',] },],
    'click': [{ type: core_2.Input, args: ['click',] },],
    'badge': [{ type: core_2.Input, args: ['badge',] },],
    'badge_enabled': [{ type: core_2.Input, args: ['badge.enabled',] },],
    'badge_value': [{ type: core_2.Input, args: ['badge.value',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'sliderSettings': [{ type: core_2.Input, args: ['sliderSettings',] },],
    'sliderSettings_ticks': [{ type: core_2.Input, args: ['sliderSettings.ticks',] },],
    'sliderSettings_strokeWidth': [{ type: core_2.Input, args: ['sliderSettings.strokeWidth',] },],
    'sliderSettings_labelSpace': [{ type: core_2.Input, args: ['sliderSettings.labelSpace',] },],
    'items': [{ type: core_2.Input, args: ['items',] },],
};
exports.RadialMenuItemDirective = RadialMenuItemDirective;
var RadialMenuItemsDirective = (function (_super) {
    __extends(RadialMenuItemsDirective, _super);
    function RadialMenuItemsDirective(widget) {
        return _super.call(this, 'items') || this;
    }
    return RadialMenuItemsDirective;
}(core_1.ArrayTagElement));
RadialMenuItemsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-radialmenu>e-items',
                queries: {
                    children: new core_2.ContentChildren(RadialMenuItemDirective)
                }
            },] },
];
/** @nocollapse */
RadialMenuItemsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RadialMenuComponent; }),] },] },
]; };
exports.RadialMenuItemsDirective = RadialMenuItemsDirective;
var RadialMenuComponent = (function (_super) {
    __extends(RadialMenuComponent, _super);
    function RadialMenuComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'RadialMenu', el, cdRef, ['items'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.click_output = new core_2.EventEmitter();
        _this.ejclick_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.close_output = new core_2.EventEmitter();
        return _this;
    }
    return RadialMenuComponent;
}(core_1.EJComponents));
RadialMenuComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-radialmenu',
                template: ''
            },] },
];
/** @nocollapse */
RadialMenuComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
RadialMenuComponent.propDecorators = {
    'autoOpen_input': [{ type: core_2.Input, args: ['autoOpen',] },],
    'backImageClass_input': [{ type: core_2.Input, args: ['backImageClass',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'imageClass_input': [{ type: core_2.Input, args: ['imageClass',] },],
    'radius_input': [{ type: core_2.Input, args: ['radius',] },],
    'targetElementId_input': [{ type: core_2.Input, args: ['targetElementId',] },],
    'position_input': [{ type: core_2.Input, args: ['position',] },],
    'items_input': [{ type: core_2.Input, args: ['items',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'click_output': [{ type: core_2.Output, args: ['click',] },],
    'ejclick_output': [{ type: core_2.Output, args: ['ejclick',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
    'close_output': [{ type: core_2.Output, args: ['close',] },],
    'tag_items': [{ type: core_2.ContentChild, args: [RadialMenuItemsDirective,] },],
};
exports.RadialMenuComponent = RadialMenuComponent;
exports.EJ_RADIALMENU_COMPONENTS = [RadialMenuComponent,
    RadialMenuItemsDirective, RadialMenuItemDirective];
//# sourceMappingURL=radialmenu.component.js.map
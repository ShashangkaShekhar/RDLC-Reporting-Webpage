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
require("syncfusion-javascript/Scripts/ej/web/ej.togglebutton.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var ToggleButtonComponent = (function (_super) {
    __extends(ToggleButtonComponent, _super);
    function ToggleButtonComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'ToggleButton', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.click_output = new core_2.EventEmitter();
        _this.ejclick_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        return _this;
    }
    return ToggleButtonComponent;
}(core_1.EJComponents));
ToggleButtonComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-togglebutton',
                template: ''
            },] },
];
/** @nocollapse */
ToggleButtonComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ToggleButtonComponent.propDecorators = {
    'activePrefixIcon_input': [{ type: core_2.Input, args: ['activePrefixIcon',] },],
    'activeSuffixIcon_input': [{ type: core_2.Input, args: ['activeSuffixIcon',] },],
    'activeText_input': [{ type: core_2.Input, args: ['activeText',] },],
    'contentType_input': [{ type: core_2.Input, args: ['contentType',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'defaultPrefixIcon_input': [{ type: core_2.Input, args: ['defaultPrefixIcon',] },],
    'defaultSuffixIcon_input': [{ type: core_2.Input, args: ['defaultSuffixIcon',] },],
    'defaultText_input': [{ type: core_2.Input, args: ['defaultText',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'imagePosition_input': [{ type: core_2.Input, args: ['imagePosition',] },],
    'preventToggle_input': [{ type: core_2.Input, args: ['preventToggle',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'size_input': [{ type: core_2.Input, args: ['size',] },],
    'toggleState_input': [{ type: core_2.Input, args: ['toggleState',] },],
    'type_input': [{ type: core_2.Input, args: ['type',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'click_output': [{ type: core_2.Output, args: ['click',] },],
    'ejclick_output': [{ type: core_2.Output, args: ['ejclick',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
};
exports.ToggleButtonComponent = ToggleButtonComponent;
exports.EJ_TOGGLEBUTTON_COMPONENTS = [ToggleButtonComponent
];
//# sourceMappingURL=togglebutton.component.js.map
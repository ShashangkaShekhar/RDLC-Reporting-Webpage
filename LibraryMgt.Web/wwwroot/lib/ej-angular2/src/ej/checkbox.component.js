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
require("syncfusion-javascript/Scripts/ej/web/ej.checkbox.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var CheckBoxComponent = (function (_super) {
    __extends(CheckBoxComponent, _super);
    function CheckBoxComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'CheckBox', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.checked_twoChange = new core_2.EventEmitter();
        _this.checkState_twoChange = new core_2.EventEmitter();
        _this.beforeChange_output = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        return _this;
    }
    return CheckBoxComponent;
}(core_1.EJComponents));
CheckBoxComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-checkbox',
                template: ''
            },] },
];
/** @nocollapse */
CheckBoxComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
CheckBoxComponent.propDecorators = {
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableTriState_input': [{ type: core_2.Input, args: ['enableTriState',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'id_input': [{ type: core_2.Input, args: ['id',] },],
    'idPrefix_input': [{ type: core_2.Input, args: ['idPrefix',] },],
    'name_input': [{ type: core_2.Input, args: ['name',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'size_input': [{ type: core_2.Input, args: ['size',] },],
    'text_input': [{ type: core_2.Input, args: ['text',] },],
    'validationMessage_input': [{ type: core_2.Input, args: ['validationMessage',] },],
    'validationRules_input': [{ type: core_2.Input, args: ['validationRules',] },],
    'value_input': [{ type: core_2.Input, args: ['value',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'checked_two': [{ type: core_2.Input, args: ['checked',] },],
    'checked_twoChange': [{ type: core_2.Output, args: ['checkedChange',] },],
    'checkState_two': [{ type: core_2.Input, args: ['checkState',] },],
    'checkState_twoChange': [{ type: core_2.Output, args: ['checkStateChange',] },],
    'beforeChange_output': [{ type: core_2.Output, args: ['beforeChange',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
};
exports.CheckBoxComponent = CheckBoxComponent;
exports.EJ_CHECKBOX_COMPONENTS = [CheckBoxComponent
];
//# sourceMappingURL=checkbox.component.js.map
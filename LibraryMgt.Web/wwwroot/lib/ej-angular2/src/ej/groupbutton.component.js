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
require("syncfusion-javascript/Scripts/ej/web/ej.groupbutton.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var GroupButtonComponent = (function (_super) {
    __extends(GroupButtonComponent, _super);
    function GroupButtonComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'GroupButton', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeSelect_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.keyPress_output = new core_2.EventEmitter();
        _this.select_output = new core_2.EventEmitter();
        return _this;
    }
    return GroupButtonComponent;
}(core_1.EJComponents));
GroupButtonComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-groupbutton',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
GroupButtonComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
GroupButtonComponent.propDecorators = {
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'groupButtonMode_input': [{ type: core_2.Input, args: ['groupButtonMode',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'selectedItemIndex_input': [{ type: core_2.Input, args: ['selectedItemIndex',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'size_input': [{ type: core_2.Input, args: ['size',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeSelect_output': [{ type: core_2.Output, args: ['beforeSelect',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'keyPress_output': [{ type: core_2.Output, args: ['keyPress',] },],
    'select_output': [{ type: core_2.Output, args: ['select',] },],
};
exports.GroupButtonComponent = GroupButtonComponent;
exports.EJ_GROUPBUTTON_COMPONENTS = [GroupButtonComponent
];
//# sourceMappingURL=groupbutton.component.js.map
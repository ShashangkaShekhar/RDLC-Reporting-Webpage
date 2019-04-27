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
require("syncfusion-javascript/Scripts/ej/web/ej.navigationdrawer.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var NavigationDrawerComponent = (function (_super) {
    __extends(NavigationDrawerComponent, _super);
    function NavigationDrawerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'NavigationDrawer', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.ajaxComplete_output = new core_2.EventEmitter();
        _this.ajaxError_output = new core_2.EventEmitter();
        _this.ajaxSuccess_output = new core_2.EventEmitter();
        _this.beforeClose_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.swipe_output = new core_2.EventEmitter();
        return _this;
    }
    return NavigationDrawerComponent;
}(core_1.EJComponents));
NavigationDrawerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-navigationdrawer]',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
NavigationDrawerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
NavigationDrawerComponent.propDecorators = {
    'ajaxSettings_input': [{ type: core_2.Input, args: ['ajaxSettings',] },],
    'contentId_input': [{ type: core_2.Input, args: ['contentId',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'direction_input': [{ type: core_2.Input, args: ['direction',] },],
    'enableListView_input': [{ type: core_2.Input, args: ['enableListView',] },],
    'items_input': [{ type: core_2.Input, args: ['items',] },],
    'listViewSettings_input': [{ type: core_2.Input, args: ['listViewSettings',] },],
    'position_input': [{ type: core_2.Input, args: ['position',] },],
    'targetId_input': [{ type: core_2.Input, args: ['targetId',] },],
    'type_input': [{ type: core_2.Input, args: ['type',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'isPaneOpen_input': [{ type: core_2.Input, args: ['isPaneOpen',] },],
    'ajaxSettings_async_input': [{ type: core_2.Input, args: ['ajaxSettings.async',] },],
    'ajaxSettings_cache_input': [{ type: core_2.Input, args: ['ajaxSettings.cache',] },],
    'ajaxSettings_contentType_input': [{ type: core_2.Input, args: ['ajaxSettings.contentType',] },],
    'ajaxSettings_data_input': [{ type: core_2.Input, args: ['ajaxSettings.data',] },],
    'ajaxSettings_dataType_input': [{ type: core_2.Input, args: ['ajaxSettings.dataType',] },],
    'ajaxSettings_type_input': [{ type: core_2.Input, args: ['ajaxSettings.type',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'ajaxComplete_output': [{ type: core_2.Output, args: ['ajaxComplete',] },],
    'ajaxError_output': [{ type: core_2.Output, args: ['ajaxError',] },],
    'ajaxSuccess_output': [{ type: core_2.Output, args: ['ajaxSuccess',] },],
    'beforeClose_output': [{ type: core_2.Output, args: ['beforeClose',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
    'swipe_output': [{ type: core_2.Output, args: ['swipe',] },],
};
exports.NavigationDrawerComponent = NavigationDrawerComponent;
exports.EJ_NAVIGATIONDRAWER_COMPONENTS = [NavigationDrawerComponent
];
//# sourceMappingURL=navigationdrawer.component.js.map
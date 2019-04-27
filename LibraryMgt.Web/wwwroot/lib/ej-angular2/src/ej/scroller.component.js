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
require("syncfusion-javascript/Scripts/ej/common/ej.scroller.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var ScrollerComponent = (function (_super) {
    __extends(ScrollerComponent, _super);
    function ScrollerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Scroller', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.thumbMove_output = new core_2.EventEmitter();
        _this.thumbStart_output = new core_2.EventEmitter();
        _this.thumbEnd_output = new core_2.EventEmitter();
        _this.wheelMove_output = new core_2.EventEmitter();
        _this.wheelStart_output = new core_2.EventEmitter();
        _this.wheelStop_output = new core_2.EventEmitter();
        return _this;
    }
    return ScrollerComponent;
}(core_1.EJComponents));
ScrollerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-scroller',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
ScrollerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ScrollerComponent.propDecorators = {
    'animationSpeed_input': [{ type: core_2.Input, args: ['animationSpeed',] },],
    'autoHide_input': [{ type: core_2.Input, args: ['autoHide',] },],
    'buttonSize_input': [{ type: core_2.Input, args: ['buttonSize',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableTouchScroll_input': [{ type: core_2.Input, args: ['enableTouchScroll',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'scrollerSize_input': [{ type: core_2.Input, args: ['scrollerSize',] },],
    'scrollLeft_input': [{ type: core_2.Input, args: ['scrollLeft',] },],
    'scrollOneStepBy_input': [{ type: core_2.Input, args: ['scrollOneStepBy',] },],
    'scrollTop_input': [{ type: core_2.Input, args: ['scrollTop',] },],
    'targetPane_input': [{ type: core_2.Input, args: ['targetPane',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'thumbMove_output': [{ type: core_2.Output, args: ['thumbMove',] },],
    'thumbStart_output': [{ type: core_2.Output, args: ['thumbStart',] },],
    'thumbEnd_output': [{ type: core_2.Output, args: ['thumbEnd',] },],
    'wheelMove_output': [{ type: core_2.Output, args: ['wheelMove',] },],
    'wheelStart_output': [{ type: core_2.Output, args: ['wheelStart',] },],
    'wheelStop_output': [{ type: core_2.Output, args: ['wheelStop',] },],
};
exports.ScrollerComponent = ScrollerComponent;
exports.EJ_SCROLLER_COMPONENTS = [ScrollerComponent
];
//# sourceMappingURL=scroller.component.js.map
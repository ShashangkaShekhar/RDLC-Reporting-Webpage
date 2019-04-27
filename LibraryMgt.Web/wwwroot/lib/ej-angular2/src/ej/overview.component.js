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
require("syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var OverviewComponent = (function (_super) {
    __extends(OverviewComponent, _super);
    function OverviewComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Overview', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        return _this;
    }
    return OverviewComponent;
}(core_1.EJComponents));
OverviewComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-overview',
                template: ''
            },] },
];
/** @nocollapse */
OverviewComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
OverviewComponent.propDecorators = {
    'sourceID_input': [{ type: core_2.Input, args: ['sourceID',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
};
exports.OverviewComponent = OverviewComponent;
exports.EJ_OVERVIEW_COMPONENTS = [OverviewComponent
];
//# sourceMappingURL=overview.component.js.map
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
require("syncfusion-javascript/Scripts/ej/web/ej.pivotpager.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var PivotPagerComponent = (function (_super) {
    __extends(PivotPagerComponent, _super);
    function PivotPagerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'PivotPager', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        return _this;
    }
    return PivotPagerComponent;
}(core_1.EJComponents));
PivotPagerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-pivotpager',
                template: ''
            },] },
];
/** @nocollapse */
PivotPagerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
PivotPagerComponent.propDecorators = {
    'categoricalCurrentPage_input': [{ type: core_2.Input, args: ['categoricalCurrentPage',] },],
    'categoricalPageCount_input': [{ type: core_2.Input, args: ['categoricalPageCount',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'mode_input': [{ type: core_2.Input, args: ['mode',] },],
    'seriesCurrentPage_input': [{ type: core_2.Input, args: ['seriesCurrentPage',] },],
    'seriesPageCount_input': [{ type: core_2.Input, args: ['seriesPageCount',] },],
    'targetControlID_input': [{ type: core_2.Input, args: ['targetControlID',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
};
exports.PivotPagerComponent = PivotPagerComponent;
exports.EJ_PIVOTPAGER_COMPONENTS = [PivotPagerComponent
];
//# sourceMappingURL=pivotpager.component.js.map
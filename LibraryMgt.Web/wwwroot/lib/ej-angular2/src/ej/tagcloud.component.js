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
require("syncfusion-javascript/Scripts/ej/web/ej.tagcloud.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var TagCloudComponent = (function (_super) {
    __extends(TagCloudComponent, _super);
    function TagCloudComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'TagCloud', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.click_output = new core_2.EventEmitter();
        _this.ejclick_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.mouseout_output = new core_2.EventEmitter();
        _this.mouseover_output = new core_2.EventEmitter();
        return _this;
    }
    return TagCloudComponent;
}(core_1.EJComponents));
TagCloudComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-tagcloud',
                template: ''
            },] },
];
/** @nocollapse */
TagCloudComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
TagCloudComponent.propDecorators = {
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'format_input': [{ type: core_2.Input, args: ['format',] },],
    'maxFontSize_input': [{ type: core_2.Input, args: ['maxFontSize',] },],
    'minFontSize_input': [{ type: core_2.Input, args: ['minFontSize',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'showTitle_input': [{ type: core_2.Input, args: ['showTitle',] },],
    'titleImage_input': [{ type: core_2.Input, args: ['titleImage',] },],
    'titleText_input': [{ type: core_2.Input, args: ['titleText',] },],
    'fields_frequency_input': [{ type: core_2.Input, args: ['fields.frequency',] },],
    'fields_htmlAttributes_input': [{ type: core_2.Input, args: ['fields.htmlAttributes',] },],
    'fields_text_input': [{ type: core_2.Input, args: ['fields.text',] },],
    'fields_url_input': [{ type: core_2.Input, args: ['fields.url',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'click_output': [{ type: core_2.Output, args: ['click',] },],
    'ejclick_output': [{ type: core_2.Output, args: ['ejclick',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'mouseout_output': [{ type: core_2.Output, args: ['mouseout',] },],
    'mouseover_output': [{ type: core_2.Output, args: ['mouseover',] },],
};
exports.TagCloudComponent = TagCloudComponent;
exports.EJ_TAGCLOUD_COMPONENTS = [TagCloudComponent
];
//# sourceMappingURL=tagcloud.component.js.map
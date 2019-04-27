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
require("syncfusion-javascript/Scripts/ej/web/ej.rotator.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var RotatorComponent = (function (_super) {
    __extends(RotatorComponent, _super);
    function RotatorComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Rotator', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.pagerClick_output = new core_2.EventEmitter();
        _this.start_output = new core_2.EventEmitter();
        _this.stop_output = new core_2.EventEmitter();
        _this.thumbItemClick_output = new core_2.EventEmitter();
        return _this;
    }
    return RotatorComponent;
}(core_1.EJComponents));
RotatorComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-rotator]',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
RotatorComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
RotatorComponent.propDecorators = {
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'animationSpeed_input': [{ type: core_2.Input, args: ['animationSpeed',] },],
    'animationType_input': [{ type: core_2.Input, args: ['animationType',] },],
    'circularMode_input': [{ type: core_2.Input, args: ['circularMode',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'dataSource_input': [{ type: core_2.Input, args: ['dataSource',] },],
    'delay_input': [{ type: core_2.Input, args: ['delay',] },],
    'displayItemsCount_input': [{ type: core_2.Input, args: ['displayItemsCount',] },],
    'enableAutoPlay_input': [{ type: core_2.Input, args: ['enableAutoPlay',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'frameSpace_input': [{ type: core_2.Input, args: ['frameSpace',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'navigateSteps_input': [{ type: core_2.Input, args: ['navigateSteps',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'pagerPosition_input': [{ type: core_2.Input, args: ['pagerPosition',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'showCaption_input': [{ type: core_2.Input, args: ['showCaption',] },],
    'showNavigateButton_input': [{ type: core_2.Input, args: ['showNavigateButton',] },],
    'showPager_input': [{ type: core_2.Input, args: ['showPager',] },],
    'showPlayButton_input': [{ type: core_2.Input, args: ['showPlayButton',] },],
    'showThumbnail_input': [{ type: core_2.Input, args: ['showThumbnail',] },],
    'slideHeight_input': [{ type: core_2.Input, args: ['slideHeight',] },],
    'slideWidth_input': [{ type: core_2.Input, args: ['slideWidth',] },],
    'startIndex_input': [{ type: core_2.Input, args: ['startIndex',] },],
    'stopOnHover_input': [{ type: core_2.Input, args: ['stopOnHover',] },],
    'template_input': [{ type: core_2.Input, args: ['template',] },],
    'templateId_input': [{ type: core_2.Input, args: ['templateId',] },],
    'thumbnailSourceID_input': [{ type: core_2.Input, args: ['thumbnailSourceID',] },],
    'fields_linkAttribute_input': [{ type: core_2.Input, args: ['fields.linkAttribute',] },],
    'fields_targetAttribute_input': [{ type: core_2.Input, args: ['fields.targetAttribute',] },],
    'fields_text_input': [{ type: core_2.Input, args: ['fields.text',] },],
    'fields_thumbnailText_input': [{ type: core_2.Input, args: ['fields.thumbnailText',] },],
    'fields_thumbnailUrl_input': [{ type: core_2.Input, args: ['fields.thumbnailUrl',] },],
    'fields_url_input': [{ type: core_2.Input, args: ['fields.url',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'pagerClick_output': [{ type: core_2.Output, args: ['pagerClick',] },],
    'start_output': [{ type: core_2.Output, args: ['start',] },],
    'stop_output': [{ type: core_2.Output, args: ['stop',] },],
    'thumbItemClick_output': [{ type: core_2.Output, args: ['thumbItemClick',] },],
};
exports.RotatorComponent = RotatorComponent;
exports.EJ_ROTATOR_COMPONENTS = [RotatorComponent
];
//# sourceMappingURL=rotator.component.js.map
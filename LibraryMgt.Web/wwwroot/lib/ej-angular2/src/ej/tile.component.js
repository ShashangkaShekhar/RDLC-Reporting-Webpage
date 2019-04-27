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
require("syncfusion-javascript/Scripts/ej/web/ej.tile.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var TileComponent = (function (_super) {
    __extends(TileComponent, _super);
    function TileComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Tile', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.badge_value_twoChange = new core_2.EventEmitter();
        _this.badge_enabled_twoChange = new core_2.EventEmitter();
        _this.badge_text_twoChange = new core_2.EventEmitter();
        _this.badge_position_twoChange = new core_2.EventEmitter();
        _this.caption_text_twoChange = new core_2.EventEmitter();
        _this.mouseDown_output = new core_2.EventEmitter();
        _this.mouseUp_output = new core_2.EventEmitter();
        return _this;
    }
    return TileComponent;
}(core_1.EJComponents));
TileComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-tile',
                template: ''
            },] },
];
/** @nocollapse */
TileComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
TileComponent.propDecorators = {
    'badge_input': [{ type: core_2.Input, args: ['badge',] },],
    'caption_input': [{ type: core_2.Input, args: ['caption',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'imageClass_input': [{ type: core_2.Input, args: ['imageClass',] },],
    'imagePosition_input': [{ type: core_2.Input, args: ['imagePosition',] },],
    'imageTemplateId_input': [{ type: core_2.Input, args: ['imageTemplateId',] },],
    'imageUrl_input': [{ type: core_2.Input, args: ['imageUrl',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'liveTile_input': [{ type: core_2.Input, args: ['liveTile',] },],
    'tileSize_input': [{ type: core_2.Input, args: ['tileSize',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'allowSelection_input': [{ type: core_2.Input, args: ['allowSelection',] },],
    'backgroundColor_input': [{ type: core_2.Input, args: ['backgroundColor',] },],
    'badge_maxValue_input': [{ type: core_2.Input, args: ['badge.maxValue',] },],
    'badge_minValue_input': [{ type: core_2.Input, args: ['badge.minValue',] },],
    'caption_enabled_input': [{ type: core_2.Input, args: ['caption.enabled',] },],
    'caption_alignment_input': [{ type: core_2.Input, args: ['caption.alignment',] },],
    'caption_position_input': [{ type: core_2.Input, args: ['caption.position',] },],
    'caption_icon_input': [{ type: core_2.Input, args: ['caption.icon',] },],
    'liveTile_enabled_input': [{ type: core_2.Input, args: ['liveTile.enabled',] },],
    'liveTile_imageClass_input': [{ type: core_2.Input, args: ['liveTile.imageClass',] },],
    'liveTile_imageTemplateId_input': [{ type: core_2.Input, args: ['liveTile.imageTemplateId',] },],
    'liveTile_imageUrl_input': [{ type: core_2.Input, args: ['liveTile.imageUrl',] },],
    'liveTile_type_input': [{ type: core_2.Input, args: ['liveTile.type',] },],
    'liveTile_updateInterval_input': [{ type: core_2.Input, args: ['liveTile.updateInterval',] },],
    'liveTile_text_input': [{ type: core_2.Input, args: ['liveTile.text',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'badge_value_two': [{ type: core_2.Input, args: ['badge.value',] },],
    'badge_value_twoChange': [{ type: core_2.Output, args: ['badge.valueChange',] },],
    'badge_enabled_two': [{ type: core_2.Input, args: ['badge.enabled',] },],
    'badge_enabled_twoChange': [{ type: core_2.Output, args: ['badge.enabledChange',] },],
    'badge_text_two': [{ type: core_2.Input, args: ['badge.text',] },],
    'badge_text_twoChange': [{ type: core_2.Output, args: ['badge.textChange',] },],
    'badge_position_two': [{ type: core_2.Input, args: ['badge.position',] },],
    'badge_position_twoChange': [{ type: core_2.Output, args: ['badge.positionChange',] },],
    'caption_text_two': [{ type: core_2.Input, args: ['caption.text',] },],
    'caption_text_twoChange': [{ type: core_2.Output, args: ['caption.textChange',] },],
    'mouseDown_output': [{ type: core_2.Output, args: ['mouseDown',] },],
    'mouseUp_output': [{ type: core_2.Output, args: ['mouseUp',] },],
};
exports.TileComponent = TileComponent;
exports.EJ_TILE_COMPONENTS = [TileComponent
];
//# sourceMappingURL=tile.component.js.map
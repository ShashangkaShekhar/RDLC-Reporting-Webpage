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
require("syncfusion-javascript/Scripts/ej/web/ej.spellcheck.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var SpellCheckComponent = (function (_super) {
    __extends(SpellCheckComponent, _super);
    function SpellCheckComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'SpellCheck', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.actionSuccess_output = new core_2.EventEmitter();
        _this.actionBegin_output = new core_2.EventEmitter();
        _this.actionFailure_output = new core_2.EventEmitter();
        _this.start_output = new core_2.EventEmitter();
        _this.complete_output = new core_2.EventEmitter();
        _this.contextOpen_output = new core_2.EventEmitter();
        _this.contextClick_output = new core_2.EventEmitter();
        _this.dialogBeforeOpen_output = new core_2.EventEmitter();
        _this.dialogOpen_output = new core_2.EventEmitter();
        _this.dialogClose_output = new core_2.EventEmitter();
        _this.validating_output = new core_2.EventEmitter();
        _this.targetUpdating_output = new core_2.EventEmitter();
        return _this;
    }
    return SpellCheckComponent;
}(core_1.EJComponents));
SpellCheckComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-spellcheck',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
SpellCheckComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
SpellCheckComponent.propDecorators = {
    'dictionarySettings_input': [{ type: core_2.Input, args: ['dictionarySettings',] },],
    'misspellWordCss_input': [{ type: core_2.Input, args: ['misspellWordCss',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maxSuggestionCount_input': [{ type: core_2.Input, args: ['maxSuggestionCount',] },],
    'ignoreWords_input': [{ type: core_2.Input, args: ['ignoreWords',] },],
    'contextMenuSettings_input': [{ type: core_2.Input, args: ['contextMenuSettings',] },],
    'ignoreSettings_input': [{ type: core_2.Input, args: ['ignoreSettings',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'enableValidateOnType_input': [{ type: core_2.Input, args: ['enableValidateOnType',] },],
    'controlsToValidate_input': [{ type: core_2.Input, args: ['controlsToValidate',] },],
    'enableAsync_input': [{ type: core_2.Input, args: ['enableAsync',] },],
    'ajaxDataType_input': [{ type: core_2.Input, args: ['ajaxDataType',] },],
    'dictionarySettings_dictionaryUrl_input': [{ type: core_2.Input, args: ['dictionarySettings.dictionaryUrl',] },],
    'dictionarySettings_customDictionaryUrl_input': [{ type: core_2.Input, args: ['dictionarySettings.customDictionaryUrl',] },],
    'contextMenuSettings_enable_input': [{ type: core_2.Input, args: ['contextMenuSettings.enable',] },],
    'contextMenuSettings_menuItems_input': [{ type: core_2.Input, args: ['contextMenuSettings.menuItems',] },],
    'ignoreSettings_ignoreAlphaNumericWords_input': [{ type: core_2.Input, args: ['ignoreSettings.ignoreAlphaNumericWords',] },],
    'ignoreSettings_ignoreEmailAddress_input': [{ type: core_2.Input, args: ['ignoreSettings.ignoreEmailAddress',] },],
    'ignoreSettings_ignoreMixedCaseWords_input': [{ type: core_2.Input, args: ['ignoreSettings.ignoreMixedCaseWords',] },],
    'ignoreSettings_ignoreUpperCase_input': [{ type: core_2.Input, args: ['ignoreSettings.ignoreUpperCase',] },],
    'ignoreSettings_ignoreUrl_input': [{ type: core_2.Input, args: ['ignoreSettings.ignoreUrl',] },],
    'ignoreSettings_ignoreFileNames_input': [{ type: core_2.Input, args: ['ignoreSettings.ignoreFileNames',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'actionSuccess_output': [{ type: core_2.Output, args: ['actionSuccess',] },],
    'actionBegin_output': [{ type: core_2.Output, args: ['actionBegin',] },],
    'actionFailure_output': [{ type: core_2.Output, args: ['actionFailure',] },],
    'start_output': [{ type: core_2.Output, args: ['start',] },],
    'complete_output': [{ type: core_2.Output, args: ['complete',] },],
    'contextOpen_output': [{ type: core_2.Output, args: ['contextOpen',] },],
    'contextClick_output': [{ type: core_2.Output, args: ['contextClick',] },],
    'dialogBeforeOpen_output': [{ type: core_2.Output, args: ['dialogBeforeOpen',] },],
    'dialogOpen_output': [{ type: core_2.Output, args: ['dialogOpen',] },],
    'dialogClose_output': [{ type: core_2.Output, args: ['dialogClose',] },],
    'validating_output': [{ type: core_2.Output, args: ['validating',] },],
    'targetUpdating_output': [{ type: core_2.Output, args: ['targetUpdating',] },],
};
exports.SpellCheckComponent = SpellCheckComponent;
exports.EJ_SPELLCHECK_COMPONENTS = [SpellCheckComponent
];
//# sourceMappingURL=spellcheck.component.js.map
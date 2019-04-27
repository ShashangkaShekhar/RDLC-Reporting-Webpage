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
require("syncfusion-javascript/Scripts/ej/web/ej.rte.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () {
};
exports.RTEValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_2.forwardRef(function () { return RTEComponent; }),
    multi: true
};
var RTEComponent = (function (_super) {
    __extends(RTEComponent, _super);
    function RTEComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'RTE', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.value_twoChange = new core_2.EventEmitter();
        _this.change_output = new core_2.EventEmitter();
        _this.ejchange_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.contextMenuClick_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.execute_output = new core_2.EventEmitter();
        _this.keydown_output = new core_2.EventEmitter();
        _this.keyup_output = new core_2.EventEmitter();
        _this.preRender_output = new core_2.EventEmitter();
        _this.select_output = new core_2.EventEmitter();
        _this.onChange = noop;
        _this.onTouched = noop;
        return _this;
    }
    RTEComponent.prototype.writeValue = function (value) {
        if (this.widget) {
            this.widget.option('model.value', value);
        }
        else {
            this.model.value = value;
        }
    };
    RTEComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RTEComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return RTEComponent;
}(core_1.EJComponents));
RTEComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: '[ej-rte]',
                template: '',
                host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
                providers: [exports.RTEValueAccessor]
            },] },
];
/** @nocollapse */
RTEComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
RTEComponent.propDecorators = {
    'allowEditing_input': [{ type: core_2.Input, args: ['allowEditing',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'autoFocus_input': [{ type: core_2.Input, args: ['autoFocus',] },],
    'autoHeight_input': [{ type: core_2.Input, args: ['autoHeight',] },],
    'pasteCleanupSettings_input': [{ type: core_2.Input, args: ['pasteCleanupSettings',] },],
    'colorCode_input': [{ type: core_2.Input, args: ['colorCode',] },],
    'colorPaletteColumns_input': [{ type: core_2.Input, args: ['colorPaletteColumns',] },],
    'colorPaletteRows_input': [{ type: core_2.Input, args: ['colorPaletteRows',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableHtmlEncode_input': [{ type: core_2.Input, args: ['enableHtmlEncode',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableResize_input': [{ type: core_2.Input, args: ['enableResize',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableXHTML_input': [{ type: core_2.Input, args: ['enableXHTML',] },],
    'enableTabKeyNavigation_input': [{ type: core_2.Input, args: ['enableTabKeyNavigation',] },],
    'exportToPdfSettings_input': [{ type: core_2.Input, args: ['exportToPdfSettings',] },],
    'exportToWordSettings_input': [{ type: core_2.Input, args: ['exportToWordSettings',] },],
    'externalCSS_input': [{ type: core_2.Input, args: ['externalCSS',] },],
    'fileBrowser_input': [{ type: core_2.Input, args: ['fileBrowser',] },],
    'fontName_input': [{ type: core_2.Input, args: ['fontName',] },],
    'fontSize_input': [{ type: core_2.Input, args: ['fontSize',] },],
    'format_input': [{ type: core_2.Input, args: ['format',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'iframeAttributes_input': [{ type: core_2.Input, args: ['iframeAttributes',] },],
    'imageBrowser_input': [{ type: core_2.Input, args: ['imageBrowser',] },],
    'importSettings_input': [{ type: core_2.Input, args: ['importSettings',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maxHeight_input': [{ type: core_2.Input, args: ['maxHeight',] },],
    'maxLength_input': [{ type: core_2.Input, args: ['maxLength',] },],
    'maxWidth_input': [{ type: core_2.Input, args: ['maxWidth',] },],
    'minHeight_input': [{ type: core_2.Input, args: ['minHeight',] },],
    'minWidth_input': [{ type: core_2.Input, args: ['minWidth',] },],
    'name_input': [{ type: core_2.Input, args: ['name',] },],
    'showClearAll_input': [{ type: core_2.Input, args: ['showClearAll',] },],
    'showClearFormat_input': [{ type: core_2.Input, args: ['showClearFormat',] },],
    'showCustomTable_input': [{ type: core_2.Input, args: ['showCustomTable',] },],
    'showContextMenu_input': [{ type: core_2.Input, args: ['showContextMenu',] },],
    'showDimensions_input': [{ type: core_2.Input, args: ['showDimensions',] },],
    'showFontOption_input': [{ type: core_2.Input, args: ['showFontOption',] },],
    'showFooter_input': [{ type: core_2.Input, args: ['showFooter',] },],
    'showHtmlSource_input': [{ type: core_2.Input, args: ['showHtmlSource',] },],
    'showHtmlTagInfo_input': [{ type: core_2.Input, args: ['showHtmlTagInfo',] },],
    'showToolbar_input': [{ type: core_2.Input, args: ['showToolbar',] },],
    'showCharCount_input': [{ type: core_2.Input, args: ['showCharCount',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'showWordCount_input': [{ type: core_2.Input, args: ['showWordCount',] },],
    'tableColumns_input': [{ type: core_2.Input, args: ['tableColumns',] },],
    'tableRows_input': [{ type: core_2.Input, args: ['tableRows',] },],
    'tools_input': [{ type: core_2.Input, args: ['tools',] },],
    'toolsList_input': [{ type: core_2.Input, args: ['toolsList',] },],
    'toolbarOverflowMode_input': [{ type: core_2.Input, args: ['toolbarOverflowMode',] },],
    'tooltipSettings_input': [{ type: core_2.Input, args: ['tooltipSettings',] },],
    'undoStackLimit_input': [{ type: core_2.Input, args: ['undoStackLimit',] },],
    'validationRules_input': [{ type: core_2.Input, args: ['validationRules',] },],
    'validationMessage_input': [{ type: core_2.Input, args: ['validationMessage',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'zoomStep_input': [{ type: core_2.Input, args: ['zoomStep',] },],
    'pasteCleanupSettings_listConversion_input': [{ type: core_2.Input, args: ['pasteCleanupSettings.listConversion',] },],
    'pasteCleanupSettings_cleanCSS_input': [{ type: core_2.Input, args: ['pasteCleanupSettings.cleanCSS',] },],
    'pasteCleanupSettings_removeStyles_input': [{ type: core_2.Input, args: ['pasteCleanupSettings.removeStyles',] },],
    'pasteCleanupSettings_cleanElements_input': [{ type: core_2.Input, args: ['pasteCleanupSettings.cleanElements',] },],
    'exportToPdfSettings_url_input': [{ type: core_2.Input, args: ['exportToPdfSettings.url',] },],
    'exportToPdfSettings_fileName_input': [{ type: core_2.Input, args: ['exportToPdfSettings.fileName',] },],
    'exportToWordSettings_url_input': [{ type: core_2.Input, args: ['exportToWordSettings.url',] },],
    'exportToWordSettings_fileName_input': [{ type: core_2.Input, args: ['exportToWordSettings.fileName',] },],
    'fileBrowser_ajaxAction_input': [{ type: core_2.Input, args: ['fileBrowser.ajaxAction',] },],
    'fileBrowser_extensionAllow_input': [{ type: core_2.Input, args: ['fileBrowser.extensionAllow',] },],
    'fileBrowser_filePath_input': [{ type: core_2.Input, args: ['fileBrowser.filePath',] },],
    'imageBrowser_ajaxAction_input': [{ type: core_2.Input, args: ['imageBrowser.ajaxAction',] },],
    'imageBrowser_extensionAllow_input': [{ type: core_2.Input, args: ['imageBrowser.extensionAllow',] },],
    'imageBrowser_filePath_input': [{ type: core_2.Input, args: ['imageBrowser.filePath',] },],
    'importSettings_url_input': [{ type: core_2.Input, args: ['importSettings.url',] },],
    'tools_alignment_input': [{ type: core_2.Input, args: ['tools.alignment',] },],
    'tools_casing_input': [{ type: core_2.Input, args: ['tools.casing',] },],
    'tools_clear_input': [{ type: core_2.Input, args: ['tools.clear',] },],
    'tools_clipboard_input': [{ type: core_2.Input, args: ['tools.clipboard',] },],
    'tools_edit_input': [{ type: core_2.Input, args: ['tools.edit',] },],
    'tools_doAction_input': [{ type: core_2.Input, args: ['tools.doAction',] },],
    'tools_effects_input': [{ type: core_2.Input, args: ['tools.effects',] },],
    'tools_font_input': [{ type: core_2.Input, args: ['tools.font',] },],
    'tools_formatStyle_input': [{ type: core_2.Input, args: ['tools.formatStyle',] },],
    'tools_images_input': [{ type: core_2.Input, args: ['tools.images',] },],
    'tools_indenting_input': [{ type: core_2.Input, args: ['tools.indenting',] },],
    'tools_links_input': [{ type: core_2.Input, args: ['tools.links',] },],
    'tools_lists_input': [{ type: core_2.Input, args: ['tools.lists',] },],
    'tools_media_input': [{ type: core_2.Input, args: ['tools.media',] },],
    'tools_style_input': [{ type: core_2.Input, args: ['tools.style',] },],
    'tools_tables_input': [{ type: core_2.Input, args: ['tools.tables',] },],
    'tools_view_input': [{ type: core_2.Input, args: ['tools.view',] },],
    'tools_print_input': [{ type: core_2.Input, args: ['tools.print',] },],
    'tools_importExport_input': [{ type: core_2.Input, args: ['tools.importExport',] },],
    'tools_customOrderedList_input': [{ type: core_2.Input, args: ['tools.customOrderedList',] },],
    'tools_customUnorderedList_input': [{ type: core_2.Input, args: ['tools.customUnorderedList',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'value_two': [{ type: core_2.Input, args: ['value',] },],
    'value_twoChange': [{ type: core_2.Output, args: ['valueChange',] },],
    'change_output': [{ type: core_2.Output, args: ['change',] },],
    'ejchange_output': [{ type: core_2.Output, args: ['ejchange',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'contextMenuClick_output': [{ type: core_2.Output, args: ['contextMenuClick',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'execute_output': [{ type: core_2.Output, args: ['execute',] },],
    'keydown_output': [{ type: core_2.Output, args: ['keydown',] },],
    'keyup_output': [{ type: core_2.Output, args: ['keyup',] },],
    'preRender_output': [{ type: core_2.Output, args: ['preRender',] },],
    'select_output': [{ type: core_2.Output, args: ['select',] },],
};
exports.RTEComponent = RTEComponent;
exports.EJ_RTE_COMPONENTS = [RTEComponent
];
//# sourceMappingURL=rte.component.js.map
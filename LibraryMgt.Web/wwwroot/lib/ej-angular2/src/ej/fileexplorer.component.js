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
require("syncfusion-javascript/Scripts/ej/web/ej.fileexplorer.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var FileExplorerComponent = (function (_super) {
    __extends(FileExplorerComponent, _super);
    function FileExplorerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'FileExplorer', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeAjaxRequest_output = new core_2.EventEmitter();
        _this.beforeDownload_output = new core_2.EventEmitter();
        _this.beforeGetImage_output = new core_2.EventEmitter();
        _this.beforeOpen_output = new core_2.EventEmitter();
        _this.beforeUpload_output = new core_2.EventEmitter();
        _this.beforeUploadDialogOpen_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.copy_output = new core_2.EventEmitter();
        _this.createFolder_output = new core_2.EventEmitter();
        _this.cut_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.dragStart_output = new core_2.EventEmitter();
        _this.drag_output = new core_2.EventEmitter();
        _this.dragStop_output = new core_2.EventEmitter();
        _this.drop_output = new core_2.EventEmitter();
        _this.getImage_output = new core_2.EventEmitter();
        _this.keydown_output = new core_2.EventEmitter();
        _this.layoutChange_output = new core_2.EventEmitter();
        _this.menuBeforeOpen_output = new core_2.EventEmitter();
        _this.menuClick_output = new core_2.EventEmitter();
        _this.menuOpen_output = new core_2.EventEmitter();
        _this.open_output = new core_2.EventEmitter();
        _this.paste_output = new core_2.EventEmitter();
        _this.remove_output = new core_2.EventEmitter();
        _this.resize_output = new core_2.EventEmitter();
        _this.resizeStart_output = new core_2.EventEmitter();
        _this.resizeStop_output = new core_2.EventEmitter();
        _this.select_output = new core_2.EventEmitter();
        _this.templateRefresh_output = new core_2.EventEmitter();
        _this.unselect_output = new core_2.EventEmitter();
        return _this;
    }
    return FileExplorerComponent;
}(core_1.EJComponents));
FileExplorerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-fileexplorer',
                template: ''
            },] },
];
/** @nocollapse */
FileExplorerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
FileExplorerComponent.propDecorators = {
    'ajaxAction_input': [{ type: core_2.Input, args: ['ajaxAction',] },],
    'ajaxDataType_input': [{ type: core_2.Input, args: ['ajaxDataType',] },],
    'ajaxSettings_input': [{ type: core_2.Input, args: ['ajaxSettings',] },],
    'allowDragAndDrop_input': [{ type: core_2.Input, args: ['allowDragAndDrop',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'allowMultiSelection_input': [{ type: core_2.Input, args: ['allowMultiSelection',] },],
    'contextMenuSettings_input': [{ type: core_2.Input, args: ['contextMenuSettings',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableResize_input': [{ type: core_2.Input, args: ['enableResize',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableThumbnailCompress_input': [{ type: core_2.Input, args: ['enableThumbnailCompress',] },],
    'fileTypes_input': [{ type: core_2.Input, args: ['fileTypes',] },],
    'filterSettings_input': [{ type: core_2.Input, args: ['filterSettings',] },],
    'gridSettings_input': [{ type: core_2.Input, args: ['gridSettings',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'layout_input': [{ type: core_2.Input, args: ['layout',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maxHeight_input': [{ type: core_2.Input, args: ['maxHeight',] },],
    'maxWidth_input': [{ type: core_2.Input, args: ['maxWidth',] },],
    'minHeight_input': [{ type: core_2.Input, args: ['minHeight',] },],
    'minWidth_input': [{ type: core_2.Input, args: ['minWidth',] },],
    'path_input': [{ type: core_2.Input, args: ['path',] },],
    'rootFolderName_input': [{ type: core_2.Input, args: ['rootFolderName',] },],
    'selectedFolder_input': [{ type: core_2.Input, args: ['selectedFolder',] },],
    'selectedItems_input': [{ type: core_2.Input, args: ['selectedItems',] },],
    'showCheckbox_input': [{ type: core_2.Input, args: ['showCheckbox',] },],
    'showContextMenu_input': [{ type: core_2.Input, args: ['showContextMenu',] },],
    'showFooter_input': [{ type: core_2.Input, args: ['showFooter',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'showThumbnail_input': [{ type: core_2.Input, args: ['showThumbnail',] },],
    'showToolbar_input': [{ type: core_2.Input, args: ['showToolbar',] },],
    'showNavigationPane_input': [{ type: core_2.Input, args: ['showNavigationPane',] },],
    'tools_input': [{ type: core_2.Input, args: ['tools',] },],
    'toolsList_input': [{ type: core_2.Input, args: ['toolsList',] },],
    'uploadSettings_input': [{ type: core_2.Input, args: ['uploadSettings',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'contextMenuSettings_items_input': [{ type: core_2.Input, args: ['contextMenuSettings.items',] },],
    'contextMenuSettings_customMenuFields_input': [{ type: core_2.Input, args: ['contextMenuSettings.customMenuFields',] },],
    'filterSettings_allowSearchOnTyping_input': [{ type: core_2.Input, args: ['filterSettings.allowSearchOnTyping',] },],
    'filterSettings_caseSensitiveSearch_input': [{ type: core_2.Input, args: ['filterSettings.caseSensitiveSearch',] },],
    'filterSettings_filterType_input': [{ type: core_2.Input, args: ['filterSettings.filterType',] },],
    'gridSettings_allowResizing_input': [{ type: core_2.Input, args: ['gridSettings.allowResizing',] },],
    'gridSettings_allowSorting_input': [{ type: core_2.Input, args: ['gridSettings.allowSorting',] },],
    'gridSettings_columns_input': [{ type: core_2.Input, args: ['gridSettings.columns',] },],
    'uploadSettings_maxFileSize_input': [{ type: core_2.Input, args: ['uploadSettings.maxFileSize',] },],
    'uploadSettings_allowMultipleFile_input': [{ type: core_2.Input, args: ['uploadSettings.allowMultipleFile',] },],
    'uploadSettings_autoUpload_input': [{ type: core_2.Input, args: ['uploadSettings.autoUpload',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeAjaxRequest_output': [{ type: core_2.Output, args: ['beforeAjaxRequest',] },],
    'beforeDownload_output': [{ type: core_2.Output, args: ['beforeDownload',] },],
    'beforeGetImage_output': [{ type: core_2.Output, args: ['beforeGetImage',] },],
    'beforeOpen_output': [{ type: core_2.Output, args: ['beforeOpen',] },],
    'beforeUpload_output': [{ type: core_2.Output, args: ['beforeUpload',] },],
    'beforeUploadDialogOpen_output': [{ type: core_2.Output, args: ['beforeUploadDialogOpen',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'copy_output': [{ type: core_2.Output, args: ['copy',] },],
    'createFolder_output': [{ type: core_2.Output, args: ['createFolder',] },],
    'cut_output': [{ type: core_2.Output, args: ['cut',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'dragStart_output': [{ type: core_2.Output, args: ['dragStart',] },],
    'drag_output': [{ type: core_2.Output, args: ['drag',] },],
    'dragStop_output': [{ type: core_2.Output, args: ['dragStop',] },],
    'drop_output': [{ type: core_2.Output, args: ['drop',] },],
    'getImage_output': [{ type: core_2.Output, args: ['getImage',] },],
    'keydown_output': [{ type: core_2.Output, args: ['keydown',] },],
    'layoutChange_output': [{ type: core_2.Output, args: ['layoutChange',] },],
    'menuBeforeOpen_output': [{ type: core_2.Output, args: ['menuBeforeOpen',] },],
    'menuClick_output': [{ type: core_2.Output, args: ['menuClick',] },],
    'menuOpen_output': [{ type: core_2.Output, args: ['menuOpen',] },],
    'open_output': [{ type: core_2.Output, args: ['open',] },],
    'paste_output': [{ type: core_2.Output, args: ['paste',] },],
    'remove_output': [{ type: core_2.Output, args: ['remove',] },],
    'resize_output': [{ type: core_2.Output, args: ['resize',] },],
    'resizeStart_output': [{ type: core_2.Output, args: ['resizeStart',] },],
    'resizeStop_output': [{ type: core_2.Output, args: ['resizeStop',] },],
    'select_output': [{ type: core_2.Output, args: ['select',] },],
    'templateRefresh_output': [{ type: core_2.Output, args: ['templateRefresh',] },],
    'unselect_output': [{ type: core_2.Output, args: ['unselect',] },],
};
exports.FileExplorerComponent = FileExplorerComponent;
exports.EJ_FILEEXPLORER_COMPONENTS = [FileExplorerComponent
];
//# sourceMappingURL=fileexplorer.component.js.map
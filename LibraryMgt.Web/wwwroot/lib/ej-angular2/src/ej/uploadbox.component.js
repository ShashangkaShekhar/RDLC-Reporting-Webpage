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
require("syncfusion-javascript/Scripts/ej/web/ej.uploadbox.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var UploadboxComponent = (function (_super) {
    __extends(UploadboxComponent, _super);
    function UploadboxComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Uploadbox', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeSend_output = new core_2.EventEmitter();
        _this.begin_output = new core_2.EventEmitter();
        _this.cancel_output = new core_2.EventEmitter();
        _this.complete_output = new core_2.EventEmitter();
        _this.success_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.error_output = new core_2.EventEmitter();
        _this.fileSelect_output = new core_2.EventEmitter();
        _this.inProgress_output = new core_2.EventEmitter();
        _this.remove_output = new core_2.EventEmitter();
        return _this;
    }
    return UploadboxComponent;
}(core_1.EJComponents));
UploadboxComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-uploadbox',
                template: ''
            },] },
];
/** @nocollapse */
UploadboxComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
UploadboxComponent.propDecorators = {
    'allowDragAndDrop_input': [{ type: core_2.Input, args: ['allowDragAndDrop',] },],
    'asyncUpload_input': [{ type: core_2.Input, args: ['asyncUpload',] },],
    'autoUpload_input': [{ type: core_2.Input, args: ['autoUpload',] },],
    'buttonText_input': [{ type: core_2.Input, args: ['buttonText',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'customFileDetails_input': [{ type: core_2.Input, args: ['customFileDetails',] },],
    'dialogAction_input': [{ type: core_2.Input, args: ['dialogAction',] },],
    'dialogPosition_input': [{ type: core_2.Input, args: ['dialogPosition',] },],
    'dialogText_input': [{ type: core_2.Input, args: ['dialogText',] },],
    'dropAreaText_input': [{ type: core_2.Input, args: ['dropAreaText',] },],
    'dropAreaHeight_input': [{ type: core_2.Input, args: ['dropAreaHeight',] },],
    'dropAreaWidth_input': [{ type: core_2.Input, args: ['dropAreaWidth',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'extensionsAllow_input': [{ type: core_2.Input, args: ['extensionsAllow',] },],
    'extensionsDeny_input': [{ type: core_2.Input, args: ['extensionsDeny',] },],
    'fileSize_input': [{ type: core_2.Input, args: ['fileSize',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'multipleFilesSelection_input': [{ type: core_2.Input, args: ['multipleFilesSelection',] },],
    'pushFile_input': [{ type: core_2.Input, args: ['pushFile',] },],
    'removeUrl_input': [{ type: core_2.Input, args: ['removeUrl',] },],
    'saveUrl_input': [{ type: core_2.Input, args: ['saveUrl',] },],
    'showBrowseButton_input': [{ type: core_2.Input, args: ['showBrowseButton',] },],
    'showFileDetails_input': [{ type: core_2.Input, args: ['showFileDetails',] },],
    'showRoundedCorner_input': [{ type: core_2.Input, args: ['showRoundedCorner',] },],
    'uploadName_input': [{ type: core_2.Input, args: ['uploadName',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'buttonText_browse_input': [{ type: core_2.Input, args: ['buttonText.browse',] },],
    'buttonText_cancel_input': [{ type: core_2.Input, args: ['buttonText.cancel',] },],
    'buttonText_Close_input': [{ type: core_2.Input, args: ['buttonText.Close',] },],
    'buttonText_upload_input': [{ type: core_2.Input, args: ['buttonText.upload',] },],
    'customFileDetails_action_input': [{ type: core_2.Input, args: ['customFileDetails.action',] },],
    'customFileDetails_name_input': [{ type: core_2.Input, args: ['customFileDetails.name',] },],
    'customFileDetails_size_input': [{ type: core_2.Input, args: ['customFileDetails.size',] },],
    'customFileDetails_status_input': [{ type: core_2.Input, args: ['customFileDetails.status',] },],
    'customFileDetails_title_input': [{ type: core_2.Input, args: ['customFileDetails.title',] },],
    'dialogAction_closeOnComplete_input': [{ type: core_2.Input, args: ['dialogAction.closeOnComplete',] },],
    'dialogAction_content_input': [{ type: core_2.Input, args: ['dialogAction.content',] },],
    'dialogAction_drag_input': [{ type: core_2.Input, args: ['dialogAction.drag',] },],
    'dialogAction_modal_input': [{ type: core_2.Input, args: ['dialogAction.modal',] },],
    'dialogText_name_input': [{ type: core_2.Input, args: ['dialogText.name',] },],
    'dialogText_size_input': [{ type: core_2.Input, args: ['dialogText.size',] },],
    'dialogText_status_input': [{ type: core_2.Input, args: ['dialogText.status',] },],
    'dialogText_title_input': [{ type: core_2.Input, args: ['dialogText.title',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeSend_output': [{ type: core_2.Output, args: ['beforeSend',] },],
    'begin_output': [{ type: core_2.Output, args: ['begin',] },],
    'cancel_output': [{ type: core_2.Output, args: ['cancel',] },],
    'complete_output': [{ type: core_2.Output, args: ['complete',] },],
    'success_output': [{ type: core_2.Output, args: ['success',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'error_output': [{ type: core_2.Output, args: ['error',] },],
    'fileSelect_output': [{ type: core_2.Output, args: ['fileSelect',] },],
    'inProgress_output': [{ type: core_2.Output, args: ['inProgress',] },],
    'remove_output': [{ type: core_2.Output, args: ['remove',] },],
};
exports.UploadboxComponent = UploadboxComponent;
exports.EJ_UPLOADBOX_COMPONENTS = [UploadboxComponent
];
//# sourceMappingURL=uploadbox.component.js.map
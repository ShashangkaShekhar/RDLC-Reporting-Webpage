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
require("syncfusion-javascript/Scripts/ej/web/ej.pdfviewer.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var PdfViewerComponent = (function (_super) {
    __extends(PdfViewerComponent, _super);
    function PdfViewerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'PdfViewer', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.documentLoad_output = new core_2.EventEmitter();
        _this.documentUnload_output = new core_2.EventEmitter();
        _this.pageChange_output = new core_2.EventEmitter();
        _this.ajaxRequestFailure_output = new core_2.EventEmitter();
        _this.zoomChange_output = new core_2.EventEmitter();
        _this.hyperlinkClick_output = new core_2.EventEmitter();
        _this.beforePrint_output = new core_2.EventEmitter();
        _this.afterPrint_output = new core_2.EventEmitter();
        _this.pageClick_output = new core_2.EventEmitter();
        _this.annotationAdd_output = new core_2.EventEmitter();
        _this.annotationRemove_output = new core_2.EventEmitter();
        _this.annotationPropertiesChange_output = new core_2.EventEmitter();
        _this.signatureAdd_output = new core_2.EventEmitter();
        _this.signatureDelete_output = new core_2.EventEmitter();
        _this.signaturePropertiesChange_output = new core_2.EventEmitter();
        _this.signatureResize_output = new core_2.EventEmitter();
        _this.bufferStart_output = new core_2.EventEmitter();
        _this.bufferEnd_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        return _this;
    }
    return PdfViewerComponent;
}(core_1.EJComponents));
PdfViewerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-pdfviewer',
                template: ''
            },] },
];
/** @nocollapse */
PdfViewerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
PdfViewerComponent.propDecorators = {
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'toolbarSettings_input': [{ type: core_2.Input, args: ['toolbarSettings',] },],
    'serverActionSettings_input': [{ type: core_2.Input, args: ['serverActionSettings',] },],
    'serviceUrl_input': [{ type: core_2.Input, args: ['serviceUrl',] },],
    'documentPath_input': [{ type: core_2.Input, args: ['documentPath',] },],
    'enableTextMarkupAnnotations_input': [{ type: core_2.Input, args: ['enableTextMarkupAnnotations',] },],
    'enableHighlightAnnotation_input': [{ type: core_2.Input, args: ['enableHighlightAnnotation',] },],
    'enableUnderlineAnnotation_input': [{ type: core_2.Input, args: ['enableUnderlineAnnotation',] },],
    'enableStrikethroughAnnotation_input': [{ type: core_2.Input, args: ['enableStrikethroughAnnotation',] },],
    'enableSignature_input': [{ type: core_2.Input, args: ['enableSignature',] },],
    'strikethroughSettings_input': [{ type: core_2.Input, args: ['strikethroughSettings',] },],
    'underlineSettings_input': [{ type: core_2.Input, args: ['underlineSettings',] },],
    'highlightSettings_input': [{ type: core_2.Input, args: ['highlightSettings',] },],
    'signatureSettings_input': [{ type: core_2.Input, args: ['signatureSettings',] },],
    'annotationType_input': [{ type: core_2.Input, args: ['annotationType',] },],
    'pageCount_input': [{ type: core_2.Input, args: ['pageCount',] },],
    'currentPageNumber_input': [{ type: core_2.Input, args: ['currentPageNumber',] },],
    'zoomPercentage_input': [{ type: core_2.Input, args: ['zoomPercentage',] },],
    'pdfService_input': [{ type: core_2.Input, args: ['pdfService',] },],
    'interactionMode_input': [{ type: core_2.Input, args: ['interactionMode',] },],
    'hyperlinkOpenState_input': [{ type: core_2.Input, args: ['hyperlinkOpenState',] },],
    'enableHyperlink_input': [{ type: core_2.Input, args: ['enableHyperlink',] },],
    'enableTextSelection_input': [{ type: core_2.Input, args: ['enableTextSelection',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'isDocumentEdited_input': [{ type: core_2.Input, args: ['isDocumentEdited',] },],
    'allowClientBuffering_input': [{ type: core_2.Input, args: ['allowClientBuffering',] },],
    'fileName_input': [{ type: core_2.Input, args: ['fileName',] },],
    'toolbarSettings_showToolTip_input': [{ type: core_2.Input, args: ['toolbarSettings.showToolTip',] },],
    'toolbarSettings_toolbarItem_input': [{ type: core_2.Input, args: ['toolbarSettings.toolbarItem',] },],
    'serverActionSettings_load_input': [{ type: core_2.Input, args: ['serverActionSettings.load',] },],
    'serverActionSettings_fileUpload_input': [{ type: core_2.Input, args: ['serverActionSettings.fileUpload',] },],
    'serverActionSettings_print_input': [{ type: core_2.Input, args: ['serverActionSettings.print',] },],
    'serverActionSettings_download_input': [{ type: core_2.Input, args: ['serverActionSettings.download',] },],
    'strikethroughSettings_color_input': [{ type: core_2.Input, args: ['strikethroughSettings.color',] },],
    'strikethroughSettings_author_input': [{ type: core_2.Input, args: ['strikethroughSettings.author',] },],
    'strikethroughSettings_opacity_input': [{ type: core_2.Input, args: ['strikethroughSettings.opacity',] },],
    'strikethroughSettings_subject_input': [{ type: core_2.Input, args: ['strikethroughSettings.subject',] },],
    'strikethroughSettings_modifiedDate_input': [{ type: core_2.Input, args: ['strikethroughSettings.modifiedDate',] },],
    'strikethroughSettings_isLocked_input': [{ type: core_2.Input, args: ['strikethroughSettings.isLocked',] },],
    'underlineSettings_color_input': [{ type: core_2.Input, args: ['underlineSettings.color',] },],
    'underlineSettings_author_input': [{ type: core_2.Input, args: ['underlineSettings.author',] },],
    'underlineSettings_opacity_input': [{ type: core_2.Input, args: ['underlineSettings.opacity',] },],
    'underlineSettings_subject_input': [{ type: core_2.Input, args: ['underlineSettings.subject',] },],
    'underlineSettings_modifiedDate_input': [{ type: core_2.Input, args: ['underlineSettings.modifiedDate',] },],
    'underlineSettings_isLocked_input': [{ type: core_2.Input, args: ['underlineSettings.isLocked',] },],
    'highlightSettings_color_input': [{ type: core_2.Input, args: ['highlightSettings.color',] },],
    'highlightSettings_author_input': [{ type: core_2.Input, args: ['highlightSettings.author',] },],
    'highlightSettings_opacity_input': [{ type: core_2.Input, args: ['highlightSettings.opacity',] },],
    'highlightSettings_subject_input': [{ type: core_2.Input, args: ['highlightSettings.subject',] },],
    'highlightSettings_modifiedDate_input': [{ type: core_2.Input, args: ['highlightSettings.modifiedDate',] },],
    'highlightSettings_isLocked_input': [{ type: core_2.Input, args: ['highlightSettings.isLocked',] },],
    'signatureSettings_color_input': [{ type: core_2.Input, args: ['signatureSettings.color',] },],
    'signatureSettings_opacity_input': [{ type: core_2.Input, args: ['signatureSettings.opacity',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'documentLoad_output': [{ type: core_2.Output, args: ['documentLoad',] },],
    'documentUnload_output': [{ type: core_2.Output, args: ['documentUnload',] },],
    'pageChange_output': [{ type: core_2.Output, args: ['pageChange',] },],
    'ajaxRequestFailure_output': [{ type: core_2.Output, args: ['ajaxRequestFailure',] },],
    'zoomChange_output': [{ type: core_2.Output, args: ['zoomChange',] },],
    'hyperlinkClick_output': [{ type: core_2.Output, args: ['hyperlinkClick',] },],
    'beforePrint_output': [{ type: core_2.Output, args: ['beforePrint',] },],
    'afterPrint_output': [{ type: core_2.Output, args: ['afterPrint',] },],
    'pageClick_output': [{ type: core_2.Output, args: ['pageClick',] },],
    'annotationAdd_output': [{ type: core_2.Output, args: ['annotationAdd',] },],
    'annotationRemove_output': [{ type: core_2.Output, args: ['annotationRemove',] },],
    'annotationPropertiesChange_output': [{ type: core_2.Output, args: ['annotationPropertiesChange',] },],
    'signatureAdd_output': [{ type: core_2.Output, args: ['signatureAdd',] },],
    'signatureDelete_output': [{ type: core_2.Output, args: ['signatureDelete',] },],
    'signaturePropertiesChange_output': [{ type: core_2.Output, args: ['signaturePropertiesChange',] },],
    'signatureResize_output': [{ type: core_2.Output, args: ['signatureResize',] },],
    'bufferStart_output': [{ type: core_2.Output, args: ['bufferStart',] },],
    'bufferEnd_output': [{ type: core_2.Output, args: ['bufferEnd',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
};
exports.PdfViewerComponent = PdfViewerComponent;
exports.EJ_PDFVIEWER_COMPONENTS = [PdfViewerComponent
];
//# sourceMappingURL=pdfviewer.component.js.map
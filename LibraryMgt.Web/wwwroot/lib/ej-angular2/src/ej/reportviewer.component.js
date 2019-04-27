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
require("syncfusion-javascript/Scripts/ej/web/ej.reportviewer.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var ReportViewerComponent = (function (_super) {
    __extends(ReportViewerComponent, _super);
    function ReportViewerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'ReportViewer', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.destroy_output = new core_2.EventEmitter();
        _this.drillThrough_output = new core_2.EventEmitter();
        _this.renderingBegin_output = new core_2.EventEmitter();
        _this.renderingComplete_output = new core_2.EventEmitter();
        _this.reportError_output = new core_2.EventEmitter();
        _this.reportExport_output = new core_2.EventEmitter();
        _this.reportLoaded_output = new core_2.EventEmitter();
        _this.viewReportClick_output = new core_2.EventEmitter();
        return _this;
    }
    return ReportViewerComponent;
}(core_1.EJComponents));
ReportViewerComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-reportviewer',
                template: ''
            },] },
];
/** @nocollapse */
ReportViewerComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ReportViewerComponent.propDecorators = {
    'enablePageCache_input': [{ type: core_2.Input, args: ['enablePageCache',] },],
    'exportSettings_input': [{ type: core_2.Input, args: ['exportSettings',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'pageSettings_input': [{ type: core_2.Input, args: ['pageSettings',] },],
    'printMode_input': [{ type: core_2.Input, args: ['printMode',] },],
    'printOptions_input': [{ type: core_2.Input, args: ['printOptions',] },],
    'processingMode_input': [{ type: core_2.Input, args: ['processingMode',] },],
    'renderMode_input': [{ type: core_2.Input, args: ['renderMode',] },],
    'reportPath_input': [{ type: core_2.Input, args: ['reportPath',] },],
    'reportServerUrl_input': [{ type: core_2.Input, args: ['reportServerUrl',] },],
    'reportServiceUrl_input': [{ type: core_2.Input, args: ['reportServiceUrl',] },],
    'toolbarSettings_input': [{ type: core_2.Input, args: ['toolbarSettings',] },],
    'zoomFactor_input': [{ type: core_2.Input, args: ['zoomFactor',] },],
    'serviceAuthorizationToken_input': [{ type: core_2.Input, args: ['serviceAuthorizationToken',] },],
    'exportSettings_exportOptions_input': [{ type: core_2.Input, args: ['exportSettings.exportOptions',] },],
    'exportSettings_excelFormat_input': [{ type: core_2.Input, args: ['exportSettings.excelFormat',] },],
    'exportSettings_wordFormat_input': [{ type: core_2.Input, args: ['exportSettings.wordFormat',] },],
    'pageSettings_orientation_input': [{ type: core_2.Input, args: ['pageSettings.orientation',] },],
    'pageSettings_paperSize_input': [{ type: core_2.Input, args: ['pageSettings.paperSize',] },],
    'toolbarSettings_click_input': [{ type: core_2.Input, args: ['toolbarSettings.click',] },],
    'toolbarSettings_items_input': [{ type: core_2.Input, args: ['toolbarSettings.items',] },],
    'toolbarSettings_showToolbar_input': [{ type: core_2.Input, args: ['toolbarSettings.showToolbar',] },],
    'toolbarSettings_showTooltip_input': [{ type: core_2.Input, args: ['toolbarSettings.showTooltip',] },],
    'toolbarSettings_templateId_input': [{ type: core_2.Input, args: ['toolbarSettings.templateId',] },],
    'dataSources_input': [{ type: core_2.Input, args: ['dataSources',] },],
    'parameters_input': [{ type: core_2.Input, args: ['parameters',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'drillThrough_output': [{ type: core_2.Output, args: ['drillThrough',] },],
    'renderingBegin_output': [{ type: core_2.Output, args: ['renderingBegin',] },],
    'renderingComplete_output': [{ type: core_2.Output, args: ['renderingComplete',] },],
    'reportError_output': [{ type: core_2.Output, args: ['reportError',] },],
    'reportExport_output': [{ type: core_2.Output, args: ['reportExport',] },],
    'reportLoaded_output': [{ type: core_2.Output, args: ['reportLoaded',] },],
    'viewReportClick_output': [{ type: core_2.Output, args: ['viewReportClick',] },],
};
exports.ReportViewerComponent = ReportViewerComponent;
exports.EJ_REPORTVIEWER_COMPONENTS = [ReportViewerComponent
];
//# sourceMappingURL=reportviewer.component.js.map
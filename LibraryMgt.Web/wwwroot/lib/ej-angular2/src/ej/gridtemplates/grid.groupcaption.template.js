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
var core_1 = require("@angular/core");
var template_1 = require("./../template");
var GridGroupcaptionTemplateDirective = (function (_super) {
    __extends(GridGroupcaptionTemplateDirective, _super);
    function GridGroupcaptionTemplateDirective(el, viewContainerRef, templateRef, injector) {
        var _this = _super.call(this, el, viewContainerRef, templateRef) || this;
        _this.el = el;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.injector = injector;
        _this.referenceObj = {};
        return _this;
    }
    GridGroupcaptionTemplateDirective.prototype.ngOnInit = function () {
        var template = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': [] });
        var templID = ej.getGuid('angulartmplstr');
        var tempEle = ej.buildTag('div#' + templID);
        $(tempEle).append(template.rootNodes);
        $(tempEle).remove();
    };
    GridGroupcaptionTemplateDirective.prototype.ngAfterViewChecked = function () {
        ej.createObject('_templateRef', this.templateRef, this.referenceObj);
        ej.createObject('_viewRef', this.viewContainerRef, this.referenceObj);
        var viewRference = this.referenceObj;
        ej.template['text/x-' + template_1.ngTemplateid + 'gridgroupcaptiontemplate'] = function (self, selector, data, index, prop) {
            return template_1.ejtemplate(self, selector, data, index, viewRference);
        };
        ej.template.render = ej.template['text/x-' + template_1.ngTemplateid + 'gridgroupcaptiontemplate'];
    };
    return GridGroupcaptionTemplateDirective;
}(template_1.EJTemplateDirective));
GridGroupcaptionTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[e-groupcaption-template]"
            },] },
];
/** @nocollapse */
GridGroupcaptionTemplateDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.TemplateRef, },
    { type: core_1.Injector, },
]; };
exports.GridGroupcaptionTemplateDirective = GridGroupcaptionTemplateDirective;
//# sourceMappingURL=grid.groupcaption.template.js.map
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
var GridRowTemplateDirective = (function (_super) {
    __extends(GridRowTemplateDirective, _super);
    function GridRowTemplateDirective(el, viewContainerRef, templateRef, injector) {
        var _this = _super.call(this, el, viewContainerRef, templateRef) || this;
        _this.el = el;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.injector = injector;
        _this.referenceObj = {};
        return _this;
    }
    GridRowTemplateDirective.prototype.ngOnInit = function () {
        var template = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': [] });
        var templID = ej.getGuid('angulartmplstr');
        var tempEle = ej.buildTag('div#' + templID);
        $(tempEle).append(template.rootNodes);
        $(tempEle).remove();
    };
    GridRowTemplateDirective.prototype.ngAfterViewChecked = function () {
        ej.createObject('_templateRef', this.templateRef, this.referenceObj);
        ej.createObject('_viewRef', this.viewContainerRef, this.referenceObj);
        var viewRference = this.referenceObj;
        ej.template['text/x-' + template_1.ngTemplateid + 'gridrowtemplate'] = function (self, selector, data, index, prop) {
            return template_1.ejtemplate(self, selector, data, index, viewRference);
        };
        ej.template.render = ej.template['text/x-' + template_1.ngTemplateid + 'gridrowtemplate'];
    };
    GridRowTemplateDirective.prototype.compileTempalte = function () {
        var widget = this.element.parent.widget || this.element.widget;
        var element = widget.element;
        var childView;
        var templates = $(element).find('.ej-angular-template');
        var templateObject = widget.angularTemplate;
        for (var template in templateObject) {
            var tmplElement = templates.filter('.' + templateObject[template].key);
            if (tmplElement.length) {
                for (var i = 0; i < tmplElement.length; i++) {
                    var index = parseInt($(tmplElement[i]).attr('ej-prop'));
                    childView = templateObject[template].viewRef[index].createEmbeddedView(templateObject[template].templateRef[index], { '$implicit': templateObject[template].itemData[index] });
                    $(tmplElement[i]).empty().append(childView.rootNodes[1].childNodes);
                }
            }
            else {
                delete templateObject[template];
            }
        }
    };
    return GridRowTemplateDirective;
}(template_1.EJTemplateDirective));
GridRowTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[e-row-template]"
            },] },
];
/** @nocollapse */
GridRowTemplateDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.TemplateRef, },
    { type: core_1.Injector, },
]; };
exports.GridRowTemplateDirective = GridRowTemplateDirective;
//# sourceMappingURL=grid.row.template.js.map
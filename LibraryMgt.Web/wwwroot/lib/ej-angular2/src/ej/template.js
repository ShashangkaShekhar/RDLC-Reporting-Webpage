"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("./core");
var core_3 = require("@angular/core");
exports.ContentChild = core_3.ContentChild;
exports.Type = core_3.Type;
exports.forwardRef = core_3.forwardRef;
var EJTemplateDirective = (function () {
    function EJTemplateDirective(el, viewContainerRef, templateRef) {
        this.el = el;
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.childViews = [];
        this.element = core_2.currentTemplateElement;
    }
    EJTemplateDirective.prototype.ngOnInit = function () {
        var template = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': [] });
        var templID = ej.getGuid('angulartmplstr');
        var tempEle = ej.buildTag('div#' + templID);
        $(tempEle).append(template.rootNodes);
        ej.createObject('template', $($(tempEle).append(template.rootNodes)).html(), this.element);
        this.element.template = $($(tempEle).append(template.rootNodes)).html();
        Object.defineProperty(this.element, '_templateRef', {
            enumerable: false,
            writable: true,
            value: this.templateRef
        });
        Object.defineProperty(this.element, '_viewRef', {
            enumerable: false,
            writable: true,
            value: this.viewContainerRef
        });
        $(tempEle).remove();
    };
    EJTemplateDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        exports.ngTemplateid = ej.getGuid("ng2Control");
        this.element.parent.model["ngTemplateId"] = exports.ngTemplateid;
        window.setTimeout(function () {
            _this.compileTempalte();
            var parentWidget = _this.element.parent.widget || _this.element.widget;
            parentWidget.element.on(parentWidget.pluginName + 'refresh', function () {
                if (parentWidget.angularTemplate) {
                    _this.compileTempalte();
                }
            });
        });
    };
    EJTemplateDirective.prototype.compileTempalte = function () {
        var widget = this.element.parent.widget || this.element.widget;
        var element = widget.element;
        var childView;
        var templates = $(element).find('.ej-angular-template');
        var templateObject = widget.angularTemplate;
        for (var template in templateObject) {
            var tmplElement = templates.filter('.' + templateObject[template].key);
            if (tmplElement.length) {
                for (var i = 0; i < tmplElement.length; i++) {
                    if (jQuery(tmplElement[i]).hasClass("embeddedview")) {
                        jQuery(tmplElement[i]).removeClass("embeddedview");
                        var index = parseInt($(tmplElement[i]).attr('ej-prop'));
                        childView = templateObject[template].viewRef[index].createEmbeddedView(templateObject[template].templateRef[index], { '$implicit': templateObject[template].itemData[index] });
                        $(tmplElement[i]).empty().append(childView.rootNodes);
                    }
                }
            }
            else {
                delete templateObject[template];
            }
        }
    };
    EJTemplateDirective.prototype.clearTempalte = function () {
        var templateObject = this.element.parent.widget.angularTemplate;
        if (templateObject && Object.keys(templateObject).length) {
            for (var tmpl in templateObject) {
                delete templateObject[tmpl];
            }
        }
        for (var childView in this.childViews) {
            delete this.childViews[childView];
        }
        this.viewContainerRef.remove();
    };
    EJTemplateDirective.prototype.ngOnDestroy = function () {
        this.clearTempalte();
    };
    return EJTemplateDirective;
}());
EJTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[e-template]"
            },] },
];
/** @nocollapse */
EJTemplateDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.TemplateRef, },
]; };
exports.EJTemplateDirective = EJTemplateDirective;
ej.template['text/x-template'] = function (self, selector, data, index, prop) {
    var templateObject = self.angularTemplate;
    if (!templateObject || !templateObject[selector]) {
        templateObject = templateObject || {};
        templateObject[selector] = { key: ej.getGuid('angulartmpl'), itemData: [], viewRef: [], templateRef: [] };
        self.angularTemplate = templateObject;
    }
    var scope = templateObject[selector];
    if (!ej.isNullOrUndefined(index)) {
        if (!scope.itemData) {
            scope.itemData = [];
        }
        scope.itemData[index] = data;
        scope.viewRef[index] = prop._viewRef;
        scope.templateRef[index] = prop._templateRef;
    }
    else {
        if (data.length > 1) {
            for (var i = 0; i < data.length; i++) {
                scope.itemData[i] = data[i];
                scope.viewRef[i] = prop._viewRef;
                scope.templateRef[i] = prop._templateRef;
            }
        }
        else {
            scope.itemData = [data];
            scope.viewRef = [prop._viewRef];
            scope.templateRef = [prop._templateRef];
        }
    }
    // let actElement = $(selector).html() || '';
    var actElement = '';
    if (selector.startsWith('#'))
        actElement = $(selector).html() || '';
    else
        actElement = selector;
    var tempElement = '';
    if (data.length > 1 && self.model.rowTemplate != null) {
        for (var i = 0; i < data.length; i++) {
            var temp = actElement;
            temp = '<tr ej-prop=\'' + i + '\'class=\'' + templateObject[selector].key + ' ej-angular-template\' />' + temp + '</tr>';
            tempElement = tempElement + temp;
        }
    }
    else {
        tempElement = tempElement + '<div ej-prop=\'' + index + '\' class=\'' + " embeddedview " + templateObject[selector].key + ' ej-angular-template\'>' + actElement + ' </div>';
    }
    return tempElement;
};
exports.ejtemplate = ej.template['text/x-template'];
ej.template.render = ej.template['text/x-template'];
//# sourceMappingURL=template.js.map
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
require("syncfusion-javascript/Scripts/ej/web/ej.ribbon.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var RibbonPageDirective = (function (_super) {
    __extends(RibbonPageDirective, _super);
    function RibbonPageDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return RibbonPageDirective;
}(core_1.ComplexTagElement));
RibbonPageDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-applicationtab-backstagesettings-pages>e-page',
            },] },
];
/** @nocollapse */
RibbonPageDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RibbonComponent; }),] },] },
]; };
RibbonPageDirective.propDecorators = {
    'id': [{ type: core_2.Input, args: ['id',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'itemType': [{ type: core_2.Input, args: ['itemType',] },],
    'contentID': [{ type: core_2.Input, args: ['contentID',] },],
    'enableSeparator': [{ type: core_2.Input, args: ['enableSeparator',] },],
};
exports.RibbonPageDirective = RibbonPageDirective;
var RibbonApplicationTabBackstageSettingsPagesDirective = (function (_super) {
    __extends(RibbonApplicationTabBackstageSettingsPagesDirective, _super);
    function RibbonApplicationTabBackstageSettingsPagesDirective(widget) {
        return _super.call(this, 'applicationTab.backstageSettings.pages') || this;
    }
    return RibbonApplicationTabBackstageSettingsPagesDirective;
}(core_1.ArrayTagElement));
RibbonApplicationTabBackstageSettingsPagesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-ribbon>e-applicationtab-backstagesettings-pages',
                queries: {
                    children: new core_2.ContentChildren(RibbonPageDirective)
                }
            },] },
];
/** @nocollapse */
RibbonApplicationTabBackstageSettingsPagesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RibbonComponent; }),] },] },
]; };
exports.RibbonApplicationTabBackstageSettingsPagesDirective = RibbonApplicationTabBackstageSettingsPagesDirective;
var RibbonContentGroupDirective = (function (_super) {
    __extends(RibbonContentGroupDirective, _super);
    function RibbonContentGroupDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return RibbonContentGroupDirective;
}(core_1.ComplexTagElement));
RibbonContentGroupDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-contentgroups>e-contentgroup',
            },] },
];
/** @nocollapse */
RibbonContentGroupDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RibbonComponent; }),] },] },
]; };
RibbonContentGroupDirective.propDecorators = {
    'isMobileOnly': [{ type: core_2.Input, args: ['isMobileOnly',] },],
    'buttonSettings': [{ type: core_2.Input, args: ['buttonSettings',] },],
    'columns': [{ type: core_2.Input, args: ['columns',] },],
    'contentID': [{ type: core_2.Input, args: ['contentID',] },],
    'cssClass': [{ type: core_2.Input, args: ['cssClass',] },],
    'customGalleryItems': [{ type: core_2.Input, args: ['customGalleryItems',] },],
    'customToolTip': [{ type: core_2.Input, args: ['customToolTip',] },],
    'customToolTip_content': [{ type: core_2.Input, args: ['customToolTip.content',] },],
    'customToolTip_prefixIcon': [{ type: core_2.Input, args: ['customToolTip.prefixIcon',] },],
    'customToolTip_title': [{ type: core_2.Input, args: ['customToolTip.title',] },],
    'dropdownSettings': [{ type: core_2.Input, args: ['dropdownSettings',] },],
    'enableSeparator': [{ type: core_2.Input, args: ['enableSeparator',] },],
    'expandedColumns': [{ type: core_2.Input, args: ['expandedColumns',] },],
    'galleryItems': [{ type: core_2.Input, args: ['galleryItems',] },],
    'id': [{ type: core_2.Input, args: ['id',] },],
    'isBig': [{ type: core_2.Input, args: ['isBig',] },],
    'itemHeight': [{ type: core_2.Input, args: ['itemHeight',] },],
    'itemWidth': [{ type: core_2.Input, args: ['itemWidth',] },],
    'splitButtonSettings': [{ type: core_2.Input, args: ['splitButtonSettings',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'toggleButtonSettings': [{ type: core_2.Input, args: ['toggleButtonSettings',] },],
    'toolTip': [{ type: core_2.Input, args: ['toolTip',] },],
    'quickAccessMode': [{ type: core_2.Input, args: ['quickAccessMode',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
};
exports.RibbonContentGroupDirective = RibbonContentGroupDirective;
var RibbonContentGroupsDirective = (function (_super) {
    __extends(RibbonContentGroupsDirective, _super);
    function RibbonContentGroupsDirective(widget) {
        return _super.call(this, 'groups') || this;
    }
    return RibbonContentGroupsDirective;
}(core_1.ArrayTagElement));
RibbonContentGroupsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-content>e-contentgroups',
                queries: {
                    children: new core_2.ContentChildren(RibbonContentGroupDirective)
                }
            },] },
];
/** @nocollapse */
RibbonContentGroupsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RibbonComponent; }),] },] },
]; };
exports.RibbonContentGroupsDirective = RibbonContentGroupsDirective;
var RibbonContentDirective = (function (_super) {
    __extends(RibbonContentDirective, _super);
    function RibbonContentDirective(widget) {
        var _this = _super.call(this, ['groups']) || this;
        _this.parent = widget;
        return _this;
    }
    return RibbonContentDirective;
}(core_1.ComplexTagElement));
RibbonContentDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-contents>e-content',
            },] },
];
/** @nocollapse */
RibbonContentDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RibbonComponent; }),] },] },
]; };
RibbonContentDirective.propDecorators = {
    'defaults': [{ type: core_2.Input, args: ['defaults',] },],
    'defaults_height': [{ type: core_2.Input, args: ['defaults.height',] },],
    'defaults_width': [{ type: core_2.Input, args: ['defaults.width',] },],
    'defaults_type': [{ type: core_2.Input, args: ['defaults.type',] },],
    'defaults_isBig': [{ type: core_2.Input, args: ['defaults.isBig',] },],
    'groups': [{ type: core_2.Input, args: ['groups',] },],
    'tag_groups': [{ type: core_2.ContentChild, args: [RibbonContentGroupsDirective,] },],
};
exports.RibbonContentDirective = RibbonContentDirective;
var RibbonContentsDirective = (function (_super) {
    __extends(RibbonContentsDirective, _super);
    function RibbonContentsDirective(widget) {
        return _super.call(this, 'content') || this;
    }
    return RibbonContentsDirective;
}(core_1.ArrayTagElement));
RibbonContentsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-groups>e-contents',
                queries: {
                    children: new core_2.ContentChildren(RibbonContentDirective)
                }
            },] },
];
/** @nocollapse */
RibbonContentsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RibbonComponent; }),] },] },
]; };
exports.RibbonContentsDirective = RibbonContentsDirective;
var RibbonGroupDirective = (function (_super) {
    __extends(RibbonGroupDirective, _super);
    function RibbonGroupDirective(widget) {
        var _this = _super.call(this, ['content']) || this;
        _this.parent = widget;
        return _this;
    }
    return RibbonGroupDirective;
}(core_1.ComplexTagElement));
RibbonGroupDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-groups>e-group',
            },] },
];
/** @nocollapse */
RibbonGroupDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RibbonComponent; }),] },] },
]; };
RibbonGroupDirective.propDecorators = {
    'alignType': [{ type: core_2.Input, args: ['alignType',] },],
    'content': [{ type: core_2.Input, args: ['content',] },],
    'contentID': [{ type: core_2.Input, args: ['contentID',] },],
    'customContent': [{ type: core_2.Input, args: ['customContent',] },],
    'enableGroupExpander': [{ type: core_2.Input, args: ['enableGroupExpander',] },],
    'groupExpanderSettings': [{ type: core_2.Input, args: ['groupExpanderSettings',] },],
    'groupExpanderSettings_toolTip': [{ type: core_2.Input, args: ['groupExpanderSettings.toolTip',] },],
    'groupExpanderSettings_customToolTip': [{ type: core_2.Input, args: ['groupExpanderSettings.customToolTip',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'type': [{ type: core_2.Input, args: ['type',] },],
    'tag_content': [{ type: core_2.ContentChild, args: [RibbonContentsDirective,] },],
};
exports.RibbonGroupDirective = RibbonGroupDirective;
var RibbonGroupsDirective = (function (_super) {
    __extends(RibbonGroupsDirective, _super);
    function RibbonGroupsDirective(widget) {
        return _super.call(this, 'groups') || this;
    }
    return RibbonGroupsDirective;
}(core_1.ArrayTagElement));
RibbonGroupsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-tabs>e-groups',
                queries: {
                    children: new core_2.ContentChildren(RibbonGroupDirective)
                }
            },] },
];
/** @nocollapse */
RibbonGroupsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RibbonComponent; }),] },] },
]; };
exports.RibbonGroupsDirective = RibbonGroupsDirective;
var RibbonTabDirective = (function (_super) {
    __extends(RibbonTabDirective, _super);
    function RibbonTabDirective(widget) {
        var _this = _super.call(this, ['groups']) || this;
        _this.parent = widget;
        return _this;
    }
    return RibbonTabDirective;
}(core_1.ComplexTagElement));
RibbonTabDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-tabs>e-tab',
            },] },
];
/** @nocollapse */
RibbonTabDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RibbonComponent; }),] },] },
]; };
RibbonTabDirective.propDecorators = {
    'groups': [{ type: core_2.Input, args: ['groups',] },],
    'id': [{ type: core_2.Input, args: ['id',] },],
    'text': [{ type: core_2.Input, args: ['text',] },],
    'tag_groups': [{ type: core_2.ContentChild, args: [RibbonGroupsDirective,] },],
};
exports.RibbonTabDirective = RibbonTabDirective;
var RibbonTabsDirective = (function (_super) {
    __extends(RibbonTabsDirective, _super);
    function RibbonTabsDirective(widget) {
        return _super.call(this, 'tabs') || this;
    }
    return RibbonTabsDirective;
}(core_1.ArrayTagElement));
RibbonTabsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-ribbon>e-tabs',
                queries: {
                    children: new core_2.ContentChildren(RibbonTabDirective)
                }
            },] },
];
/** @nocollapse */
RibbonTabsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return RibbonComponent; }),] },] },
]; };
exports.RibbonTabsDirective = RibbonTabsDirective;
var RibbonComponent = (function (_super) {
    __extends(RibbonComponent, _super);
    function RibbonComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Ribbon', el, cdRef, ['applicationTab.backstageSettings.pages', 'tabs'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeTabRemove_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.groupClick_output = new core_2.EventEmitter();
        _this.groupExpand_output = new core_2.EventEmitter();
        _this.galleryItemClick_output = new core_2.EventEmitter();
        _this.backstageItemClick_output = new core_2.EventEmitter();
        _this.collapse_output = new core_2.EventEmitter();
        _this.expand_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.tabAdd_output = new core_2.EventEmitter();
        _this.tabClick_output = new core_2.EventEmitter();
        _this.tabCreate_output = new core_2.EventEmitter();
        _this.tabRemove_output = new core_2.EventEmitter();
        _this.tabSelect_output = new core_2.EventEmitter();
        _this.toggleButtonClick_output = new core_2.EventEmitter();
        _this.qatMenuItemClick_output = new core_2.EventEmitter();
        return _this;
    }
    return RibbonComponent;
}(core_1.EJComponents));
RibbonComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-ribbon',
                template: ''
            },] },
];
/** @nocollapse */
RibbonComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
RibbonComponent.propDecorators = {
    'allowResizing_input': [{ type: core_2.Input, args: ['allowResizing',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'buttonDefaults_input': [{ type: core_2.Input, args: ['buttonDefaults',] },],
    'showQAT_input': [{ type: core_2.Input, args: ['showQAT',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'collapsePinSettings_input': [{ type: core_2.Input, args: ['collapsePinSettings',] },],
    'enableOnDemand_input': [{ type: core_2.Input, args: ['enableOnDemand',] },],
    'collapsible_input': [{ type: core_2.Input, args: ['collapsible',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'expandPinSettings_input': [{ type: core_2.Input, args: ['expandPinSettings',] },],
    'applicationTab_input': [{ type: core_2.Input, args: ['applicationTab',] },],
    'disabledItemIndex_input': [{ type: core_2.Input, args: ['disabledItemIndex',] },],
    'enabledItemIndex_input': [{ type: core_2.Input, args: ['enabledItemIndex',] },],
    'selectedItemIndex_input': [{ type: core_2.Input, args: ['selectedItemIndex',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'collapsePinSettings_toolTip_input': [{ type: core_2.Input, args: ['collapsePinSettings.toolTip',] },],
    'collapsePinSettings_customToolTip_input': [{ type: core_2.Input, args: ['collapsePinSettings.customToolTip',] },],
    'expandPinSettings_toolTip_input': [{ type: core_2.Input, args: ['expandPinSettings.toolTip',] },],
    'expandPinSettings_customToolTip_input': [{ type: core_2.Input, args: ['expandPinSettings.customToolTip',] },],
    'applicationTab_backstageSettings_input': [{ type: core_2.Input, args: ['applicationTab.backstageSettings',] },],
    'applicationTab_backstageSettings_text_input': [{ type: core_2.Input, args: ['applicationTab.backstageSettings.text',] },],
    'applicationTab_backstageSettings_height_input': [{ type: core_2.Input, args: ['applicationTab.backstageSettings.height',] },],
    'applicationTab_backstageSettings_width_input': [{ type: core_2.Input, args: ['applicationTab.backstageSettings.width',] },],
    'applicationTab_backstageSettings_headerWidth_input': [{ type: core_2.Input, args: ['applicationTab.backstageSettings.headerWidth',] },],
    'applicationTab_menuItemID_input': [{ type: core_2.Input, args: ['applicationTab.menuItemID',] },],
    'applicationTab_menuSettings_input': [{ type: core_2.Input, args: ['applicationTab.menuSettings',] },],
    'applicationTab_type_input': [{ type: core_2.Input, args: ['applicationTab.type',] },],
    'contextualTabs_input': [{ type: core_2.Input, args: ['contextualTabs',] },],
    'tabs_input': [{ type: core_2.Input, args: ['tabs',] },],
    'applicationTab_backstageSettings_pages_input': [{ type: core_2.Input, args: ['applicationTab.backstageSettings.pages',] },],
    'tabs_groups_content_input': [{ type: core_2.Input, args: ['tabs.groups.content',] },],
    'tabs_groups_content_groups_customGalleryItems_input': [{ type: core_2.Input, args: ['tabs.groups.content.groups.customGalleryItems',] },],
    'tabs_groups_content_groups_galleryItems_input': [{ type: core_2.Input, args: ['tabs.groups.content.groups.galleryItems',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeTabRemove_output': [{ type: core_2.Output, args: ['beforeTabRemove',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'groupClick_output': [{ type: core_2.Output, args: ['groupClick',] },],
    'groupExpand_output': [{ type: core_2.Output, args: ['groupExpand',] },],
    'galleryItemClick_output': [{ type: core_2.Output, args: ['galleryItemClick',] },],
    'backstageItemClick_output': [{ type: core_2.Output, args: ['backstageItemClick',] },],
    'collapse_output': [{ type: core_2.Output, args: ['collapse',] },],
    'expand_output': [{ type: core_2.Output, args: ['expand',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'tabAdd_output': [{ type: core_2.Output, args: ['tabAdd',] },],
    'tabClick_output': [{ type: core_2.Output, args: ['tabClick',] },],
    'tabCreate_output': [{ type: core_2.Output, args: ['tabCreate',] },],
    'tabRemove_output': [{ type: core_2.Output, args: ['tabRemove',] },],
    'tabSelect_output': [{ type: core_2.Output, args: ['tabSelect',] },],
    'toggleButtonClick_output': [{ type: core_2.Output, args: ['toggleButtonClick',] },],
    'qatMenuItemClick_output': [{ type: core_2.Output, args: ['qatMenuItemClick',] },],
    'tag_applicationTab_backstageSettings_pages': [{ type: core_2.ContentChild, args: [RibbonApplicationTabBackstageSettingsPagesDirective,] },],
    'tag_tabs': [{ type: core_2.ContentChild, args: [RibbonTabsDirective,] },],
};
exports.RibbonComponent = RibbonComponent;
exports.EJ_RIBBON_COMPONENTS = [RibbonComponent,
    RibbonApplicationTabBackstageSettingsPagesDirective, RibbonContentGroupsDirective, RibbonContentsDirective, RibbonGroupsDirective, RibbonTabsDirective, RibbonPageDirective, RibbonContentGroupDirective, RibbonContentDirective, RibbonGroupDirective, RibbonTabDirective];
//# sourceMappingURL=ribbon.component.js.map
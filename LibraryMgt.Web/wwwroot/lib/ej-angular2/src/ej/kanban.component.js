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
require("syncfusion-javascript/Scripts/ej/web/ej.kanban.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var KanbanColumnDirective = (function (_super) {
    __extends(KanbanColumnDirective, _super);
    function KanbanColumnDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return KanbanColumnDirective;
}(core_1.ComplexTagElement));
KanbanColumnDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-kanban-columns>e-kanban-column',
            },] },
];
/** @nocollapse */
KanbanColumnDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return KanbanComponent; }),] },] },
]; };
KanbanColumnDirective.propDecorators = {
    'headerText': [{ type: core_2.Input, args: ['headerText',] },],
    'totalCount': [{ type: core_2.Input, args: ['totalCount',] },],
    'totalCount_text': [{ type: core_2.Input, args: ['totalCount.text',] },],
    'key': [{ type: core_2.Input, args: ['key',] },],
    'allowDrop': [{ type: core_2.Input, args: ['allowDrop',] },],
    'allowDrag': [{ type: core_2.Input, args: ['allowDrag',] },],
    'isCollapsed': [{ type: core_2.Input, args: ['isCollapsed',] },],
    'constraints': [{ type: core_2.Input, args: ['constraints',] },],
    'constraints_type': [{ type: core_2.Input, args: ['constraints.type',] },],
    'constraints_min': [{ type: core_2.Input, args: ['constraints.min',] },],
    'constraints_max': [{ type: core_2.Input, args: ['constraints.max',] },],
    'headerTemplate': [{ type: core_2.Input, args: ['headerTemplate',] },],
    'width': [{ type: core_2.Input, args: ['width',] },],
    'visible': [{ type: core_2.Input, args: ['visible',] },],
    'showAddButton': [{ type: core_2.Input, args: ['showAddButton',] },],
};
exports.KanbanColumnDirective = KanbanColumnDirective;
var KanbanColumnsDirective = (function (_super) {
    __extends(KanbanColumnsDirective, _super);
    function KanbanColumnsDirective(widget) {
        return _super.call(this, 'columns') || this;
    }
    return KanbanColumnsDirective;
}(core_1.ArrayTagElement));
KanbanColumnsDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-kanban>e-kanban-columns',
                queries: {
                    children: new core_2.ContentChildren(KanbanColumnDirective)
                }
            },] },
];
/** @nocollapse */
KanbanColumnsDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return KanbanComponent; }),] },] },
]; };
exports.KanbanColumnsDirective = KanbanColumnsDirective;
var KanbanComponent = (function (_super) {
    __extends(KanbanComponent, _super);
    function KanbanComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Kanban', el, cdRef, ['columns'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.dataSource_twoChange = new core_2.EventEmitter();
        _this.actionBegin_output = new core_2.EventEmitter();
        _this.actionComplete_output = new core_2.EventEmitter();
        _this.actionFailure_output = new core_2.EventEmitter();
        _this.beginEdit_output = new core_2.EventEmitter();
        _this.beforeCardSelect_output = new core_2.EventEmitter();
        _this.cardClick_output = new core_2.EventEmitter();
        _this.cardDrag_output = new core_2.EventEmitter();
        _this.cardDragStart_output = new core_2.EventEmitter();
        _this.cardDragStop_output = new core_2.EventEmitter();
        _this.cardDrop_output = new core_2.EventEmitter();
        _this.cardSelect_output = new core_2.EventEmitter();
        _this.cardDoubleClick_output = new core_2.EventEmitter();
        _this.cardSelecting_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.cellClick_output = new core_2.EventEmitter();
        _this.contextOpen_output = new core_2.EventEmitter();
        _this.contextClick_output = new core_2.EventEmitter();
        _this.dataBound_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.endDelete_output = new core_2.EventEmitter();
        _this.endEdit_output = new core_2.EventEmitter();
        _this.headerClick_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.swimlaneClick_output = new core_2.EventEmitter();
        _this.queryCellInfo_output = new core_2.EventEmitter();
        _this.toolbarClick_output = new core_2.EventEmitter();
        return _this;
    }
    return KanbanComponent;
}(core_1.EJComponents));
KanbanComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-kanban',
                template: ''
            },] },
];
/** @nocollapse */
KanbanComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
KanbanComponent.propDecorators = {
    'allowDragAndDrop_input': [{ type: core_2.Input, args: ['allowDragAndDrop',] },],
    'allowExternalDragAndDrop_input': [{ type: core_2.Input, args: ['allowExternalDragAndDrop',] },],
    'allowTitle_input': [{ type: core_2.Input, args: ['allowTitle',] },],
    'swimlaneSettings_input': [{ type: core_2.Input, args: ['swimlaneSettings',] },],
    'allowToggleColumn_input': [{ type: core_2.Input, args: ['allowToggleColumn',] },],
    'allowSearching_input': [{ type: core_2.Input, args: ['allowSearching',] },],
    'allowFiltering_input': [{ type: core_2.Input, args: ['allowFiltering',] },],
    'allowSelection_input': [{ type: core_2.Input, args: ['allowSelection',] },],
    'allowHover_input': [{ type: core_2.Input, args: ['allowHover',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'allowScrolling_input': [{ type: core_2.Input, args: ['allowScrolling',] },],
    'allowPrinting_input': [{ type: core_2.Input, args: ['allowPrinting',] },],
    'contextMenuSettings_input': [{ type: core_2.Input, args: ['contextMenuSettings',] },],
    'cardSettings_input': [{ type: core_2.Input, args: ['cardSettings',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enableTouch_input': [{ type: core_2.Input, args: ['enableTouch',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'enableTotalCount_input': [{ type: core_2.Input, args: ['enableTotalCount',] },],
    'editSettings_input': [{ type: core_2.Input, args: ['editSettings',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'keyField_input': [{ type: core_2.Input, args: ['keyField',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'minWidth_input': [{ type: core_2.Input, args: ['minWidth',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'keySettings_input': [{ type: core_2.Input, args: ['keySettings',] },],
    'scrollSettings_input': [{ type: core_2.Input, args: ['scrollSettings',] },],
    'searchSettings_input': [{ type: core_2.Input, args: ['searchSettings',] },],
    'selectionType_input': [{ type: core_2.Input, args: ['selectionType',] },],
    'tooltipSettings_input': [{ type: core_2.Input, args: ['tooltipSettings',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'showColumnWhenEmpty_input': [{ type: core_2.Input, args: ['showColumnWhenEmpty',] },],
    'swimlaneSettings_showCount_input': [{ type: core_2.Input, args: ['swimlaneSettings.showCount',] },],
    'swimlaneSettings_allowDragAndDrop_input': [{ type: core_2.Input, args: ['swimlaneSettings.allowDragAndDrop',] },],
    'swimlaneSettings_unassignedGroup_input': [{ type: core_2.Input, args: ['swimlaneSettings.unassignedGroup',] },],
    'swimlaneSettings_unassignedGroup_enable_input': [{ type: core_2.Input, args: ['swimlaneSettings.unassignedGroup.enable',] },],
    'swimlaneSettings_unassignedGroup_keys_input': [{ type: core_2.Input, args: ['swimlaneSettings.unassignedGroup.keys',] },],
    'contextMenuSettings_enable_input': [{ type: core_2.Input, args: ['contextMenuSettings.enable',] },],
    'contextMenuSettings_disableDefaultItems_input': [{ type: core_2.Input, args: ['contextMenuSettings.disableDefaultItems',] },],
    'contextMenuSettings_menuItems_input': [{ type: core_2.Input, args: ['contextMenuSettings.menuItems',] },],
    'cardSettings_template_input': [{ type: core_2.Input, args: ['cardSettings.template',] },],
    'cardSettings_colorMapping_input': [{ type: core_2.Input, args: ['cardSettings.colorMapping',] },],
    'cardSettings_externalDropTarget_input': [{ type: core_2.Input, args: ['cardSettings.externalDropTarget',] },],
    'editSettings_allowEditing_input': [{ type: core_2.Input, args: ['editSettings.allowEditing',] },],
    'editSettings_allowAdding_input': [{ type: core_2.Input, args: ['editSettings.allowAdding',] },],
    'editSettings_dialogTemplate_input': [{ type: core_2.Input, args: ['editSettings.dialogTemplate',] },],
    'editSettings_editMode_input': [{ type: core_2.Input, args: ['editSettings.editMode',] },],
    'editSettings_externalFormTemplate_input': [{ type: core_2.Input, args: ['editSettings.externalFormTemplate',] },],
    'editSettings_formPosition_input': [{ type: core_2.Input, args: ['editSettings.formPosition',] },],
    'fields_primaryKey_input': [{ type: core_2.Input, args: ['fields.primaryKey',] },],
    'fields_swimlaneKey_input': [{ type: core_2.Input, args: ['fields.swimlaneKey',] },],
    'fields_priority_input': [{ type: core_2.Input, args: ['fields.priority',] },],
    'fields_content_input': [{ type: core_2.Input, args: ['fields.content',] },],
    'fields_tag_input': [{ type: core_2.Input, args: ['fields.tag',] },],
    'fields_title_input': [{ type: core_2.Input, args: ['fields.title',] },],
    'fields_color_input': [{ type: core_2.Input, args: ['fields.color',] },],
    'fields_imageUrl_input': [{ type: core_2.Input, args: ['fields.imageUrl',] },],
    'fields_collapsibleCards_input': [{ type: core_2.Input, args: ['fields.collapsibleCards',] },],
    'fields_collapsibleCards_field_input': [{ type: core_2.Input, args: ['fields.collapsibleCards.field',] },],
    'fields_collapsibleCards_key_input': [{ type: core_2.Input, args: ['fields.collapsibleCards.key',] },],
    'scrollSettings_height_input': [{ type: core_2.Input, args: ['scrollSettings.height',] },],
    'scrollSettings_width_input': [{ type: core_2.Input, args: ['scrollSettings.width',] },],
    'scrollSettings_allowFreezeSwimlane_input': [{ type: core_2.Input, args: ['scrollSettings.allowFreezeSwimlane',] },],
    'searchSettings_fields_input': [{ type: core_2.Input, args: ['searchSettings.fields',] },],
    'searchSettings_key_input': [{ type: core_2.Input, args: ['searchSettings.key',] },],
    'searchSettings_operator_input': [{ type: core_2.Input, args: ['searchSettings.operator',] },],
    'searchSettings_ignoreCase_input': [{ type: core_2.Input, args: ['searchSettings.ignoreCase',] },],
    'tooltipSettings_enable_input': [{ type: core_2.Input, args: ['tooltipSettings.enable',] },],
    'tooltipSettings_template_input': [{ type: core_2.Input, args: ['tooltipSettings.template',] },],
    'columns_input': [{ type: core_2.Input, args: ['columns',] },],
    'customToolbarItems_input': [{ type: core_2.Input, args: ['customToolbarItems',] },],
    'filterSettings_input': [{ type: core_2.Input, args: ['filterSettings',] },],
    'stackedHeaderRows_input': [{ type: core_2.Input, args: ['stackedHeaderRows',] },],
    'workflows_input': [{ type: core_2.Input, args: ['workflows',] },],
    'contextMenuSettings_customMenuItems_input': [{ type: core_2.Input, args: ['contextMenuSettings.customMenuItems',] },],
    'editSettings_editItems_input': [{ type: core_2.Input, args: ['editSettings.editItems',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'dataSource_two': [{ type: core_2.Input, args: ['dataSource',] },],
    'dataSource_twoChange': [{ type: core_2.Output, args: ['dataSourceChange',] },],
    'actionBegin_output': [{ type: core_2.Output, args: ['actionBegin',] },],
    'actionComplete_output': [{ type: core_2.Output, args: ['actionComplete',] },],
    'actionFailure_output': [{ type: core_2.Output, args: ['actionFailure',] },],
    'beginEdit_output': [{ type: core_2.Output, args: ['beginEdit',] },],
    'beforeCardSelect_output': [{ type: core_2.Output, args: ['beforeCardSelect',] },],
    'cardClick_output': [{ type: core_2.Output, args: ['cardClick',] },],
    'cardDrag_output': [{ type: core_2.Output, args: ['cardDrag',] },],
    'cardDragStart_output': [{ type: core_2.Output, args: ['cardDragStart',] },],
    'cardDragStop_output': [{ type: core_2.Output, args: ['cardDragStop',] },],
    'cardDrop_output': [{ type: core_2.Output, args: ['cardDrop',] },],
    'cardSelect_output': [{ type: core_2.Output, args: ['cardSelect',] },],
    'cardDoubleClick_output': [{ type: core_2.Output, args: ['cardDoubleClick',] },],
    'cardSelecting_output': [{ type: core_2.Output, args: ['cardSelecting',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'cellClick_output': [{ type: core_2.Output, args: ['cellClick',] },],
    'contextOpen_output': [{ type: core_2.Output, args: ['contextOpen',] },],
    'contextClick_output': [{ type: core_2.Output, args: ['contextClick',] },],
    'dataBound_output': [{ type: core_2.Output, args: ['dataBound',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'endDelete_output': [{ type: core_2.Output, args: ['endDelete',] },],
    'endEdit_output': [{ type: core_2.Output, args: ['endEdit',] },],
    'headerClick_output': [{ type: core_2.Output, args: ['headerClick',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'swimlaneClick_output': [{ type: core_2.Output, args: ['swimlaneClick',] },],
    'queryCellInfo_output': [{ type: core_2.Output, args: ['queryCellInfo',] },],
    'toolbarClick_output': [{ type: core_2.Output, args: ['toolbarClick',] },],
    'tag_columns': [{ type: core_2.ContentChild, args: [KanbanColumnsDirective,] },],
};
exports.KanbanComponent = KanbanComponent;
exports.EJ_KANBAN_COMPONENTS = [KanbanComponent,
    KanbanColumnsDirective, KanbanColumnDirective];
//# sourceMappingURL=kanban.component.js.map
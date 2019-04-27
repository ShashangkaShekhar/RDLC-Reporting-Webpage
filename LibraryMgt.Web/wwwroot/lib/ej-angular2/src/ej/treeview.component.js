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
require("syncfusion-javascript/Scripts/ej/web/ej.treeview.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var TreeViewComponent = (function (_super) {
    __extends(TreeViewComponent, _super);
    function TreeViewComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'TreeView', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.beforeAdd_output = new core_2.EventEmitter();
        _this.beforeCollapse_output = new core_2.EventEmitter();
        _this.beforeCut_output = new core_2.EventEmitter();
        _this.beforeDelete_output = new core_2.EventEmitter();
        _this.beforeEdit_output = new core_2.EventEmitter();
        _this.beforeExpand_output = new core_2.EventEmitter();
        _this.beforeLoad_output = new core_2.EventEmitter();
        _this.beforePaste_output = new core_2.EventEmitter();
        _this.beforeSelect_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.inlineEditValidation_output = new core_2.EventEmitter();
        _this.keyPress_output = new core_2.EventEmitter();
        _this.loadError_output = new core_2.EventEmitter();
        _this.loadSuccess_output = new core_2.EventEmitter();
        _this.nodeAdd_output = new core_2.EventEmitter();
        _this.nodeCheck_output = new core_2.EventEmitter();
        _this.nodeClick_output = new core_2.EventEmitter();
        _this.nodeCollapse_output = new core_2.EventEmitter();
        _this.nodeCut_output = new core_2.EventEmitter();
        _this.nodeDelete_output = new core_2.EventEmitter();
        _this.nodeDrag_output = new core_2.EventEmitter();
        _this.nodeDragStart_output = new core_2.EventEmitter();
        _this.nodeDragStop_output = new core_2.EventEmitter();
        _this.nodeDropped_output = new core_2.EventEmitter();
        _this.nodeEdit_output = new core_2.EventEmitter();
        _this.nodeExpand_output = new core_2.EventEmitter();
        _this.nodePaste_output = new core_2.EventEmitter();
        _this.nodeSelect_output = new core_2.EventEmitter();
        _this.nodeUncheck_output = new core_2.EventEmitter();
        _this.nodeUnselect_output = new core_2.EventEmitter();
        _this.ready_output = new core_2.EventEmitter();
        return _this;
    }
    return TreeViewComponent;
}(core_1.EJComponents));
TreeViewComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-treeview',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
TreeViewComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
TreeViewComponent.propDecorators = {
    'allowDragAndDrop_input': [{ type: core_2.Input, args: ['allowDragAndDrop',] },],
    'allowDragAndDropAcrossControl_input': [{ type: core_2.Input, args: ['allowDragAndDropAcrossControl',] },],
    'allowDropSibling_input': [{ type: core_2.Input, args: ['allowDropSibling',] },],
    'allowDropChild_input': [{ type: core_2.Input, args: ['allowDropChild',] },],
    'allowEditing_input': [{ type: core_2.Input, args: ['allowEditing',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'allowMultiSelection_input': [{ type: core_2.Input, args: ['allowMultiSelection',] },],
    'autoCheck_input': [{ type: core_2.Input, args: ['autoCheck',] },],
    'autoCheckParentNode_input': [{ type: core_2.Input, args: ['autoCheckParentNode',] },],
    'checkedNodes_input': [{ type: core_2.Input, args: ['checkedNodes',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'enableAnimation_input': [{ type: core_2.Input, args: ['enableAnimation',] },],
    'enabled_input': [{ type: core_2.Input, args: ['enabled',] },],
    'enableMultipleExpand_input': [{ type: core_2.Input, args: ['enableMultipleExpand',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'expandedNodes_input': [{ type: core_2.Input, args: ['expandedNodes',] },],
    'expandOn_input': [{ type: core_2.Input, args: ['expandOn',] },],
    'fields_input': [{ type: core_2.Input, args: ['fields',] },],
    'fullRowSelect_input': [{ type: core_2.Input, args: ['fullRowSelect',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'htmlAttributes_input': [{ type: core_2.Input, args: ['htmlAttributes',] },],
    'loadOnDemand_input': [{ type: core_2.Input, args: ['loadOnDemand',] },],
    'selectedNode_input': [{ type: core_2.Input, args: ['selectedNode',] },],
    'selectedNodes_input': [{ type: core_2.Input, args: ['selectedNodes',] },],
    'showCheckbox_input': [{ type: core_2.Input, args: ['showCheckbox',] },],
    'sortSettings_input': [{ type: core_2.Input, args: ['sortSettings',] },],
    'template_input': [{ type: core_2.Input, args: ['template',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'fields_child_input': [{ type: core_2.Input, args: ['fields.child',] },],
    'fields_dataSource_input': [{ type: core_2.Input, args: ['fields.dataSource',] },],
    'fields_expanded_input': [{ type: core_2.Input, args: ['fields.expanded',] },],
    'fields_hasChild_input': [{ type: core_2.Input, args: ['fields.hasChild',] },],
    'fields_htmlAttribute_input': [{ type: core_2.Input, args: ['fields.htmlAttribute',] },],
    'fields_id_input': [{ type: core_2.Input, args: ['fields.id',] },],
    'fields_imageAttribute_input': [{ type: core_2.Input, args: ['fields.imageAttribute',] },],
    'fields_imageUrl_input': [{ type: core_2.Input, args: ['fields.imageUrl',] },],
    'fields_isChecked_input': [{ type: core_2.Input, args: ['fields.isChecked',] },],
    'fields_linkAttribute_input': [{ type: core_2.Input, args: ['fields.linkAttribute',] },],
    'fields_parentId_input': [{ type: core_2.Input, args: ['fields.parentId',] },],
    'fields_query_input': [{ type: core_2.Input, args: ['fields.query',] },],
    'fields_selected_input': [{ type: core_2.Input, args: ['fields.selected',] },],
    'fields_spriteCssClass_input': [{ type: core_2.Input, args: ['fields.spriteCssClass',] },],
    'fields_tableName_input': [{ type: core_2.Input, args: ['fields.tableName',] },],
    'fields_text_input': [{ type: core_2.Input, args: ['fields.text',] },],
    'sortSettings_allowSorting_input': [{ type: core_2.Input, args: ['sortSettings.allowSorting',] },],
    'sortSettings_sortOrder_input': [{ type: core_2.Input, args: ['sortSettings.sortOrder',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'beforeAdd_output': [{ type: core_2.Output, args: ['beforeAdd',] },],
    'beforeCollapse_output': [{ type: core_2.Output, args: ['beforeCollapse',] },],
    'beforeCut_output': [{ type: core_2.Output, args: ['beforeCut',] },],
    'beforeDelete_output': [{ type: core_2.Output, args: ['beforeDelete',] },],
    'beforeEdit_output': [{ type: core_2.Output, args: ['beforeEdit',] },],
    'beforeExpand_output': [{ type: core_2.Output, args: ['beforeExpand',] },],
    'beforeLoad_output': [{ type: core_2.Output, args: ['beforeLoad',] },],
    'beforePaste_output': [{ type: core_2.Output, args: ['beforePaste',] },],
    'beforeSelect_output': [{ type: core_2.Output, args: ['beforeSelect',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'inlineEditValidation_output': [{ type: core_2.Output, args: ['inlineEditValidation',] },],
    'keyPress_output': [{ type: core_2.Output, args: ['keyPress',] },],
    'loadError_output': [{ type: core_2.Output, args: ['loadError',] },],
    'loadSuccess_output': [{ type: core_2.Output, args: ['loadSuccess',] },],
    'nodeAdd_output': [{ type: core_2.Output, args: ['nodeAdd',] },],
    'nodeCheck_output': [{ type: core_2.Output, args: ['nodeCheck',] },],
    'nodeClick_output': [{ type: core_2.Output, args: ['nodeClick',] },],
    'nodeCollapse_output': [{ type: core_2.Output, args: ['nodeCollapse',] },],
    'nodeCut_output': [{ type: core_2.Output, args: ['nodeCut',] },],
    'nodeDelete_output': [{ type: core_2.Output, args: ['nodeDelete',] },],
    'nodeDrag_output': [{ type: core_2.Output, args: ['nodeDrag',] },],
    'nodeDragStart_output': [{ type: core_2.Output, args: ['nodeDragStart',] },],
    'nodeDragStop_output': [{ type: core_2.Output, args: ['nodeDragStop',] },],
    'nodeDropped_output': [{ type: core_2.Output, args: ['nodeDropped',] },],
    'nodeEdit_output': [{ type: core_2.Output, args: ['nodeEdit',] },],
    'nodeExpand_output': [{ type: core_2.Output, args: ['nodeExpand',] },],
    'nodePaste_output': [{ type: core_2.Output, args: ['nodePaste',] },],
    'nodeSelect_output': [{ type: core_2.Output, args: ['nodeSelect',] },],
    'nodeUncheck_output': [{ type: core_2.Output, args: ['nodeUncheck',] },],
    'nodeUnselect_output': [{ type: core_2.Output, args: ['nodeUnselect',] },],
    'ready_output': [{ type: core_2.Output, args: ['ready',] },],
};
exports.TreeViewComponent = TreeViewComponent;
exports.EJ_TREEVIEW_COMPONENTS = [TreeViewComponent
];
//# sourceMappingURL=treeview.component.js.map
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
require("syncfusion-javascript/Scripts/ej/web/ej.gantt.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var GanttComponent = (function (_super) {
    __extends(GanttComponent, _super);
    function GanttComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Gantt', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.dataSource_twoChange = new core_2.EventEmitter();
        _this.selectedRowIndex_twoChange = new core_2.EventEmitter();
        _this.splitterSettings_position_twoChange = new core_2.EventEmitter();
        _this.actionBegin_output = new core_2.EventEmitter();
        _this.actionComplete_output = new core_2.EventEmitter();
        _this.beginEdit_output = new core_2.EventEmitter();
        _this.cellSelecting_output = new core_2.EventEmitter();
        _this.cellSelected_output = new core_2.EventEmitter();
        _this.rowDrag_output = new core_2.EventEmitter();
        _this.rowDragStart_output = new core_2.EventEmitter();
        _this.rowDragStop_output = new core_2.EventEmitter();
        _this.collapsed_output = new core_2.EventEmitter();
        _this.collapsing_output = new core_2.EventEmitter();
        _this.contextMenuOpen_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.endEdit_output = new core_2.EventEmitter();
        _this.expanded_output = new core_2.EventEmitter();
        _this.expanding_output = new core_2.EventEmitter();
        _this.load_output = new core_2.EventEmitter();
        _this.queryCellInfo_output = new core_2.EventEmitter();
        _this.queryTaskbarInfo_output = new core_2.EventEmitter();
        _this.rowDataBound_output = new core_2.EventEmitter();
        _this.rowSelected_output = new core_2.EventEmitter();
        _this.rowSelecting_output = new core_2.EventEmitter();
        _this.taskbarEdited_output = new core_2.EventEmitter();
        _this.taskbarEditing_output = new core_2.EventEmitter();
        _this.taskbarClick_output = new core_2.EventEmitter();
        _this.toolbarClick_output = new core_2.EventEmitter();
        return _this;
    }
    return GanttComponent;
}(core_1.EJComponents));
GanttComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-gantt',
                template: ''
            },] },
];
/** @nocollapse */
GanttComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
GanttComponent.propDecorators = {
    'allowColumnResize_input': [{ type: core_2.Input, args: ['allowColumnResize',] },],
    'allowGanttChartEditing_input': [{ type: core_2.Input, args: ['allowGanttChartEditing',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'allowMultiSorting_input': [{ type: core_2.Input, args: ['allowMultiSorting',] },],
    'allowMultipleExporting_input': [{ type: core_2.Input, args: ['allowMultipleExporting',] },],
    'allowSelection_input': [{ type: core_2.Input, args: ['allowSelection',] },],
    'allowSorting_input': [{ type: core_2.Input, args: ['allowSorting',] },],
    'allowDragAndDrop_input': [{ type: core_2.Input, args: ['allowDragAndDrop',] },],
    'enablePredecessorValidation_input': [{ type: core_2.Input, args: ['enablePredecessorValidation',] },],
    'enableSerialNumber_input': [{ type: core_2.Input, args: ['enableSerialNumber',] },],
    'baselineColor_input': [{ type: core_2.Input, args: ['baselineColor',] },],
    'workMapping_input': [{ type: core_2.Input, args: ['workMapping',] },],
    'expandStateMapping_input': [{ type: core_2.Input, args: ['expandStateMapping',] },],
    'baselineEndDateMapping_input': [{ type: core_2.Input, args: ['baselineEndDateMapping',] },],
    'baselineStartDateMapping_input': [{ type: core_2.Input, args: ['baselineStartDateMapping',] },],
    'childMapping_input': [{ type: core_2.Input, args: ['childMapping',] },],
    'columnDialogFields_input': [{ type: core_2.Input, args: ['columnDialogFields',] },],
    'connectorLineBackground_input': [{ type: core_2.Input, args: ['connectorLineBackground',] },],
    'connectorlineWidth_input': [{ type: core_2.Input, args: ['connectorlineWidth',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'cellTooltipTemplate_input': [{ type: core_2.Input, args: ['cellTooltipTemplate',] },],
    'dragTooltip_input': [{ type: core_2.Input, args: ['dragTooltip',] },],
    'dateFormat_input': [{ type: core_2.Input, args: ['dateFormat',] },],
    'dayWorkingTime_input': [{ type: core_2.Input, args: ['dayWorkingTime',] },],
    'durationMapping_input': [{ type: core_2.Input, args: ['durationMapping',] },],
    'durationUnit_input': [{ type: core_2.Input, args: ['durationUnit',] },],
    'filterSettings_input': [{ type: core_2.Input, args: ['filterSettings',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'splitterSettings_input': [{ type: core_2.Input, args: ['splitterSettings',] },],
    'editSettings_input': [{ type: core_2.Input, args: ['editSettings',] },],
    'enableAltRow_input': [{ type: core_2.Input, args: ['enableAltRow',] },],
    'enableWBS_input': [{ type: core_2.Input, args: ['enableWBS',] },],
    'enableWBSPredecessor_input': [{ type: core_2.Input, args: ['enableWBSPredecessor',] },],
    'enableCollapseAll_input': [{ type: core_2.Input, args: ['enableCollapseAll',] },],
    'leftTaskLabelMapping_input': [{ type: core_2.Input, args: ['leftTaskLabelMapping',] },],
    'rightTaskLabelMapping_input': [{ type: core_2.Input, args: ['rightTaskLabelMapping',] },],
    'leftTaskLabelTemplate_input': [{ type: core_2.Input, args: ['leftTaskLabelTemplate',] },],
    'rightTaskLabelTemplate_input': [{ type: core_2.Input, args: ['rightTaskLabelTemplate',] },],
    'enableContextMenu_input': [{ type: core_2.Input, args: ['enableContextMenu',] },],
    'enableProgressBarResizing_input': [{ type: core_2.Input, args: ['enableProgressBarResizing',] },],
    'enableResize_input': [{ type: core_2.Input, args: ['enableResize',] },],
    'enableTaskbarDragTooltip_input': [{ type: core_2.Input, args: ['enableTaskbarDragTooltip',] },],
    'enableTaskbarTooltip_input': [{ type: core_2.Input, args: ['enableTaskbarTooltip',] },],
    'enableVirtualization_input': [{ type: core_2.Input, args: ['enableVirtualization',] },],
    'endDateMapping_input': [{ type: core_2.Input, args: ['endDateMapping',] },],
    'highlightWeekends_input': [{ type: core_2.Input, args: ['highlightWeekends',] },],
    'includeWeekend_input': [{ type: core_2.Input, args: ['includeWeekend',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'milestoneMapping_input': [{ type: core_2.Input, args: ['milestoneMapping',] },],
    'showColumnOptions_input': [{ type: core_2.Input, args: ['showColumnOptions',] },],
    'parentTaskbarTemplate_input': [{ type: core_2.Input, args: ['parentTaskbarTemplate',] },],
    'taskType_input': [{ type: core_2.Input, args: ['taskType',] },],
    'workUnit_input': [{ type: core_2.Input, args: ['workUnit',] },],
    'taskSchedulingMode_input': [{ type: core_2.Input, args: ['taskSchedulingMode',] },],
    'selectionType_input': [{ type: core_2.Input, args: ['selectionType',] },],
    'parentProgressbarBackground_input': [{ type: core_2.Input, args: ['parentProgressbarBackground',] },],
    'resourceUnitMapping_input': [{ type: core_2.Input, args: ['resourceUnitMapping',] },],
    'notesMapping_input': [{ type: core_2.Input, args: ['notesMapping',] },],
    'taskSchedulingModeMapping_input': [{ type: core_2.Input, args: ['taskSchedulingModeMapping',] },],
    'durationUnitMapping_input': [{ type: core_2.Input, args: ['durationUnitMapping',] },],
    'parentTaskbarBackground_input': [{ type: core_2.Input, args: ['parentTaskbarBackground',] },],
    'parentTaskIdMapping_input': [{ type: core_2.Input, args: ['parentTaskIdMapping',] },],
    'predecessorMapping_input': [{ type: core_2.Input, args: ['predecessorMapping',] },],
    'progressbarBackground_input': [{ type: core_2.Input, args: ['progressbarBackground',] },],
    'progressbarHeight_input': [{ type: core_2.Input, args: ['progressbarHeight',] },],
    'progressbarTooltipTemplate_input': [{ type: core_2.Input, args: ['progressbarTooltipTemplate',] },],
    'progressbarTooltipTemplateId_input': [{ type: core_2.Input, args: ['progressbarTooltipTemplateId',] },],
    'progressMapping_input': [{ type: core_2.Input, args: ['progressMapping',] },],
    'query_input': [{ type: core_2.Input, args: ['query',] },],
    'renderBaseline_input': [{ type: core_2.Input, args: ['renderBaseline',] },],
    'resourceIdMapping_input': [{ type: core_2.Input, args: ['resourceIdMapping',] },],
    'resourceInfoMapping_input': [{ type: core_2.Input, args: ['resourceInfoMapping',] },],
    'resourceNameMapping_input': [{ type: core_2.Input, args: ['resourceNameMapping',] },],
    'resources_input': [{ type: core_2.Input, args: ['resources',] },],
    'roundOffDayworkingTime_input': [{ type: core_2.Input, args: ['roundOffDayworkingTime',] },],
    'rowHeight_input': [{ type: core_2.Input, args: ['rowHeight',] },],
    'scheduleEndDate_input': [{ type: core_2.Input, args: ['scheduleEndDate',] },],
    'scheduleHeaderSettings_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings',] },],
    'scheduleStartDate_input': [{ type: core_2.Input, args: ['scheduleStartDate',] },],
    'showColumnChooser_input': [{ type: core_2.Input, args: ['showColumnChooser',] },],
    'showGridCellTooltip_input': [{ type: core_2.Input, args: ['showGridCellTooltip',] },],
    'showGridExpandCellTooltip_input': [{ type: core_2.Input, args: ['showGridExpandCellTooltip',] },],
    'showProgressStatus_input': [{ type: core_2.Input, args: ['showProgressStatus',] },],
    'showResourceNames_input': [{ type: core_2.Input, args: ['showResourceNames',] },],
    'showTaskNames_input': [{ type: core_2.Input, args: ['showTaskNames',] },],
    'sizeSettings_input': [{ type: core_2.Input, args: ['sizeSettings',] },],
    'sortSettings_input': [{ type: core_2.Input, args: ['sortSettings',] },],
    'splitterPosition_input': [{ type: core_2.Input, args: ['splitterPosition',] },],
    'startDateMapping_input': [{ type: core_2.Input, args: ['startDateMapping',] },],
    'taskbarBackground_input': [{ type: core_2.Input, args: ['taskbarBackground',] },],
    'taskbarEditingTooltipTemplate_input': [{ type: core_2.Input, args: ['taskbarEditingTooltipTemplate',] },],
    'taskbarEditingTooltipTemplateId_input': [{ type: core_2.Input, args: ['taskbarEditingTooltipTemplateId',] },],
    'taskbarHeight_input': [{ type: core_2.Input, args: ['taskbarHeight',] },],
    'taskbarTooltipTemplate_input': [{ type: core_2.Input, args: ['taskbarTooltipTemplate',] },],
    'taskbarTemplate_input': [{ type: core_2.Input, args: ['taskbarTemplate',] },],
    'milestoneTemplate_input': [{ type: core_2.Input, args: ['milestoneTemplate',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'taskbarTooltipTemplateId_input': [{ type: core_2.Input, args: ['taskbarTooltipTemplateId',] },],
    'taskIdMapping_input': [{ type: core_2.Input, args: ['taskIdMapping',] },],
    'taskNameMapping_input': [{ type: core_2.Input, args: ['taskNameMapping',] },],
    'toolbarSettings_input': [{ type: core_2.Input, args: ['toolbarSettings',] },],
    'treeColumnIndex_input': [{ type: core_2.Input, args: ['treeColumnIndex',] },],
    'selectionMode_input': [{ type: core_2.Input, args: ['selectionMode',] },],
    'validateManualTasksOnLinking_input': [{ type: core_2.Input, args: ['validateManualTasksOnLinking',] },],
    'weekendBackground_input': [{ type: core_2.Input, args: ['weekendBackground',] },],
    'workingTimeScale_input': [{ type: core_2.Input, args: ['workingTimeScale',] },],
    'workWeek_input': [{ type: core_2.Input, args: ['workWeek',] },],
    'viewType_input': [{ type: core_2.Input, args: ['viewType',] },],
    'groupCollection_input': [{ type: core_2.Input, args: ['groupCollection',] },],
    'resourceCollectionMapping_input': [{ type: core_2.Input, args: ['resourceCollectionMapping',] },],
    'taskCollectionMapping_input': [{ type: core_2.Input, args: ['taskCollectionMapping',] },],
    'groupIdMapping_input': [{ type: core_2.Input, args: ['groupIdMapping',] },],
    'groupNameMapping_input': [{ type: core_2.Input, args: ['groupNameMapping',] },],
    'dragTooltip_showTooltip_input': [{ type: core_2.Input, args: ['dragTooltip.showTooltip',] },],
    'dragTooltip_tooltipItems_input': [{ type: core_2.Input, args: ['dragTooltip.tooltipItems',] },],
    'dragTooltip_tooltipTemplate_input': [{ type: core_2.Input, args: ['dragTooltip.tooltipTemplate',] },],
    'splitterSettings_index_input': [{ type: core_2.Input, args: ['splitterSettings.index',] },],
    'editSettings_allowAdding_input': [{ type: core_2.Input, args: ['editSettings.allowAdding',] },],
    'editSettings_allowDeleting_input': [{ type: core_2.Input, args: ['editSettings.allowDeleting',] },],
    'editSettings_allowEditing_input': [{ type: core_2.Input, args: ['editSettings.allowEditing',] },],
    'editSettings_allowIndent_input': [{ type: core_2.Input, args: ['editSettings.allowIndent',] },],
    'editSettings_allowOutdent_input': [{ type: core_2.Input, args: ['editSettings.allowOutdent',] },],
    'editSettings_beginEditAction_input': [{ type: core_2.Input, args: ['editSettings.beginEditAction',] },],
    'editSettings_editMode_input': [{ type: core_2.Input, args: ['editSettings.editMode',] },],
    'editSettings_rowPosition_input': [{ type: core_2.Input, args: ['editSettings.rowPosition',] },],
    'editSettings_showDeleteConfirmDialog_input': [{ type: core_2.Input, args: ['editSettings.showDeleteConfirmDialog',] },],
    'scheduleHeaderSettings_dayHeaderFormat_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.dayHeaderFormat',] },],
    'scheduleHeaderSettings_hourHeaderFormat_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.hourHeaderFormat',] },],
    'scheduleHeaderSettings_minutesPerInterval_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.minutesPerInterval',] },],
    'scheduleHeaderSettings_monthHeaderFormat_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.monthHeaderFormat',] },],
    'scheduleHeaderSettings_scheduleHeaderType_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.scheduleHeaderType',] },],
    'scheduleHeaderSettings_timescaleStartDateMode_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.timescaleStartDateMode',] },],
    'scheduleHeaderSettings_weekendBackground_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.weekendBackground',] },],
    'scheduleHeaderSettings_weekHeaderFormat_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.weekHeaderFormat',] },],
    'scheduleHeaderSettings_yearHeaderFormat_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.yearHeaderFormat',] },],
    'scheduleHeaderSettings_timescaleUnitSize_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.timescaleUnitSize',] },],
    'scheduleHeaderSettings_weekStartDay_input': [{ type: core_2.Input, args: ['scheduleHeaderSettings.weekStartDay',] },],
    'sizeSettings_height_input': [{ type: core_2.Input, args: ['sizeSettings.height',] },],
    'sizeSettings_width_input': [{ type: core_2.Input, args: ['sizeSettings.width',] },],
    'toolbarSettings_showToolbar_input': [{ type: core_2.Input, args: ['toolbarSettings.showToolbar',] },],
    'toolbarSettings_toolbarItems_input': [{ type: core_2.Input, args: ['toolbarSettings.toolbarItems',] },],
    'addDialogFields_input': [{ type: core_2.Input, args: ['addDialogFields',] },],
    'editDialogFields_input': [{ type: core_2.Input, args: ['editDialogFields',] },],
    'holidays_input': [{ type: core_2.Input, args: ['holidays',] },],
    'selectedCellIndexes_input': [{ type: core_2.Input, args: ['selectedCellIndexes',] },],
    'stripLines_input': [{ type: core_2.Input, args: ['stripLines',] },],
    'filterSettings_filteredColumns_input': [{ type: core_2.Input, args: ['filterSettings.filteredColumns',] },],
    'sortSettings_sortedColumns_input': [{ type: core_2.Input, args: ['sortSettings.sortedColumns',] },],
    'toolbarSettings_customToolbarItems_input': [{ type: core_2.Input, args: ['toolbarSettings.customToolbarItems',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'dataSource_two': [{ type: core_2.Input, args: ['dataSource',] },],
    'dataSource_twoChange': [{ type: core_2.Output, args: ['dataSourceChange',] },],
    'selectedRowIndex_two': [{ type: core_2.Input, args: ['selectedRowIndex',] },],
    'selectedRowIndex_twoChange': [{ type: core_2.Output, args: ['selectedRowIndexChange',] },],
    'splitterSettings_position_two': [{ type: core_2.Input, args: ['splitterSettings.position',] },],
    'splitterSettings_position_twoChange': [{ type: core_2.Output, args: ['splitterSettings.positionChange',] },],
    'actionBegin_output': [{ type: core_2.Output, args: ['actionBegin',] },],
    'actionComplete_output': [{ type: core_2.Output, args: ['actionComplete',] },],
    'beginEdit_output': [{ type: core_2.Output, args: ['beginEdit',] },],
    'cellSelecting_output': [{ type: core_2.Output, args: ['cellSelecting',] },],
    'cellSelected_output': [{ type: core_2.Output, args: ['cellSelected',] },],
    'rowDrag_output': [{ type: core_2.Output, args: ['rowDrag',] },],
    'rowDragStart_output': [{ type: core_2.Output, args: ['rowDragStart',] },],
    'rowDragStop_output': [{ type: core_2.Output, args: ['rowDragStop',] },],
    'collapsed_output': [{ type: core_2.Output, args: ['collapsed',] },],
    'collapsing_output': [{ type: core_2.Output, args: ['collapsing',] },],
    'contextMenuOpen_output': [{ type: core_2.Output, args: ['contextMenuOpen',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'endEdit_output': [{ type: core_2.Output, args: ['endEdit',] },],
    'expanded_output': [{ type: core_2.Output, args: ['expanded',] },],
    'expanding_output': [{ type: core_2.Output, args: ['expanding',] },],
    'load_output': [{ type: core_2.Output, args: ['load',] },],
    'queryCellInfo_output': [{ type: core_2.Output, args: ['queryCellInfo',] },],
    'queryTaskbarInfo_output': [{ type: core_2.Output, args: ['queryTaskbarInfo',] },],
    'rowDataBound_output': [{ type: core_2.Output, args: ['rowDataBound',] },],
    'rowSelected_output': [{ type: core_2.Output, args: ['rowSelected',] },],
    'rowSelecting_output': [{ type: core_2.Output, args: ['rowSelecting',] },],
    'taskbarEdited_output': [{ type: core_2.Output, args: ['taskbarEdited',] },],
    'taskbarEditing_output': [{ type: core_2.Output, args: ['taskbarEditing',] },],
    'taskbarClick_output': [{ type: core_2.Output, args: ['taskbarClick',] },],
    'toolbarClick_output': [{ type: core_2.Output, args: ['toolbarClick',] },],
};
exports.GanttComponent = GanttComponent;
exports.EJ_GANTT_COMPONENTS = [GanttComponent
];
//# sourceMappingURL=gantt.component.js.map
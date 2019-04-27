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
require("syncfusion-javascript/Scripts/ej/web/ej.schedule.min");
var core_1 = require("./core");
var core_2 = require("@angular/core");
var ScheduleResourceDirective = (function (_super) {
    __extends(ScheduleResourceDirective, _super);
    function ScheduleResourceDirective(widget) {
        var _this = _super.call(this, []) || this;
        _this.parent = widget;
        return _this;
    }
    return ScheduleResourceDirective;
}(core_1.ComplexTagElement));
ScheduleResourceDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'e-resources>e-resource',
            },] },
];
/** @nocollapse */
ScheduleResourceDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ScheduleComponent; }),] },] },
]; };
ScheduleResourceDirective.propDecorators = {
    'field': [{ type: core_2.Input, args: ['field',] },],
    'title': [{ type: core_2.Input, args: ['title',] },],
    'name': [{ type: core_2.Input, args: ['name',] },],
    'allowMultiple': [{ type: core_2.Input, args: ['allowMultiple',] },],
    'resourceSettings': [{ type: core_2.Input, args: ['resourceSettings',] },],
    'resourceSettings_dataSource': [{ type: core_2.Input, args: ['resourceSettings.dataSource',] },],
    'resourceSettings_text': [{ type: core_2.Input, args: ['resourceSettings.text',] },],
    'resourceSettings_id': [{ type: core_2.Input, args: ['resourceSettings.id',] },],
    'resourceSettings_groupId': [{ type: core_2.Input, args: ['resourceSettings.groupId',] },],
    'resourceSettings_color': [{ type: core_2.Input, args: ['resourceSettings.color',] },],
    'resourceSettings_start': [{ type: core_2.Input, args: ['resourceSettings.start',] },],
    'resourceSettings_end': [{ type: core_2.Input, args: ['resourceSettings.end',] },],
    'resourceSettings_workWeek': [{ type: core_2.Input, args: ['resourceSettings.workWeek',] },],
    'resourceSettings_appointmentClass': [{ type: core_2.Input, args: ['resourceSettings.appointmentClass',] },],
};
exports.ScheduleResourceDirective = ScheduleResourceDirective;
var ScheduleResourcesDirective = (function (_super) {
    __extends(ScheduleResourcesDirective, _super);
    function ScheduleResourcesDirective(widget) {
        return _super.call(this, 'resources') || this;
    }
    return ScheduleResourcesDirective;
}(core_1.ArrayTagElement));
ScheduleResourcesDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: 'ej-schedule>e-resources',
                queries: {
                    children: new core_2.ContentChildren(ScheduleResourceDirective)
                }
            },] },
];
/** @nocollapse */
ScheduleResourcesDirective.ctorParameters = function () { return [
    { type: core_1.EJComponents, decorators: [{ type: core_2.Inject, args: [core_2.forwardRef(function () { return ScheduleComponent; }),] },] },
]; };
exports.ScheduleResourcesDirective = ScheduleResourcesDirective;
var ScheduleComponent = (function (_super) {
    __extends(ScheduleComponent, _super);
    function ScheduleComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'Schedule', el, cdRef, ['resources'], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.appointmentSettings_dataSource_twoChange = new core_2.EventEmitter();
        _this.currentView_twoChange = new core_2.EventEmitter();
        _this.currentDate_twoChange = new core_2.EventEmitter();
        _this.actionBegin_output = new core_2.EventEmitter();
        _this.actionComplete_output = new core_2.EventEmitter();
        _this.appointmentClick_output = new core_2.EventEmitter();
        _this.beforeAppointmentRemove_output = new core_2.EventEmitter();
        _this.beforeAppointmentChange_output = new core_2.EventEmitter();
        _this.appointmentHover_output = new core_2.EventEmitter();
        _this.beforeAppointmentCreate_output = new core_2.EventEmitter();
        _this.appointmentWindowOpen_output = new core_2.EventEmitter();
        _this.beforeContextMenuOpen_output = new core_2.EventEmitter();
        _this.cellClick_output = new core_2.EventEmitter();
        _this.cellDoubleClick_output = new core_2.EventEmitter();
        _this.cellHover_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.drag_output = new core_2.EventEmitter();
        _this.dragStart_output = new core_2.EventEmitter();
        _this.dragStop_output = new core_2.EventEmitter();
        _this.menuItemClick_output = new core_2.EventEmitter();
        _this.navigation_output = new core_2.EventEmitter();
        _this.queryCellInfo_output = new core_2.EventEmitter();
        _this.reminder_output = new core_2.EventEmitter();
        _this.resize_output = new core_2.EventEmitter();
        _this.resizeStart_output = new core_2.EventEmitter();
        _this.resizeStop_output = new core_2.EventEmitter();
        _this.overflowButtonClick_output = new core_2.EventEmitter();
        _this.overflowButtonHover_output = new core_2.EventEmitter();
        _this.keyDown_output = new core_2.EventEmitter();
        _this.appointmentCreated_output = new core_2.EventEmitter();
        _this.appointmentChanged_output = new core_2.EventEmitter();
        _this.appointmentRemoved_output = new core_2.EventEmitter();
        return _this;
    }
    return ScheduleComponent;
}(core_1.EJComponents));
ScheduleComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'ej-schedule',
                template: ''
            },] },
];
/** @nocollapse */
ScheduleComponent.ctorParameters = function () { return [
    { type: core_2.ElementRef, },
    { type: core_2.ChangeDetectorRef, },
    { type: core_2.IterableDiffers, },
    { type: core_2.KeyValueDiffers, },
]; };
ScheduleComponent.propDecorators = {
    'allowDragAndDrop_input': [{ type: core_2.Input, args: ['allowDragAndDrop',] },],
    'allowInline_input': [{ type: core_2.Input, args: ['allowInline',] },],
    'allowKeyboardNavigation_input': [{ type: core_2.Input, args: ['allowKeyboardNavigation',] },],
    'appointmentSettings_input': [{ type: core_2.Input, args: ['appointmentSettings',] },],
    'appointmentTemplateId_input': [{ type: core_2.Input, args: ['appointmentTemplateId',] },],
    'cssClass_input': [{ type: core_2.Input, args: ['cssClass',] },],
    'categorizeSettings_input': [{ type: core_2.Input, args: ['categorizeSettings',] },],
    'cellHeight_input': [{ type: core_2.Input, args: ['cellHeight',] },],
    'cellWidth_input': [{ type: core_2.Input, args: ['cellWidth',] },],
    'contextMenuSettings_input': [{ type: core_2.Input, args: ['contextMenuSettings',] },],
    'dateFormat_input': [{ type: core_2.Input, args: ['dateFormat',] },],
    'showAppointmentNavigator_input': [{ type: core_2.Input, args: ['showAppointmentNavigator',] },],
    'enableAppointmentResize_input': [{ type: core_2.Input, args: ['enableAppointmentResize',] },],
    'enableLoadOnDemand_input': [{ type: core_2.Input, args: ['enableLoadOnDemand',] },],
    'enablePersistence_input': [{ type: core_2.Input, args: ['enablePersistence',] },],
    'enableRTL_input': [{ type: core_2.Input, args: ['enableRTL',] },],
    'endHour_input': [{ type: core_2.Input, args: ['endHour',] },],
    'group_input': [{ type: core_2.Input, args: ['group',] },],
    'height_input': [{ type: core_2.Input, args: ['height',] },],
    'workHours_input': [{ type: core_2.Input, args: ['workHours',] },],
    'isDST_input': [{ type: core_2.Input, args: ['isDST',] },],
    'isResponsive_input': [{ type: core_2.Input, args: ['isResponsive',] },],
    'locale_input': [{ type: core_2.Input, args: ['locale',] },],
    'maxDate_input': [{ type: core_2.Input, args: ['maxDate',] },],
    'minDate_input': [{ type: core_2.Input, args: ['minDate',] },],
    'orientation_input': [{ type: core_2.Input, args: ['orientation',] },],
    'prioritySettings_input': [{ type: core_2.Input, args: ['prioritySettings',] },],
    'readOnly_input': [{ type: core_2.Input, args: ['readOnly',] },],
    'reminderSettings_input': [{ type: core_2.Input, args: ['reminderSettings',] },],
    'renderDates_input': [{ type: core_2.Input, args: ['renderDates',] },],
    'resourceHeaderTemplateId_input': [{ type: core_2.Input, args: ['resourceHeaderTemplateId',] },],
    'showAllDayRow_input': [{ type: core_2.Input, args: ['showAllDayRow',] },],
    'showWeekend_input': [{ type: core_2.Input, args: ['showWeekend',] },],
    'showCurrentTimeIndicator_input': [{ type: core_2.Input, args: ['showCurrentTimeIndicator',] },],
    'showHeaderBar_input': [{ type: core_2.Input, args: ['showHeaderBar',] },],
    'showLocationField_input': [{ type: core_2.Input, args: ['showLocationField',] },],
    'showTimeZoneFields_input': [{ type: core_2.Input, args: ['showTimeZoneFields',] },],
    'showQuickWindow_input': [{ type: core_2.Input, args: ['showQuickWindow',] },],
    'startHour_input': [{ type: core_2.Input, args: ['startHour',] },],
    'timeMode_input': [{ type: core_2.Input, args: ['timeMode',] },],
    'timeZone_input': [{ type: core_2.Input, args: ['timeZone',] },],
    'timeZoneCollection_input': [{ type: core_2.Input, args: ['timeZoneCollection',] },],
    'views_input': [{ type: core_2.Input, args: ['views',] },],
    'width_input': [{ type: core_2.Input, args: ['width',] },],
    'enableRecurrenceValidation_input': [{ type: core_2.Input, args: ['enableRecurrenceValidation',] },],
    'agendaViewSettings_input': [{ type: core_2.Input, args: ['agendaViewSettings',] },],
    'firstDayOfWeek_input': [{ type: core_2.Input, args: ['firstDayOfWeek',] },],
    'workWeek_input': [{ type: core_2.Input, args: ['workWeek',] },],
    'tooltipSettings_input': [{ type: core_2.Input, args: ['tooltipSettings',] },],
    'timeScale_input': [{ type: core_2.Input, args: ['timeScale',] },],
    'showDeleteConfirmationDialog_input': [{ type: core_2.Input, args: ['showDeleteConfirmationDialog',] },],
    'allDayCellsTemplateId_input': [{ type: core_2.Input, args: ['allDayCellsTemplateId',] },],
    'workCellsTemplateId_input': [{ type: core_2.Input, args: ['workCellsTemplateId',] },],
    'dateHeaderTemplateId_input': [{ type: core_2.Input, args: ['dateHeaderTemplateId',] },],
    'showOverflowButton_input': [{ type: core_2.Input, args: ['showOverflowButton',] },],
    'appointmentDragArea_input': [{ type: core_2.Input, args: ['appointmentDragArea',] },],
    'showNextPrevMonth_input': [{ type: core_2.Input, args: ['showNextPrevMonth',] },],
    'blockoutSettings_input': [{ type: core_2.Input, args: ['blockoutSettings',] },],
    'appointmentSettings_query_input': [{ type: core_2.Input, args: ['appointmentSettings.query',] },],
    'appointmentSettings_tableName_input': [{ type: core_2.Input, args: ['appointmentSettings.tableName',] },],
    'appointmentSettings_applyTimeOffset_input': [{ type: core_2.Input, args: ['appointmentSettings.applyTimeOffset',] },],
    'appointmentSettings_editFutureEventsOnly_input': [{ type: core_2.Input, args: ['appointmentSettings.editFutureEventsOnly',] },],
    'appointmentSettings_id_input': [{ type: core_2.Input, args: ['appointmentSettings.id',] },],
    'appointmentSettings_startTime_input': [{ type: core_2.Input, args: ['appointmentSettings.startTime',] },],
    'appointmentSettings_endTime_input': [{ type: core_2.Input, args: ['appointmentSettings.endTime',] },],
    'appointmentSettings_subject_input': [{ type: core_2.Input, args: ['appointmentSettings.subject',] },],
    'appointmentSettings_description_input': [{ type: core_2.Input, args: ['appointmentSettings.description',] },],
    'appointmentSettings_recurrence_input': [{ type: core_2.Input, args: ['appointmentSettings.recurrence',] },],
    'appointmentSettings_recurrenceRule_input': [{ type: core_2.Input, args: ['appointmentSettings.recurrenceRule',] },],
    'appointmentSettings_allDay_input': [{ type: core_2.Input, args: ['appointmentSettings.allDay',] },],
    'appointmentSettings_resourceFields_input': [{ type: core_2.Input, args: ['appointmentSettings.resourceFields',] },],
    'appointmentSettings_categorize_input': [{ type: core_2.Input, args: ['appointmentSettings.categorize',] },],
    'appointmentSettings_location_input': [{ type: core_2.Input, args: ['appointmentSettings.location',] },],
    'appointmentSettings_priority_input': [{ type: core_2.Input, args: ['appointmentSettings.priority',] },],
    'appointmentSettings_startTimeZone_input': [{ type: core_2.Input, args: ['appointmentSettings.startTimeZone',] },],
    'appointmentSettings_endTimeZone_input': [{ type: core_2.Input, args: ['appointmentSettings.endTimeZone',] },],
    'categorizeSettings_allowMultiple_input': [{ type: core_2.Input, args: ['categorizeSettings.allowMultiple',] },],
    'categorizeSettings_enable_input': [{ type: core_2.Input, args: ['categorizeSettings.enable',] },],
    'categorizeSettings_dataSource_input': [{ type: core_2.Input, args: ['categorizeSettings.dataSource',] },],
    'categorizeSettings_id_input': [{ type: core_2.Input, args: ['categorizeSettings.id',] },],
    'categorizeSettings_text_input': [{ type: core_2.Input, args: ['categorizeSettings.text',] },],
    'categorizeSettings_color_input': [{ type: core_2.Input, args: ['categorizeSettings.color',] },],
    'categorizeSettings_fontColor_input': [{ type: core_2.Input, args: ['categorizeSettings.fontColor',] },],
    'contextMenuSettings_enable_input': [{ type: core_2.Input, args: ['contextMenuSettings.enable',] },],
    'contextMenuSettings_menuItems_input': [{ type: core_2.Input, args: ['contextMenuSettings.menuItems',] },],
    'contextMenuSettings_menuItems_appointment_input': [{ type: core_2.Input, args: ['contextMenuSettings.menuItems.appointment',] },],
    'contextMenuSettings_menuItems_cells_input': [{ type: core_2.Input, args: ['contextMenuSettings.menuItems.cells',] },],
    'group_resources_input': [{ type: core_2.Input, args: ['group.resources',] },],
    'workHours_highlight_input': [{ type: core_2.Input, args: ['workHours.highlight',] },],
    'workHours_start_input': [{ type: core_2.Input, args: ['workHours.start',] },],
    'workHours_end_input': [{ type: core_2.Input, args: ['workHours.end',] },],
    'prioritySettings_enable_input': [{ type: core_2.Input, args: ['prioritySettings.enable',] },],
    'prioritySettings_dataSource_input': [{ type: core_2.Input, args: ['prioritySettings.dataSource',] },],
    'prioritySettings_text_input': [{ type: core_2.Input, args: ['prioritySettings.text',] },],
    'prioritySettings_value_input': [{ type: core_2.Input, args: ['prioritySettings.value',] },],
    'prioritySettings_template_input': [{ type: core_2.Input, args: ['prioritySettings.template',] },],
    'reminderSettings_enable_input': [{ type: core_2.Input, args: ['reminderSettings.enable',] },],
    'reminderSettings_alertBefore_input': [{ type: core_2.Input, args: ['reminderSettings.alertBefore',] },],
    'renderDates_start_input': [{ type: core_2.Input, args: ['renderDates.start',] },],
    'renderDates_end_input': [{ type: core_2.Input, args: ['renderDates.end',] },],
    'timeZoneCollection_dataSource_input': [{ type: core_2.Input, args: ['timeZoneCollection.dataSource',] },],
    'timeZoneCollection_text_input': [{ type: core_2.Input, args: ['timeZoneCollection.text',] },],
    'timeZoneCollection_id_input': [{ type: core_2.Input, args: ['timeZoneCollection.id',] },],
    'timeZoneCollection_value_input': [{ type: core_2.Input, args: ['timeZoneCollection.value',] },],
    'agendaViewSettings_daysInAgenda_input': [{ type: core_2.Input, args: ['agendaViewSettings.daysInAgenda',] },],
    'agendaViewSettings_dateColumnTemplateId_input': [{ type: core_2.Input, args: ['agendaViewSettings.dateColumnTemplateId',] },],
    'agendaViewSettings_timeColumnTemplateId_input': [{ type: core_2.Input, args: ['agendaViewSettings.timeColumnTemplateId',] },],
    'tooltipSettings_enable_input': [{ type: core_2.Input, args: ['tooltipSettings.enable',] },],
    'tooltipSettings_templateId_input': [{ type: core_2.Input, args: ['tooltipSettings.templateId',] },],
    'timeScale_enable_input': [{ type: core_2.Input, args: ['timeScale.enable',] },],
    'timeScale_minorSlotCount_input': [{ type: core_2.Input, args: ['timeScale.minorSlotCount',] },],
    'timeScale_majorSlot_input': [{ type: core_2.Input, args: ['timeScale.majorSlot',] },],
    'timeScale_minorSlotTemplateId_input': [{ type: core_2.Input, args: ['timeScale.minorSlotTemplateId',] },],
    'timeScale_majorSlotTemplateId_input': [{ type: core_2.Input, args: ['timeScale.majorSlotTemplateId',] },],
    'blockoutSettings_enable_input': [{ type: core_2.Input, args: ['blockoutSettings.enable',] },],
    'blockoutSettings_templateId_input': [{ type: core_2.Input, args: ['blockoutSettings.templateId',] },],
    'blockoutSettings_dataSource_input': [{ type: core_2.Input, args: ['blockoutSettings.dataSource',] },],
    'blockoutSettings_query_input': [{ type: core_2.Input, args: ['blockoutSettings.query',] },],
    'blockoutSettings_tableName_input': [{ type: core_2.Input, args: ['blockoutSettings.tableName',] },],
    'blockoutSettings_id_input': [{ type: core_2.Input, args: ['blockoutSettings.id',] },],
    'blockoutSettings_startTime_input': [{ type: core_2.Input, args: ['blockoutSettings.startTime',] },],
    'blockoutSettings_endTime_input': [{ type: core_2.Input, args: ['blockoutSettings.endTime',] },],
    'blockoutSettings_subject_input': [{ type: core_2.Input, args: ['blockoutSettings.subject',] },],
    'blockoutSettings_isBlockAppointment_input': [{ type: core_2.Input, args: ['blockoutSettings.isBlockAppointment',] },],
    'blockoutSettings_isAllDay_input': [{ type: core_2.Input, args: ['blockoutSettings.isAllDay',] },],
    'blockoutSettings_resourceId_input': [{ type: core_2.Input, args: ['blockoutSettings.resourceId',] },],
    'blockoutSettings_groupId_input': [{ type: core_2.Input, args: ['blockoutSettings.groupId',] },],
    'blockoutSettings_customStyle_input': [{ type: core_2.Input, args: ['blockoutSettings.customStyle',] },],
    'resources_input': [{ type: core_2.Input, args: ['resources',] },],
    'options': [{ type: core_2.Input, args: ['options',] },],
    'appointmentSettings_dataSource_two': [{ type: core_2.Input, args: ['appointmentSettings.dataSource',] },],
    'appointmentSettings_dataSource_twoChange': [{ type: core_2.Output, args: ['appointmentSettings.dataSourceChange',] },],
    'currentView_two': [{ type: core_2.Input, args: ['currentView',] },],
    'currentView_twoChange': [{ type: core_2.Output, args: ['currentViewChange',] },],
    'currentDate_two': [{ type: core_2.Input, args: ['currentDate',] },],
    'currentDate_twoChange': [{ type: core_2.Output, args: ['currentDateChange',] },],
    'actionBegin_output': [{ type: core_2.Output, args: ['actionBegin',] },],
    'actionComplete_output': [{ type: core_2.Output, args: ['actionComplete',] },],
    'appointmentClick_output': [{ type: core_2.Output, args: ['appointmentClick',] },],
    'beforeAppointmentRemove_output': [{ type: core_2.Output, args: ['beforeAppointmentRemove',] },],
    'beforeAppointmentChange_output': [{ type: core_2.Output, args: ['beforeAppointmentChange',] },],
    'appointmentHover_output': [{ type: core_2.Output, args: ['appointmentHover',] },],
    'beforeAppointmentCreate_output': [{ type: core_2.Output, args: ['beforeAppointmentCreate',] },],
    'appointmentWindowOpen_output': [{ type: core_2.Output, args: ['appointmentWindowOpen',] },],
    'beforeContextMenuOpen_output': [{ type: core_2.Output, args: ['beforeContextMenuOpen',] },],
    'cellClick_output': [{ type: core_2.Output, args: ['cellClick',] },],
    'cellDoubleClick_output': [{ type: core_2.Output, args: ['cellDoubleClick',] },],
    'cellHover_output': [{ type: core_2.Output, args: ['cellHover',] },],
    'create_output': [{ type: core_2.Output, args: ['create',] },],
    'destroy_output': [{ type: core_2.Output, args: ['destroy',] },],
    'drag_output': [{ type: core_2.Output, args: ['drag',] },],
    'dragStart_output': [{ type: core_2.Output, args: ['dragStart',] },],
    'dragStop_output': [{ type: core_2.Output, args: ['dragStop',] },],
    'menuItemClick_output': [{ type: core_2.Output, args: ['menuItemClick',] },],
    'navigation_output': [{ type: core_2.Output, args: ['navigation',] },],
    'queryCellInfo_output': [{ type: core_2.Output, args: ['queryCellInfo',] },],
    'reminder_output': [{ type: core_2.Output, args: ['reminder',] },],
    'resize_output': [{ type: core_2.Output, args: ['resize',] },],
    'resizeStart_output': [{ type: core_2.Output, args: ['resizeStart',] },],
    'resizeStop_output': [{ type: core_2.Output, args: ['resizeStop',] },],
    'overflowButtonClick_output': [{ type: core_2.Output, args: ['overflowButtonClick',] },],
    'overflowButtonHover_output': [{ type: core_2.Output, args: ['overflowButtonHover',] },],
    'keyDown_output': [{ type: core_2.Output, args: ['keyDown',] },],
    'appointmentCreated_output': [{ type: core_2.Output, args: ['appointmentCreated',] },],
    'appointmentChanged_output': [{ type: core_2.Output, args: ['appointmentChanged',] },],
    'appointmentRemoved_output': [{ type: core_2.Output, args: ['appointmentRemoved',] },],
    'tag_resources': [{ type: core_2.ContentChild, args: [ScheduleResourcesDirective,] },],
};
exports.ScheduleComponent = ScheduleComponent;
exports.EJ_SCHEDULE_COMPONENTS = [ScheduleComponent,
    ScheduleResourcesDirective, ScheduleResourceDirective];
//# sourceMappingURL=schedule.component.js.map
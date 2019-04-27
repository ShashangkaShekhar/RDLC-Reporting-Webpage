"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var grid_component_1 = require("./ej/grid.component");
var grid_groupcaption_template_1 = require("./ej/gridtemplates/grid.groupcaption.template");
var grid_edit_template_1 = require("./ej/gridtemplates/grid.edit.template");
var grid_details_template_1 = require("./ej/gridtemplates/grid.details.template");
var grid_summary_template_1 = require("./ej/gridtemplates/grid.summary.template");
var grid_row_template_1 = require("./ej/gridtemplates/grid.row.template");
var chart_component_1 = require("./ej/chart.component");
var diagram_component_1 = require("./ej/diagram.component");
var overview_component_1 = require("./ej/overview.component");
var sunburstchart_component_1 = require("./ej/sunburstchart.component");
var symbolpalette_component_1 = require("./ej/symbolpalette.component");
var heatmap_component_1 = require("./ej/heatmap.component");
var heatmaplegend_component_1 = require("./ej/heatmaplegend.component");
var rangenavigator_component_1 = require("./ej/rangenavigator.component");
var sparkline_component_1 = require("./ej/sparkline.component");
var bulletgraph_component_1 = require("./ej/bulletgraph.component");
var circulargauge_component_1 = require("./ej/circulargauge.component");
var lineargauge_component_1 = require("./ej/lineargauge.component");
var map_component_1 = require("./ej/map.component");
var treemap_component_1 = require("./ej/treemap.component");
var digitalgauge_component_1 = require("./ej/digitalgauge.component");
var spreadsheet_component_1 = require("./ej/spreadsheet.component");
var datepicker_component_1 = require("./ej/datepicker.component");
var gantt_component_1 = require("./ej/gantt.component");
var treegrid_component_1 = require("./ej/treegrid.component");
var colorpicker_component_1 = require("./ej/colorpicker.component");
var dialog_component_1 = require("./ej/dialog.component");
var scroller_component_1 = require("./ej/scroller.component");
var barcode_component_1 = require("./ej/barcode.component");
var pdfviewer_component_1 = require("./ej/pdfviewer.component");
var numerictextbox_component_1 = require("./ej/numerictextbox.component");
var currencytextbox_component_1 = require("./ej/currencytextbox.component");
var percentagetextbox_component_1 = require("./ej/percentagetextbox.component");
var timepicker_component_1 = require("./ej/timepicker.component");
var toolbar_component_1 = require("./ej/toolbar.component");
var menu_component_1 = require("./ej/menu.component");
var autocomplete_component_1 = require("./ej/autocomplete.component");
var maskedit_component_1 = require("./ej/maskedit.component");
var treeview_component_1 = require("./ej/treeview.component");
var schedule_component_1 = require("./ej/schedule.component");
var kanban_component_1 = require("./ej/kanban.component");
var ribbon_component_1 = require("./ej/ribbon.component");
var pivotgrid_component_1 = require("./ej/pivotgrid.component");
var pivotchart_component_1 = require("./ej/pivotchart.component");
var pivotschemadesigner_component_1 = require("./ej/pivotschemadesigner.component");
var pivotpager_component_1 = require("./ej/pivotpager.component");
var pivottreemap_component_1 = require("./ej/pivottreemap.component");
var pivotgauge_component_1 = require("./ej/pivotgauge.component");
var rating_component_1 = require("./ej/rating.component");
var listbox_component_1 = require("./ej/listbox.component");
var listview_component_1 = require("./ej/listview.component");
var rotator_component_1 = require("./ej/rotator.component");
var rte_component_1 = require("./ej/rte.component");
var dropdownlist_component_1 = require("./ej/dropdownlist.component");
var radialmenu_component_1 = require("./ej/radialmenu.component");
var signature_component_1 = require("./ej/signature.component");
var radialslider_component_1 = require("./ej/radialslider.component");
var tile_component_1 = require("./ej/tile.component");
var navigationdrawer_component_1 = require("./ej/navigationdrawer.component");
var accordion_component_1 = require("./ej/accordion.component");
var tab_component_1 = require("./ej/tab.component");
var checkbox_component_1 = require("./ej/checkbox.component");
var radiobutton_component_1 = require("./ej/radiobutton.component");
var togglebutton_component_1 = require("./ej/togglebutton.component");
var splitbutton_component_1 = require("./ej/splitbutton.component");
var datetimepicker_component_1 = require("./ej/datetimepicker.component");
var daterangepicker_component_1 = require("./ej/daterangepicker.component");
var progressbar_component_1 = require("./ej/progressbar.component");
var tagcloud_component_1 = require("./ej/tagcloud.component");
var button_component_1 = require("./ej/button.component");
var groupbutton_component_1 = require("./ej/groupbutton.component");
var tooltip_component_1 = require("./ej/tooltip.component");
var slider_component_1 = require("./ej/slider.component");
var fileexplorer_component_1 = require("./ej/fileexplorer.component");
var reportviewer_component_1 = require("./ej/reportviewer.component");
var splitter_component_1 = require("./ej/splitter.component");
var uploadbox_component_1 = require("./ej/uploadbox.component");
var waitingpopup_component_1 = require("./ej/waitingpopup.component");
var spellcheck_component_1 = require("./ej/spellcheck.component");
var template_1 = require("./ej/template");
__export(require("./ej/grid.component"));
var grid_groupcaption_template_2 = require("./ej/gridtemplates/grid.groupcaption.template");
exports.GridGroupcaptionTemplateDirective = grid_groupcaption_template_2.GridGroupcaptionTemplateDirective;
var grid_edit_template_2 = require("./ej/gridtemplates/grid.edit.template");
exports.GridEditTemplateDirective = grid_edit_template_2.GridEditTemplateDirective;
var grid_details_template_2 = require("./ej/gridtemplates/grid.details.template");
exports.GridDetailsTemplateDirective = grid_details_template_2.GridDetailsTemplateDirective;
var grid_summary_template_2 = require("./ej/gridtemplates/grid.summary.template");
exports.GridSummaryTemplateDirective = grid_summary_template_2.GridSummaryTemplateDirective;
var grid_row_template_2 = require("./ej/gridtemplates/grid.row.template");
exports.GridRowTemplateDirective = grid_row_template_2.GridRowTemplateDirective;
__export(require("./ej/chart.component"));
__export(require("./ej/diagram.component"));
__export(require("./ej/overview.component"));
__export(require("./ej/sunburstchart.component"));
__export(require("./ej/symbolpalette.component"));
__export(require("./ej/heatmap.component"));
__export(require("./ej/heatmaplegend.component"));
__export(require("./ej/rangenavigator.component"));
__export(require("./ej/sparkline.component"));
__export(require("./ej/bulletgraph.component"));
__export(require("./ej/circulargauge.component"));
__export(require("./ej/lineargauge.component"));
__export(require("./ej/map.component"));
__export(require("./ej/treemap.component"));
__export(require("./ej/digitalgauge.component"));
__export(require("./ej/spreadsheet.component"));
__export(require("./ej/datepicker.component"));
__export(require("./ej/gantt.component"));
__export(require("./ej/treegrid.component"));
__export(require("./ej/colorpicker.component"));
__export(require("./ej/dialog.component"));
__export(require("./ej/scroller.component"));
__export(require("./ej/barcode.component"));
__export(require("./ej/pdfviewer.component"));
__export(require("./ej/numerictextbox.component"));
__export(require("./ej/currencytextbox.component"));
__export(require("./ej/percentagetextbox.component"));
__export(require("./ej/timepicker.component"));
__export(require("./ej/toolbar.component"));
__export(require("./ej/menu.component"));
__export(require("./ej/autocomplete.component"));
__export(require("./ej/maskedit.component"));
__export(require("./ej/treeview.component"));
__export(require("./ej/schedule.component"));
__export(require("./ej/kanban.component"));
__export(require("./ej/ribbon.component"));
__export(require("./ej/pivotgrid.component"));
__export(require("./ej/pivotchart.component"));
__export(require("./ej/pivotschemadesigner.component"));
__export(require("./ej/pivotpager.component"));
__export(require("./ej/pivottreemap.component"));
__export(require("./ej/pivotgauge.component"));
__export(require("./ej/rating.component"));
__export(require("./ej/listbox.component"));
__export(require("./ej/listview.component"));
__export(require("./ej/rotator.component"));
__export(require("./ej/rte.component"));
__export(require("./ej/dropdownlist.component"));
__export(require("./ej/radialmenu.component"));
__export(require("./ej/signature.component"));
__export(require("./ej/radialslider.component"));
__export(require("./ej/tile.component"));
__export(require("./ej/navigationdrawer.component"));
__export(require("./ej/accordion.component"));
__export(require("./ej/tab.component"));
__export(require("./ej/checkbox.component"));
__export(require("./ej/radiobutton.component"));
__export(require("./ej/togglebutton.component"));
__export(require("./ej/splitbutton.component"));
__export(require("./ej/datetimepicker.component"));
__export(require("./ej/daterangepicker.component"));
__export(require("./ej/progressbar.component"));
__export(require("./ej/tagcloud.component"));
__export(require("./ej/button.component"));
__export(require("./ej/groupbutton.component"));
__export(require("./ej/tooltip.component"));
__export(require("./ej/slider.component"));
__export(require("./ej/fileexplorer.component"));
__export(require("./ej/reportviewer.component"));
__export(require("./ej/splitter.component"));
__export(require("./ej/uploadbox.component"));
__export(require("./ej/waitingpopup.component"));
__export(require("./ej/spellcheck.component"));
__export(require("./ej/core"));
var template_2 = require("./ej/template");
exports.EJTemplateDirective = template_2.EJTemplateDirective;
var EJ_COMPONENTS = [template_1.EJTemplateDirective, grid_component_1.EJ_GRID_COMPONENTS, grid_groupcaption_template_1.GridGroupcaptionTemplateDirective, grid_edit_template_1.GridEditTemplateDirective, grid_details_template_1.GridDetailsTemplateDirective, grid_summary_template_1.GridSummaryTemplateDirective, grid_row_template_1.GridRowTemplateDirective,
    chart_component_1.EJ_CHART_COMPONENTS, diagram_component_1.EJ_DIAGRAM_COMPONENTS, overview_component_1.EJ_OVERVIEW_COMPONENTS, sunburstchart_component_1.EJ_SUNBURSTCHART_COMPONENTS,
    symbolpalette_component_1.EJ_SYMBOLPALETTE_COMPONENTS, heatmap_component_1.EJ_HEATMAP_COMPONENTS, heatmaplegend_component_1.EJ_HEATMAPLEGEND_COMPONENTS, rangenavigator_component_1.EJ_RANGENAVIGATOR_COMPONENTS, sparkline_component_1.EJ_SPARKLINE_COMPONENTS,
    bulletgraph_component_1.EJ_BULLETGRAPH_COMPONENTS, circulargauge_component_1.EJ_CIRCULARGAUGE_COMPONENTS, lineargauge_component_1.EJ_LINEARGAUGE_COMPONENTS, map_component_1.EJ_MAP_COMPONENTS, treemap_component_1.EJ_TREEMAP_COMPONENTS,
    digitalgauge_component_1.EJ_DIGITALGAUGE_COMPONENTS, spreadsheet_component_1.EJ_SPREADSHEET_COMPONENTS, datepicker_component_1.EJ_DATEPICKER_COMPONENTS, gantt_component_1.EJ_GANTT_COMPONENTS, treegrid_component_1.EJ_TREEGRID_COMPONENTS,
    colorpicker_component_1.EJ_COLORPICKER_COMPONENTS, dialog_component_1.EJ_DIALOG_COMPONENTS, scroller_component_1.EJ_SCROLLER_COMPONENTS, barcode_component_1.EJ_BARCODE_COMPONENTS, pdfviewer_component_1.EJ_PDFVIEWER_COMPONENTS,
    numerictextbox_component_1.EJ_NUMERICTEXTBOX_COMPONENTS, currencytextbox_component_1.EJ_CURRENCYTEXTBOX_COMPONENTS, percentagetextbox_component_1.EJ_PERCENTAGETEXTBOX_COMPONENTS, timepicker_component_1.EJ_TIMEPICKER_COMPONENTS, toolbar_component_1.EJ_TOOLBAR_COMPONENTS,
    menu_component_1.EJ_MENU_COMPONENTS, autocomplete_component_1.EJ_AUTOCOMPLETE_COMPONENTS, maskedit_component_1.EJ_MASKEDIT_COMPONENTS, treeview_component_1.EJ_TREEVIEW_COMPONENTS, schedule_component_1.EJ_SCHEDULE_COMPONENTS,
    kanban_component_1.EJ_KANBAN_COMPONENTS, ribbon_component_1.EJ_RIBBON_COMPONENTS, pivotgrid_component_1.EJ_PIVOTGRID_COMPONENTS, pivotchart_component_1.EJ_PIVOTCHART_COMPONENTS, pivotschemadesigner_component_1.EJ_PIVOTSCHEMADESIGNER_COMPONENTS,
    pivotpager_component_1.EJ_PIVOTPAGER_COMPONENTS, pivottreemap_component_1.EJ_PIVOTTREEMAP_COMPONENTS, pivotgauge_component_1.EJ_PIVOTGAUGE_COMPONENTS, rating_component_1.EJ_RATING_COMPONENTS, listbox_component_1.EJ_LISTBOX_COMPONENTS,
    listview_component_1.EJ_LISTVIEW_COMPONENTS, rotator_component_1.EJ_ROTATOR_COMPONENTS, rte_component_1.EJ_RTE_COMPONENTS, dropdownlist_component_1.EJ_DROPDOWNLIST_COMPONENTS, radialmenu_component_1.EJ_RADIALMENU_COMPONENTS,
    signature_component_1.EJ_SIGNATURE_COMPONENTS, radialslider_component_1.EJ_RADIALSLIDER_COMPONENTS, tile_component_1.EJ_TILE_COMPONENTS, navigationdrawer_component_1.EJ_NAVIGATIONDRAWER_COMPONENTS, accordion_component_1.EJ_ACCORDION_COMPONENTS,
    tab_component_1.EJ_TAB_COMPONENTS, checkbox_component_1.EJ_CHECKBOX_COMPONENTS, radiobutton_component_1.EJ_RADIOBUTTON_COMPONENTS, togglebutton_component_1.EJ_TOGGLEBUTTON_COMPONENTS, splitbutton_component_1.EJ_SPLITBUTTON_COMPONENTS,
    datetimepicker_component_1.EJ_DATETIMEPICKER_COMPONENTS, daterangepicker_component_1.EJ_DATERANGEPICKER_COMPONENTS, progressbar_component_1.EJ_PROGRESSBAR_COMPONENTS, tagcloud_component_1.EJ_TAGCLOUD_COMPONENTS, button_component_1.EJ_BUTTON_COMPONENTS,
    groupbutton_component_1.EJ_GROUPBUTTON_COMPONENTS, tooltip_component_1.EJ_TOOLTIP_COMPONENTS, slider_component_1.EJ_SLIDER_COMPONENTS, fileexplorer_component_1.EJ_FILEEXPLORER_COMPONENTS, reportviewer_component_1.EJ_REPORTVIEWER_COMPONENTS,
    splitter_component_1.EJ_SPLITTER_COMPONENTS, uploadbox_component_1.EJ_UPLOADBOX_COMPONENTS, waitingpopup_component_1.EJ_WAITINGPOPUP_COMPONENTS, spellcheck_component_1.EJ_SPELLCHECK_COMPONENTS];
var EJAngular2Module = (function () {
    function EJAngular2Module() {
    }
    EJAngular2Module.forRoot = function () {
        return {
            ngModule: EJAngular2Module
        };
    };
    return EJAngular2Module;
}());
EJAngular2Module.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    EJ_COMPONENTS
                ],
                exports: [
                    EJ_COMPONENTS
                ]
            },] },
];
/** @nocollapse */
EJAngular2Module.ctorParameters = function () { return []; };
exports.EJAngular2Module = EJAngular2Module;
//# sourceMappingURL=index.js.map
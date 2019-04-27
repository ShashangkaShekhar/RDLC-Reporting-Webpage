(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('highcharts'), require('rxjs'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', 'highcharts', 'rxjs', '@angular/core'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.highcharts = {}),global.Highcharts,null,global.ng.core));
}(this, (function (exports,Highcharts,rxjs,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Chart = /** @class */ (function () {
        function Chart(options) {
            if (options === void 0) { options = { series: [] }; }
            this.options = options;
            this.refSubject = new rxjs.AsyncSubject();
            this.ref$ = this.refSubject.asObservable();
        }
        /**
         * Add Point
         * @param point         Highcharts.DataPoint, number touple or number
         * @param serieIndex    Index position of series. This defaults to 0.
         * @param redraw        Flag whether or not to redraw point. This defaults to true.
         * @param shift         Shift point to the start of series. This defaults to false.
         * @memberof Chart
         */
        /**
         * Add Point
         * \@memberof Chart
         * @param {?} point         Highcharts.DataPoint, number touple or number
         * @param {?=} serieIndex    Index position of series. This defaults to 0.
         * @param {?=} redraw        Flag whether or not to redraw point. This defaults to true.
         * @param {?=} shift         Shift point to the start of series. This defaults to false.
         * @return {?}
         */
        Chart.prototype.addPoint = /**
         * Add Point
         * \@memberof Chart
         * @param {?} point         Highcharts.DataPoint, number touple or number
         * @param {?=} serieIndex    Index position of series. This defaults to 0.
         * @param {?=} redraw        Flag whether or not to redraw point. This defaults to true.
         * @param {?=} shift         Shift point to the start of series. This defaults to false.
         * @return {?}
         */
        function (point, serieIndex, redraw, shift) {
            if (serieIndex === void 0) { serieIndex = 0; }
            if (redraw === void 0) { redraw = true; }
            if (shift === void 0) { shift = false; }
            this.ref$.subscribe(function (chart$$1) {
                if (chart$$1.series.length > serieIndex) {
                    chart$$1.series[serieIndex].addPoint(point, redraw, shift);
                }
            });
        };
        /**
         * Add Series
         * @param serie         Series Configuration
         * @param redraw        Flag whether or not to redraw series. This defaults to true.
         * @param animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
         * @memberof Chart
         */
        /**
         * Add Series
         * \@memberof Chart
         * @param {?} serie         Series Configuration
         * @param {?=} redraw        Flag whether or not to redraw series. This defaults to true.
         * @param {?=} animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
         * @return {?}
         */
        Chart.prototype.addSerie = /**
         * Add Series
         * \@memberof Chart
         * @param {?} serie         Series Configuration
         * @param {?=} redraw        Flag whether or not to redraw series. This defaults to true.
         * @param {?=} animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
         * @return {?}
         */
        function (serie, redraw, animation) {
            if (redraw === void 0) { redraw = true; }
            if (animation === void 0) { animation = false; }
            this.ref$.subscribe(function (chart$$1) {
                chart$$1.addSeries(serie, redraw, animation);
            });
        };
        /**
         * Remove Point
         * @param pointIndex    Index of Point
         * @param serieIndex    Specified Index of Series. Defaults to 0.
         * @memberof Chart
         */
        /**
         * Remove Point
         * \@memberof Chart
         * @param {?} pointIndex    Index of Point
         * @param {?=} serieIndex    Specified Index of Series. Defaults to 0.
         * @return {?}
         */
        Chart.prototype.removePoint = /**
         * Remove Point
         * \@memberof Chart
         * @param {?} pointIndex    Index of Point
         * @param {?=} serieIndex    Specified Index of Series. Defaults to 0.
         * @return {?}
         */
        function (pointIndex, serieIndex) {
            if (serieIndex === void 0) { serieIndex = 0; }
            this.ref$.subscribe(function (chart$$1) {
                if (chart$$1.series.length > serieIndex && chart$$1.series[serieIndex].data.length > pointIndex) {
                    chart$$1.series[serieIndex].removePoint(pointIndex, true);
                }
            });
        };
        /**
         * Remove Series
         * @param serieIndex    Index position of series to remove.
         * @memberof Chart
         */
        /**
         * Remove Series
         * \@memberof Chart
         * @param {?} serieIndex    Index position of series to remove.
         * @return {?}
         */
        Chart.prototype.removeSerie = /**
         * Remove Series
         * \@memberof Chart
         * @param {?} serieIndex    Index position of series to remove.
         * @return {?}
         */
        function (serieIndex) {
            this.ref$.subscribe(function (chart$$1) {
                if (chart$$1.series.length > serieIndex) {
                    chart$$1.series[serieIndex].remove(true);
                }
            });
        };
        /**
         * @param {?} el
         * @return {?}
         */
        Chart.prototype.init = /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            var _this = this;
            Highcharts.chart(el.nativeElement, this.options, function (chart$$1) {
                _this.refSubject.next(chart$$1);
                _this.ref = chart$$1;
                _this.refSubject.complete();
            });
        };
        /**
         * @return {?}
         */
        Chart.prototype.destroy = /**
         * @return {?}
         */
        function () {
            if (this.ref) {
                this.options = this.ref.options;
                this.ref.destroy();
                this.ref = undefined;
                // new init subject
                this.refSubject = new rxjs.AsyncSubject();
                this.ref$ = this.refSubject.asObservable();
            }
        };
        return Chart;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Felix Itzenplitz. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at
     * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
     */
    var   /**
     * @license
     * Copyright Felix Itzenplitz. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at
     * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
     */
    MapChart = /** @class */ (function () {
        function MapChart(options) {
            this.options = options;
            this.refSubject = new rxjs.AsyncSubject();
            this.ref$ = this.refSubject.asObservable();
        }
        /**
         * @param {?} el
         * @return {?}
         */
        MapChart.prototype.init = /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            var _this = this;
            Highcharts.mapChart(el.nativeElement, this.options, function (chart$$1) {
                _this.refSubject.next(chart$$1);
                _this.ref = chart$$1;
                _this.refSubject.complete();
            });
        };
        /**
         * @return {?}
         */
        MapChart.prototype.destroy = /**
         * @return {?}
         */
        function () {
            if (this.ref) {
                this.options = this.ref.options;
                this.ref.destroy();
                this.ref = undefined;
                // new init subject
                this.refSubject = new rxjs.AsyncSubject();
                this.ref$ = this.refSubject.asObservable();
            }
        };
        return MapChart;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Felix Itzenplitz. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at
     * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
     *
     * @author Felix Itzenplitz
     * @author Timothy A. Perez (contributor)
     */
    var   /**
     * @license
     * Copyright Felix Itzenplitz. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at
     * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
     *
     * @author Felix Itzenplitz
     * @author Timothy A. Perez (contributor)
     */
    StockChart = /** @class */ (function () {
        function StockChart(options) {
            if (options === void 0) { options = { series: [] }; }
            this.options = options;
            this.refSubject = new rxjs.AsyncSubject();
            this.ref$ = this.refSubject.asObservable();
        }
        /**
         * @param {?} el
         * @return {?}
         */
        StockChart.prototype.init = /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            var _this = this;
            Highcharts.stockChart(el.nativeElement, this.options, function (chart$$1) {
                _this.refSubject.next(chart$$1);
                _this.ref = chart$$1;
                _this.refSubject.complete();
            });
        };
        /**
         * @return {?}
         */
        StockChart.prototype.destroy = /**
         * @return {?}
         */
        function () {
            if (this.ref) {
                this.options = this.ref.options;
                this.ref.destroy();
                this.ref = undefined;
                // new init subject
                this.refSubject = new rxjs.AsyncSubject();
                this.ref$ = this.refSubject.asObservable();
            }
        };
        return StockChart;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChartDirective = /** @class */ (function () {
        function ChartDirective(el) {
            this.el = el;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ChartDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (!changes["chart"].isFirstChange()) {
                this.destroy();
                this.init();
            }
        };
        /**
         * @return {?}
         */
        ChartDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.init();
        };
        /**
         * @return {?}
         */
        ChartDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy();
        };
        /**
         * @return {?}
         */
        ChartDirective.prototype.init = /**
         * @return {?}
         */
        function () {
            if (this.chart instanceof Chart || this.chart instanceof StockChart || this.chart instanceof MapChart) {
                this.chart.init(this.el);
            }
        };
        /**
         * @return {?}
         */
        ChartDirective.prototype.destroy = /**
         * @return {?}
         */
        function () {
            if (this.chart instanceof Chart || this.chart instanceof StockChart || this.chart instanceof MapChart) {
                this.chart.destroy();
            }
        };
        ChartDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[chart]'
                    },] },
        ];
        /** @nocollapse */
        ChartDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ChartDirective.propDecorators = {
            chart: [{ type: core.Input }]
        };
        return ChartDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ HIGHCHARTS_MODULES = new core.InjectionToken('HighchartsModules');
    var ChartService = /** @class */ (function () {
        function ChartService(chartModules) {
            this.chartModules = chartModules;
        }
        /**
         * @return {?}
         */
        ChartService.prototype.initModules = /**
         * @return {?}
         */
        function () {
            this.chartModules.forEach(function (chartModule) {
                chartModule(Highcharts);
            });
        };
        ChartService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        ChartService.ctorParameters = function () { return [
            { type: Array, decorators: [{ type: core.Inject, args: [HIGHCHARTS_MODULES,] }] }
        ]; };
        return ChartService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ɵ0 = [];
    var ChartModule = /** @class */ (function () {
        function ChartModule(cs) {
            this.cs = cs;
            this.cs.initModules();
        }
        ChartModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [ChartDirective],
                        declarations: [ChartDirective],
                        providers: [
                            { provide: HIGHCHARTS_MODULES, useValue: ɵ0 },
                            ChartService
                        ]
                    },] },
        ];
        /** @nocollapse */
        ChartModule.ctorParameters = function () { return [
            { type: ChartService }
        ]; };
        return ChartModule;
    }());

    exports.Highcharts = Highcharts;
    exports.ChartModule = ChartModule;
    exports.HIGHCHARTS_MODULES = HIGHCHARTS_MODULES;
    exports.Chart = Chart;
    exports.StockChart = StockChart;
    exports.MapChart = MapChart;
    exports.ɵb = ChartDirective;
    exports.ɵa = ChartService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

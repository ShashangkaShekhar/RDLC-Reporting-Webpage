import * as Highcharts from 'highcharts';
import { chart, stockChart, mapChart } from 'highcharts';
export { Highcharts };
import { AsyncSubject } from 'rxjs';
import { Directive, ElementRef, Input, Inject, Injectable, InjectionToken, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Chart {
    /**
     * @param {?=} options
     */
    constructor(options = { series: [] }) {
        this.options = options;
        this.refSubject = new AsyncSubject();
        this.ref$ = this.refSubject.asObservable();
    }
    /**
     * Add Point
     * \@memberof Chart
     * @param {?} point         Highcharts.DataPoint, number touple or number
     * @param {?=} serieIndex    Index position of series. This defaults to 0.
     * @param {?=} redraw        Flag whether or not to redraw point. This defaults to true.
     * @param {?=} shift         Shift point to the start of series. This defaults to false.
     * @return {?}
     */
    addPoint(point, serieIndex = 0, redraw = true, shift = false) {
        this.ref$.subscribe(chart$$1 => {
            if (chart$$1.series.length > serieIndex) {
                chart$$1.series[serieIndex].addPoint(point, redraw, shift);
            }
        });
    }
    /**
     * Add Series
     * \@memberof Chart
     * @param {?} serie         Series Configuration
     * @param {?=} redraw        Flag whether or not to redraw series. This defaults to true.
     * @param {?=} animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
     * @return {?}
     */
    addSerie(serie, redraw = true, animation = false) {
        this.ref$.subscribe(chart$$1 => {
            chart$$1.addSeries(serie, redraw, animation);
        });
    }
    /**
     * Remove Point
     * \@memberof Chart
     * @param {?} pointIndex    Index of Point
     * @param {?=} serieIndex    Specified Index of Series. Defaults to 0.
     * @return {?}
     */
    removePoint(pointIndex, serieIndex = 0) {
        this.ref$.subscribe(chart$$1 => {
            if (chart$$1.series.length > serieIndex && chart$$1.series[serieIndex].data.length > pointIndex) {
                chart$$1.series[serieIndex].removePoint(pointIndex, true);
            }
        });
    }
    /**
     * Remove Series
     * \@memberof Chart
     * @param {?} serieIndex    Index position of series to remove.
     * @return {?}
     */
    removeSerie(serieIndex) {
        this.ref$.subscribe(chart$$1 => {
            if (chart$$1.series.length > serieIndex) {
                chart$$1.series[serieIndex].remove(true);
            }
        });
    }
    /**
     * @param {?} el
     * @return {?}
     */
    init(el) {
        chart(el.nativeElement, this.options, chart$$1 => {
            this.refSubject.next(chart$$1);
            this.ref = chart$$1;
            this.refSubject.complete();
        });
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined;
            // new init subject
            this.refSubject = new AsyncSubject();
            this.ref$ = this.refSubject.asObservable();
        }
    }
}

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
class MapChart {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
        this.refSubject = new AsyncSubject();
        this.ref$ = this.refSubject.asObservable();
    }
    /**
     * @param {?} el
     * @return {?}
     */
    init(el) {
        mapChart(el.nativeElement, this.options, chart$$1 => {
            this.refSubject.next(chart$$1);
            this.ref = chart$$1;
            this.refSubject.complete();
        });
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined;
            // new init subject
            this.refSubject = new AsyncSubject();
            this.ref$ = this.refSubject.asObservable();
        }
    }
}

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
class StockChart {
    /**
     * @param {?=} options
     */
    constructor(options = { series: [] }) {
        this.options = options;
        this.refSubject = new AsyncSubject();
        this.ref$ = this.refSubject.asObservable();
    }
    /**
     * @param {?} el
     * @return {?}
     */
    init(el) {
        stockChart(el.nativeElement, this.options, chart$$1 => {
            this.refSubject.next(chart$$1);
            this.ref = chart$$1;
            this.refSubject.complete();
        });
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined;
            // new init subject
            this.refSubject = new AsyncSubject();
            this.ref$ = this.refSubject.asObservable();
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ChartDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!changes["chart"].isFirstChange()) {
            this.destroy();
            this.init();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy();
    }
    /**
     * @return {?}
     */
    init() {
        if (this.chart instanceof Chart || this.chart instanceof StockChart || this.chart instanceof MapChart) {
            this.chart.init(this.el);
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.chart instanceof Chart || this.chart instanceof StockChart || this.chart instanceof MapChart) {
            this.chart.destroy();
        }
    }
}
ChartDirective.decorators = [
    { type: Directive, args: [{
                selector: '[chart]'
            },] },
];
/** @nocollapse */
ChartDirective.ctorParameters = () => [
    { type: ElementRef }
];
ChartDirective.propDecorators = {
    chart: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let /** @type {?} */ HIGHCHARTS_MODULES = new InjectionToken('HighchartsModules');
class ChartService {
    /**
     * @param {?} chartModules
     */
    constructor(chartModules) {
        this.chartModules = chartModules;
    }
    /**
     * @return {?}
     */
    initModules() {
        this.chartModules.forEach(chartModule => {
            chartModule(Highcharts);
        });
    }
}
ChartService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChartService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [HIGHCHARTS_MODULES,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = [];
class ChartModule {
    /**
     * @param {?} cs
     */
    constructor(cs) {
        this.cs = cs;
        this.cs.initModules();
    }
}
ChartModule.decorators = [
    { type: NgModule, args: [{
                exports: [ChartDirective],
                declarations: [ChartDirective],
                providers: [
                    { provide: HIGHCHARTS_MODULES, useValue: ɵ0 },
                    ChartService
                ]
            },] },
];
/** @nocollapse */
ChartModule.ctorParameters = () => [
    { type: ChartService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ChartModule, HIGHCHARTS_MODULES, Chart, StockChart, MapChart, ChartDirective as ɵb, ChartService as ɵa };

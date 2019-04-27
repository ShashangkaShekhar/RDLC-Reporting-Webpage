﻿/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '/lib/',
            'npmNode:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // highchart bundles
            'angular-highcharts': 'npm:angular-highcharts/angular-highcharts.umd.js',
            'highcharts': 'npm:highcharts/highcharts.src.js',
            
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

            //syncfusion bundles
            'jquery': 'npm:jquery/dist/jquery.min.js',
            'jsrender': 'npm:jsrender/jsrender.min.js',
            'jquery-validation': 'npm:jquery-validation/dist/jquery.validate.min.js',
            'syncfusion-javascript': 'npm:syncfusion-javascript',
            'ej-angular2': 'npm:ej-angular2',

            // other libraries
            'rxjs': 'npm:rxjs',
            'rxjs-compat': 'npm:rxjs-compat',
            'rxjs/operators': 'npm:rxjs/operators'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            'app': {
                main: 'main.js',
                defaultExtension: 'js',
                meta: {
                    '': {
                        format: 'cjs'
                    }
                }
            },
            'rxjs': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'rxjs/operators': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'ej-angular2': {
                main: './src/index.js'
            },
            'syncfusion-javascript': {
                defaultExtension: 'js'
            }
        }
    });
})(this);
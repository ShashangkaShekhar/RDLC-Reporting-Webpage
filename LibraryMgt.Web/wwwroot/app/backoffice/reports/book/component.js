"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var a,i=arguments.length,n=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;0<=s;s--)(a=e[s])&&(n=(i<3?a(n):3<i?a(t,r,n):a(t,r))||n);return 3<i&&n&&Object.defineProperty(t,r,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),router_1=require("@angular/router"),platform_browser_1=require("@angular/platform-browser"),angular_highcharts_1=require("angular-highcharts"),service_1=require("../../../shared/service"),BookReportsComponent=function(){function e(e,t,r){this.router=e,this.titleService=t,this._dataService=r,this.bookreturned=[],this.bookissued=[],this._getUrl="/api/report/getbookchart",this._getRUrl="/api/circulation/getreturnall",this._getIUrl="/api/circulation/getissueall"}return e.prototype.ngOnInit=function(){this.titleService.setTitle("Library System | Book Reports"),this.getChart(),this.returnedList()},e.prototype.getChart=function(){var o=this;this._dataService.getall(this._getUrl).subscribe(function(e){o.bchart=e;for(var t=[],r=0;r<o.bchart.length;r++)t.push({name:o.bchart[r].bname,y:o.bchart[r].nissue,sliced:!0,selected:!0});o.chart=new angular_highcharts_1.Chart({chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie",backgroundColor:null,options3d:{enabled:!0,alpha:45,beta:0}},title:{text:"Book Issued"},subtitle:{text:"Issued Pie-Chart!"},tooltip:{pointFormat:"{series.name}: <b>{point.y}</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",depth:35,dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"Total Issued",data:t}]})},function(e){})},e.prototype.returnedList=function(){var t=this;this._dataService.getall(this._getRUrl).subscribe(function(e){t.bookreturned=e},function(e){}),this._dataService.getall(this._getIUrl).subscribe(function(e){t.bookissued=e},function(e){})},e=__decorate([core_1.Component({selector:"chart",templateUrl:"./app/backoffice/reports/book/component.html",providers:[service_1.DataService]}),__metadata("design:paramtypes",[router_1.Router,platform_browser_1.Title,service_1.DataService])],e)}();exports.BookReportsComponent=BookReportsComponent;
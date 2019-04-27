"use strict";var __decorate=this&&this.__decorate||function(o,e,n,t){var r,c=arguments.length,p=c<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(o,e,n,t);else for(var a=o.length-1;0<=a;a--)(r=o[a])&&(p=(c<3?r(p):3<c?r(e,n,p):r(e,n))||p);return 3<c&&p&&Object.defineProperty(e,n,p),p};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),router_1=require("@angular/router"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),http_1=require("@angular/http"),angular_highcharts_1=require("angular-highcharts"),access_guard_1=require("../shared/guard/access.guard"),ej_angular2_1=require("ej-angular2"),component_1=require("./component"),component_2=require("./dashboard/component"),component_3=require("./book/books/component"),component_4=require("./book/authors/component"),component_5=require("./circulation/issue/component"),component_6=require("./circulation/return/component"),component_7=require("./book/categories/component"),component_8=require("./system/users/component"),component_9=require("./reports/book/component"),component_10=require("./reportviewer/component"),routes=[{path:"",component:component_1.BackofficeComponent,children:[{path:"",redirectTo:"dashboard"},{path:"dashboard",component:component_2.DashboardComponent},{path:"book/books",component:component_3.BooksComponent},{path:"book/authors",component:component_4.AuthorsComponent},{path:"book/categories",component:component_7.CategoriesComponent},{path:"circulation/issue",component:component_5.IssueComponent},{path:"circulation/return",component:component_6.ReturnComponent},{path:"system/users",component:component_8.UsersComponent,canActivate:[access_guard_1.AccessPermission]},{path:"reports/book",component:component_10.ReportViewerComponent}]}],BackofficeModule=function(){function o(){}return o=__decorate([core_1.NgModule({imports:[common_1.CommonModule,http_1.HttpModule,forms_1.FormsModule,forms_1.ReactiveFormsModule,ej_angular2_1.EJAngular2Module.forRoot(),router_1.RouterModule.forChild(routes),angular_highcharts_1.ChartModule],declarations:[component_1.BackofficeComponent,component_2.DashboardComponent,component_3.BooksComponent,component_4.AuthorsComponent,component_5.IssueComponent,component_6.ReturnComponent,component_7.CategoriesComponent,component_8.UsersComponent,component_9.BookReportsComponent,component_10.ReportViewerComponent],providers:[access_guard_1.AccessPermission],bootstrap:[component_1.BackofficeComponent]})],o)}();exports.BackofficeModule=BackofficeModule;
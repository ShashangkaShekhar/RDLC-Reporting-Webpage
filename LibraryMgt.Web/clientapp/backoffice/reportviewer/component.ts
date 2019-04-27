import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataService } from '../../shared/service';
declare let ej: any;

@Component({
    selector: 'ng-reportviewer',
    templateUrl: './app/backoffice/reportviewer/component.html',
    styleUrls: ['./app/backoffice/reportviewer/component.css'],
    providers: [DataService]
})

export class ReportViewerComponent {
    public serviceUrl: string;
    public reportPath: string;
    public serverUrl: string;
    public parameters: any;
    public toolbarSettings: any;
    public exportSettings: any;

    constructor() {
        this.serverUrl = 'http://localhost:50466/api/reportviewer';
        this.serviceUrl = 'http://localhost:50466/api/reportviewer';
        this.reportPath = 'reportfile\rptBooks.rdlc';
        this.toolbarSettings = { items: ej.ReportViewer.ToolbarItems.All & ~ej.ReportViewer.ToolbarItems.Parameters & ~ej.ReportViewer.ToolbarItems.Export };
    }
}

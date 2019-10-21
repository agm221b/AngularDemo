import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule, Routes } from '@angular/router';

import { AddBusComponent } from './app.addbuscomponent';
import { ShowBusesComponent } from './app.showbusescomponent';
import { AdminHomeComponent } from './app.adminhomecomponent';

import { ConfirmationDialogService } from './confirmation-dialog/app.confirmationservice';
import { ConfirmationDialogComponent } from './confirmation-dialog/app.confirmationcomponent';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
//{path: 'show/:text', component: ShowComponent},
const myroutes: Routes = [
    { path: '', redirectTo: 'adminhome', pathMatch: 'full' },
    { path: 'adminhome', component: AdminHomeComponent },
    { path: 'addbus', component: AddBusComponent },
    { path: 'showbuses', component: ShowBusesComponent },

];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(myroutes),
        NgxPaginationModule
        
    ],
    declarations: [
        AppComponent,
        AddBusComponent,
        ShowBusesComponent,
        AdminHomeComponent,
        ConfirmationDialogComponent
    ],
    providers: [ConfirmationDialogService],
    entryComponents: [ConfirmationDialogComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
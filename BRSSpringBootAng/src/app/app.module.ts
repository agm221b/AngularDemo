import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './app.errorcomponent';
import { AddBusComponent } from './app.addbuscomponent';
import { ShowBusesComponent } from './app.showbusescomponent';
import { AdminHomeComponent } from './app.adminhomecomponent';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './app.httperrorinterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {LoginComponent} from './app.logincomponent'
import { AddBookingComponent } from './app.addbookingcomponent';
import { ViewBookingsComponent } from './app.viewbookingscomponent';
import { CancelBookingComponent } from './app.cancelbookingcomponent';
import { CustomerHomeComponent } from './app.customerhomecomponent';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShowRunningBusesComponent } from './app.showrunningbusescomponent';
import { DatePipe } from '@angular/common'
import { AddPassengerComponent } from './app.addpassengercomponent';


import { AddUserComponent } from './app.addusercomponent';
import { ViewAllUsersComponent } from './app.viewalluserscomponent';


//{path: 'show/:text', component: ShowComponent},
const myroutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'addbus', component: AddBusComponent },
    { path: 'showbuses', component: ShowBusesComponent },
    { path: '**', component: ErrorComponent },
    { path: 'addbooking', component: AddBookingComponent },
    { path: 'viewbookings', component: ViewBookingsComponent },
    { path: 'cancelbooking/:bookingId', component: CancelBookingComponent },
    { path: 'customerhome', component: CustomerHomeComponent },
    { path: 'searchrunningbuses/:src/:dest/:journeydate', component: ShowRunningBusesComponent },
    { path: 'addpassenger/:busTransactionId', component: AddPassengerComponent },
    { path: 'adduser', component: AddUserComponent },
    { path: 'showusers', component: ViewAllUsersComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(myroutes),
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        NgxPaginationModule,
        NgbModule.forRoot(),
        ConfirmationPopoverModule.forRoot({ confirmButtonType: 'danger' })

    ],
    declarations: [
        AppComponent,
        AddBusComponent,
        ShowBusesComponent,
        AdminHomeComponent,
        LoginComponent,
        ErrorComponent,
        AddBookingComponent, ViewBookingsComponent, CancelBookingComponent,
        CustomerHomeComponent, ShowRunningBusesComponent, AddPassengerComponent
        , AddUserComponent, ViewAllUsersComponent
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
    },DatePipe],
    entryComponents: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
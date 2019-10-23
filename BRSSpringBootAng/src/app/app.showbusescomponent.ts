import { Component, OnInit } from '@angular/core';
import { BusService } from './_service/app.busservice';
import { Bus } from './_model/app.bus';
import { Router } from '@angular/router';



@Component({
    selector: 'showbuses',
    templateUrl: './_html/app.showbuses.html'
})

export class ShowBusesComponent implements OnInit {
    flag: boolean = true;

    busList: Bus[] = [];

    public popoverTitle:string='Delete Confirmation';
    public popoverMessage:string="Do you really want to delete the bus?";
    public confirmClicked:boolean=false;
    public cancelClicked:boolean=false;

    constructor(private service: BusService, private router: Router) {

    }

    ngOnInit() {
        this.service.getAllBuses().subscribe((data: Bus[]) => this.busList = data);
        
        
    }

    deleteBus(id: any): any {
        console.log(id);
        this.service.deleteBus(id).subscribe();
        location.reload();
        
    }

    
}
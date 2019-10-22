import { Component, OnInit } from '@angular/core';
import { BusService } from './_service/app.busservice';
import { Bus } from './_model/app.bus';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from './confirmation-dialog/app.confirmationservice'
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    selector: 'showbuses',
    templateUrl: './_html/app.showbuses.html'
})

export class ShowBusesComponent implements OnInit {
    flag: boolean = true;

    busList: Bus[] = [];

    constructor(private service: BusService, private router: Router, private confirmationservice: ConfirmationDialogService) {

    }

    ngOnInit() {
        this.service.getAllBuses().subscribe((data: Bus[]) => this.busList = data);
        
    }

    deleteBus(id: any): any {
        console.log(id);
        this.service.deleteBus(id).subscribe();
        location.reload();
        
    }

    openConfirmationDialog(id: any): any {
        console.log(id);
        this.confirmationservice.confirm('Please confirm..', 'Do you really want to ... ?', "", "", "sm", id)
            .then((confirmed) => console.log('User confirmed:', confirmed))
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
}
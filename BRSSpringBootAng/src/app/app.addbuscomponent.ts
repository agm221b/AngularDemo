import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ShowBusesComponent} from './app.showbusescomponent';
import { BusService } from './_service/app.busservice';

@Component({
    selector: 'addbus',
    templateUrl: './_html/app.addbus.html'
})

export class AddBusComponent {
    model: any = {};
    showBus : ShowBusesComponent;
    constructor(private service: BusService, private router: Router) { }

    addBus(): any { 
        this.service.addBus(this.model)
            .subscribe((data) => console.log(data));
             
            this.router.navigate(['/showbuses']);
            this.showBus.ngOnInit();
    }

    
}
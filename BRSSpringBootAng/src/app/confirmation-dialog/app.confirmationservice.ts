import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {BusService} from '../_service/app.busservice'
import { ConfirmationDialogComponent } from './app.confirmationcomponent';

@Injectable()
export class ConfirmationDialogService {

  constructor(private modalService: NgbModal, private service: BusService) { }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg' = 'sm', id:number): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationDialogComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    this.service.deleteBus(id);
    return modalRef.result;
  }

}

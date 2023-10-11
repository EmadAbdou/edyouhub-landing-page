import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { DownloadAppModalComponent } from 'src/app/Shared/components/download-app-modal/download-app-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private toaster: ToastrService,
    private modalService: BsModalService
    ) {}

  handleSuccessMessage(message: string): void {
    this.toaster.success(message, 'Success');
  }

  handleErrorMessage(error: any): void {
    this.toaster.error(error, 'Error');
  }

  openAppPopup(): void {
    this.modalService.show(DownloadAppModalComponent, { class: 'modal-md'});
  }

}

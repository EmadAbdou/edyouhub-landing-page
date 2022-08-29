import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private toaster: ToastrService,
    ) {}

  handleSuccessMessage(message: string): void {
    this.toaster.success(message, 'Success');
  }

  handleErrorMessage(error: any): void {
    this.toaster.error(error, 'Error');
  }

}

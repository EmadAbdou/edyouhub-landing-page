import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/Core/services/common.service';
import { ContactModalComponent } from 'src/app/Shared/components/contact-modal/contact-modal.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-fees-installment',
  templateUrl: './fees-installment.component.html',
  styleUrls: ['./fees-installment.component.scss'],
})
export class FeesInstallmentComponent implements OnInit, OnDestroy {

  feesForm: FormGroup;
  loading = false;
  subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private commonService: CommonService,
    private modalService: BsModalService
    ) {}

  ngOnInit(): void {
    this.initFeesForm();
  }

  initFeesForm(): void {
    this.feesForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      feesType: [null, [Validators.required]],
      numberOfStudent: ['', [Validators.required]],
      totalFees: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const DATA = new FormData();
    DATA.set('name', this.feesForm.get('name')?.value);
    DATA.set('email', this.feesForm.get('email')?.value);
    DATA.set('phone', this.feesForm.get('phone')?.value);
    DATA.set('contactFor', 'FEES-INSTALLMENT');
    DATA.set('feesType', this.feesForm.get('feesType')?.value);
    DATA.set('numberOfStudent', this.feesForm.get('numberOfStudent')?.value);
    DATA.set('totalFees', this.feesForm.get('totalFees')?.value);
    if (this.feesForm.valid) {
      this.loading = true;
      this.subscriptions.add(
        this.homeService
          .addFeesInstallmentRequest(DATA)
          .subscribe((response: any) => {
            if(response.success) {
              this.feesForm.reset();
              this.commonService.handleSuccessMessage('Request Sent Successfully')
            }
            this.loading = false;
          }, error => {
            this.loading = false;
            this.commonService.handleErrorMessage('Something Wrong Happened, Try again')
          })
      );
    }
  }

  onContactUsClicked(): void {
    this.modalService.show(ContactModalComponent, { class: 'modal-md'});
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

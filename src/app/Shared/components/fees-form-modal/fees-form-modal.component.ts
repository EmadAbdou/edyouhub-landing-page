import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/Core/services/common.service';
import { HomeService } from 'src/app/Modules/home/services/home.service';

@Component({
  selector: 'app-fees-form-modal',
  templateUrl: './fees-form-modal.component.html',
  styleUrls: ['./fees-form-modal.component.scss']
})
export class FeesFormModalComponent implements OnInit, OnDestroy {
  feesForm: FormGroup;
  loading = false;
  subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private commonService: CommonService,
    public bsModalRef: BsModalRef
    ) {}

  ngOnInit(): void {
    this.initFeesForm();
  }

  initFeesForm(): void {
    this.feesForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      area: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    const DATA = new FormData();
    DATA.set('name', this.feesForm.get('name')?.value);
    DATA.set('email', this.feesForm.get('email')?.value);
    DATA.set('phone', this.feesForm.get('phone')?.value);
    DATA.set('message', this.feesForm.get('message')?.value);
    if (this.feesForm.valid) {
      this.loading = true;
      this.subscriptions.add(
        this.homeService
          .sendContactRequest(DATA)
          .subscribe((response: any) => {
            if(response.success) {
              this.feesForm.reset();
              this.commonService.handleSuccessMessage('Message Sent Successfully');
              this.bsModalRef.hide();
            }
            this.loading = false;
          }, error => {
            this.loading = false;
            this.commonService.handleErrorMessage('Something Wrong Happened, Try again')
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}

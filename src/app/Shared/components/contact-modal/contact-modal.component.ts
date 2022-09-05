import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/Core/services/common.service';
import { HomeService } from 'src/app/Modules/home/services/home.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit, OnDestroy{

  contactForm: FormGroup;
  loading = false;
  subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private commonService: CommonService,
    public bsModalRef: BsModalRef
    ) {}

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const DATA = new FormData();
    DATA.set('name', this.contactForm.get('name')?.value);
    DATA.set('email', this.contactForm.get('email')?.value);
    DATA.set('phone', this.contactForm.get('phone')?.value);
    DATA.set('message', this.contactForm.get('message')?.value);
    if (this.contactForm.valid) {
      this.loading = true;
      this.subscriptions.add(
        this.homeService
          .sendContactRequest(DATA)
          .subscribe((response: any) => {
            if(response.success) {
              this.contactForm.reset();
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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/Core/services/common.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnDestroy{

  contactForm: FormGroup;
  loading = false;
  subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private commonService: CommonService
    ) {}

    ngOnInit(): void {
      this.initContactForm();
    }

    initContactForm(): void {
      this.contactForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        contactFor: ['', [Validators.required]],
        educationInstitutionName: ['', [Validators.required]],
      });
    }

    onSubmit(): void {
      const DATA = new FormData();
      DATA.set('name', this.contactForm.get('name')?.value);
      DATA.set('email', this.contactForm.get('email')?.value);
      DATA.set('phone', this.contactForm.get('phone')?.value);
      DATA.set('contactFor', this.contactForm.get('contactFor')?.value);
      DATA.set('educationInstitutionName', this.contactForm.get('educationInstitutionName')?.value);
      if (this.contactForm.valid) {
        this.loading = true;
        this.subscriptions.add(
          this.homeService
            .contactUs(DATA)
            .subscribe((response: any) => {
              if(response.success) {
                this.contactForm.reset();
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

    ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
    }

}

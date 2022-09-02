import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/Core/services/common.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-school-supplies',
  templateUrl: './school-supplies.component.html',
  styleUrls: ['./school-supplies.component.scss']
})
export class SchoolSuppliesComponent implements OnInit, OnDestroy{

  files: File[] = [];
  suppliesForm: FormGroup;
  loading = false;
  subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private commonService: CommonService
    ) {}

  ngOnInit(): void {
    this.initSuppliesForm();
  }

  onSelect(event: any): void {
    this.files = event.addedFiles;
  }

  onRemove(): void {
    this.files = [];
  }

  initSuppliesForm(): void {
    this.suppliesForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const DATA = new FormData();
    DATA.set('name', this.suppliesForm.get('name')?.value);
    DATA.set('email', this.suppliesForm.get('email')?.value);
    DATA.set('phone', this.suppliesForm.get('phone')?.value);
    DATA.set('contactFor', 'SUPPLIES');
    if(this.files.length) {
      DATA.set('attachment', this.files[0]);
    }
    if (this.suppliesForm.valid) {
      this.loading = true;
      this.subscriptions.add(
        this.homeService
          .addFeesInstallmentRequest(DATA)
          .subscribe((response: any) => {
            if(response.success) {
              this.suppliesForm.reset();
              this.files = [];
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

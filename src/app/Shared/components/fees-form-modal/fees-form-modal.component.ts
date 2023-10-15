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
  citiesData: any[] = [];
  areasData: any[] = [];
  subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private commonService: CommonService,
    public bsModalRef: BsModalRef
    ) {}

  ngOnInit(): void {
    this.initFeesForm();
    this.fetchAllCountries();
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

  fetchAllCountries(): void {
    this.subscriptions.add(
      this.homeService.fetchAllCountries().subscribe((response: any) => {
        if(response?.success) {
          this.fetchAllCities(response?.data[0]?.id);
        }
      },
      error => {
        console.log(error);
        
      })
    );
  }
  
  fetchAllCities(id: number): void {
    this.subscriptions.add(
      this.homeService.fetchAllCities(id).subscribe((response: any) => {
        if(response?.success) {
          this.citiesData = response?.data;
        }
      },
      error => {
        console.log(error);
      })
    );
  }

  onCityChange(event: any): void {
    this.subscriptions.add(
      this.homeService.fetchAllAreas(event.target.value).subscribe((response: any) => {
        if(response?.success) {
          this.areasData = response?.data;
        }
      }, error => {
        console.log(error);
      })
    )
  }

  onSubmit(): void {
    if (this.feesForm.valid) {
      this.loading = true;
      this.subscriptions.add(
        this.homeService
          .sendFeesRequest(this.feesForm?.value)
          .subscribe((response: any) => {
            if(response.success) {
              this.feesForm.reset();
              this.commonService.handleSuccessMessage('Message Sent Successfully, We will contact you soon');
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

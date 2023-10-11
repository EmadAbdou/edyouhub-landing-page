import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Core/services/common.service';

@Component({
  selector: 'app-business-accounts-section',
  templateUrl: './business-accounts-section.component.html',
  styleUrls: ['./business-accounts-section.component.scss']
})
export class BusinessAccountsSectionComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  openAppPopup(): void {
    this.commonService.openAppPopup();
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Core/services/common.service';

@Component({
  selector: 'app-events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.scss']
})
export class EventsSectionComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  openAppPopup(): void {
    this.commonService.openAppPopup();
  }

}

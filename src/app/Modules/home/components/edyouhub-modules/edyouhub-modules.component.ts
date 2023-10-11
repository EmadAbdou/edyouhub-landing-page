import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Core/services/common.service';

@Component({
  selector: 'app-edyouhub-modules',
  templateUrl: './edyouhub-modules.component.html',
  styleUrls: ['./edyouhub-modules.component.scss']
})
export class EdyouhubModulesComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  openAppPopup(): void {
    this.commonService.openAppPopup();
  }
  
}

import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/Core/services/common.service';
import { FeesFormModalComponent } from 'src/app/Shared/components/fees-form-modal/fees-form-modal.component';

@Component({
  selector: 'app-fees-section',
  templateUrl: './fees-section.component.html',
  styleUrls: ['./fees-section.component.scss']
})
export class FeesSectionComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  openFormPopup(): void {
    this.modalService.show(FeesFormModalComponent, { class: 'modal-md'});
  }
  
}

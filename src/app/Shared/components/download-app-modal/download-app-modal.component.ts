import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-download-app-modal',
  templateUrl: './download-app-modal.component.html',
  styleUrls: ['./download-app-modal.component.scss']
})
export class DownloadAppModalComponent implements OnInit {

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

}

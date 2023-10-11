import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-static-text-modal',
  templateUrl: './static-text-modal.component.html',
  styleUrls: ['./static-text-modal.component.scss']
})
export class StaticTextModalComponent implements OnInit {

  text: string = '';
  
  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

}

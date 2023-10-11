import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { StaticTextModalComponent } from 'src/app/Shared/components/static-text-modal/static-text-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  openTextPopup(text: string): void {
    this.modalService.show(StaticTextModalComponent, { class: 'modal-lg', initialState: { text } });
  }

}

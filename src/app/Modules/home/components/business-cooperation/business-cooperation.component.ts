import { Component, OnInit } from '@angular/core';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InfoModalComponent } from '../info-modal/info-modal.component';

@Component({
  selector: 'app-business-cooperation',
  templateUrl: './business-cooperation.component.html',
  styleUrls: ['./business-cooperation.component.scss'],
})
export class BusinessCooperationComponent implements OnInit {
  businessData = [
    {
      id: 1,
      img: 'assets/imgs/fees-icon.svg',
      title: 'Fees Installments',
      description: `Fees collection isn’t headache anymore EDYOUHUB allows parents to
      install the education fees on 12 months with ZERO% interest`,
    },
    {
      id: 2,
      img: 'assets/imgs/payment-icon.svg',
      title: 'Fees Payment',
      description: `We make it easy for parents to pay and make it easy for schools to
      collect We allow parents to save their time & pay fees by all ways`,
    },
    {
      id: 3,
      img: 'assets/imgs/supplies-icon.svg',
      title: 'School Supplies',
      description: `We help parents to save efforts and money EDYOUHUB will prepare all
      the required supplies lists by the school Parents can chose their
      lists simply to get it delivered`,
    },
  ];

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openInfoModal(i: number): void {
    const initialState: ModalOptions = {
      initialState: {
        cardData: this.businessData[i],
      },
      class: 'modal-lg',
    };
    this.modalService.show(InfoModalComponent, initialState);
  }

}

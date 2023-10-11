import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    FooterComponent
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }

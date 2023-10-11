import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';
import { DownloadAppModalComponent } from './components/download-app-modal/download-app-modal.component';
import { StaticTextModalComponent } from './components/static-text-modal/static-text-modal.component';
import { FeesFormModalComponent } from './components/fees-form-modal/fees-form-modal.component';

@NgModule({
  declarations: [
    ContactModalComponent,
    DownloadAppModalComponent,
    StaticTextModalComponent,
    FeesFormModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}

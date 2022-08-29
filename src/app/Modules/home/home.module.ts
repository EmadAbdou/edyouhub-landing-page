import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/Core/core.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FeesInstallmentComponent } from './components/fees-installment/fees-installment.component';
import { SchoolSuppliesComponent } from './components/school-supplies/school-supplies.component';
import { BusinessCooperationComponent } from './components/business-cooperation/business-cooperation.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InfoModalComponent } from './components/info-modal/info-modal.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FeesInstallmentComponent,
    SchoolSuppliesComponent,
    BusinessCooperationComponent,
    ContactUsComponent,
    InfoModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [HomePageComponent],
})
export class HomeModule {}

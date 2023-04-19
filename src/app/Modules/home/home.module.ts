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
import { SharedModule } from 'src/app/Shared/shared.module';
import { SmartRoadExhibitionComponent } from './components/smart-road-exhibition/smart-road-exhibition.component';

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
    SmartRoadExhibitionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [HomePageComponent],
})
export class HomeModule {}

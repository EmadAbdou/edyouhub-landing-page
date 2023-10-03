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
import { PreFooterSectionComponent } from './components/pre-footer-section/pre-footer-section.component';
import { FeaturesImagesSectionComponent } from './components/features-images-section/features-images-section.component';
import { CoursesSectionComponent } from './components/courses-section/courses-section.component';
import { EdyouhubModulesComponent } from './components/edyouhub-modules/edyouhub-modules.component';
import { EventsSectionComponent } from './components/events-section/events-section.component';
import { FeesSectionComponent } from './components/fees-section/fees-section.component';
import { BusinessAccountsSectionComponent } from './components/business-accounts-section/business-accounts-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

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
    PreFooterSectionComponent,
    FeaturesImagesSectionComponent,
    CoursesSectionComponent,
    EdyouhubModulesComponent,
    EventsSectionComponent,
    FeesSectionComponent,
    BusinessAccountsSectionComponent,
    ContactSectionComponent,
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

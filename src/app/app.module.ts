import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { NgOptimizedImage } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import { UploadFileComponent } from './stepper/upload-file/upload-file.component';
import { StepsModule } from 'primeng/steps';
import { HeaderSelectRowComponent } from './stepper/header-select-row/header-select-row.component';
import { MatchColumnsComponent } from './stepper/match-columns/match-columns.component';
import { ValidateDataComponent } from './stepper/validate-data/validate-data.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadService } from './upload.service';
import { ToolbarModule } from 'primeng/toolbar';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    UploadFileComponent,
    HeaderSelectRowComponent,
    MatchColumnsComponent,
    ValidateDataComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule,
    CardModule,
    TableModule,
    FileUploadModule,
    MenubarModule,
    NgOptimizedImage,
    StepsModule,
    ToolbarModule,
    RippleModule,
  ],
  providers: [MessageService, UploadService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFileComponent } from './stepper/upload-file/upload-file.component';
import { HeaderSelectRowComponent } from './stepper/header-select-row/header-select-row.component';
import { MatchColumnsComponent } from './stepper/match-columns/match-columns.component';
import { ValidateDataComponent } from './stepper/validate-data/validate-data.component';

const routes: Routes = [
  { path: '', component: UploadFileComponent },
  { path: 'header', component: HeaderSelectRowComponent },
  { path: 'columns', component: MatchColumnsComponent },
  { path: 'validate', component: ValidateDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

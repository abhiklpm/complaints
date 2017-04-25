import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { ComplaintForm } from './complaint-form';

@NgModule({
  declarations: [
    ComplaintForm,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintForm),
    HttpModule
  ],
  exports: [
    ComplaintForm
  ]
})
export class ComplaintFormModule {}

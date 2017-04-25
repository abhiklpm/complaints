import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewComplaint } from './new-complaint';

@NgModule({
  declarations: [
    NewComplaint,
  ],
  imports: [
    IonicPageModule.forChild(NewComplaint),
  ],
  exports: [
    NewComplaint
  ]
})
export class NewComplaintModule {}

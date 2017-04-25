import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComplaintService } from '../../providers/complaint-service';


@IonicPage()
@Component({
  selector: 'page-complaint-form',
  templateUrl: 'complaint-form.html',
  providers: [ComplaintService]
})
export class ComplaintForm {

  /*constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintForm');
  }*/

  private complaints : FormGroup;
  private data : ComplaintService;

  constructor( private formBuilder: FormBuilder, data: ComplaintService ) {
  	this.data = data;
    this.complaints = this.formBuilder.group({
      subject : ['', Validators.required],
      description : ['', Validators.required],
    });
  }

  saveData(){
  	this.data.addComplaints(this.complaints.value);
    console.log(this.data.getComplaints())
  }

}

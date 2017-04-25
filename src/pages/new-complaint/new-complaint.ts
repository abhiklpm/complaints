import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
   name: 'add-new-complaint'
})
@Component({
  selector: 'page-new-complaint',
  templateUrl: 'new-complaint.html',
})
export class NewComplaint {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewComplaint');
  }

}

import { Component } from '@angular/core';
import { IonicPage, Content, NavController} from 'ionic-angular';

@IonicPage({
   name: 'welcome'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
 
  }

  onLoadNewComplaint(page: string) {
  	if(!page) page = 'ComplaintForm';
  	this.navCtrl.push(page);
  }

}

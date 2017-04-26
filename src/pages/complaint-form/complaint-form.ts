import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { ComplaintService } from '../../providers/complaint-service';
//import { CameraService } from '../../providers/camera-service';


@IonicPage()
@Component({
	selector: 'page-complaint-form',
	templateUrl: 'complaint-form.html',
	providers: [ComplaintService, Camera]
})
export class ComplaintForm {

  private complaints : FormGroup;
  private data : ComplaintService;
  private camera : Camera;

  constructor( private formBuilder: FormBuilder, data: ComplaintService, camera: Camera ) {
  	this.data = data;
  	this.camera = camera;
  	this.complaints = this.formBuilder.group({
  		subject : ['', Validators.required],
  		description : ['', Validators.required],
  	});
  }

  takePicture(){
  	console.log(11111)
  	const options: CameraOptions = {
			quality: 75,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}
		this.camera.getPicture(options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			console.log('succeeeee')
			//let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			// Handle error
			console.log('errrrrrrr', err)
		});
  }

  saveData(){
  	this.data.addComplaints(this.complaints.value);
  	console.log(this.data.getComplaints())
  }

}

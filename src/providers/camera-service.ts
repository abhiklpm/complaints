/*import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class CameraService {	

	constructor(private camera: Camera) {
		this.camera = camera;
		console.log('Hello CameraService Provider');
	}

	takePicture(){
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
			let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			// Handle error
			console.log('errrrrrrr')
		});
	}

}
*/
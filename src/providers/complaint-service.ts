import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ComplaintService {
	private complaints: {subject: string, description: string}[] = [];

	constructor(private http: Http) {
		this.http = http;
  	}

	addComplaints(complaint: {subject: string, description: string}) {
		this.complaints.push(complaint);
	}

	getComplaints() {
		return this.complaints.slice();
	}

}

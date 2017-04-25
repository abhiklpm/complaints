export class ComplaintsService {
	private complaints: {subject: string, description: string}[] = [];

	addComplaints(complaint: {subject: string, description: string}) {
		this.complaints.push(complaint);
	}

	getComplaints() {
		return this.complaints.slice();
	}
}
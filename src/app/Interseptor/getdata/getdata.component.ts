import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-getdata',
	templateUrl: './getdata.component.html',
	styleUrls: [ './getdata.component.css' ]
})
export class GetdataComponent implements OnInit {
	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.dataService.getComments().subscribe((res) => {
			console.log(res);
		});
	}
}

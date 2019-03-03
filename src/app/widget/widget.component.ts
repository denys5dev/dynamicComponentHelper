import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-widget',
	templateUrl: './widget.component.html',
	styleUrls: [ './widget.component.scss' ]
})
export class WidgetComponent implements OnInit {
	title: string = 'default';
	constructor() {}

	ngOnInit() {}

	changeTitle(title: string) {
		this.title = title;
	}
}

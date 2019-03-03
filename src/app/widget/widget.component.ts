import { Component, OnInit } from '@angular/core';

import { ScriptStore } from './../extraLib';

@Component({
	selector: 'app-widget',
	templateUrl: './widget.component.html',
	styleUrls: [ './widget.component.scss' ]
})
export class WidgetComponent implements OnInit {
	config: string = 'default';
	constructor() {}

	ngOnInit() {}

	changeTitle(title: string) {
		this.config = title;

		ScriptStore[title].src.then((_) => {
			console.log(_);
			// Test
			let a = _.uniqBy([ 1, 1, 2, 2, 4 ]);
			console.log(a);
		});
	}
}

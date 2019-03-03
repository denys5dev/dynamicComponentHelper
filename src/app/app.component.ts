import {
	Component,
	ViewContainerRef,
	ComponentFactoryResolver,
	OnInit,
	ViewChild
} from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { AdHostDirective } from './ad-host.directive';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	@ViewChild(AdHostDirective) adHost: AdHostDirective;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver // private viewContainerRef: ViewContainerRef
	) {}

	ngOnInit() {}

	createComponent() {
		let component = this.componentFactoryResolver.resolveComponentFactory(
			WidgetComponent
		);

		let viewContainerRef = this.adHost.viewContainerRef;
		// viewContainerRef.clear();

		let componentRef = viewContainerRef.createComponent(component);

		(<WidgetComponent>componentRef.instance).changeTitle('lodash');
	}
}

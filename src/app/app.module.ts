import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { AdHostDirective } from './ad-host.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetdataComponent } from './Interseptor/getdata/getdata.component';
import { NotifierModule } from 'angular-notifier';
import { HttpErrorInterceptor } from './Interseptor/getdata/http-error.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		WidgetComponent,
		AdHostDirective,
		GetdataComponent
	],
	imports: [ BrowserModule, HttpClientModule, NotifierModule ],
	entryComponents: [ WidgetComponent ],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptor,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

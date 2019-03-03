import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { AdHostDirective } from './ad-host.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ AppComponent, WidgetComponent, AdHostDirective ],
	imports: [ BrowserModule, HttpClientModule ],
	entryComponents: [ WidgetComponent ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

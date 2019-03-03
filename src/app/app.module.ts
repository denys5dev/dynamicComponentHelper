import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { AdHostDirective } from './ad-host.directive';

@NgModule({
   declarations: [
      AppComponent,
      WidgetComponent,
      AdHostDirective
   ],
   imports: [
      BrowserModule
   ],
   entryComponents: [
      WidgetComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}

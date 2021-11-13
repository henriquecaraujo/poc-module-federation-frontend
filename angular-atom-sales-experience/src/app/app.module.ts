import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const salesExperienceFormComponent = createCustomElement(AppComponent, { injector })
    customElements.define('sales-experience-form', salesExperienceFormComponent);
  }

  ngDoBootstrap() { }
}

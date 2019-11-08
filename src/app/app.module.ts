import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpagesComponent } from './frontpages/frontpages.component';
import {FrontpagesModule} from "./frontpages/frontpages.module";
import { BackpagesComponent } from './backpages/backpages.component';
import {backpagesModule} from "./backpages/backpages.module";
import {HttpClientModule} from "@angular/common/http";
import {NbWindowModule} from "@nebular/theme";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AngularFontAwesomeModule} from "angular-font-awesome";

@NgModule({
  declarations: [
    AppComponent,
    FrontpagesComponent,
    BackpagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontpagesModule,
    backpagesModule,
    HttpClientModule,
    NbWindowModule.forRoot(),
    NgbModule,
    AngularFontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

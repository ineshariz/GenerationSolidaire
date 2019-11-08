import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {AppComponent} from "../app.component";
import {NgModule} from "@angular/core";
import { ListVolontaireComponent } from './list-volontaire/list-volontaire.component';
import {ContactlistComponent, ContactListContent} from './contactlist/contactlist.component';
import { AboutformComponent } from './aboutform/aboutform.component';
import { EventformComponent } from './eventform/eventform.component';
import {FormsModule} from "@angular/forms";
import {UploadService} from "../services/upload.service";
import {AboutService} from "../services/about.service";
import {NbLayoutDirectionService, NbOverlay, NbOverlayService, NbWindowModule, NbWindowService} from "@nebular/theme";
import {OverlayModule} from "@angular/cdk/overlay";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ContactService} from "../services/contact.service";
import {NotificationService} from "../services/notification.service";
import {EventService} from "../services/event.service";
import { BlogformComponent } from './blogform/blogform.component';
import {BlogService} from "../services/blog.service";
import {DatePipe} from "@angular/common";


@NgModule({
  declarations: [
  ListVolontaireComponent,
  ContactlistComponent,
    ContactListContent,
  AboutformComponent,
  EventformComponent,
  BlogformComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule

  ],
  providers: [UploadService,
    AboutService,
  ContactService,
    EventService,
  NotificationService,
  BlogService,
    DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [ContactListContent],
})
export class backpagesModule { }

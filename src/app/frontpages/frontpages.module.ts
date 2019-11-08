import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {AboutComponent} from "./about/about.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {HomeComponent, NgbdModalContent} from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "../services/user.service";
import { DonateComponent } from './donate/donate.component';
import { GalleryComponent } from './gallery/gallery.component';
import {ContactListContent} from "../backpages/contactlist/contactlist.component";

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    EventsComponent,
    DonateComponent,
    GalleryComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  entryComponents: [NgbdModalContent],
  bootstrap: [AppComponent]
})
export class FrontpagesModule { }

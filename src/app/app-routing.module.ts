import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontpagesComponent} from "./frontpages/frontpages.component";
import {AboutComponent} from "./frontpages/about/about.component";
import {HomeComponent} from "./frontpages/home/home.component";
import {BlogComponent} from "./frontpages/blog/blog.component";
import {ContactComponent} from "./frontpages/contact/contact.component";
import {EventsComponent} from "./frontpages/events/events.component";
import {BackpagesComponent} from "./backpages/backpages.component";
import {ListVolontaireComponent} from "./backpages/list-volontaire/list-volontaire.component";
import {AboutformComponent} from "./backpages/aboutform/aboutform.component";
import {EventformComponent} from "./backpages/eventform/eventform.component";
import {ContactlistComponent} from "./backpages/contactlist/contactlist.component";
import {DonateComponent} from "./frontpages/donate/donate.component";
import {GalleryComponent} from "./frontpages/gallery/gallery.component";
import {BlogformComponent} from "./backpages/blogform/blogform.component";

const routes: Routes = [
  {
    path: '',
    component: FrontpagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent
      }, {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'donate',
        component: DonateComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'events',
        component: EventsComponent
      }
      ]
  },
  {
    path: 'back',
    component: BackpagesComponent,
    children: [
      {
        path: 'listVolontaire',
        component: ListVolontaireComponent,
      },
      {
        path: 'aboutform',
        component: AboutformComponent,
      },
      {
        path: 'eventform',
        component: EventformComponent,
      },{
        path: 'blogform',
        component: BlogformComponent,
      },
      {
        path: 'contactlist',
        component: ContactlistComponent,
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

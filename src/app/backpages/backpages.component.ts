import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../services/notification.service";
import {Notif} from "../models/notif.model";

@Component({
  selector: 'app-backpages',
  templateUrl: './backpages.component.html',
  styleUrls: ['./backpages.component.css']
})
export class BackpagesComponent implements OnInit {
  notifs: Notif[];
  constructor(private notificationservice: NotificationService) { }

  ngOnInit() {
    this.notificationservice.getNotif()
      .subscribe(data => {
        console.log(data);
        this.notifs = data;
      });
  }

}

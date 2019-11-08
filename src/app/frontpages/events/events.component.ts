import { Component, OnInit } from '@angular/core';
import {Event} from "../../models/event.model";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];

  constructor(private eventservice: EventService) { }

  ngOnInit() {
    this.eventservice.getEvent()
      .subscribe(data => {
        console.log(data);
        this.events = data;
      });
  }

}

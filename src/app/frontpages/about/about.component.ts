import { Component, OnInit } from '@angular/core';
import {AboutService} from "../../services/about.service";
import {About} from "../../models/about.model";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: About;
  constructor(private aboutservice: AboutService) { }
  ngOnInit() {
    this.aboutservice.getAbout()
      .subscribe(data => {
          this.about = data;
      });
  }

}

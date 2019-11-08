import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../models/contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  today = new Date();

  constructor(private contactservice: ContactService) { }

  ngOnInit() {
  }

  createContact(): void {
    this.contact.date= this.today;
    this.contactservice.contactForm(this.contact).subscribe(
      data => {
        //   this.router.navigate(['/emploi']);
      }
    );
  }
}

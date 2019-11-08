
import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Contact} from "../../models/contact.model";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{name}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{contenu}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ContactListContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  contacts: Contact[];

  constructor(private modalService: NgbModal,
              private contactService: ContactService) {
  }

  ngOnInit(){
  this.contactService.getcontactList()
.subscribe(data => {
  console.log(data);
  this.contacts = data;
});
  }

open(contact)
{
  const modalRef = this.modalService.open(ContactListContent);
  modalRef.componentInstance.name = contact.sujet;
  modalRef.componentInstance.contenu =contact.contenu;

}
}

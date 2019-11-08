import { Component, OnInit } from '@angular/core';
import {Volontaire} from "../../models/Volontaire.model";
import {UserService} from "../../services/user.service";
import { Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NotificationService} from "../../services/notification.service";
import {Notif} from "../../models/notif.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  volontaire: Volontaire = new Volontaire();
notif: Notif = new Notif();
  constructor(private userService: UserService,
              private modalService: NgbModal,
              private notifService: NotificationService) {
  }

  ngOnInit() {
  }

  createForm(): void {
    this.userService.createForm(this.volontaire)
      .subscribe(data => {
        alert('demaande de volontaire envoyé avec succés.');
        this.notifService.aboutNotif(this.notif, this.volontaire).subscribe(
          data => {
            //   this.router.navigate(['/emploi']);
          }
        );
      });
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = '125 555 55 5 5 554 4 5';
  }
}


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Vous voulez faire un don?</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Voici le numero de RI8, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}




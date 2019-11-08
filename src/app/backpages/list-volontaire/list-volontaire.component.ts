import { Component, OnInit } from '@angular/core';
import {Volontaire} from "../../models/volontaire.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-list-volontaire',
  templateUrl: './list-volontaire.component.html',
  styleUrls: ['./list-volontaire.component.css']
})
export class ListVolontaireComponent implements OnInit {
  volontaires: Volontaire[];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getVolontaireEtat()
      .subscribe(data => {
        console.log(data);
        this.volontaires = data;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import {About} from "../../models/about.model";
import {UploadService} from "../../services/upload.service";
import {AboutService} from "../../services/about.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {EventService} from "../../services/event.service";
import {Event} from "../../models/event.model";

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {
  selectedPhoto: FileList;
  currentFileUploadPhoto: File = null;
  progressPhoto: { percentagePhoto: number } = { percentagePhoto: 0 };
  event: Event = new Event();
  today = new Date();

  constructor(private uploadService: UploadService,
              private eventService: EventService) { }

  ngOnInit() {
  }




  createEvent(): void {
console.log(this.event.dateFin);
this.event.dateModification= this.today;
this.event.etat=true;
this.event.dateFin=new Date(this.event.dateFin);
  //  this.uploadFilePhoto();
    this.eventService.eventForm(this.event).subscribe(
      data => {
        //   this.router.navigate(['/emploi']);
      }
    );
  }



  uploadFilePhoto(){
    this.progressPhoto.percentagePhoto = 0;
    this.currentFileUploadPhoto = this.selectedPhoto.item(0);
    console.log(this.currentFileUploadPhoto);
    this.uploadService.pushFileToStorageAbout(this.currentFileUploadPhoto).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progressPhoto.percentagePhoto = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.event.images = this.currentFileUploadPhoto.name;
    this.currentFileUploadPhoto= undefined;

  }


  selectPhoto(event) {
    this.selectedPhoto = event.target.files;
  }


}

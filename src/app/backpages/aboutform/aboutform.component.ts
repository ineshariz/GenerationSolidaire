import { Component, OnInit } from '@angular/core';
import {About} from "../../models/about.model";
import {Volontaire} from "../../models/volontaire.model";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {AboutService} from "../../services/about.service";
import {UploadService} from "../../services/upload.service";

@Component({
  selector: 'app-aboutform',
  templateUrl: './aboutform.component.html',
  styleUrls: ['./aboutform.component.css']
})
export class AboutformComponent implements OnInit {
  selectedPhoto: FileList;
  currentFileUploadPhoto: File = null;
  progressPhoto: { percentagePhoto: number } = { percentagePhoto: 0 };
  about: About = new About();
  constructor(private uploadService: UploadService, private aboutservice: AboutService) { }

  ngOnInit() {
  }




  createAbout(): void {
this.uploadFilePhoto();
this.aboutservice.aboutForm(this.about).subscribe(
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
  this.about.img= this.currentFileUploadPhoto.name;
  this.currentFileUploadPhoto= undefined;

}


selectPhoto(event) {
  this.selectedPhoto = event.target.files;
}


}

import { Component, OnInit } from '@angular/core';
import {UploadService} from "../../services/upload.service";
import {BlogService} from "../../services/blog.service";
import {Blog} from "../../models/blog.model";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {
  selectedPhoto: FileList;
  currentFileUploadPhoto: File = null;
  progressPhoto: { percentagePhoto: number } = { percentagePhoto: 0 };
  blog: Blog = new Blog();
  constructor(private uploadService: UploadService, private blogservice: BlogService) { }
  ngOnInit() {
  }

  createBlog(): void {
   // this.uploadFilePhoto();
    this.blogservice.blogForm(this.blog).subscribe(
      data => {
        //   this.router.navigate(['/emploi']);
      }
    );
  }


 /* uploadFilePhoto(){
    this.progressPhoto.percentagePhoto = 0;
    this.currentFileUploadPhoto = this.selectedPhoto.item(0);
    console.log(this.currentFileUploadPhoto);
    this.uploadService.pushFileToStorage(this.currentFileUploadPhoto).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progressPhoto.percentagePhoto = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.event.image = this.currentFileUploadPhoto.name;
    this.currentFileUploadPhoto= undefined;

  }


  selectPhoto(event) {
    this.selectedPhoto = event.target.files;
  }
  */


}


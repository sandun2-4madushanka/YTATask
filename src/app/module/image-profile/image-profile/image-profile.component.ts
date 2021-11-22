import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-profile',
  templateUrl: './image-profile.component.html',
  styleUrls: ['./image-profile.component.scss']
})
export class ImageProfileComponent implements OnInit {

  fileToUpload: any;
  imageUrl: any;
  commentList: any[] = [];
  imageDetailsForm!: FormGroup;
  private subscription: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(): void {
    this.imageDetailsForm = this.fb.group({
      comments: [''],
    });
  }

  handleFileInput(file: any): void {
    this.fileToUpload = file?.files[0];
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  addComments(): void {
    if (this.imageDetailsForm.value.comments) {
      let comment: any = {
        name: this.imageDetailsForm.value.comments,
      };
      if (comment !== null) {
        this.commentList.push(comment);
        this.imageDetailsForm.get('comments')?.reset();
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach((data: any) => data.unsubscribe());
  }

}

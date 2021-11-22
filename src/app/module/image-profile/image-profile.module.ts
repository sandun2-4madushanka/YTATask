import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageProfileRoutingModule } from './image-profile-routing.module';
import { ImageProfileComponent } from './image-profile/image-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ImageProfileComponent
  ],
  imports: [
    CommonModule,
    ImageProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ImageProfileModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageProfileComponent } from './image-profile/image-profile.component';

const routes: Routes = [

  { path: 'image-profile', component: ImageProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageProfileRoutingModule { }

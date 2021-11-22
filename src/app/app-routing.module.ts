import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageProfileComponent } from './module/image-profile/image-profile/image-profile.component';
import { LoginComponent } from './module/login/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  
  {
    path: '',
    component: LoginComponent,
    children: [{
      path: '',
      loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule)
    }]
  }, 
  {
    path: 'imagePost',
    component: ImageProfileComponent,
    children: [{
      path: '',
      loadChildren: () => import('./module/image-profile/image-profile.module').then(m => m.ImageProfileModule)
    }]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

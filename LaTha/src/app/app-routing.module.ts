import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/shared/main-layout/main-layout.component';
import { SignInOutComponent } from './Components/sign-in-out/sign-in-out.component';
import { HomeComponent } from './Components/home/home.component';



const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent,
    children: [
      {
        path:'',
        component: HomeComponent,
        title: 'Trang chủ'
      },
      {
        path:'Đăng nhập',
        component: SignInOutComponent,
        title:'Đăng nhập'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

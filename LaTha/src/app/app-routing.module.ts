import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/shared/main-layout/main-layout.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

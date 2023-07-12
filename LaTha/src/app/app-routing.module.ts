import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/shared/main-layout/main-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { KhamphaComponent } from './Components/khampha/khampha.component';
import { KhuyenmaiComponent } from './Components/khuyenmai/khuyenmai.component';
import { DuyTanComponent } from './Components/duy-tan/duy-tan.component';



const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent,
    children: [
      {
        path:'',
        component: HomeComponent,
        title: 'Lang Thang cùng LaTha'
      },
      {
        path:'khampha',
        component:KhamphaComponent,
        title:"Khám phá những review chất lượng"
      },
      {
        path:'khuyenmai',
        component:KhuyenmaiComponent,
        title:"Các chương trình khuyến mãi"
      },
      {
        path:'Duytan',
        component:DuyTanComponent,
        title:"Ăn tại Duy Tân"
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

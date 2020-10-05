import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseTypeComponent } from './components/choose-type/choose-type.component';
// import { HomeComponent } from '';


const routes: Routes = [
  {
    path: 'home',
    loadChildren:'./components/home/home/home.module#HomeModule'
  },
  {
    path:'choose-type',
    loadChildren:'./components/choose-type/choose-type/choose-type.module#ChooseTypeModule'
  },{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

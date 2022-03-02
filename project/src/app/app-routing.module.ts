import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './car/add/add.component';
import { CarComponent } from './car/car.component';
import { EditComponent } from './car/edit/edit.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'car/add',
    component: AddComponent
  },
  {
    path: 'car/edit/:id',
    component: EditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

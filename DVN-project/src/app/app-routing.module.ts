import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddComponent } from './user/add/add.component';
import { EditComponent } from './user/edit/edit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'user/add', component: AddComponent
  },
  {
    path: 'user/edit/:id', component: EditComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },
  {
    path:'' ,redirectTo:'/home', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

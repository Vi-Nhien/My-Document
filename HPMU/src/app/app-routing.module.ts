import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LienHeComponent } from './lien-he/lien-he.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TrangTinTucComponent } from './trang-tin-tuc/trang-tin-tuc.component';


const routes: Routes = [
  {path:'Trang-chu', component: TrangChuComponent},
  {path: 'Lien-he-gop-y', component: LienHeComponent},
  {path: 'Tin-tuc', component: TrangTinTucComponent},
  {path:'', redirectTo:'Trang-chu', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

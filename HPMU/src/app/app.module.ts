import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { SuKienHPMUComponent } from './trang-chu/su-kien-hpmu/su-kien-hpmu.component';
import { TinTucHpmuComponent } from './trang-chu/tin-tuc-hpmu/tin-tuc-hpmu.component';
import { LienKetHpmuComponent } from './trang-chu/lien-ket-hpmu/lien-ket-hpmu.component';
import { QuanLyHpmuComponent } from './trang-chu/quan-ly-hpmu/quan-ly-hpmu.component';
import { TuyenSinhHpmuComponent } from './trang-chu/tuyen-sinh-hpmu/tuyen-sinh-hpmu.component';
import { VideoAlbumHpmuComponent } from './trang-chu/video-album-hpmu/video-album-hpmu.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { BoardHPMUComponent } from './lien-he/board-hpmu/board-hpmu.component';
import { ThongTinHpmuComponent } from './lien-he/thong-tin-hpmu/thong-tin-hpmu.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    TrangChuComponent,
    SuKienHPMUComponent,
    TinTucHpmuComponent,
    LienKetHpmuComponent,
    QuanLyHpmuComponent,
    TuyenSinhHpmuComponent,
    VideoAlbumHpmuComponent,
    LienHeComponent,
    BoardHPMUComponent,
    ThongTinHpmuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

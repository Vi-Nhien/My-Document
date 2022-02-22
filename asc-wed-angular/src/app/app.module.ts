import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FirstLayoutComponent } from './home-page/home-layout/first-layout/first-layout.component';
import { SecondLayoutComponent } from './home-page/home-layout/second-layout/second-layout.component';
import { ThirdLayoutComponent } from './home-page/home-layout/third-layout/third-layout.component';
import { FouthLayoutComponent } from './home-page/home-layout/fouth-layout/fouth-layout.component';
import { FirstPageIntroComponent } from './introduction/intro-layout/first-page-intro/first-page-intro.component';
import { SecondPageIntroComponent } from './introduction/intro-layout/second-page-intro/second-page-intro.component';
import { ThirdPageIntroComponent } from './introduction/intro-layout/third-page-intro/third-page-intro.component';
import { FouthPageIntroComponent } from './introduction/intro-layout/fouth-page-intro/fouth-page-intro.component';
import { FifthLayoutComponent } from './home-page/home-layout/fifth-layout/fifth-layout.component';
import { RecruitComponent } from './recruit/recruit.component';
import { FirstLayoutRecruitComponent } from './recruit/first-layout-recruit/first-layout-recruit.component';
import { SecondLayoutRecruitComponent } from './recruit/second-layout-recruit/second-layout-recruit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    IntroductionComponent,
    FooterComponent,
    HeaderComponent,
    SocialMediaComponent,
    FirstLayoutComponent,
    SecondLayoutComponent,
    ThirdLayoutComponent,
    FouthLayoutComponent,
    FirstPageIntroComponent,
    SecondPageIntroComponent,
    ThirdPageIntroComponent,
    FouthPageIntroComponent,
    FifthLayoutComponent,
    RecruitComponent,
    FirstLayoutRecruitComponent,
    SecondLayoutRecruitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

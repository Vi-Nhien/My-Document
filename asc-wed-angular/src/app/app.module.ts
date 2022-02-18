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
    FouthLayoutComponent
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

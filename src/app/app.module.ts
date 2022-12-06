import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { LinkformComponent } from './components/linkform/linkform.component';
import { FeaturesComponent } from './components/features/features.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UrlService} from './services/url.service';
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    IntroComponent,
    LinkformComponent,
    FeaturesComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [
    UrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

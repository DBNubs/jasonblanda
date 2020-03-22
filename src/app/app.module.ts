import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomepageHeroComponent } from './partials/homepage-hero/homepage-hero.component';
import { HomepageWebdevHeroComponent } from './partials/homepage-webdev-hero/homepage-webdev-hero.component';
import { HomepageTwitchHeroComponent } from './partials/homepage-twitch-hero/homepage-twitch-hero.component';
import { HomepageBjjHeroComponent } from './partials/homepage-bjj-hero/homepage-bjj-hero.component';
import { WebdevComponent } from './pages/webdev/webdev.component';
import { TwitchComponent } from './pages/twitch/twitch.component';
import { BjjComponent } from './pages/bjj/bjj.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    PageNotFoundComponent,
    HomepageHeroComponent,
    HomepageWebdevHeroComponent,
    HomepageTwitchHeroComponent,
    HomepageBjjHeroComponent,
    WebdevComponent,
    TwitchComponent,
    BjjComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

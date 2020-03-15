import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomepageHeroComponent } from './partials/homepage-hero/homepage-hero.component';
import { HomepageWebdevHeroComponent } from './partials/homepage-webdev-hero/homepage-webdev-hero.component';
import { HomepageTwitchHeroComponent } from './partials/homepage-twitch-hero/homepage-twitch-hero.component';
import { HomepageBjjHeroComponent } from './partials/homepage-bjj-hero/homepage-bjj-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    PageNotFoundComponent,
    HomepageHeroComponent,
    HomepageWebdevHeroComponent,
    HomepageTwitchHeroComponent,
    HomepageBjjHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

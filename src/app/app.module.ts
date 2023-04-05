import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsCardsComponent } from './pages/planets-cards/planets-cards.component';
import { WhoIsWhoComponent } from './pages/who-is-who/who-is-who.component';
import { TresuareFinderComponent } from './pages/tresuare-finder/tresuare-finder.component';
import { HitComponent } from './pages/hit/hit.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CardComponent } from './pages/tresuare-finder/card/card.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './shared/components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsCardsComponent,
    WhoIsWhoComponent,
    TresuareFinderComponent,
    HitComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    MainComponent
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

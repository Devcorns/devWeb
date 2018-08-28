import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app.routing'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TechnologyComponent } from './technology/technology.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    TechnologyComponent,
    PortfolioComponent,
    ContactComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

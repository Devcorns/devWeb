import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component'
import { ServicesComponent } from 'src/app/services/services.component';
import { TechnologyComponent } from 'src/app/technology/technology.component';
import { PortfolioComponent } from 'src/app/portfolio/portfolio.component';
import { ContactComponent } from 'src/app/contact/contact.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:"home",component:HomeComponent},
    {path:"services",component:ServicesComponent},
    {path:"technology",component:TechnologyComponent},
    {path:"portfolio",component:PortfolioComponent},
    {path:"contact",component:ContactComponent},
    
    
    
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
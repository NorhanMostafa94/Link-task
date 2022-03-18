import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RecentInvestmentComponent } from './components/recent-investment/recent-investment.component';


@NgModule({
  declarations: [
    HomeComponent,
    RecentInvestmentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

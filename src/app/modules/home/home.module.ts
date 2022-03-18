import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './pages';
import { RecentInvestmentComponent } from './components';
import { TranslateModule } from '@ngx-translate/core';

const BASEMODULES = [
  CommonModule,
  HomeRoutingModule,
  TranslateModule
]

const COMPONENTS = [
  RecentInvestmentComponent
];

const PAGES = [
  HomeComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PAGES
  ],
  imports: [
    ...BASEMODULES
  ]
})
export class HomeModule { }

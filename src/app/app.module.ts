import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const BASEMODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  TranslateModule.forRoot(
    {
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en'
    }
  )
];

const COMPONENTS = [
  AppComponent
];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...BASEMODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

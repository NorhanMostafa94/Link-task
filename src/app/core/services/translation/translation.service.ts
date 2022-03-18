import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { ELang } from '../../enums/lang';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  localStorage;
  lang: any;

  private isArabic = new BehaviorSubject<boolean>(false);
  isArabic$ = this.isArabic.asObservable();

  body = document.getElementsByTagName('body')[0];

  currentlang: any;

  constructor(private translate: TranslateService) {

    this.localStorage = window.localStorage.getItem('lang');

    if (this.localStorage) {
      this.lang = this.localStorage;
    } else {
      this.lang = ELang.ENGLISH;
      window.localStorage.setItem('lang', ELang.ENGLISH);
    }

    this.translate.setDefaultLang(this.lang);
    this.init(this.lang);
  }

  init(lang: string) {
    this.translate.use(this.lang);

    switch (lang) {
      case ELang.ENGLISH:
        this.body.classList.remove('rtl');
        this.isArabic.next(false);
        break;
      case ELang.ARABIC:
        this.body.classList.add('rtl');
        this.isArabic.next(true);
        break
      default:
        break;
    }
  }

  getCurrentLanguage() {
    return this.lang;
  }

  changeLange() {
    this.lang = ELang.ARABIC ?? ELang.ENGLISH;
    window.localStorage.setItem('lang', this.lang);
    this.lang = window.localStorage.getItem('lang');
    this.translate.use(this.lang);
    this.translate.setDefaultLang(this.lang);
    this.init(this.lang);
    location.reload();
  }
}

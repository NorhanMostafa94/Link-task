import { Component } from '@angular/core';
import { ELang } from './core/enums/lang';
import { TranslationService } from './core/services/translation/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'link-task';

  constructor(private translationService: TranslationService) {
    this.translationService.init(ELang.ENGLISH);
  }
}

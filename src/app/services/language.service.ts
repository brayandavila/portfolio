import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  supportedLanguages = ['en', 'es'];
  defaultLanguage = 'en';
  constructor(private translate: TranslateService) { }

  getLanguage() {
    const userLanguage = this.translate.getDefaultLang();
    return this.supportedLanguages.includes(userLanguage) ? userLanguage : this.defaultLanguage;
  }
}

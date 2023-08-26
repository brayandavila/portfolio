import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService
  ) {
    this.setAppLanguage();
  }
  loading: boolean = true;
  ngOnInit(): void {
    initFlowbite();
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  setAppLanguage() {
    let language: string = localStorage.getItem("language") || 'en'
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

}

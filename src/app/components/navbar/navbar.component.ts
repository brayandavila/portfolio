import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routeActive: string = '';
  viewDropdown = false;
  menu: Array<any> = [
    {
      name: 'item1',
      link: '/',
      active: false,
      icon: 'assets/icons/home.svg'
    },
    {
      name: 'item2',
      link: '/projects',
      active: false,
      icon: 'assets/icons/code.svg'
    },
    {
      name: 'item3',
      link: '/about',
      active: false,
      icon: 'assets/icons/info.svg'
    },
    {
      name: 'item4',
      link: '/contact',
      active: false,
      icon: 'assets/icons/phone.svg'
    },
  ]
  language!: string;
  constructor(
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.language = translate.getDefaultLang();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.routeActive = event.url;
        this.menu.forEach((element: any) => {
          element.active = element.link === this.routeActive;
        });
      }
    });
  }
  title = 'portfolio';

  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  changeItem(index: number) {
    this.menu.forEach(element => {
      element.active = false
    });
    this.menu[index].active = true
  }

  changeLanguage(language: string) {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
    this.language = language;
    localStorage.setItem("language", language);
    this.languageService.getLanguage();
    window.location.reload()
  }
}

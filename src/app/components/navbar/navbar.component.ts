import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routeActive: string = '';
  menu: Array<any> = [
    {
      name: 'Home',
      link: '/',
      active: false
    },
    {
      name: 'Projects',
      link: '/projects',
      active: false
    },
    {
      name: 'About',
      link: '/about',
      active: false
    },
    {
      name: 'Contact',
      link: '/contact',
      active: false
    },
  ]
  constructor(
    private router: Router
  ) { }

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
}

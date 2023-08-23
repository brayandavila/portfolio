import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private sanitizer: DomSanitizer) { }
  link1 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/CERTIFICACIONES MINTIC 2022133.pdf');
  documents: Array<any> = [
    {
      name: 'CERTIFICACIONES MINTIC 2022133.pdf',
      link: this.sanitizer.bypassSecurityTrustResourceUrl('assets/CERTIFICACIONES MINTIC 2022133.pdf'),

    },
    {
      name: 'DIPLOMADO DESARROLLO DE APLICACIONES MÓVILES - RUTA 2 MISIÓN TIC 2022',
      link: this.sanitizer.bypassSecurityTrustResourceUrl('assets/DIPLOMADO DESARROLLO DE APLICACIONES MÓVILES - RUTA 2 MISIÓN TIC 2022.pdf'),

    },
    {
      name: 'DIPLOMADO DESARROLLO DE SOFTWARE - RUTA 2 MISIÓN TIC 2022',
      link: this.sanitizer.bypassSecurityTrustResourceUrl('assets/DIPLOMADO DESARROLLO DE SOFTWARE - RUTA 2 MISIÓN TIC 2022.pdf'),

    },
    {
      name: 'DIPLOMADO FUNDAMENTOS DE PROGRAMACIÓN - RUTA 2 MISIÓN TIC 2022',
      link: this.sanitizer.bypassSecurityTrustResourceUrl('assets/DIPLOMADO FUNDAMENTOS DE PROGRAMACIÓN - RUTA 2 MISIÓN TIC 2022.pdf'),

    },
    {
      name: 'DIPLOMADO PROGRAMACIÓN BÁSICA - RUTA 2 MISIÓN TIC 2022',
      link: this.sanitizer.bypassSecurityTrustResourceUrl('assets/DIPLOMADO PROGRAMACIÓN BÁSICA - RUTA 2 MISIÓN TIC 2022.pdf'),

    },
    {
      name: 'Mencion_estudiantes_destacados_40',
      link: this.sanitizer.bypassSecurityTrustResourceUrl('assets/Mencion_estudiantes_destacados_40.pdf'),

    },
  ]
}

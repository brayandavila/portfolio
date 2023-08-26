import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DocumentsServices {

  constructor(private sanitizer: DomSanitizer) { }

  private documents: any[] = [
    {
      "name": "CERTIFICACIONES MINTIC 2022133.pdf",
      "link": this.sanitizer.bypassSecurityTrustResourceUrl("assets/pdf/CERTIFICACIONES MINTIC 2022133.pdf")
    },
    {
      "name": "DIPLOMADO DESARROLLO DE APLICACIONES MÓVILES - RUTA 2 MISIÓN TIC 2022",
      "link": this.sanitizer.bypassSecurityTrustResourceUrl("assets/pdf/DIPLOMADO DESARROLLO DE APLICACIONES MÓVILES - RUTA 2 MISIÓN TIC 2022.pdf")
    },
    {
      "name": "DIPLOMADO DESARROLLO DE SOFTWARE - RUTA 2 MISIÓN TIC 2022",
      "link": this.sanitizer.bypassSecurityTrustResourceUrl("assets/pdf/DIPLOMADO DESARROLLO DE SOFTWARE - RUTA 2 MISIÓN TIC 2022.pdf")
    },
    {
      "name": "DIPLOMADO FUNDAMENTOS DE PROGRAMACIÓN - RUTA 2 MISIÓN TIC 2022",
      "link": this.sanitizer.bypassSecurityTrustResourceUrl("assets/pdf/DIPLOMADO FUNDAMENTOS DE PROGRAMACIÓN - RUTA 2 MISIÓN TIC 2022.pdf")
    },
    {
      "name": "DIPLOMADO PROGRAMACIÓN BÁSICA - RUTA 2 MISIÓN TIC 2022",
      "link": this.sanitizer.bypassSecurityTrustResourceUrl("assets/pdf/DIPLOMADO PROGRAMACIÓN BÁSICA - RUTA 2 MISIÓN TIC 2022.pdf")
    },
    {
      "name": "Mencion_estudiantes_destacados_40",
      "link": this.sanitizer.bypassSecurityTrustResourceUrl("assets/pdf/Mencion_estudiantes_destacados_40.pdf")
    }
  ];

  detDocuments() {
    return this.documents;
  }
}

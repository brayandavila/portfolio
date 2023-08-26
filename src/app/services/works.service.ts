import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor() { }

  private works: any[] = [
    {
      initial: new Date('2022-03-04'),
      final: new Date('2023-07-05'),
      title: 'Desarrollador FullStack',
      description: `
        <p>Líder de equipo en Innovating, encargado del desarrollo de software a medidapara diversas áreas empresariales,
          como contabilidad, recursos humanos,nómina, inventario, producción y gestión de tareas.
        </p>
        <p>Dirigí la implementación de soluciones utilizando Laravel para la gestión de la API, consumida desde el frontend en Angular.
        </p>
        <p>
        Mi rol incluía la definición derequerimientos, planificación, asignación de tareas y aseguramiento de la calidad del código.
        </p>
        <p>
        Fortalecí mis habilidades en liderazgo, gestión de proyectos y desarrollo desoftware, adquiriendo un profundo conocimiento de
        Laravel y Angular enentornos empresariales.
        </p>`,
      company: 'Innovating Latam',
      company_logo: 'assets/innovating-logo.png',
    },
    {
      initial: new Date('2019-02-01'),
      final: new Date('2021-12-05'),
      title: 'Soporte de hardware y software',
      description: `
      - Mantenimiento de equipos <br/>
      - Creación y gestión de bases de datos <br/>
      - Configuración y mantenimiento de equipos`,
      company: 'Freelance',
      company_logo: 'assets/freelance.png',
    },
    {
      initial: new Date('2017-01-20'),
      final: new Date('2019-02-05'),
      title: 'Embajador',
      description: `
      -Mapeo y trazado de rutas del servicio de buses articulados de Bucaramanga(Metrolínea). <br/>
      - Actualización de la información de transporte público en la ciudad`,
      company: 'Moovit',
      company_logo: 'assets/moovit.png',
    },
  ];

  getWorks() {
    return this.works;
  }
}

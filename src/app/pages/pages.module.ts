import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedDatePipe } from '../pipes/localized-date.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    LocalizedDatePipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    TranslateModule
  ]
})
export class PagesModule { }

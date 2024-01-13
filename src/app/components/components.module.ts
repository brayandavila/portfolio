import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoadImageComponent } from './load-image/load-image.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    LoadImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }

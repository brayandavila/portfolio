import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.scss'],
})
export class LoadImageComponent {
  @Input() srcDefault = './assets/images/noprofile.png';

  @Input() classImg: string = '';

  @Input() src: string = '';

  @Input() alt: string = 'Image server';

  @Input() stylesImg: Record<string, string> = {};

  isLoadImage: boolean = false;

  constructor() {}

  loadImage(): void {
    this.isLoadImage = true;
  }
}

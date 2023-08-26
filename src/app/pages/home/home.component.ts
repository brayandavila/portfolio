import { Component, HostListener, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DocumentsServices } from 'src/app/services/documents.service';
import { WorksService } from 'src/app/services/works.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  section_two_visible = false;
  documents: any[] = [];
  works: any[] = [];
  constructor(
    private documentsService: DocumentsServices,
    private worksServices: WorksService
  ) {
    this.documents = documentsService.detDocuments();
    this.works = worksServices.getWorks();
  }
  ngOnInit(): void {
    Aos.init();
  }

}

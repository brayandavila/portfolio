import { TestBed } from '@angular/core/testing';

import { DocumentsServices } from './documents.service';

describe('DocuemntsService', () => {
  let service: DocumentsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

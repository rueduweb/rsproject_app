import { TestBed } from '@angular/core/testing';

import { TermsListService } from './terms-list.service';

describe('TermsListService', () => {
  let service: TermsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a method getListOne that returns a string array', () => {
    const mockList: string[] = ['gros', 'gras', 'graisse', 'agressif', 'agrafe']; 
    expect(service.getListOne()).toEqual(mockList);
  });
});

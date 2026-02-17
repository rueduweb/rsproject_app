import { TestBed } from '@angular/core/testing';

import { TermSuggestionService } from './term-suggestion.service';

describe('TermSuggestionService', () => {
  let service: TermSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

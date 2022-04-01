import { TestBed } from '@angular/core/testing';

import { Top250Service } from './top250.service';

describe('Top250Service', () => {
  let service: Top250Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Top250Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

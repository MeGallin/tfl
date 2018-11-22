import { TestBed } from '@angular/core/testing';

import { TypeWriterService } from './type-writer.service';

describe('TypeWriterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeWriterService = TestBed.get(TypeWriterService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GitgoogleService } from './gitgoogle.service';

describe('GitgoogleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitgoogleService = TestBed.get(GitgoogleService);
    expect(service).toBeTruthy();
  });
});

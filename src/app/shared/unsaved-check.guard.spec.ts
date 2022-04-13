import { TestBed, async, inject } from '@angular/core/testing';

import { UnsavedCheckGuard } from './unsaved-check.guard';

describe('UnsavedCheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedCheckGuard]
    });
  });

  it('should ...', inject([UnsavedCheckGuard], (guard: UnsavedCheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});

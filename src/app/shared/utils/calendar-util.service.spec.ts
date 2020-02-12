import { TestBed } from '@angular/core/testing';

import { CalendarUtilService } from './calendar-util.service';

describe('CalendarUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarUtilService = TestBed.get(CalendarUtilService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BotoesMaisService } from './botoes-mais.service';

describe('BotoesMaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BotoesMaisService = TestBed.get(BotoesMaisService);
    expect(service).toBeTruthy();
  });
});

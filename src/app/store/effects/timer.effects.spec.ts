import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TimerEffects } from './timer.effects';

describe('TimerEffects', () => {
  let actions$: Observable<any>;
  let effects: TimerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TimerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

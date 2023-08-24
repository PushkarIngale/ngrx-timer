import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromTimerActions from '../actions/timer.actions';
import {map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';
import { AppState } from '..';
import { Store } from '@ngrx/store';
import { selectTimer } from '../selectors/timer.selectors'


@Injectable()
export class TimerEffects {


  start$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTimerActions.startTimer),
      mergeMap((action) =>
        this.timerService.start()
        .pipe(
          map(() => fromTimerActions.updateTimer())
        )
      )
    );
  });

  stop$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTimerActions.stopTimer, fromTimerActions.timeOver),
      mergeMap((action) => {
        this.timerService.stop();
        return EMPTY;
      })
    )
  }, {
    dispatch: false
  });

  updateTimer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTimerActions.updateTimer),
      withLatestFrom(this.store$.select(selectTimer)),
      mergeMap(([action, state]) => {

        if(state.remainingTime == 0)
        {
          this.store$.dispatch(fromTimerActions.timeOver())
        }
        return EMPTY;
      })
    )
  },
  {
    dispatch: false
  })

  constructor(
    private actions$: Actions,
    private timerService: TimerService,
    private store$: Store<AppState>
    ) {}
}

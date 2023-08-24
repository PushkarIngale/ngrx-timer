import { createAction, props } from '@ngrx/store';

enum TimerActions {
  initTimer = "[Timer] Init",
  startTimer = "[Timer] Start Timer",
  stopTimer= "[Timer] Stop Timer",
  updateTimer = "[Timer] Update Timer",
  timeOver = "[Timer] Time Over"
}



export const initTimer = createAction(
  TimerActions.initTimer,
  props<{totalTime: number}>()
);

export const startTimer = createAction (
  TimerActions.startTimer,
);

export const stopTimer = createAction (
  TimerActions.stopTimer,
);

export const updateTimer = createAction(
  TimerActions.updateTimer,
);

export const timeOver = createAction(
  TimerActions.timeOver,
);



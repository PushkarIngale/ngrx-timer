import { Action, createReducer, on } from '@ngrx/store';
import * as fromTimerActions from '../actions/timer.actions';


export const timerFeatureKey = 'timer';

export interface State {
  seconds: string,
  minutes: string,
  hours: string,
  totalTime: number,
  remainingTime: number,
  active: boolean,
  isTimeOver: boolean
}

export const initialState: State = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  totalTime: 0,
  remainingTime: 0,
  active: false,
  isTimeOver: false
};

export const reducer = createReducer(
  initialState,
  on(fromTimerActions.initTimer, (state, action) => {
    let remainingTime = action.totalTime * 60;
    let [hours, minutes, seconds] = calculateHMS(remainingTime);
    return {
      ...state,
      totalTime : action.totalTime,
      remainingTime: remainingTime,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }),
  on(fromTimerActions.startTimer, (state, action) => {
    
    return {
      ...state,
      active: true
    }
  }),
  on(fromTimerActions.updateTimer, (state, action) => {
    let remainingTime = state.remainingTime - 1;
    let [hours, minutes, seconds] = calculateHMS(remainingTime);
    
    return {
      ...state,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      remainingTime: remainingTime
    }
  }),
  on(fromTimerActions.stopTimer, (state, action) => {
    
    return {
      ...state,
      active: false
    }
  }),
  on(fromTimerActions.timeOver, (state, action) => {
    
    return {
      ...state,
      isTimeOver: true,
      active: false
    }
  }),

);

const calculateHMS = (time: number): string[] => {
  let h = ('0' + Math.floor(time / 3600)).slice(-2);
  let m = ('0' + Math.floor((time % 3600 / 60))).slice(-2);
  let s = ('0' + Math.floor((time % 3600 % 60))).slice(-2);

  return [h, m, s];
 }

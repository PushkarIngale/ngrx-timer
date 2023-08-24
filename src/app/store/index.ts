import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTimer from './reducers/timer.reducer';


export interface AppState {

  [fromTimer.timerFeatureKey]: fromTimer.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromTimer.timerFeatureKey]: fromTimer.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

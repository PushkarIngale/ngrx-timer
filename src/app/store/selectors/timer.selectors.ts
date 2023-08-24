import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, timerFeatureKey } from '../reducers/timer.reducer'

const selectTimerFeatureSelector = createFeatureSelector<State>(timerFeatureKey);

export const selectTimer = createSelector(
	selectTimerFeatureSelector,
	(state: State): State => {
		return {
			...state
		};
});
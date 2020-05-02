import { Person } from './../models/person';
import { ActionReducerMap } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';
import { reducer } from './person.reducer';

export interface AppState {
  people: Array<Person>;
}

export const appReducers: ActionReducerMap<AppState> = {
  people: fromPersonReducer.reducer
}


import { Person } from '../models/person';
import * as fromPersonActions from './person.actions';
// import { state } from '@angular/animations';

export const initialState: Array<Person> = [];

export function reducer(state = initialState, action: fromPersonActions.PersonActions) {
  switch (action.type) {
    case fromPersonActions.PersonActionTypes.PERSON_ALL:
      return state;
    case fromPersonActions.PersonActionTypes.PERSON_NEW:
      return state.concat([action.payload.person]);
    case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
      const people: Array<Person> = state.slice();
      const i = people.findIndex((p: Person) => p._id === action.payload.person._id);

      if (i >= 0) {
        people[i] = action.payload.person;
      }

      return people;
    case fromPersonActions.PersonActionTypes.PERSON_DELETE:
      return state;
    default:
      return state;
  }
}

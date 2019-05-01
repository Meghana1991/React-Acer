import { tutorial } from "../models/tutorial.model";
import * as TutorialActions from './../actions/tutorial.actions'

const initialState: tutorial = {
    name: 'Advanced Tutorial',
    url: 'http://google.com'
}

export function reducer(state: tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TURORIAL:
            return [...state, action.payload];
        default:
            return state;
    }
}
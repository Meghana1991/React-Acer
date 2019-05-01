import { Action } from '@ngrx/store';

export function simpleReducer(state: string = "Hello World", action: Action) {
    switch (action.type) {
        case 'SPANISH':
            return state = 'Hola'

        case 'GERMAN':
            return state = 'Halo'

        default:
            return state;
    }
}
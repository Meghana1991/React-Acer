import { Action } from '@ngrx/store';
import { tutorial } from './../models/tutorial.model'

/**
 * Actions are the ones sent from the components
 * requesting to the change of data in the Store.
 * They are used in the dispatch call. These actions are just
 * String and can be sent directly during dispatch but inorder to maintain
 * the actions together in a neat way, we use this file. Other option is
 * send them directly being in component like store.dispatch('ADD_INGR',payload)
 */

export const ADD_TURORIAL = '[TUTORIAL] Add';
export const REMOVE_TURORIAL = '[TUTORIAL] Remove';

export class AddTutorial implements Action {
    readonly type = ADD_TURORIAL;

    constructor(public payload: tutorial) {

    }
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TURORIAL;

    constructor(public payload: number) { }
}

export type Actions = AddTutorial | RemoveTutorial
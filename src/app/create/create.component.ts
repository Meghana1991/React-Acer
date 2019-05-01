import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.state';
import * as Actions from './../actions/tutorial.actions';
import { tutorial } from './../models/tutorial.model'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {}

  addTutorial(name, url) {
    console.log(new Actions.AddTutorial({ name: name, url: url }))
    this.store.dispatch(new Actions.AddTutorial({ name: name, url: url }))
  }
}
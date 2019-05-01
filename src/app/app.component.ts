import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { tutorial } from './models/tutorial.model';

interface AppState {
  message: String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message$: Observable<String>
  tutorial: Observable<tutorial[]>
  title = 'app-angular-ngx';

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message')
    this.tutorial = this.store.select('tutorial')
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' })
  }


  germanMessage() {
    this.store.dispatch({ type: 'GERMAN' })
  }
}

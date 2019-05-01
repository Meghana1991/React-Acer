import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { simpleReducer } from './simple.reducer';
import { reducer } from './reducers/tutorial.reducer';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ 
      message : simpleReducer,
      tutorial: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
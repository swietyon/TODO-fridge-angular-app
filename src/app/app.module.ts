import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { FridgeComponent } from './components/fridge/fridge.component';
import { TodosComponent } from './components/todos/todos.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { EditTodoFormComponent } from './components/edit-todo-form/edit-todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    FridgeComponent,
    TodosComponent,
    AddTodoFormComponent,
    EditTodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DragAndDropModule } from 'angular-draggable-droppable';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { FieldComponent } from './field/field.component';
import { PlayerTargetComponent } from './player-target/player-target.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    FieldComponent,
    PlayerTargetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

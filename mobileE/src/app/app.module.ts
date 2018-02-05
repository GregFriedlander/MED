import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { ScrollToModule } from 'ng2-scroll-to';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MissionComponent } from './mission/mission.component';
import { ModalComponent } from './modal/modal.component';

import { ModalServiceService } from './modal-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    MissionComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
  ],
  providers: [ModalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

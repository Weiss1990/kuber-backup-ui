import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BackupsListComponent } from './backups-list/backups-list.component';
import { BackupDescriptionComponent } from './backup-description/backup-description.component';
import { HttpClientModule } from '@angular/common/http';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';
import { ScheduleDescriptionComponent } from './schedule-description/schedule-description.component';
import { RestoresListComponent } from './restores-list/restores-list.component';
import { RestoresDescriptionComponent } from './restores-description/restores-description.component';

@NgModule({
  declarations: [
    AppComponent,
    BackupsListComponent,
    BackupDescriptionComponent,
    SchedulesListComponent,
    ScheduleDescriptionComponent,
    RestoresListComponent,
    RestoresDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

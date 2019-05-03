import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackupsListComponent} from './backups-list/backups-list.component';
import {BackupDescriptionComponent} from './backup-description/backup-description.component';
import {SchedulesListComponent} from './schedules-list/schedules-list.component';
import {ScheduleDescriptionComponent} from './schedule-description/schedule-description.component';
import {RestoresListComponent} from './restores-list/restores-list.component';
import {RestoresDescriptionComponent} from './restores-description/restores-description.component';

const routes: Routes = [
  { path: 'backups', component: BackupsListComponent },
  { path: '', redirectTo: '/backups', pathMatch: 'full' },
  { path: 'backups/backup/:name', component: BackupDescriptionComponent },
  { path: 'schedules', component: SchedulesListComponent },
  { path: 'schedules/schedule/:name', component: ScheduleDescriptionComponent },
  { path: 'restores', component: RestoresListComponent },
  { path: 'restores/restore/:name', component: RestoresDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

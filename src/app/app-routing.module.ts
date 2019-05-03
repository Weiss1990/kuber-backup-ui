import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackupsListComponent} from './backups-list/backups-list.component';
import {BackupDescriptionComponent} from './backup-description/backup-description.component';
import {SchedulesListComponent} from './schedules-list/schedules-list.component';
import {ScheduleDescriptionComponent} from './schedule-description/schedule-description.component';

const routes: Routes = [
  { path: 'backups', component: BackupsListComponent },
  { path: '', redirectTo: '/backups', pathMatch: 'full' },
  { path: 'backups/backup/:name', component: BackupDescriptionComponent },
  { path: 'schedules', component: SchedulesListComponent },
  { path: 'schedules/schedule/:name', component: ScheduleDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

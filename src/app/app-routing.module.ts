import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackupsListComponent} from './backups-list/backups-list.component';
import {BackupDescriptionComponent} from './backup-description/backup-description.component';

const routes: Routes = [
  { path: 'backups', component: BackupsListComponent },
  { path: '', redirectTo: '/backups', pathMatch: 'full' },
  { path: 'backup/:name', component: BackupDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

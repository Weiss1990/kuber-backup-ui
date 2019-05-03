import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

class BackupsData {
  name: string;
  status: string;
  created: string;
  expires: string;
  location: string;
  selector: string;
  hide?: boolean;

}

@Component({
  selector: 'app-backups-list',
  templateUrl: './backups-list.component.html',
  styleUrls: ['./backups-list.component.css']
})
export class BackupsListComponent implements OnInit {

  search = '';
  limit: number;

  backupsData: BackupsData[] = [];
  pendingCount = 0;
  runningCount = 0;
  completedCount = 0;
  failedCount = 0;

  constructor(private http: HttpClient) { }

  showListItems(event) {
    const val = event.target.value;

    (val === 'all') ? this.limit = this.backupsData.length : this.limit = val;
  }

  searchData() {

    this.backupsData.forEach((backup) => {
      let dataAsString = '';

      for (const prop in backup) {
        if (prop in backup) {
          dataAsString += backup[prop];
        }
      }

      dataAsString = dataAsString.toLowerCase();

      backup.hide = dataAsString.indexOf(this.search.toLowerCase()) === -1;
    });
  }

  async ngOnInit() {

    console.log(environment);

    function prepareBackupsData(backup) {
      function AmountOfExpirationDays() {
        const dateExp = new Date(backup.status.expiration);
        const dateCreate = new Date();
        const timeDiff = Math.abs(dateExp.getTime() - dateCreate.getTime());

        let result = (Math.ceil(timeDiff / (1000 * 3600 * 24))).toString();

        result += 'd';

        return result;
      }

      return {
        name: backup.metadata.name,
        status: backup.status.phase,
        created: backup.status.completionTimestamp,
        expires: AmountOfExpirationDays(),
        location: backup.spec.storageLocation,
        selector: 'app=' + backup.spec.labelSelector.matchLabels.app
      };
    }

    if ('backupsData' in sessionStorage) {
      const restoredData = JSON.parse(sessionStorage.getItem('backupsData'));

      this.backupsData = restoredData.map(backup => {

        return prepareBackupsData(backup);
      });
    } else {
      const data: any = await this.http.get(`${environment.apiServer}/backups`).toPromise();

      sessionStorage.setItem('backupsData', JSON.stringify(data.items));

      this.backupsData = data.items.map(backup => {

        return prepareBackupsData(backup);
      });
    }

    this.limit = this.backupsData.length;

    this.pendingCount = this.backupsData.filter((backup) => {
      return backup.status === 'Pending';
    }).length;

    this.runningCount = this.backupsData.filter((backup) => {
      return backup.status === 'InProgress';
    }).length;

    this.completedCount = this.backupsData.filter((backup) => {
      return backup.status === 'Completed';
    }).length;

    this.failedCount = this.backupsData.filter((backup) => {
      return backup.status === 'Failed';
    }).length;
  }

}

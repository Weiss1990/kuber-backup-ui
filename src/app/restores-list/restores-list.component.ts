import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class RestoresData {
  name: string;
  backup: string;
  status: string;
  warnings: string;
  errors: string;
  created: string;
  selector: string;
  hide?: boolean;
}

@Component({
  selector: 'app-restores-list',
  templateUrl: './restores-list.component.html',
  styleUrls: ['./restores-list.component.css']
})
export class RestoresListComponent implements OnInit {

  restoresList: RestoresData[] = [];
  search = '';
  limit: number;

  constructor(private http: HttpClient) { }

  showListItems(event) {
    const val = event.target.value;

    (val === 'all') ? this.limit = this.restoresList.length : this.limit = val;
  }

  searchData() {

    this.restoresList.forEach((backup) => {
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
        backup: backup.spec.backupName,
        status: backup.status.phase,
        warnings: backup.status.warnings,
        errors: backup.status.errors,
        created: backup.metadata.creationTimestamp,
        selector: '<none>'
      };
    }

    if ('restoresData' in sessionStorage) {
      const restoredData = JSON.parse(sessionStorage.getItem('restoresData'));

      console.log(restoredData);

      this.restoresList = restoredData.map(backup => {

        return prepareBackupsData(backup);
      });
    } else {
      const data: any = await this.http.get('http://localhost:3000/restores').toPromise();

      console.log(data.items);

      sessionStorage.setItem('restoresData', JSON.stringify(data.items));

      this.restoresList = data.items.map(backup => {

        return prepareBackupsData(backup);
      });
    }

    this.limit = this.restoresList.length;
  }

}

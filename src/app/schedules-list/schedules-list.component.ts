import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class SchedulesData {
  name: string;
  status: string;
  created: string;
  schedule: string;
  ttl: string;
  lastBackup: string;
  selector: string;
  hide?: boolean;
}

@Component({
  selector: 'app-schedules-list',
  templateUrl: './schedules-list.component.html',
  styleUrls: ['./schedules-list.component.css']
})
export class SchedulesListComponent implements OnInit {

  schedulesList: SchedulesData[] = [];
  search = '';
  limit: number;

  constructor(private http: HttpClient) { }

  showListItems(event) {
    const val = event.target.value;

    (val === 'all') ? this.limit = this.schedulesList.length : this.limit = val;
  }

  searchData() {

    this.schedulesList.forEach((backup) => {
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

    function prepareSchedulesData(schedule) {
      function DaysPassedAfterLastBackup() {
        let result: any;
        const dateLastBackup = new Date(schedule.status.lastBackup);
        const today = new Date();
        const timeDiff = Math.abs(today.getTime() - dateLastBackup.getTime());

        result = (Math.floor(timeDiff / (1000 * 3600 * 24)));

        if (result === 0) {
          result = schedule.status.lastBackup;
        } else {
          result = result.toString();
          result += 'd';
        }
        return result;
      };
      return {
        name: schedule.metadata.name,
        status: schedule.status.phase,
        created: schedule.metadata.creationTimestamp,
        schedule: schedule.spec.schedule,
        ttl: schedule.spec.template.ttl,
        lastBackup: DaysPassedAfterLastBackup(),
        selector: 'app=' + schedule.spec.template.labelSelector.matchLabels.app,
      };
    }

    if ('schedulesData' in sessionStorage) {
      const restoredData = JSON.parse(sessionStorage.getItem('schedulesData'));

      console.log(restoredData);

      this.schedulesList = restoredData.map(schedule => {

        return prepareSchedulesData(schedule);
      });
    } else {
      const data: any = await this.http.get('http://localhost:3000/schedules').toPromise();

      sessionStorage.setItem('schedulesData', JSON.stringify(data.items));

      console.log(data.items);

      this.schedulesList = data.items.map(schedule => {

        return prepareSchedulesData(schedule);
      });
    }

    this.limit = this.schedulesList.length;
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-schedule-description',
  templateUrl: './schedule-description.component.html',
  styleUrls: ['./schedule-description.component.css']
})
export class ScheduleDescriptionComponent implements OnInit {

  scheduleData: any;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {

      let backupFullData;

      if ('schedulesData' in sessionStorage) {
        const backups: any = JSON.parse(sessionStorage.getItem('schedulesData'));

        backupFullData = backups.find(backup => {
          return backup.metadata.name === params.name;
        });

      } else {
        const response: any = await this.http.get('http://localhost:3000/schedules').toPromise();

        localStorage.setItem('schedulesData', JSON.stringify(response.items));

        backupFullData = response.items.find(backup => {
          return backup.metadata.name === params.name;
        });
      }

      this.scheduleData = {
        Name: params.name,
        Namespace: backupFullData.metadata.namespace,
        Annotations: '<none>',
        Phase: backupFullData.status.phase,

        Namespaces: {
          Included: backupFullData.spec.template.includedNamespaces.join(),
          Excluded: backupFullData.spec.template.excludedNamespaces,
        },
        Resources:  {
          Included: backupFullData.spec.template.includedResourses,
          Excluded: backupFullData.spec.template.excludedResourses,
          'Cluster-scoped': backupFullData.spec.template.includedClusterResources
        },
        Label_selector: 'app=' + backupFullData.spec.template.labelSelector.matchLabels.app,
        Storage_Location: backupFullData.spec.template.storageLocation,
        Snapshot_Vs: backupFullData.spec.template.volumeSnapshotLocations,
        TTL: backupFullData.spec.template.ttl,
        Hooks: backupFullData.spec.template.hooks.resources,
        Started: backupFullData.metadata.creationTimestamp,
        LastBackup: backupFullData.status.lastBackup,
        Validation_errors: backupFullData.status.validationErrors
      };
    });
  }

}

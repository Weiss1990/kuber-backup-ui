import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-backup-description',
  templateUrl: './backup-description.component.html',
  styleUrls: ['./backup-description.component.css']
})
export class BackupDescriptionComponent implements OnInit {

  backUpdata: any;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

   ngOnInit() {
    this.route.params.subscribe(async params => {

      let backupFullData;

      if ('backupsData' in sessionStorage) {
        const backups: any = JSON.parse(sessionStorage.getItem('backupsData'));

        backupFullData = backups.find(backup => {
          return backup.metadata.name === params.name;
        });

      } else {
        const response: any = await this.http.get('http://localhost:3000/backups').toPromise();

        localStorage.setItem('backupsData', JSON.stringify(response.items));

        backupFullData = response.items.find(backup => {
          return backup.metadata.name === params.name;
        });
      }

      function prepareLabels() {
        const labels = [];

        const labelsObject = backupFullData.metadata.labels;

        for (const prop in labelsObject) {
          labels.push({
            name: prop,
            value: labelsObject[prop]
          });
        };

        console.log(labels);

        return labels;
      };

      this.backUpdata = {
        Name: params.name,
        Namespace: backupFullData.metadata.namespace,
        Labels: prepareLabels(),
        Annotations: '<none>',
        Phase: backupFullData.status.phase,

        Namespaces: {
          Included: backupFullData.spec.includedNamespaces.join(),
          Excluded: backupFullData.spec.excludedNamespaces,
        },
        Resources:  {
          Included: backupFullData.spec.includedResourses,
          Excluded: backupFullData.spec.excludedResourses,
          'Cluster-scoped': backupFullData.spec.includedClusterResources
        },
        Label_selector: 'app=' + backupFullData.spec.labelSelector.matchLabels.app,
        Storage_Location: backupFullData.spec.storageLocation,
        Snapshot_Vs: backupFullData.spec.volumeSnapshotLocations,
        TTL: backupFullData.spec.ttl,
        Hooks: backupFullData.spec.hooks.resources,
        Backup_Format_Version: backupFullData.status.version,
        Started: backupFullData.status.startTimestamp,
        Completed: backupFullData.status.completionTimestamp,
        Expiration: backupFullData.status.expiration,
        Validation_errors: backupFullData.status.validationErrors,
        Volume_Snapshot_Attempted: backupFullData.status.volumeSnapshotsAttempted,
        Volume_Snapshot_Completed: backupFullData.status.volumeSnapshotsCompleted
      };
    });
  }

}

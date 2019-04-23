import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-backup-description',
  templateUrl: './backup-description.component.html',
  styleUrls: ['./backup-description.component.css']
})
export class BackupDescriptionComponent implements OnInit {

  backUpdata: any;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.backUpdata = {
        Name: params.name,
        Namespace: 'velero',
        Labels: 'velero.io/storage-location=default',
        Annotations: '<none>',
        Phase: 'Completed',
        Namespaces: {
          Included: '*',
          Excluded: '<none>',
        },
        Resources:  {
          Included: '*',
          Excluded: '<none>',
          'Cluster-scoped': 'auto'
        },
        Label_selector: 'app=wp',
        Storage_Location: 'default',
        Snapshot_Vs: 'auto',
        TTL: '720h0m0s',
        Hooks: '<none>',
        Backup_Format_Version: 1,
        Started: '2019-04-15 17:34:41 +0300 EEST',
        Completed: '2019-04-15 17:35:01 +0300 EEST',
        Expiration: '2019-05-15 17:34:41 +0300 EEST',
        Validation_errors: '<none>',
        Persistent_Volumes: '<none included>',
        Restic_Backups: {
          Completed: '',
          'wordpress/wp-7ccf7ffbc8-r9c99': 'data'
        }
      };
    });
  }

}

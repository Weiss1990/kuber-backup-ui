import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-restores-description',
  templateUrl: './restores-description.component.html',
  styleUrls: ['./restores-description.component.css']
})
export class RestoresDescriptionComponent implements OnInit {

  restoreData: any;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {

      let backupFullData;

      if ('restoresData' in sessionStorage) {
        const backups: any = JSON.parse(sessionStorage.getItem('restoresData'));

        backupFullData = backups.find(backup => {
          return backup.metadata.name === params.name;
        });

      } else {
        const response: any = await this.http.get(`${environment.apiServer}/restores`).toPromise();

        localStorage.setItem('restoresData', JSON.stringify(response.items));

        backupFullData = response.items.find(backup => {
          return backup.metadata.name === params.name;
        });
      }

      console.log(backupFullData);

      this.restoreData = {
        Name: params.name,
        Namespace: backupFullData.metadata.namespace,
        Annotations: '<none>',
        Phase: backupFullData.status.phase,

        Namespaces: {
          Included: backupFullData.spec.includedNamespaces.join(),
          Excluded: backupFullData.spec.excludedNamespaces,
        },
        Resources:  {
          Included: backupFullData.spec.includedResourses,
          Excluded: backupFullData.spec.excludedResources.join(),
        },
        Label_selector: '<none>',
        Started: backupFullData.metadata.creationTimestamp,
        Errors: backupFullData.status.errors,
        Warnings: backupFullData.status.warnings
      };
    });
  }

}

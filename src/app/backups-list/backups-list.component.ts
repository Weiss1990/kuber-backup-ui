import { Component, OnInit } from '@angular/core';

class BackupsData {
  name: string;
  status: number;
  created: string;
  expires: string;
  storage: string;
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

  backupsData: BackupsData[] = [
    {
      name: 'wp',
      status: 1,
      created: '2019-04-15 17:24:48 +0300',
      expires: '28d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp1',
      status: 1,
      created: '2019-04-15 17:25:48 +0300',
      expires: '25d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp2',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
  }, {
      name: 'wp3',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp4',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp5',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp6',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp7',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp8',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp9',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp10',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp11',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp12',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp13',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp14',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp15',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp16',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp17',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp18',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp19',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp20',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp21',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp22',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp23',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp24',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp25',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp26',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp27',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp28',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp29',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp30',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp31',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp32',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp33',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp2',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp34',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp35',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp36',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp37',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp38',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp39',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp40',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp41',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp42',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp43',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp44',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp45',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp46',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp47',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp48',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp49',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp50',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp51',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp52',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp53',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp54',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp55',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp56',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp57',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp58',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp59',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp60',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp61',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp62',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp63',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp64',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp65',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp66',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp67',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp68',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp69',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp70',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp71',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp72',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp73',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp74',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp75',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp76',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp77',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp78',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp79',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp80',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp81',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp82',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp83',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp84',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp85',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp86',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp87',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp88',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp89',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp90',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp91',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp92',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp93',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp94',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp95',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp96',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp97',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp98',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp99',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp100',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp101',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp102',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp103',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp104',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp105',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp106',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp107',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp108',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp109',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }, {
      name: 'wp110',
      status: 1,
      created: '2019-04-15 17:26:48 +0300',
      expires: '29d',
      storage: 'EEST',
      location: 'default',
      selector: 'app=wp'
    }];

  constructor() { }

  showListItems(event) {
    const val = event.target.value;

    (val === 'all') ? this.limit = this.backupsData.length : this.limit = val;
  }

  searchData() {

    this.backupsData.forEach((backup) => {
      let dataAsString = '';

      for (const prop in backup) {
        dataAsString += backup[prop];
      }

      dataAsString = dataAsString.toLowerCase();

      backup.hide = dataAsString.indexOf(this.search.toLowerCase()) === -1;
    });
  }

  ngOnInit() {
    this.limit = this.backupsData.length;
  }

}

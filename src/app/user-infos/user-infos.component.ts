import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { UserInfos } from './shared/user-infos.model';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {

  @Input() userInfos: UserInfos;

  constructor() { }

  ngOnInit() {
  }

}

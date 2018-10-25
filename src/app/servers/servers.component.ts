import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { Server } from '../server/server.model';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  @ViewChild('title') title : ElementRef;
  @ViewChild('server') serverEl : ServerComponent;

  servers : Server[] = [
    new Server('Server 1', 'This is a server', 'Online'),
    new Server('Server 2', 'This is another server', 'Offline'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onTest () {
    console.log(this.serverEl.name)
  }

}

import { Component, ViewEncapsulation, ContentChild } from "@angular/core";

@Component({
  // selector: "[server]",
  selector: "app-server",
  //template: "<p>I am a server!</p>",
  templateUrl: './server.component.html',
  // styles: [
  //   `
  //     p { color: blue; }
  //   `
  // ],
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerComponent {
  name = 'Server 1';
  nameDisabled = false;

  @ContentChild('') content;

  constructor () {
    // setTimeout(() => {
    //   this.nameDisabled = true;
    // }, 2000);
  }

  onDisableName (event) {
    this.nameDisabled = true
  }
}

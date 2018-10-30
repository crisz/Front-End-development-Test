import { Component, OnInit, Input, HostBinding, DoCheck } from '@angular/core';

@Component({
  selector: 'app-player-target',
  templateUrl: './player-target.component.html',
  styleUrls: ['./player-target.component.css']
})
export class PlayerTargetComponent implements DoCheck {
  @Input() player;
  @Input() id;
  @HostBinding('style.top') top;
  @HostBinding('style.left') left;

  constructor() { }

  ngDoCheck() {
    switch (this.id) {
      case 0:
        this.top = '10px';
        this.left = '120px';
        break;
      case 1:
        this.top = '60px';
        this.left = '20px';
        break;
      case 2:
        this.top = '90px';
        this.left = '120px';
        break;
      case 3:
        this.top = '60px';
        this.left = '210px';
        break;
      case 4:
        this.top = '200px';
        this.left = '20px';
        break;
      case 5:
        this.top = '250px';
        this.left = '50px';
        break;
      case 6:
        this.top = '250px';
        this.left = '190px';
        break;
      case 7:
        this.top = '200px';
        this.left = '220px';
      break;
      case 8:
        this.top = '380px';
        this.left = '20px';
        break;
      case 9:
        this.top = '340px';
        this.left = '120px';
        break;
      case 10:
        this.top = '380px';
        this.left = '220px';
        break;
      default:
        this.top = '0px';
        this.left = '0px';
    }
  }

}

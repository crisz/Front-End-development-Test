import { Component, OnInit } from '@angular/core';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  players: any[];
  filteredPlayers: any[];
  targets = [];
  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    this.playersService
      .getPlayers()
      .subscribe(result => {
        this.players = result as any;
        this.filteredPlayers = this.players;
      });


    this.targets = Array(11).fill(null);
  }

  droppedPlayer(event, i) {
    const player = this.players.filter(p => p.name === event.dropData)[0];
    console.log(event, player);
    console.log(this.targets);
    this.targets[i] = player;
    this.filteredPlayers = this.players.filter(p => this.targets.indexOf(p) === -1);
  }
}

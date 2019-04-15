import { Component, OnInit } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  
  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.fetchPlayers();
  }

  fetchPlayers() {
    this.playerService
      .getPlayers()
      .subscribe((data: Player[]) => {
        this.players = data;
        console.log('Data requested....');
        console.log(this.players);
      });
  }

}

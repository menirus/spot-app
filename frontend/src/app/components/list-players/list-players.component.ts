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
  newPlayer: Player;
  addingPlayer: boolean;

  constructor(private playerService: PlayerService) {
    this.addingPlayer = false;
  }

  ngOnInit() {
    this.fetchPlayers();
    this.newPlayer = {} as Player;
  }

  editPlayer(player: Player) {
    player.editing = !player.editing;
  }

  addPlayer() {
    // this.newPlayer = null;
    this.newPlayer.editing = true;
  }

  fetchPlayers() {
    console.log('Fetching players yo');
    this.playerService
      .getPlayers()
      .subscribe((data: Player[]) => {
        this.players = data;
        console.log('Data requested....');
        // console.log(this.players);
      });
  }

}

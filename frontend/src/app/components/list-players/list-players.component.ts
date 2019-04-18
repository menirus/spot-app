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

  editPlayer(player) {
    player.editing = !player.editing;
  }

  savePlayer(player) {
    console.log("Saved : ", player);
    
    this.playerService
      .updatePlayer(player)
      .subscribe((data: Player[]) => {
        console.log(data);
      });

    player.editing = !player.editing;

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

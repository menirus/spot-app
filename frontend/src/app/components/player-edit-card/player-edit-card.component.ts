import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from 'src/app/player.service';
import { Player } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'player-edit-card',
  templateUrl: './player-edit-card.component.html',
  styleUrls: ['./player-edit-card.component.css']
})
export class PlayerEditCardComponent implements OnInit {

  @Input()
  player: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
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

}

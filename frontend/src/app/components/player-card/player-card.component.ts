import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  @Input()
  player: Player;

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
  }


  editPlayer(player) {
    player.editing = !player.editing;
  }

  savePlayer(player: any) {     // using any here because we are adding 'editing' param dynamically. Think of something better here tho
    console.log("Saved : ", player);
    
    this.playerService
      .updatePlayer(player)
      .subscribe((data: Player[]) => {
        console.log(data);
      });

    player.editing = !player.editing;

  }

}

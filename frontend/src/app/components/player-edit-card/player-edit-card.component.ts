import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'player-edit-card',
  templateUrl: './player-edit-card.component.html',
  styleUrls: ['./player-edit-card.component.css']
})
export class PlayerEditCardComponent implements OnInit {

  @Input()
  player: Player;

  @Output()
  refreshEvent = new EventEmitter();

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }


  savePlayer(player) {
    console.log("Saved : ", player);
    
    this.playerService
      .updatePlayer(player)
      .subscribe(result => {
        console.log(result);
        this.refreshEvent.emit();
      });
    player.editing = !player.editing;

  }

}

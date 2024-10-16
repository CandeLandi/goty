import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrl: './goty.component.css'
})
export class GotyComponent implements OnInit {

   games: Game[] = [];

  constructor( private gameService: GameService){}

  ngOnInit(): void {
    this.gameService.getNominees()
      .subscribe( games => {
        console.log(games);
        this.games = games
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']  // Corrección aquí
})
export class GotyComponent implements OnInit {

  games: Game[] = [];
  loading: boolean = true;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getNominees()
      .subscribe(
        games => {
          console.log(games);
          this.games = games;
          this.loading = false;
        },
        error => {
          console.error(error);
          this.loading = false;
        }
      );
  }

  voteGame(game: Game) {
    this.gameService.voteGame(game.id)
      .subscribe(
        (resp: any) => {
          if (resp.ok) {
            Swal.fire('Thanks!', resp.message, 'success');
            game.votes = resp.votes;
          } else {
            Swal.fire('Oops', resp.message, 'error');
          }
        }
      );
  }
}

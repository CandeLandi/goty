import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/game.interface';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: Game[] = [];

  constructor(private http: HttpClient) {}

  getNominees() {
    if (this.games.length > 0) {
      //No games
      console.log('From Caché');
      return of(this.games);
    } else {
      console.log('From Server');
      return this.http.get<Game[]>(`${environment.apiUrl}/api/goty`)
      .pipe(
        tap( games => this.games = games )
      )
    }

  }
}

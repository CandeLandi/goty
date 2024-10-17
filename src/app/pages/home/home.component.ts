import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: any[] = [];

  constructor(private db: AngularFirestore) {}

  ngOnInit() {

    this.db.collection('goty').valueChanges()
      .pipe(
        map( (resp:any[])  => (resp as Game[]).map( ({ name, votes }) => ({ name, value: votes }) ))
      )
      .subscribe( games => {
        // console.log(juegos);
        this.games = games;
      });

  }
}

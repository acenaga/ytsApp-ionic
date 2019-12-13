import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Movie } from '../interface/interfaces';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  movies: Movie[] = [];

  constructor( private movieService: MovieService ) {}

  ngOnInit() {
    this.cargarMovies();
  }

  cargarMovies( event? ) {

    this.movieService.getTopMoviesPages()
      .subscribe(resp => {
        console.log('Datos', resp);

        if ( resp.data.movies.length === 0 ) {
          event.target.disabled = true;
        }

        this.movies.push(...resp.data.movies);

        if ( event ) {
          event.target.complete();
        }

      });

  }

}

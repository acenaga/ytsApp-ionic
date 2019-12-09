import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interface/interfaces';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {

  @Input() movies: Movie[] = [];

  constructor() { }

  ngOnInit() {}

}

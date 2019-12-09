import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interface/interfaces';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Input() i: number;

  constructor() { }

  ngOnInit() {}

}

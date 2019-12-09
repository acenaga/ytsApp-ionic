import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Data } from '../interface/interfaces';



const apiUrl = environment.apiUrl;



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  headMoviesPage = 0;

  private ejecutarQuery<T>( query: string ) {

    query = apiUrl + query;

    return this.http.get<T>( query, {  } );

  }

  constructor( private http: HttpClient ) { }

  getTopMoviesPages() {

    this.headMoviesPage++;

    return this.ejecutarQuery<Data>(`/list_movies.json`);

  }
}

import { Injectable } from '@angular/core';
import moviesSample from  ',,/../sample-movies';
import { Imovie } from '../interfaces/Imovie';

@Injectable()
export class CinemaService {

    movies : Array<Imovie>=moviesSample;

    getMovies():Array<Imovie>{
      return this.movies;
    };

    getMovie(id):Imovie{
        let mov: Imovie;
        this.movies.forEach (e =>{
          if(e.id === id){
            mov=e;
          }
        });
      return mov; }

}

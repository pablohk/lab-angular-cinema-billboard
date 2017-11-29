import { Injectable } from '@angular/core';
import moviesSample from  ',,/../sample-movies';

interface movie {
  id: Number;
  title: String;
  poster:String;
  synopsis: String;
  genres: Array<String>;
  year:Number;
  director: String;
  actors: Array<String>;
  hours:Array<String>;
  room:Number;
  }

@Injectable()
export class CinemaService {

    movies : Array<movie>=moviesSample;

    getMovies():Array<movie>{
      return this.movies;
    };

    getMovie(id):movie{
        let mov: movie;
        this.movies.forEach (e =>{
          if(e.id === id){
            mov=e;
          }
        });
      return mov; }

}

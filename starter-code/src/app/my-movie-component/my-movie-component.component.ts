import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../services/cinema.service';
import { Imovie } from '../interfaces/Imovie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
    movieDetail:Imovie;
    movieId: Number;
  constructor(private accesCinema: CinemaService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.movieId=Number(params['id']));
    this.movieDetail=this.accesCinema.getMovie(this.movieId);
    console.log("DDSFDSFSDG");
  }

}

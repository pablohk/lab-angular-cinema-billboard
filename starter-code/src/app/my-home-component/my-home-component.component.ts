import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../services/cinema.service';
import { Imovie } from '../interfaces/Imovie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  listMovies: Array<Imovie>;
  constructor(private accesCinema: CinemaService,private router: Router) { }

  viewDetails(id) {
     this.router.navigate(['movie', id]);
   }

  ngOnInit() {
    this.listMovies=this.accesCinema.getMovies();
  }

}

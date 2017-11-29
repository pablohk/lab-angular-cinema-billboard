import { Component , OnInit} from '@angular/core';
import {CinemaService} from './services/cinema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CinemaService]
})
export class AppComponent implements OnInit{
  title = 'app works!';
    constructor(private accesCinema: CinemaService) { }

 ngOnInit(){

   //
    //this.accesCinema.getMovies().forEach(e=>{
    // console.log(e);
   //});
   // console.log(this.accesCinema.getMovie(1));

 }

}

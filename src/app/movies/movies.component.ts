import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent{
  popularMovies: any[];
  theaterMovies: any[];
  searchStr: string;
  searchRes: any[];

  constructor(private service: MovieService) {
    this.service.getPopular().subscribe((res:any) => {
      this.popularMovies = res.results;
      console.log(res.results);
    });

    this.service.getInTheaters().subscribe((res:any) => {
      this.theaterMovies = res.results;
      console.log(res.results);
    });

  }

  searchMovies() {
    this.service.searchMovies(this.searchStr).subscribe((res:any) => {
      this.searchRes = res.results;
    })
  }

}

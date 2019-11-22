import { MovieService } from './../movie.service';
import { Component } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  popularMovies: any[];
  theaterMovies: any[];
  searchStr: string;
  searchRes: any[];

  constructor(private _movieService: MovieService) {
    this._movieService.getPopular().subscribe((res:any) => {
      this.popularMovies = res.results;
      console.log(res);
    });

    this._movieService.getInTheaters().subscribe((res:any) => {
      this.theaterMovies = res.results;
      console.log(res);
    });

  }

  searchMovies() {
    this._movieService.searchMovies(this.searchStr).subscribe((res:any) => {
      this.searchRes = res.results;
    })
  }

}

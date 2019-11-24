import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;

  constructor(private service : MovieService, private router: ActivatedRoute) { }


  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this.service.getMovie(id).subscribe(movie => {
        this.movie = movie;
      })
    })
  }
}

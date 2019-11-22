import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey:string;

  constructor(private http: HttpClient) {
    this.apiKey = '&api_key=2ffbd1012c6daa75d5afab002330fdab';
    console.log('MovieService Initialized...');
  }

  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc' + this.apiKey)
      .pipe(res => res);
  }

  getInTheaters() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22' + this.apiKey)
      .pipe(res => res);
  }

  searchMovies(searchStr: string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc' + this.apiKey + '&query=' + searchStr)
      .pipe(res => res);
  }
}

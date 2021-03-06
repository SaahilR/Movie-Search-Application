import { RouterModule } from '@angular/router';
import { MovieService } from './movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { UrlTitlePipe } from './url-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    UrlTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: MoviesComponent },
      { path: "movies/:id/:name", component: MovieComponent },
      { path: "**", component: MoviesComponent }
    ])
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

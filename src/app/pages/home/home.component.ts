import { MOVIE_GROUPS } from './../../constants/movie.groups';
import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upComingMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies(MOVIE_GROUPS.popular).subscribe((movies) => {
      this.popularMovies = movies;
    });

    this.moviesService.getMovies(MOVIE_GROUPS.topRated).subscribe((movies) => {
      this.topRatedMovies = movies;
    });

    this.moviesService.getMovies(MOVIE_GROUPS.upcoming).subscribe((movies) => {
      this.upComingMovies = movies;
    });
  }

}

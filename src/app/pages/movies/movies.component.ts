import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: number | null = null;
  searchValue: string | null = null;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.getMoviesByGenre(genreId, 1);
        this.genreId = genreId;
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  getPagedMovies(pageNumber: number, searchKeyword?: string) {
    this.moviesService
      .searchMovies(pageNumber, searchKeyword)
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  getMoviesByGenre(genreId: number, pageNumber: number) {
    this.moviesService
      .getMoviesByGenreId(genreId, pageNumber)
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  paginate(event: any) {
    var pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      this.getPagedMovies(
        pageNumber,
        this.searchValue ? this.searchValue : undefined
      );
    }
  }

  searchChanged() {
    this.getPagedMovies(1, this.searchValue ? this.searchValue : undefined);
  }
}

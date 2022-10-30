import { GenresMdb } from './../models/genre';
import {
  Movie,
  MovieMdb,
  MovieImageMdb,
  MovieVideoMdb,
  MovieCredits,
} from './../models/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'a2e191de0670d1b3e93d71ddf029e2e6';

  constructor(private http: HttpClient) {}

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getMovies(group: string, count: number = 12) {
    return this.http
      .get<MovieMdb>(`${this.baseUrl}/movie/${group}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((data) => {
          return of(data.results.slice(0, count));
        })
      );
  }

  getMovieImages(id: string) {
    return this.http
      .get<MovieImageMdb>(
        `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data.backdrops);
        })
      );
  }

  getMovieVideo(id: string) {
    return this.http
      .get<MovieVideoMdb>(
        `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data.results);
        })
      );
  }

  getMovieGenres() {
    return this.http
      .get<GenresMdb>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((data) => {
          return of(data.genres);
        })
      );
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  searchMovies(pageNumber: number, searchValue?: string) {
    const type = searchValue ? 'search/movie' : 'movie/popular';

    return this.http
      .get<MovieMdb>(
        `${this.baseUrl}/${type}?page=${pageNumber}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data.results);
        })
      );
  }

  getMoviesByGenreId(id: number, pageNumber: number) {
    return this.http
      .get<MovieMdb>(
        `${this.baseUrl}/discover/movie?with_genres=${id}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data.results);
        })
      );
  }
}

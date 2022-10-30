import { Genre } from './genre';

export interface Movie {
  backdrop_path: string;
  title: string;
  id: number;
  release_date: string;
  overview: string;
  status: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  original_language: string;
  revenue: number;
  runtime: number;
  genres: Genre[];
}

export interface MovieMdb {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface MovieVideoMdb {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  site: string;
  key: string;
}

export interface MovieImageMdb {
  id: number;
  backdrops: MovieImage[];
  posters: MovieImage[];
}

export interface MovieImage {
  file_path: string;
}

export interface MovieCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

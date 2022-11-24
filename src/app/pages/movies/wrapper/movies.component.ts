import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'movie-app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies().subscribe(res => this.movies = res);
  }

}

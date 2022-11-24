import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';
@Component({
  selector: 'movie-app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input()
  movie: IMovie | undefined;

}

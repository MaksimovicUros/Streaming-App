import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieItemComponent } from './components/movie-item.component';
import { MoviesComponent } from './wrapper/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieItemComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
})
export class MoviesModule {}

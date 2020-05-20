import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { Cast } from 'src/app/shared/models/cast';
import { CastService } from 'src/app/core/services/cast.service';
import { GenreService } from 'src/app/core/services/genre.service';
import { Genre } from 'src/app/shared/models/genre';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService: MovieService, private castService: CastService, private genreService: GenreService, private activeRoute: ActivatedRoute) { }
  movieId: number;
  movie: Movie;
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.movieId = +params.get('id');
      }
    );
    this.movieService.getMovieById(this.movieId).subscribe(
      m => {
        this.movie = m;
        console.log(this.movie);
      }
    );
  }


}

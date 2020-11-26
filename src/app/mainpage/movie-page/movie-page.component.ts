import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  movieForm: FormGroup;
  genres: string[] = [ 'Action', 'Natur', 'Et halvtreds karakterer langt navn (maksimum).....', 'måske skulle vi reducere maksimum?' ];
  movies : Movie[] = [
    { id: 1, genre: 'whatever', title: "To Bee or not to Bee", imagePath: "/assets/images/beeIcon.png" },
    { id: 1, genre: 'whatever', title: "To Bee to Bee", imagePath: "/assets/images/beeIcon.png" },
    { id: 1, genre: 'whatever', title: "To Bee or not to Bee", imagePath: "/assets/images/beeIcon.png" },
    { id: 1, genre: 'whatever', title: "To Bee to Bee", imagePath: "/assets/images/beeIcon.png" },
    { id: 1, genre: 'whatever', title: "To Bee or not to Bee", imagePath: "/assets/images/beeIcon.png" },
    { id: 1, genre: 'whatever', title: "To Bee to Bee", imagePath: "/assets/images/beeIcon.png" },
    { id: 1, genre: 'whatever', title: "To Bee or not to Bee", imagePath: "/assets/images/beeIcon.png" },
    { id: 1, genre: 'whatever', title: "To Bee to Bee", imagePath: "/assets/images/beeIcon.png" },
    { id: 1, genre: 'whatever', title: "To Bee or not to Bee", imagePath: "/assets/images/beeIcon.png" },
    { id: 1, genre: 'whatever', title: "To Bee to Bee", imagePath: "/assets/images/beeIcon.png" },
  ]

  constructor(private formBuilder: FormBuilder) {
    this.movieForm = this.formBuilder.group({
      title : new FormControl(''),
      genre : new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: any){
    console.log(value);
  }
}

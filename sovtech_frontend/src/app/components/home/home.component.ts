import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any = [];
  // categories: any = [ 'animal', 'car' , 'celebrity', 'career' ];

  constructor(private jokes: JokesService) { }
  
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.jokes.getCategories().subscribe((c: any) => {
      c.map((category: any) => {
        this.categories.push(category);
      })
    })
  }
}

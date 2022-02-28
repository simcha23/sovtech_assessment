import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  category: string = '';
  joke: any = '';

  constructor(private route: ActivatedRoute, private jokes: JokesService) { }
  
  // jokesDetails  = { 'categories': ['animal'], 'value': 'Here is a joke' };

  

  ngOnInit(): void {
    this.route.params.subscribe((cat: any) => {
      this.category = cat.category;
      
      this.getJoke(this.category);
    });

  }

  getJoke(cat: string) {
    this.jokes.getJoke(cat).subscribe((c: any) => {
      this.joke = c.value;
    })
  }

  // getJoke(cat: string) {
  //   this.jokes.getJoke(cat).subscribe((c: any) => {
  //     c.map((category: any) => {
  //       this.jokesDetails = category;
  //     })
  //   })
  // }

}

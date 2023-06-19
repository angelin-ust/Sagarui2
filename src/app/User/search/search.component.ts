import { Component } from '@angular/core';
import { Restaurant } from 'src/app/modal/restaurant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  rest: Restaurant[]=[];
}

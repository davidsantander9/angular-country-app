import { Component } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent {

  term: string = '';

  search(){
    console.log(this.term);
  }
  constructor() { }

}

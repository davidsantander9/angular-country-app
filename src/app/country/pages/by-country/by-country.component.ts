import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';
  anyError: boolean = false;

  constructor(private countryService: CountryService) { }

  search(){
    this.anyError = false;
    this.countryService.searchCountry( this.term ).subscribe(
      countries => {
        console.log(countries)
      }, (err) => {
        this.anyError = true;
      }
    );
  }

}

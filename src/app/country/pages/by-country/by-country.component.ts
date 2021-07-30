import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';
  anyError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search( term: string ){
    this.anyError = false;
    this.term = term;
    this.countryService.searchCountry( this.term ).subscribe(
      countries => {
        this.countries = countries;
      }, (err) => {
        this.anyError = true;
        this.countries = [];
      }
    );
  }

  suggest( term: string){
    this.anyError = false;
    // TODO: Generate suggest
  }

}

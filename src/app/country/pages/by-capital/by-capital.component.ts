import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})

export class ByCapitalComponent{
  
  term: string = '';
  anyError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search( term: string ){
    this.anyError = false;
    this.term = term;
    this.countryService.searchCapital( this.term ).subscribe(
      countries => {
        this.countries = countries;
      }, (err) => {
        this.anyError = true;
        this.countries = [];
      }
    );
  }


}

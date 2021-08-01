import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li{cursor: pointer;}  
  `
  ]
})
export class ByCountryComponent {

  anyError: boolean = false;
  countries: Country[] = [];
  term: string = '';
  showSuggest: boolean = false;
  suggestCountries: Country[] = [];


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
    this.term = term;
    this.showSuggest = true;
    this.countryService.searchCountry( term )
        .subscribe( countries => {this.suggestCountries = countries.splice(0,5 )}
        , (err) => {
          this.anyError = true;
          this.suggestCountries = [];
        } )
  }

  searchSuggest(term: string){
    this.search( term );
  }

}

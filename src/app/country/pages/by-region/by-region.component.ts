import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button{
      margin: 0 5px;
    }
    `
  ]
})
export class ByRegionComponent {

  regions: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  activatedRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  getClassCss( region: string){
    return (region === this.activatedRegion ) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activateRegion( region: string){
    if ( region === this.activatedRegion ) { return; }
    this.activatedRegion = region;
    this.countries = [];
    this.searchByRegion( region );
    //TODO: load a service
  }

  searchByRegion( region: string){
    this.countryService.getCountryByRegion( this.activatedRegion ).subscribe(
        countries => {
          this.countries = countries;
        }, (err) => {
          this.countries = [];
        }
      );
    }

}

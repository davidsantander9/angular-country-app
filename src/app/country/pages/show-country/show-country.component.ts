import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor(
      private activatedRoute: ActivatedRoute,
      private countryService: CountryService
      ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ code }) => this.countryService.getCountryByCode( code ) ),
        tap( console.log )
      )
      .subscribe( country => this.country = country )

    // this.activatedRoute.params
    //   .subscribe(
    //     ( { code } ) => {
    //       this.countryService.getCountryByCode( code )
    //         .subscribe(
    //           console.log
    //         )
    //     }
    //   )
  }

}

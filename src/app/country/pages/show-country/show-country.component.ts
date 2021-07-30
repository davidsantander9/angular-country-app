import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private countryService: CountryService
      ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ code }) => this.countryService.getCountryByCode( code ) )
      )
      .subscribe( console.log )

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

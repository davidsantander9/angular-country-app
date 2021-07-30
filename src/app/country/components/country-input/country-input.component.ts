import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{

  @Output( ) onEnter: EventEmitter<string> = new EventEmitter();
  @Output( ) onDebounce: EventEmitter<string> = new EventEmitter();
  
  debouncer: Subject<string> = new Subject();

  term: string = '';

  constructor() { }

  ngOnInit()  {
    
    this.debouncer
      .pipe(
        debounceTime( 300 )
      )
      .subscribe( val => {
        this.onDebounce.emit( val );
    })

  }


  search(){
    this.onEnter.emit( this.term );
  }

  keyPress(){
    this.debouncer.next( this.term  )
  }
  
}

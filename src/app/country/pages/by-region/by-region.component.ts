import { Component} from '@angular/core';

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

  constructor() { }

  getClassCss( region: string){
    return (region === this.activatedRegion ) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activateRegion( region: string){
    this.activatedRegion = region;
    //TODO: load a service
  }

}

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

  activateRegion( region: string){
    this.activatedRegion = region;
    console.log(this.activatedRegion);
    //TODO: load a service
  }

}

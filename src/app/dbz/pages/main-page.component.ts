// Here the state is stored

import {Component} from '@angular/core';
import {DbzService} from "../services/dbz.service";
import {Character} from "../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(
    // Inject the service privately
    // Servicio protegido
    private dbzService: DbzService
  ) {}

  // Este getter de personajes va a regresar un arreglo de tipo character
  get characters(): Character[] {
    // In order not to directly modify the array, we use the spread operator and create a copy
    return [...this.dbzService.characters]
  }

  // Allows access to the constructor's private service
  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id )
  }

  onNewCharacter( character: Character ) {
    this.dbzService.addCharacter( character )
  }

}

import {Injectable} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 500
  },{
    id: uuid(),
    name: 'Goku',
    power: 10000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }]

  addCharacter(character: Character): void {
    // console.log('MainPage')
    // console.log(character)

    // To have the uuid added when adding a new element
    const newCharacter: Character = {
      id: uuid(), ...character
    }

    this.characters.push(newCharacter)

    // Add a new item, but don't add the uuid
    // this.characters.push(character)

  }

  // onDeleteCharacter( index: number ): void {
  // splice(queSeVaABorrar, Cuantos)
  // this.characters.splice(index, 1)
  deleteCharacterById( id: string ): void {
    //  Con filter esta definiendo un nuevo arreglo con la definicion que le estamos indicando y va a retornar todos los que cumpla true en la condicion.El nuevo arreglo va a incluir todos menos el que coincida con el ID que le estamos pasando
    this.characters = this.characters.filter( character => character.id !== id )
  }
}

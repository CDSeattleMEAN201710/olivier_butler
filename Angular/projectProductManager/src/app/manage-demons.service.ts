import { Injectable } from '@angular/core';
import { Demon } from './demon'

@Injectable()
export class ManageDemonsService {

  constructor() { 
    this.demonCage = []
  }

  captureDemon(hellChild){
    console.log(hellChild)
    this.demonCage.push(hellChild)
  }

  demonCage: Array<Demon>
}

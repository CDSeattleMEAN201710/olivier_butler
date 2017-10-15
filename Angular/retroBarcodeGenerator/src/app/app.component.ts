import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.randomColours = []
    const randomCol = () => Math.floor(Math.random() * 256)
    const baseCol = randomCol() // Num between 0 and 255
    const baseOrder = Math.floor(Math.random() * 3) // Num between 0 and 2 inc

    for (let idx = 0; idx < 10; idx += 1){
      let newCol = new Array
      newCol[baseOrder] = baseCol
      for (let idxColComponent = 0; idxColComponent < 3; idxColComponent += 1){
        if (idxColComponent !== baseOrder){
          newCol[idxColComponent] = randomCol()
        } else {
          newCol[baseOrder] = Math.floor(newCol[baseOrder] * 1 - (Math.random() / 7))
        }
      }
      this.randomColours.push(`rgb(${newCol.join(',')})`)
    }
    console.log(this.randomColours)
  }
  
  title = 'Hopefully Nice Squares'
  randomColours: Array<string>
}

import { Component, OnInit } from '@angular/core';
import { ManageDemonsService } from './../manage-demons.service'
import { Demon } from './../demon'

@Component({
  selector: 'app-summon-demon',
  templateUrl: './summon-demon.component.html',
  styleUrls: ['./summon-demon.component.css']
})
export class SummonDemonComponent implements OnInit {

  constructor(private demonService: ManageDemonsService) { 
    
  }

  formData: Demon = new Demon()

  processSubmit = () => {
    console.log("Demon summoning requested")
    this.demonService.captureDemon(this.formData)
    this.formData = new Demon()
  }

  ngOnInit() {
  }

}

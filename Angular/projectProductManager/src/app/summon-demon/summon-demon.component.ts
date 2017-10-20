import { Component, OnInit } from '@angular/core';
import { ManageDemonsService } from './../manage-demons.service'

@Component({
  selector: 'app-summon-demon',
  templateUrl: './summon-demon.component.html',
  styleUrls: ['./summon-demon.component.css']
})
export class SummonDemonComponent implements OnInit {

  constructor(private demonsService: ManageDemonsService) { }

  processSubmit = () => {
    console.log("Something")
  }
  ngOnInit() {
  }

}

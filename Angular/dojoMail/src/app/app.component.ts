import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Dojo Mail';
  emails = [
    { 'address': 'bill@gates.com', 'importance':'true', 'subject':'Windows 12 to follow 10?', 'content':'I should probably encrypt this but...' },
    { 'address': 'ada@lovelace.uk', 'importance':'true', 'subject':'Machines capable of love', 'content':'Haha, jk, obiously not. Wanna go skating...' },
    { 'address': 'john@carmack.com', 'importance':'false', 'subject':'Can you check if I have my headset on', 'content':'Wierd question, but could you check my room...' },
    { 'address': 'gabe@newell.com', 'importance':'false', 'subject':'FW: Valve = Mac exclusive', 'content':'HAHAHAHAHA, just imagine, I mean, oh my GOD. Job\'s is...' }
  ]
}
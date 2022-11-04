import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  toLink(){
    let big_card_link = "https://vidafullstack.com.br/angular/novidades-no-angular-v14/"
  }
}

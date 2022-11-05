import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  imagem: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
  @Input()
  id: string = "0"

  link: string = "https://vidafullstack.com.br/angular/novidades-no-angular-v14/"

  constructor() { }

  ngOnInit(): void {
  }
  toLink() {
    let big_card_link = ""
  }
}

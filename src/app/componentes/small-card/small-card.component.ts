import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  imagem: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  id: string = "0"

  link: string[] =[ "https://blog.schoolofnet.com/como-comecar-com-node-js/",
  "https://www.mongodb.com/",
  "https://www.richgarcia.com.br/python-linguagem-popular/"
  ]
  constructor() { }

  ngOnInit(): void {
  }
}

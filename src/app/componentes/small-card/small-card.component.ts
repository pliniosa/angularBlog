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
  link: string = ""
  constructor() { }

  ngOnInit(): void {
  }
}

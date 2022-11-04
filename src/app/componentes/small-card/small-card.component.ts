import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toLink(){
    let big_card_link = "https://blog.schoolofnet.com/como-comecar-com-node-js/"
  }
}

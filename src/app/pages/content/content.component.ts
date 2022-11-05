import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imagem: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  link: string = ""
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesComponent(this.id)
  }

  setValuesComponent(id: string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]
    this.imagem = result.imagem
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.link = result.link
  }
}

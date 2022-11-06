import { Component, Input, OnInit } from '@angular/core';
import { repositorioFake } from '../../../data/repositorioFake'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  imagem: string = ""
  title: string = ""
  text: string = ""
  link: string = ""
  @Input()
  id: string | null = "0"
constructor() { }

ngOnInit(): void {
  this.getDados(this.id)
}

  getDados(id: string | null){
    const result = repositorioFake.filter(article => article.id.toString() == id)[0]
    this.imagem = result.imagem
    this.title = result.title
    this.text = result.description
    this.link = result.link
  }

}

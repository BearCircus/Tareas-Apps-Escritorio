import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-noticias-articles',
  templateUrl: './noticias-articles.component.html',
  styleUrls: ['./noticias-articles.component.scss'],
})
export class NoticiasArticlesComponent implements OnInit {
  @Input() articles: any = [];
  @Input() current: any = {};

  constructor() {}
  favorito: number = 0;
  @Output() news: EventEmitter<Object> = new EventEmitter();

  actualizarFavoritos(checkbox: any) {
    this.favorito++;
  }

  selectNoticia(noticia: any) {
    this.current = noticia;
    // this.articles = noticia;
    this.news.emit(noticia);
    // console.log('ya estoy hasta la mother');
    // console.log('Articles', this.current);
  }
  ngOnInit(): void {}
}

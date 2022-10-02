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

  @Output() news: EventEmitter<Object> = new EventEmitter();
  selectNoticia(noticia: any) {
    this.current = noticia;
    this.articles = noticia;
    this.news.emit(noticia);
    // console.log('ya estoy hasta la mother');
    // console.log(this.current);
  }
  ngOnInit(): void {}
}

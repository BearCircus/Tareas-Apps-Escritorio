import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../interfaces/noticia'; //src/app/shared/interfaces/noticias

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  private noticia: Noticia = {
    title: '',
    description: '',
    url: '',
    urlToImage: '',
  };
  constructor(private hhtpClient: HttpClient) {}

  getNoticias(q: string): Observable<any> {
    return this.hhtpClient.get(
      `${environment.apiUrl}everything?q=${q}&apiKey=${environment.apiKey}`
    );
  }
  setCurrentNoticia(noticia: Noticia) {
    this.noticia = noticia;
    localStorage.setItem('noticia', JSON.stringify(noticia));
    // console.log('se guardó la noticia', this.noticia);
  }
  getCurrentNoticia(): Noticia {
    if (!this.noticia.title) {
      const n = localStorage.getItem('noticia') || '{}';
      this.noticia = JSON.parse(n);
    }
    return this.noticia;
  }
}

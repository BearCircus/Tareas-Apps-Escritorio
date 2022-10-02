import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  noticias: any = [];
  cargando: boolean = false;
  // private noticiaService;

  zelda: string = 'http://google.com';
  search: string = '';
  lastSearch: string = '';

  constructor(private noticiaService: NoticiaService) {
    // this.noticiaService = noticiaService;
    // console.log('hola', noticiaService);
  }
  //siemrpe se manda a llamar -- Hook
  ngOnInit(): void {
    // this.cargando = true;
    // this.noticiaService.getNoticias().subscribe((response) => {
    //   this.cargando = false;
    //   this.noticias = response.articles;
    // });
    // this.noticias = this.noticiaService.noticias;
  }
  buscar(): void {
    // console.log('Click event', e);
    this.cargando = true;
    this.noticiaService.getNoticias(this.search).subscribe((response) => {
      this.lastSearch = this.search;
      this.cargando = false;
      this.noticias = response.articles;
    });
    error: (err: any) => {
      console.log('te mamaste con', err);
    };
  }
  current: any = {};
  selectNoticia(noticia: any) {
    // console.log('Selecciono la noticias', noticia);
    this.current = noticia;
    // console.log(this.current);
  }

  clearCurrent(): void {
    this.current = {};
  }
  // setSearch(e: any) {
  //   // console.log('key event: ', e);
  //   // console.log('Search Keys', e.target.value);
  //   this.search = e.target.value;
  //   if (e.key == 'Enter') {
  //     this.buscar();
  //   }
  // }
}

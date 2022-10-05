import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private noticiaService: NoticiaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
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
    console.log('first attempt', sessionStorage.getItem('lastSearch'));
    if (
      sessionStorage.getItem('lastSearch') &&
      String(sessionStorage.getItem('lastSearch'))
    ) {
      this.noticiaService
        .getNoticias(String(sessionStorage.getItem('lastSearch')))
        .subscribe((r) => {
          // this.search = String(sessionStorage.getItem('lastSearch'));
          this.noticias = r.articles;
        });
    }
  }
  buscar(): void {
    // console.log('Click event', e);
    this.cargando = true;
    this.noticiaService.getNoticias(this.search).subscribe((response) => {
      this.router.navigate(['/noticias'], {
        queryParams: { title: this.search },
      });
      this.lastSearch = this.search;
      // console.log('lastSearch inside noticaService', this.lastSearch);
      this.cargando = false;
      this.noticias = response.articles;
      sessionStorage.setItem('lastSearch', this.lastSearch);
      // console.log('last saved item: ', sessionStorage.getItem('lastSearch'));
    });
    error: (err: any) => {
      console.log('te mamaste con', err);
    };
  }
  current: any = {};
  selectNoticia(noticia: any) {
    // console.log('Selecciono la noticias', noticia);
    this.current = noticia;
    // console.log('Noticia component', this.current);
    this.noticiaService.setCurrentNoticia(noticia);
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

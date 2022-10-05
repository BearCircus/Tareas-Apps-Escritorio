import { PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { partition } from 'rxjs';
import { Noticia } from 'src/app/shared/interfaces/noticia';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticia-details-page',
  templateUrl: './noticia-details-page.component.html',
  styleUrls: ['./noticia-details-page.component.scss'],
})
export class NoticiaDetailsPageComponent implements OnInit {
  title: string = '';
  //1- inyectamos el servicio con el import
  constructor(
    private noticiaService: NoticiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  //2- create object and import interface
  noticia: Noticia = {
    title: '',
    description: '',
    url: '',
    urlToImage: '',
  };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      console.log('titulo en parms', p['title']);
      this.title = p['title'];
    });

    //assign value to object
    this.noticia = this.noticiaService.getCurrentNoticia();
    // console.log('current notice', this.noticia);
    if (this.title !== this.noticia.title) {
      // alert('Bad request mate');
      //falta de redirigir al usuario
      this.router.navigate(['/noticias']);
    }
    //investigar como pasar parametros por boton y por local y disparar la búsqueda
    //cambiar el param por queryParams
  }
}

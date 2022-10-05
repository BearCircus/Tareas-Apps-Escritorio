import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoticiasDetailsComponent } from './pages/noticias/noticias-details/noticias-details.component';
import { NoticiaDetailsPageComponent } from './pages/noticias/noticia-details-page/noticia-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  { path: 'noticia/nueva', component: HomeComponent },
  // { path: 'noticias/details', component: NoticiasDetailsComponen },
  { path: 'noticias/:title', component: NoticiaDetailsPageComponent },
  { path: '**', component: NotFoundComponent },
];

//cuando carge ruta
//que quier visualizar

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

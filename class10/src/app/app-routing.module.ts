import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  // { path: 'noticias/details', component: NoticiasDetailsComponen },
  { path: 'noticias/:title', component: NoticiasComponent },
  { path: '**', component: NotFoundComponent },
];

//cuando carge ruta
//que quier visualizar

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

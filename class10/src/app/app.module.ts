import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { MyUpperCasePipe } from './shared/pipes/my-upper-case.pipe';
import { NoticiasDetailsComponent } from './pages/noticias/noticias-details/noticias-details.component';
import { NoticiasArticlesComponent } from './pages/noticias/noticias-articles/noticias-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    HomeComponent,
    NotFoundComponent,
    MyUpperCasePipe,
    NoticiasDetailsComponent,
    NoticiasArticlesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // NoticiasComponent,
    // HomeComponent,
  ],
})
export class AppModule {}

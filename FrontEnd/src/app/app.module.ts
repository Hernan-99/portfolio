import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ProyectosComponent } from './sections/proyectos/proyectos.component';
import { BtnSobreMiComponent } from './components/btn-sobre-mi/btn-sobre-mi.component';
import { BtnDescargarCvComponent } from './components/btn-descargar-cv/btn-descargar-cv.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ContactoComponent } from './sections/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    ProyectosComponent,
    BtnSobreMiComponent,
    BtnDescargarCvComponent,
    FooterComponent,
    ContactoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

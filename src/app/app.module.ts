import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BodegaComponent } from './components/bodega/bodega.component';
import { navbarComponent } from './components/navbar/navbar.component';
import { from } from 'rxjs';
import { ViniedosComponent } from './components/viniedos/viniedos.component';
import { NuestrosViniedosComponent } from './components/nuestros-viniedos/nuestros-viniedos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { HomeComponent } from './components/home/home.component';
import { MasterComponent } from './components/master/master.component';

//Servicios


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    BodegaComponent,
    navbarComponent,
    ViniedosComponent,
    NuestrosViniedosComponent,
    ContactoComponent,
    MasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

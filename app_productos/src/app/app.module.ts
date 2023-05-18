import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ProductoAltaComponent } from './pages/producto-alta/producto-alta.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ProductoListadoComponent } from './components/producto-listado/producto-listado.component';
import { PaisListadoComponent } from './components/pais-listado/pais-listado.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';
import { ProductoInfoComponent } from './components/producto-info/producto-info.component';
import { ProductoListadoPublicoComponent } from './pages/producto-listado-publico/producto-listado-publico.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavbarComponent,
    LoginComponent,
    ProductoAltaComponent,
    ProductoFormComponent,
    ProductoListadoComponent,
    PaisListadoComponent,
    ProductoDetalleComponent,
    PaisDetalleComponent,
    ProductoInfoComponent,
    ProductoListadoPublicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }

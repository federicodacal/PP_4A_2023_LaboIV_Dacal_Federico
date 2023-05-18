import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductoAltaComponent } from './pages/producto-alta/producto-alta.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: 'bienvenido', component:BienvenidaComponent },
  {path: 'login', component:LoginComponent },
  {path: 'alta-producto', component:ProductoAltaComponent, canActivate: [LoginGuard] },
  {path: '', component:BienvenidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

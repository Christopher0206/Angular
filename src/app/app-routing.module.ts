
import { LoginComponent } from './Componentes/login/login.component';
import { MenusComponent } from './Componentes/menus/menus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './Componentes/registro/registro.component';

const routes: Routes = [
  {path:'menu',component:MenusComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

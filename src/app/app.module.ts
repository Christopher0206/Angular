import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Componentes/user/user.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MenusComponent } from './Componentes/menus/menus.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    MenusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

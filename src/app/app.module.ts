import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Componentes/user/user.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MenusComponent } from './Componentes/menus/menus.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { ServiceService } from './service.service';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    MenusComponent,
    RegistroComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

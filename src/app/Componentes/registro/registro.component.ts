import { modeloregistro } from './modeloregistro';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:modeloregistro={
    "email":'',
    "password":''
  }
  constructor(private servicio:ServiceService) {

   }


  ngOnInit(): void {
  }
 
  formregis = new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required])
  })
  
  registrar() {
    this.servicio.registratse(this.usuario).subscribe((data:any)=>{
     this.usuario=data;
    })
  }
}

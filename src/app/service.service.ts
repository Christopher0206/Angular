import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private servicio:HttpClient) { }

  public registratse(object:any){
    return this.servicio.post('http://127.0.0.1:3333/registrar',object)
  }
    
  }

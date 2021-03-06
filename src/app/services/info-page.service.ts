import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../Interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = []; 

  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo(){
    //Leer el archivo JSON
    this.http.get('assets/data/data-page.json')
    .subscribe((resp: InfoPagina) =>{

      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-ejemplo-html-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp: any) => {

      this.equipo = resp;
      //console.log(resp);
    });
  }

}

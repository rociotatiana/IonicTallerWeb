import { Component, OnInit } from '@angular/core';

import { EjemploApiService } from '../../services/ejemplo-api.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { NavComponentWithProps, NavController } from '@ionic/angular';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.page.html',
  styleUrls: ['./editar-proyecto.page.scss'],
})
export class EditarProyectoPage implements OnInit {

  data!:string;
  proyecto=[];

  constructor(private api: EjemploApiService, private activeroute: ActivatedRoute, private router: Router, private navCtrl:NavController ) 
  {
    this.activeroute.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation()?.extras.state)
      {
        this.data = this.router.getCurrentNavigation()!.extras!.state!['data'];
        console.log("Recibido :" + this.data)
      }
    });
   }

  ngOnInit() {
      this.getProyecto(this.data);
  }

  getProyecto(data:any){
    console.log("Editar Proyecto: Inicio "+ data);
    this.api.getProyecto(this.data).subscribe((res)=>{
    console.log("Editar Proyecto: CORRECTO");
    //CAMBIO IMPORTANTE
    this.proyecto = res["items"];
    console.log("Editar Proyecto: ASIGNACION");
    console.log(res);
    },(error)=>{
      console.log("Editar Proyecto: ERROR");
      console.log(error);
    });
    console.log("Editar Proyecto: Fin");
  };

  salir(){
    //Funcionalidades sólo para utilizar con guard
    localStorage.setItem('ingresado','false');
    this.navCtrl.navigateRoot('login');
  }

  volver(){
    this.navCtrl.navigateRoot('home');
  }
}

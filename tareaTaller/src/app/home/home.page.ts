import { Component } from '@angular/core';

//Importar Servicio
import { EjemploApiService } from '../services/ejemplo-api.service';

//Routing
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular'; 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mascotas=[];
  id!:string;

  constructor(private api:EjemploApiService, private router: Router, private navCtrl: NavController) {
  }

  getMascotas(){
    console.log("Home: Inicio");
    this.api.getMascotas().subscribe((res)=>{
    console.log("Home: CORRECTO");
    //CAMBIO IMPORTANTE
    this.mascotas = res["items"];
    console.log("Home: ASIGNACION");
    console.log(res);
    },(error)=>{
      console.log("Home: ERROR");
      console.log(error);
    });
    console.log("Home: Fin");
  };

  getMascota(id:string){
    const data = id;
    console.log("Home: Ingreso, Variable : " + id)

    let navigationExtras: NavigationExtras ={
      state:{data: data}
    };

    this.router.navigate(['profile/'+ id], navigationExtras);
  }

  salir(){
    //Funcionalidades sólo para utilizar con guard
    localStorage.setItem('ingresado','false');
    this.navCtrl.navigateRoot('login');
  }

  getSelected(seccion:string)
  {
    console.log("Selector: ", seccion);
  }


}


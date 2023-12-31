import { Component} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { EjemploApiService } from '../services/ejemplo-api.service';
import { NavController } from '@ionic/angular';
//Importar Servicio

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  mascotas=[];
  id!:string;

  constructor(
    private api:EjemploApiService, private router: Router, private navCtrl: NavController
    ) { }
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
      };
     



    }

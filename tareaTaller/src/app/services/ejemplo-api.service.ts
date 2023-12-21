import { Injectable } from '@angular/core';

//Importamos las referencias 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjemploApiService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  }

  apiURL = "https://ga1bf67414c0df7-pr0y3ct0sl3y.adb.sa-valparaiso-1.oraclecloudapps.com/ords/menta/api/proyectosley"

  constructor(private http:HttpClient) { }

  getProyectos():Observable<any>{
    //return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
    return this.http.get(this.apiURL+'/obtenerProyectos').pipe(retry(3));
  }

  getProyecto(id:string):Observable<any>{
    //return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
    return this.http.get(this.apiURL + '/obtenerProyecto/'+id).pipe(retry(3));
  }

//  editAlumno(id:string, nombre:string, seccion: string):Observable<any>{
//    return this.http.get(this.apiURL+ seccion + '/actualizarAlumno/'+id).pipe(retry(3));
//  }
}

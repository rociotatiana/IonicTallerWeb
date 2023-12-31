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

  apiURL = "https://ga1bf67414c0df7-veterinario123.adb.sa-valparaiso-1.oraclecloudapps.com/ords/admin/veterinario"


  constructor(private http:HttpClient) { }

  getMascotas():Observable<any>{
    return this.http.get(this.apiURL+'/getMascotas').pipe(retry(3));
  }

  getMascota(id:string):Observable<any>{
    return this.http.get(this.apiURL + '/getMascota/'+id).pipe(retry(3));
  }

}

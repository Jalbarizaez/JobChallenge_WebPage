import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Package } from '../interfaces/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  url = 'http://localhost:3000/package'

  constructor(private http: HttpClient) { }


  getPackages(){
    return this.http.get(this.url);
  }

  createPackages(pack: any)
  {
    return this.http.post<any>(this.url,pack);
  }

  updatePackage(id: string){
    return this.http.put<any>(this.url+'/'+id,null);
  }
  deletePackage(id: string){
    return this.http.delete<any>(this.url+'/'+id);
  }
}

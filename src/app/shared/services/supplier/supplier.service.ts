import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SisSupplier} from '../../../models/tdm-milk/sisSupplier';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
    public API = environment.milk.api;
  public OPERATION_API = this.API + '/suppliers';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public get(id: number){
    return this.http.get(this.OPERATION_API + '/' + id);
  }

  public save(op: SisSupplier) {
    return this.http.post<SisSupplier>(this.OPERATION_API, op);
  }

  public delete(documentType: SisSupplier){
    return this.http.delete(this.OPERATION_API + '/' + documentType.idSisSupplier);
  }

  public  getSupllierFromName(name:string){
    return this.http.get<SisSupplier>(this.OPERATION_API + '/getFromName/' + name);

  }
}

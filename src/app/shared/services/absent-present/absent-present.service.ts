import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SisAbsentPresent} from '../../../models/tdm-milk/sisAbsentPresent';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AbsentPresentService {
    public API = environment.milk.api;
  public OPERATION_API = this.API + '/absent-presents';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public get(id: number){
    return this.http.get(this.OPERATION_API + '/' + id);
  }

  public save(op: SisAbsentPresent) {
    return this.http.post<SisAbsentPresent>(this.API + '/create-absent-present', op);
  }

  public delete(documentType: SisAbsentPresent){
    return this.http.get(this.API + '/delete-absent-present/' + documentType.idSisAbsentPresent);
  }
}

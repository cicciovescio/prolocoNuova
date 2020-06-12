import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SisAnalyst} from '../../../models/tdm-milk/sisAnalyst';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AnalystService {

    public API = environment.milk.api;
  public OPERATION_API = this.API + '/analysts';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public get(id: number){
    return this.http.get(this.OPERATION_API + '/' + id);
  }

  public save(op: SisAnalyst) {
    return this.http.post<SisAnalyst>(this.API + '/create-analyst', op);
  }

  public delete(documentType: SisAnalyst){
    return this.http.get(this.API + '/delete-analyst/' + documentType.idSisAnalyst);
  }
}

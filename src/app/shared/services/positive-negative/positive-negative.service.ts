import {Injectable} from '@angular/core';
import {SisPositiveNegative} from '../../../models/tdm-milk/sisPositiveNegative';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PositiveNegativeService {
    public API = environment.milk.api;
  public OPERATION_API = this.API + '/positive-negatives';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public get(id: number){
    return this.http.get(this.OPERATION_API + '/' + id);
  }

  public save(op: SisPositiveNegative) {
    return this.http.post<SisPositiveNegative>(this.API + '/create-positive-negative', op);
  }

  public delete(documentType: SisPositiveNegative){
    return this.http.get(this.API + '/delete-positive-negative/' + documentType.idSisPositiveNegative);
  }
}

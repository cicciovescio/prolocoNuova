import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SisOperation} from '../../../models/tdm-milk/sisOperation';
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class OperationService {

    public API = environment.milk.api;
  public OPERATION_API = this.API + '/operations';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public get(id: number){
    return this.http.get(this.OPERATION_API + '/' + id);
  }

  public save(op: SisOperation) {
    return this.http.post<SisOperation>(this.API + '/create-operation', op);
  }

  public delete(operation: SisOperation){
    return this.http.get(this.API + '/delete-operation/' + operation.idSisOperation);
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SisMilkType} from '../../../models/tdm-milk/sisMilkType';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MilkTypeService {

    public API = environment.milk.api;
  public OPERATION_API = this.API + '/milk-types';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public get(id: number){
    return this.http.get(this.OPERATION_API + '/' + id);
  }

  public save(op: SisMilkType) {
    return this.http.post<SisMilkType>(this.API + '/create-milk-type', op);
  }

  public delete(milkType: SisMilkType){
    return this.http.get(this.API + '/delete-milk-type/' + milkType.idSisMilkType);
  }

}

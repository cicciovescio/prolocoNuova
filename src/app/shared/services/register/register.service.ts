import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SisDischargeChargeRegister} from '../../../models/tdm-milk/sisDischargeChargeRegister';
import {environment} from "../../../../environments/environment";

interface PageRegister {
  content: SisDischargeChargeRegister[],
  pageable: {
    sort : {
      unsorted : boolean
      sorted : boolean
    }
    offset : number
    pageSize : number
    pageNumber : number
    paged : boolean
    unpaged : boolean
  },
  last : boolean,
  totalElements : number,
  totalPages : number,
  size : number,
  number : number,
  sort : {
    unsorted : boolean
    sorted : boolean
  }
  first : boolean,
  numberOfElements : number
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public API = environment.milk.api;
  public REGISTER_API = this.API + '/registers';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<SisDischargeChargeRegister[]>(this.REGISTER_API)
  }

  public get(id: number){
    return this.http.get<SisDischargeChargeRegister>(this.REGISTER_API + '/' + id);
  }

  public getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageRegister>(this.REGISTER_API, {params});
  }

  public getFromDateOperationPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageRegister>(this.REGISTER_API + '/search', {params});
  }

  public getFromDateOperation(date: string){
    return this.http.get<SisDischargeChargeRegister[]>(this.REGISTER_API + '/search/' + date);
  }
  public create(register: SisDischargeChargeRegister) {
    return this.http.post<SisDischargeChargeRegister>(this.REGISTER_API, register);
  }

  public edit(id: number, register: SisDischargeChargeRegister) {
    return this.http.put<SisDischargeChargeRegister>(this.REGISTER_API + '/' + id, register);
  }

  public delete(register: SisDischargeChargeRegister){
    return this.http.delete(this.REGISTER_API+'/' + register.idSisRegister);
  }
  
  public getRegistersWithDeliveryOperationAndRawMilkAnalysisNotNull() : Observable<SisDischargeChargeRegister[]> {
    return this.http.get<SisDischargeChargeRegister[]>(this.API + '/registers-delivery-operation/');
  }

  public getRegistersWithoutAnalysisAndOperationIsDelivery(): Observable<SisDischargeChargeRegister[]>{
    return this.http.get<SisDischargeChargeRegister[]>(this.API + '/registers-without-analysis');
  }
  public getFromDateOperationandVideo(date: string){
    return this.http.get<SisDischargeChargeRegister>(this.REGISTER_API + '/searchVideo/' + date);
  }
  public getAllRegisterWithVideoFromData(date: string){
    return this.http.get<SisDischargeChargeRegister[]>(this.REGISTER_API + '/searchRegisterWithVideo/'+ date);
  }
  
  

}

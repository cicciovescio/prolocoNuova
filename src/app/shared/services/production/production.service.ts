import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SisProduction} from '../../../models/tdm-milk/sisProduction';
import {environment} from "../../../../environments/environment";

interface PageProduction {
  content: SisProduction[],
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
export class ProductionService {

    public API = environment.milk.api;
  public OPERATION_API = this.API + '/productions';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageProduction>(this.OPERATION_API, {params});
  }

  public getFromDateOperationRegisterPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageProduction>(this.OPERATION_API + '/search', {params});
  }

  getFromDateOperationRegister(date: string){
    return this.http.get<SisProduction[]>(this.OPERATION_API + '/search/' + date);
  }

  public get(id: number){
    return this.http.get<SisProduction>(this.OPERATION_API + '/' + id);
  }

  public create(op: SisProduction) {
    return this.http.post<SisProduction>(this.OPERATION_API, op);
  }

  public edit(id: number, op: SisProduction) {
    return this.http.put<SisProduction>(this.OPERATION_API + '/' + id, op);
  }

  public delete(production: SisProduction){
    return this.http.delete(this.OPERATION_API+ '/' + production.idSisProduction);
  }

  public getProductionsWithoutAnalysis(): Observable<SisProduction[]>{
    return this.http.get<SisProduction[]>(this.API + '/production-analysis-null');
  }
  public getAllProductionWithVideoFromData(date: string,typeMilk:string){
    return this.http.get<SisProduction[]>(this.OPERATION_API + '/searchProductionWithVideo/'+date+"/"+typeMilk);
  }


}

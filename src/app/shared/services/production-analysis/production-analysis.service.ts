import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SisProductionAnalysis } from '../../../models/tdm-milk/sisProductionAnalysis';
import { environment } from "../../../../environments/environment";

interface PageProductionAnalysis {
  content: SisProductionAnalysis[],
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
export class ProductionAnalysisService {

  public API = environment.milk.api;
  public OPERATION_API = this.API + '/production-analyses';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageProductionAnalysis>(this.OPERATION_API, {params});
  }

  public getFromDateOperationRegisterPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageProductionAnalysis>(this.OPERATION_API + '/search', {params});
  }

  getFromDateOperationRegisterAndVideo(date: string){
    return this.http.get<SisProductionAnalysis[]>(this.OPERATION_API + '/searchAnalysisWithVideo/' + date);
  }
  getFromDateOperationRegister(date: string) {
    return this.http.get<SisProductionAnalysis[]>(this.OPERATION_API + '/search/' + date);
  }

  getLast(type: string, date: string) {
    return this.http.get<SisProductionAnalysis[]>(this.OPERATION_API + '/searchLast/' + type+ "/"+ date);
  }

  public get(id: number) {
    return this.http.get<SisProductionAnalysis>(this.OPERATION_API + '/' + id);
  }

  public create(op: SisProductionAnalysis) {
    return this.http.post<SisProductionAnalysis>(this.OPERATION_API, op);
  }

  public edit(id: number, op: SisProductionAnalysis) {
    return this.http.put<SisProductionAnalysis>(this.OPERATION_API + '/' + id, op);
  }

  public delete(productionAnalysis: SisProductionAnalysis) {
    return this.http.delete(this.OPERATION_API + '/' + productionAnalysis.idSisProductionAnalysis);
  }

  public getProductionAnalysisByDate(date: string): Observable<SisProductionAnalysis[]> {
    return this.http.get<SisProductionAnalysis[]>(this.API + '/production-analysis-bydate/' + date);
  }

  public getLastProductionAnalysis(): Observable<SisProductionAnalysis[]> {
    return this.http.get<SisProductionAnalysis[]>(this.API + '/last-production-analysis/');
  }

}

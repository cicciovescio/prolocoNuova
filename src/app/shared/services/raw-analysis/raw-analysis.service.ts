import {Injectable} from '@angular/core';
import {SisRawMilkAnalysis} from '../../../models/tdm-milk/sisRawMilkAnalysis';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../../../environments/environment";

interface PageRawMilkAnalysis {
  content: SisRawMilkAnalysis[],
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
export class RawAnalysisService {

    public API = environment.milk.api;
  public OPERATION_API = this.API + '/raw-analyses';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageRawMilkAnalysis>(this.OPERATION_API, {params});
  }

  public getFromDateOperationRegisterPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageRawMilkAnalysis>(this.OPERATION_API + '/search', {params});
  }
  
  public getFromDateOperationRegister(date: string){
    return this.http.get<SisRawMilkAnalysis[]>(this.OPERATION_API + '/search/' + date)
  }
  public get(id: number){
    return this.http.get<SisRawMilkAnalysis>(this.OPERATION_API + '/' + id);
  }

  public create(a: SisRawMilkAnalysis) {
    return this.http.post<SisRawMilkAnalysis>(this.OPERATION_API, a);
  }

  public edit(id: number,  a: SisRawMilkAnalysis) {
    return this.http.put<SisRawMilkAnalysis>(this.OPERATION_API + '/' + id, a);
  }

  public delete(a: SisRawMilkAnalysis){
    return this.http.delete(this.OPERATION_API + '/' + a.idRawMilkAnalysis);
  }

}

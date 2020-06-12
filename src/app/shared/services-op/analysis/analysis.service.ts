import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisAnalysis } from '../../../models/tdm-op/sisAnalysis';

interface PageAnalysis {
  content: SisAnalysis[],
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
export class AnalysisService {

  public API = environment.op.api;
  public ANALYSIS_API = this.API + '/analysis';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisAnalysis[]>(this.ANALYSIS_API)
  }
  get(id: number){
    return this.http.get<SisAnalysis>(this.ANALYSIS_API + '/get' + id);
  }
  getPaginatedAnalisi(page, size) { 
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageAnalysis>(this.ANALYSIS_API, {params});
  }
  public create(analysis: SisAnalysis) {
    return this.http.post<SisAnalysis>(this.ANALYSIS_API, analysis);
  }
  public edit(id: number, analysis: SisAnalysis) {
    return this.http.put<SisAnalysis>(this.ANALYSIS_API + '/update' + id, analysis);
  }
  public getFromDateOperationPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageAnalysis>(this.ANALYSIS_API + '/search', {params});
  }
  
  getFromDateOperationRegister(date: string){
    return this.http.get<SisAnalysis[]>(this.ANALYSIS_API + '/search/' + date);
  }
  public delete(analysis: SisAnalysis){
    return this.http.delete(this.ANALYSIS_API+ '/delete/' + analysis.idSisOpAnalysis);
  }
  
}
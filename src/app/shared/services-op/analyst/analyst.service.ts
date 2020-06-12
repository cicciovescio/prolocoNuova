import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpAnalyst } from '../../../models/tdm-op/sisOpAnalyst';

interface PageAnalyst {
  content: SisOpAnalyst[],
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
export class AnalystService {

  public API = environment.op.api;
  public ANALYST_API = this.API + '/analyst';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpAnalyst[]>(this.ANALYST_API)
  }
  get(id: number){
    return this.http.get<SisOpAnalyst>(this.ANALYST_API + '/' + id);
  }
  getPaginated(page, size) {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size);
    return this.http.get<PageAnalyst>(this.ANALYST_API , {params});
  }

  public create(analyst: SisOpAnalyst) {
    return this.http.post<SisOpAnalyst>(this.ANALYST_API, analyst);
  }
  public edit(id: number, analyst: SisOpAnalyst) {
    return this.http.put<SisOpAnalyst>(this.ANALYST_API + '/update/' + id, analyst);
  }
  public getFromDateOperationPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageAnalyst>(this.ANALYST_API + '/search', {params});
  }
  getFromDateOperationRegister(date: string){
    return this.http.get<SisOpAnalyst[]>(this.ANALYST_API + '/search/' + date);
  }
  public delete(analyst: SisOpAnalyst){
    return this.http.delete(this.ANALYST_API+'/delete/' + analyst.idSisOpAnalyst);
  }
  getFromName(name: string, page, size){
    const params = new HttpParams()
      .set('name', name)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageAnalyst>(this.ANALYST_API + '/search/', {params});
  }
}
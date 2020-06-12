import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SisLoading } from '../../../models/tdm-op/sisLoading';
import { HttpClient, HttpParams } from '@angular/common/http';


interface PageLoading {
  content: SisLoading[],
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

export class LoadingService {


  public API = environment.op.api;
  public DISTINCT_API = this.API + '/distinct';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisLoading[]>(this.DISTINCT_API)
  }

  public get(id: number){
    return this.http.get<SisLoading>(this.DISTINCT_API + '/getById/' + id);
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageLoading>(this.DISTINCT_API, {params});
  }
  getPageDistinct(page, size, keyDistinct) { 
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('keyDistinct', keyDistinct);
    return this.http.get<PageLoading>(this.DISTINCT_API, {params});
  }
  public create(distinct: SisLoading) {
    return this.http.post<SisLoading>(this.DISTINCT_API, distinct);
  }
  public edit(id: number, distinct: SisLoading) {
    return this.http.put<SisLoading>(this.DISTINCT_API + '/update/' + id, distinct);
  }
  public getFromDateOperationPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageLoading>(this.DISTINCT_API + '/search', {params});
  }
  getFromDateOperationRegister(date: string){
    return this.http.get<SisLoading[]>(this.DISTINCT_API + '/search/' + date);
  }
  public delete(distinct: SisLoading){
    return this.http.delete(this.DISTINCT_API+'/delete/' + distinct.idSisOpDistinctLoad);
  }
  public getAllDistinctwithVideo(page,size){
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);
    return this.http.get<PageLoading>( this.DISTINCT_API + '/findVideo/', {params});
  }
  
  getFromExitLot(exitLot: string){ 
    return this.http.get<SisLoading[]>(this.DISTINCT_API + '/findByExitLot/' + exitLot );
  }
 
}

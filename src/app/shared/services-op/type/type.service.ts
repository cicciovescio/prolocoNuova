import { Injectable } from '@angular/core';
import { SisOpType } from '../../../models/tdm-op/sisOpType';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
interface PageType {
  content: SisOpType[],
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
export class TypeService {

  public API = environment.op.api;
  public TYPE_API = this.API + '/type';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<SisOpType[]>(this.TYPE_API)
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageType>(this.TYPE_API, {params});
  }
  public create(type: SisOpType) {
    return this.http.post<SisOpType>(this.TYPE_API, type);
  }
  public edit(id: number, type: SisOpType) {
    return this.http.put<SisOpType>(this.TYPE_API + '/update' + id, type);
  }
  public delete(typeto: SisOpType){
    return this.http.delete(this.TYPE_API +'/delete/' + typeto.idSisOpType);
    }
    public getType(id: number){
      return this.http.get<SisOpType[]>(this.TYPE_API + '/from-analysis/' + id);
    }
    getFromName(name: string, page, size){
      const params = new HttpParams()
        .set('name', name)
        .set('page', page)
        .set('size', size);
      return this.http.get<PageType>(this.TYPE_API + '/search/', {params});
    }
}
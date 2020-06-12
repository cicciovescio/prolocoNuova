import { Injectable } from '@angular/core';
import { SisOpField } from '../../../models/tdm-op/sisOpField';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

interface PageField {
  content: SisOpField[],
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
export class FieldService {

  public API = environment.op.api;
  public FIELD_API = this.API + '/field';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpField[]>(this.FIELD_API)
  }
  get(id: number){
    return this.http.get<SisOpField>(this.FIELD_API + '/' + id);
  }
  getPaginated(page, size) {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size);
    return this.http.get<PageField>(this.FIELD_API, {params});
  }
  public create(field: SisOpField) {
    return this.http.post<SisOpField>(this.FIELD_API, field);
  }
  public edit(id: number, field: SisOpField) {
    return this.http.put<SisOpField>(this.FIELD_API + '/update/' + id, field);
  }
  
 
  public delete(field: SisOpField){
    return this.http.delete(this.FIELD_API+'/delete/' + field.idSisOpField);
  }
  
  getFromName(name: string, page, size){
    const params = new HttpParams()
      .set('name', name)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageField>(this.FIELD_API + '/search/', {params});
  }

}

import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpFieldQdc } from '../../../models/tdm-op/SisOpFieldQdc';

interface PageFieldQdc {
  content: SisOpFieldQdc[],
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
export class FieldQdcService {

  public API = environment.op.api;
  public FIELD_QDC_API = this.API + '/fieldQdc';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpFieldQdc[]>(this.FIELD_QDC_API)
  }
  get(id: number){
    return this.http.get<SisOpFieldQdc>(this.FIELD_QDC_API + '/' + id);
  }
  getPaginated(page, size) {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size);
    return this.http.get<PageFieldQdc>(this.FIELD_QDC_API, {params});
  }
  public create(fieldQdc: SisOpFieldQdc) {
    return this.http.post<SisOpFieldQdc>(this.FIELD_QDC_API, fieldQdc);
  }
  public edit(id: number, fieldQdc: SisOpFieldQdc) {
    return this.http.put<SisOpFieldQdc>(this.FIELD_QDC_API + '/update/' + id, fieldQdc);
  }
  
 
  public delete(fieldQdc: SisOpFieldQdc){
    return this.http.delete(this.FIELD_QDC_API+'/delete/' + fieldQdc.idSisOpFieldQdc);
  }
  
  getFromName(name: string, page, size){
    const params = new HttpParams()
      .set('name', name)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageFieldQdc>(this.FIELD_QDC_API + '/search/', {params});
  }

}

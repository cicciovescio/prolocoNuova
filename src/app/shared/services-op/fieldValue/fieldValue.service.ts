import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

import { SisOpSheetFieldValue } from '../../../models/tdm-op/sisOpSheetFieldValue';

interface PageFieldValue {
  content: SisOpSheetFieldValue[],
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
export class FieldValueService {

  public API = environment.op.api;
  public FIELD_VALUE_API = this.API + '/fieldValue';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpSheetFieldValue[]>(this.FIELD_VALUE_API)
  }
  get(id: number){
    return this.http.get<SisOpSheetFieldValue>(this.FIELD_VALUE_API + '/' + id);
  }
  getPaginated(page, size) { 
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageFieldValue>(this.FIELD_VALUE_API, {params});
  }
  public create(fieldValue: SisOpSheetFieldValue) {
    return this.http.post<SisOpSheetFieldValue>(this.FIELD_VALUE_API, fieldValue);
  }
  public edit(id: number, fieldValue: SisOpSheetFieldValue) {
    return this.http.put<SisOpSheetFieldValue>(this.FIELD_VALUE_API + '/' + id, fieldValue);
  }
  public getFromDateOperationPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageFieldValue>(this.FIELD_VALUE_API + '/search', {params});
  }
  getFromDateOperationRegister(date: string){
    return this.http.get<SisOpSheetFieldValue[]>(this.FIELD_VALUE_API + '/search/' + date);
  }
  public delete(fieldValue: SisOpSheetFieldValue){
    return this.http.delete(this.FIELD_VALUE_API+'/delete/' + fieldValue.idSisOpSheetFieldValue);
  }
  public getFieldValue(id: number){
    return this.http.get<SisOpSheetFieldValue[]>(this.FIELD_VALUE_API + '/from-analysis/' + id);
  }

  
}
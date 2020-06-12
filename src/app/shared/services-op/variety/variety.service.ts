import { Injectable } from '@angular/core';
import { SisOpVariety } from '../../../models/tdm-op/sisOpVariety';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
interface PageVariety {
  content: SisOpVariety[],
  pageable: {
    sort: {
      unsorted: boolean
      sorted: boolean
    }
    offset: number
    pageSize: number
    pageNumber: number
    paged: boolean
    unpaged: boolean
  },
  last: boolean,
  totalElements: number,
  totalPages: number,
  size: number,
  number: number,
  sort: {
    unsorted: boolean
    sorted: boolean
  }
  first: boolean,
  numberOfElements: number
}

@Injectable({
  providedIn: 'root'
})
export class VarietyService {
  public API = environment.op.api;
  public VARIETY_API = this.API + '/variety';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<SisOpVariety[]>(this.VARIETY_API)
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageVariety>(this.VARIETY_API, { params });
  }
  public create(variety: SisOpVariety) {
    return this.http.post<SisOpVariety>(this.VARIETY_API, variety);
  }
  public edit(id: number, variety: SisOpVariety) {
    return this.http.put<SisOpVariety>(this.VARIETY_API + '/update/' + id, variety);
  }
  public delete(variety: SisOpVariety) {
    return this.http.delete(this.VARIETY_API + '/delete/' + variety.idSisOpVariety);
  }
  public getVariety(id: number) {
    return this.http.get<SisOpVariety[]>(this.VARIETY_API + '/from-product/' + id);
  }
  getFromName(name: string, page, size) {
    const params = new HttpParams()
      .set('name', name)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageVariety>(this.VARIETY_API + '/search/', { params });
  }

  public getByNameProduct(name: string) {
    return this.http.get<SisOpVariety[]>(this.VARIETY_API + '/from-name-product/' + name);
  } 
}

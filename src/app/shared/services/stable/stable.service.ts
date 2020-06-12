import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisStable } from '../../../models/tdm-milk/sisStable';
import { environment } from "../../../../environments/environment";

interface PageStable {
  content: SisStable[],
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
export class StableService {

  public API = environment.milk.api;
  public STABLE_API = this.API + '/stables';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisStable[]>(this.STABLE_API)
  }

  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageStable>(this.STABLE_API, { params });
  }

  get(id: number) {
    return this.http.get<SisStable>(this.STABLE_API + '/' + id);
  }

  getFromName(name: string, page, size) {
    const params = new HttpParams()
      .set('name', name)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageStable>(this.STABLE_API + '/search', { params });
  }

  public create(stable: SisStable) {
    return this.http.post<SisStable>(this.STABLE_API, stable);
  }

  public edit(id: number, stable: SisStable) {
    return this.http.put<SisStable>(this.STABLE_API + '/' + id, stable);
  }

  public delete(stable: SisStable) {
    return this.http.delete(this.STABLE_API + '/' + stable.idSisStable);
  }

  getFromDateOperationRegisterAndVideo(stableName: string) {
    return this.http.get<SisStable>(this.STABLE_API + '/searchStablesWithVideo/' + stableName);
  }

}

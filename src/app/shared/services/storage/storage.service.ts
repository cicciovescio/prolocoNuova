import {Injectable} from '@angular/core';
import {SisStorage} from '../../../models/tdm-milk/sisStorage';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../../environments/environment";

interface PageStorage {
  content: SisStorage[],
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
export class StorageService {

    public API = environment.milk.api;
  public OPERATION_API = this.API + '/storages';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public get(id: number){
    return this.http.get<SisStorage>(this.OPERATION_API + '/' + id);
  }
  
  public getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageStorage>(this.OPERATION_API, {params});
  }

  public getFromDateOperationRegisterPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageStorage>(this.OPERATION_API + '/search', {params});
  }

  getFromDateOperationRegister(date: string){
    return this.http.get<SisStorage[]>(this.OPERATION_API + '/search/' + date);
  }

  public create(op: SisStorage) {
    return this.http.post<SisStorage>(this.OPERATION_API, op);
  }

  public edit(id: number, op: SisStorage) {
    return this.http.put<SisStorage>(this.OPERATION_API + '/' + id, op);
  }

  public delete(storage: SisStorage){
    return this.http.delete(this.OPERATION_API +'/'+ storage.idSisStorage);
  }

  public getStoragesWithRegistersSinceLastWeekAndDeliveryOperation(): Observable<SisStorage[]>{
    return this.http.get<SisStorage[]>(this.API + '/storages-with-registers-since-last-week');
  }

  public getLastWeekStorages(): Observable<SisStorage[]>{
    return this.http.get<SisStorage[]>(this.API + '/last-week-storages');
  }

  public getLastMonthStorages(): Observable<SisStorage[]>{
    return this.http.get<SisStorage[]>(this.API + '/last-month-storages');
  }

  public getLastSemesterStorages(): Observable<SisStorage[]>{
    return this.http.get<SisStorage[]>(this.API + '/last-semester-storages');
  }

  public getLastYearStorages(): Observable<SisStorage[]>{
    return this.http.get<SisStorage[]>(this.API + '/last-year-storages');
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpEvent } from '../../../models/tdm-op/sisOpEvent';

interface PageEvent {
  content: SisOpEvent[],
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
  totalElements :  number,
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
export class EventService {
  public API = environment.op.api;
  public EVENT_API = this.API + '/event';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<SisOpEvent[]>(this.EVENT_API)
  }
  getPaginatedEvent(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageEvent>(this.EVENT_API, {params});
  }
  public create(event: SisOpEvent) {
    return this.http.post<SisOpEvent>(this.EVENT_API, event);
  }
  public edit(id: number, event: SisOpEvent) {
    return this.http.put<SisOpEvent>(this.EVENT_API + '/update/' + id, event);
  }
  public delete(event: SisOpEvent){
    return this.http.delete(this.EVENT_API +'/delete/' + event.idSisOpEvent);
    }
    public getevent(id: number){
      return this.http.get<SisOpEvent[]>(this.EVENT_API + '/from-product/' + id);
    }
    public getFromDateOperationRegisterPage(date: string, page, size){
      const params = new HttpParams()
        .set('dateOperation', date)
        .set('page', page)
        .set('size', size);
      return this.http.get<PageEvent>(this.EVENT_API + '/search/', {params});
    }
    get(id: number){
      return this.http.get<SisOpEvent>(this.EVENT_API + '/get/' + id);
    }
    getLastEventFromIdParticella(idParticella:number){
      return this.http.get<SisOpEvent>(this.EVENT_API+"/searchEvent/"+idParticella)
    }
   
}

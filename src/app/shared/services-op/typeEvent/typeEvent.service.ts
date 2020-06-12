import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpTypeEvent } from '../../../models/tdm-op/sisOpTypeEvent';

interface PageTypeEvent {
  content: SisOpTypeEvent[],
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
export class TypeEventService {
  public API = environment.op.api;
  public TYPE_EVENT_API = this.API + '/typeEvent';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<SisOpTypeEvent[]>(this.TYPE_EVENT_API)
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageTypeEvent>(this.TYPE_EVENT_API, {params});
  }
  public create(typeEvent: SisOpTypeEvent) {
    return this.http.post<SisOpTypeEvent>(this.TYPE_EVENT_API, typeEvent);
  }
  public edit(id: number, typeEvent: SisOpTypeEvent) {
    return this.http.put<SisOpTypeEvent>(this.TYPE_EVENT_API + '/update/' + id, typeEvent);
  }
  public delete(typeEvent: SisOpTypeEvent){
    return this.http.delete(this.TYPE_EVENT_API +'/delete/' + typeEvent.idSisOpTypeEvent);
    }
    public gettypeEvent(id: number){
      return this.http.get<SisOpTypeEvent>(this.TYPE_EVENT_API+"/" + id);
    }
    getFromName(name: string, page, size){
      const params = new HttpParams()
        .set('name', name)
        .set('page', page)
        .set('size', size);
      return this.http.get<PageTypeEvent>(this.TYPE_EVENT_API + '/search/', {params});
    }
    getByName(){
      return this.http.get<SisOpTypeEvent>(this.TYPE_EVENT_API+"/name" );
    }
}

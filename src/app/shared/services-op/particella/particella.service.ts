import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpFieldQdc } from '../../../models/tdm-op/SisOpFieldQdc';
import { SisOpParticella } from '../../../models/tdm-op/sisOpParticella';

interface PageParticella {
  content: SisOpParticella[],
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
export class ParticellaService {

  public API = environment.op.api;
  public PARTICELLA_API = this.API + '/particella';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpParticella[]>(this.PARTICELLA_API)
  }
  get(id: number){
    return this.http.get<SisOpParticella>(this.PARTICELLA_API + '/' + id);
  }
  getPaginated(page, size) {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size);
    return this.http.get<PageParticella>(this.PARTICELLA_API, {params});
  }
  public create(particella: SisOpParticella) {
    return this.http.post<SisOpParticella>(this.PARTICELLA_API, particella);
  }
  public edit(id: number, particella: SisOpParticella) {
    return this.http.put<SisOpParticella>(this.PARTICELLA_API + '/update/' + id, particella);
  }
  
 
  public delete(particella: SisOpParticella){
    return this.http.delete(this.PARTICELLA_API+'/delete/' + particella.idSisOpParticella);
  }
  
  getFromName(name: string, page, size){
    const params = new HttpParams()
      .set('name', name)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageParticella>(this.PARTICELLA_API + '/search/', {params});
  }

  getEventLot(particellaId: number, data: string){
    return this.http.get<number[]>(this.PARTICELLA_API + '/searchEventLot/' + particellaId + '/' + data);
  }

  getEventPart(particellaId: number){
    return this.http.get<number[]>(this.PARTICELLA_API + '/searchEventPart/' + particellaId);
  }

    getEvent(particellaId: number){
      return this.http.get<number[]>(this.PARTICELLA_API + '/searchEvent/' + particellaId);
    }
      public getFromData(idParticella:number,dataImpianto: String, dataEntrata: String) {
        return this.http.get<number[]>(this.PARTICELLA_API + '/searchByData/'+idParticella+'/'+ dataImpianto + '/' + dataEntrata);
      }
  
}

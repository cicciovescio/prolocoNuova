import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpSchedaRilascioProdotto } from '../../../models/tdm-op/sisOpSchedaRilascioProdotto';


interface PageSCP {
  content: SisOpSchedaRilascioProdotto[],
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
export class SchedaControlloService {

  public API = environment.op.api;
  public SRP_API = this.API + '/schedaRilascioProdotto';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpSchedaRilascioProdotto[]>(this.SRP_API)
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageSCP>(this.SRP_API, {params});
  }
  public create(schedaRilascioProdotto: SisOpSchedaRilascioProdotto) {
    return this.http.post<SisOpSchedaRilascioProdotto>(this.SRP_API, schedaRilascioProdotto);

  }
 
    
  public edit(id: number, schedaRilascioProdotto: SisOpSchedaRilascioProdotto) {
    return this.http.put<SisOpSchedaRilascioProdotto>(this.SRP_API + '/update/' + id, schedaRilascioProdotto);
  }
  public getFromDateOperationRegisterPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageSCP>(this.SRP_API + '/search', {params});
  }
  getFromDateOperationRegister(date: string){
    return this.http.get<SisOpSchedaRilascioProdotto[]>(this.SRP_API + '/search/' + date);
  }
  public delete(schedaRilascioProdottoto: SisOpSchedaRilascioProdotto){
    return this.http.delete(this.SRP_API +'/delete/' + schedaRilascioProdottoto.idSisOpSrp);
    }
     public getFromIdParticella(id:number){
      return this.http.get<SisOpSchedaRilascioProdotto>(this.SRP_API + '/getByIdParticella/' + id);
     }
   
     public getFromIdParticellaAndDate(id:number,dataEntrata: String){
      return this.http.get<SisOpSchedaRilascioProdotto>(this.SRP_API + '/getByIdParticella/' + id+"/"+dataEntrata);
     }

}

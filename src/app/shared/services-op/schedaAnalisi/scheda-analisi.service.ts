import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SisOpSchedaAnalisiMultiresiduale } from '../../../models/tdm-op/sisOpSchedaAnalisiMultiresiduale';
import { HttpClient, HttpParams } from '@angular/common/http';


interface PageSAM {
  content: SisOpSchedaAnalisiMultiresiduale[],
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
export class SchedaAnalisiService {

  public API = environment.op.api;
  public SRP_API = this.API + '/schedaAnalisiMultiresiduale';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpSchedaAnalisiMultiresiduale[]>(this.SRP_API)
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageSAM>(this.SRP_API, {params});
  }
  public create(schedaAnalisiMultiresiduale: SisOpSchedaAnalisiMultiresiduale) {
    return this.http.post<SisOpSchedaAnalisiMultiresiduale>(this.SRP_API, schedaAnalisiMultiresiduale);

  }
 
    
  public edit(id: number, schedaAnalisiMultiresiduale: SisOpSchedaAnalisiMultiresiduale) {
    return this.http.put<SisOpSchedaAnalisiMultiresiduale>(this.SRP_API + '/update/' + id, schedaAnalisiMultiresiduale);
  }
  public getFromDateOperationRegisterPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageSAM>(this.SRP_API + '/search', {params});
  }
  getFromDateOperationRegister(date: string){
    return this.http.get<SisOpSchedaAnalisiMultiresiduale[]>(this.SRP_API + '/search/' + date);
  }
  public delete(schedaAnalisiMultiresiduale: SisOpSchedaAnalisiMultiresiduale){
    return this.http.delete(this.SRP_API +'/delete/' + schedaAnalisiMultiresiduale.idSisOpSam);
    }
     public getFromIdParticella(id:number){
      return this.http.get<SisOpSchedaAnalisiMultiresiduale>(this.SRP_API + '/getByIdParticella/' + id);
     }
     public getFromIdParticellaAndDate(id:number,dataEntrata: String){
      return this.http.get<SisOpSchedaAnalisiMultiresiduale>(this.SRP_API + '/getByIdParticella/' + id+"/"+dataEntrata);
     }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpArfd } from '../../../models/tdm-op/sisOpArfd';
import { ResponseMessage } from '../../../models/responseMessage';
import { environment } from '../../../../environments/environment';
interface PageArfd {
  content: SisOpArfd[],
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
export class ArfdService {

  public API = environment.op.api;
  public ARFD_API = this.API + '/arfd';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpArfd[]>(this.ARFD_API)
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageArfd>(this.ARFD_API, {params});
  }
  public create(arfd: SisOpArfd) {
    return this.http.post<ResponseMessage<SisOpArfd>>(this.ARFD_API, arfd);
  }
  public edit(id: number, arfd: SisOpArfd) {
    return this.http.put<ResponseMessage<SisOpArfd>>(this.ARFD_API + '/update/' + id, arfd);
  }
  public getFromDateOperationRegisterPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageArfd>(this.ARFD_API + '/search', {params});
  }
  getFromDateOperationRegister(date: string){
    return this.http.get<SisOpArfd[]>(this.ARFD_API + '/search/' + date);
  }
  public delete(arfd: SisOpArfd){
    return this.http.delete(this.ARFD_API +'/delete/' + arfd.idSisOpArfd);
    }
     public getFromIdParticella(id:number){
      return this.http.get<SisOpArfd>(this.ARFD_API + '/getByIdParticella/' + id);
     }
     public getFromIdParticellaAndDate(id:number,dataEntrata: String){
      return this.http.get<SisOpArfd>(this.ARFD_API + '/getByIdParticella/' + id+"/"+dataEntrata);
     }
}
 
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpSheetCampoValore } from '../../../models/tdm-op/sisOpSheetCampoValore';

interface PageCampoValore {
  content: SisOpSheetCampoValore[],
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
export class CampoValoreService {

  public API = environment.op.api;
  public CAMPOVALORE_API = this.API + '/sheetCampoValore';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpSheetCampoValore[]>(this.CAMPOVALORE_API)
  }
  get(id: number){
    return this.http.get<SisOpSheetCampoValore>(this.CAMPOVALORE_API + '/' + id);
  }
  getPaginated(page, size) {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size);
    return this.http.get<PageCampoValore>(this.CAMPOVALORE_API, {params});
  }
  public create(campo_valore: SisOpSheetCampoValore) {
    return this.http.post<SisOpSheetCampoValore>(this.CAMPOVALORE_API, campo_valore);
  }
  public edit(id: number, campo_valore: SisOpSheetCampoValore) {
    return this.http.put<SisOpSheetCampoValore>(this.CAMPOVALORE_API + '/update/' + id, campo_valore);
  }
  
 
  public delete(campo_valore: SisOpSheetCampoValore){
    return this.http.delete(this.CAMPOVALORE_API+'/delete/' + campo_valore.idSisOpSheetCampoValore);
  }
  
  getFromName(name: string, page, size){
    const params = new HttpParams()
      .set('name', name)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageCampoValore>(this.CAMPOVALORE_API + '/search/', {params});
  }
  public getFieldValue(id: number){
    return this.http.get<SisOpSheetCampoValore[]>(this.CAMPOVALORE_API + '/from-event/' + id);
  }
  getCampoValore(idEvent, idCampo){
    const params = new HttpParams()
      .set('idEvent', idEvent)
      .set('idCampo', idCampo);
    return this.http.get<SisOpSheetCampoValore[]>(this.CAMPOVALORE_API + '/from-event-campo/', {params});
  }
  
  
}

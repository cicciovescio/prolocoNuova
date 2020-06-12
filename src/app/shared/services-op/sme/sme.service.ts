import { Injectable } from '@angular/core';
import { SisOpLot } from '../../../models/tdm-op/sisOpLot';
import { environment } from '../../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface PageSME {
  content: SisOpLot[],
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
export class SmeService {

  public API = environment.op.api;
  public SME_API = this.API + '/lot';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpLot[]>(this.SME_API)
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageSME>(this.SME_API, {params});
  }
  public create(lot: SisOpLot) {
    return this.http.post<SisOpLot>(this.SME_API, lot);

  }
 
    
  public edit(id: number, lot: SisOpLot) {
    return this.http.put<SisOpLot>(this.SME_API + '/update' + id, lot);
  }
  public getFromDateOperationRegisterPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageSME>(this.SME_API + '/search', {params});
  }
  getFromDateOperationRegister(date: string){
    return this.http.get<SisOpLot[]>(this.SME_API + '/search/' + date);
  }
  public delete(lotto: SisOpLot){
    return this.http.delete(this.SME_API +'/delete/' + lotto.idSisOpLot);
    }

    public getLotWithoutAnalysis(){
      return this.http.get<SisOpLot[]>(this.SME_API + '/lot-analysis-null');
    }
    public findLotByIdAnalysis(idAnalisi : number)
    {
      return this.http.get<SisOpLot[]>( this.SME_API + '/findByIdAnalysis/' + idAnalisi);
    }
    
    public getAllLotwithVideo(page, size){
      const params = new HttpParams()
      .set('page', page)
      .set('size', size);
      return this.http.get<PageSME>( this.SME_API + '/findVideo/', {params});
    }
   
    public getLot(id: number){
      return this.http.get<SisOpLot>(this.SME_API + "/" + id);
    }
    public getAllLotByDataProduct(data : String,idProdotto:number)
    {
      return this.http.get<SisOpLot[]>( this.SME_API + '/findByData/' + data+"/"+idProdotto);
    }
    public getAllLotAnnuoByDataProduct(data : String,idProdotto:number)
    {
      return this.http.get<SisOpLot[]>( this.SME_API + '/findByDataAnno/' + data+"/"+idProdotto);
    }
    
}

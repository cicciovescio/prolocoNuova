import { Injectable } from '@angular/core';
import { SisLoad } from '../../../models/tdm-op/sisLoad';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
interface PagePallet {
  content: SisLoad[],
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
export class PalletService {

  public API = environment.op.api;
  public PALLET_API = this.API + '/pallet';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisLoad[]>(this.PALLET_API)
  }
  get(id: number){
    return this.http.get<SisLoad>(this.PALLET_API + '/' + id);
  }
  getPaginated(page, size, keyDistinct) { 
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('keyDistinct', keyDistinct);
    return this.http.get<PagePallet>(this.PALLET_API, {params});
  }
  
  public getPallets(id: number){
    return this.http.get<SisLoad[]>(this.PALLET_API + '/from-distinct/' + id);
  }


  public create(pallet: SisLoad) {
    return this.http.post<SisLoad>(this.PALLET_API, pallet);
  }
  public edit(id: number, pallet: SisLoad) {
    return this.http.put<SisLoad>(this.PALLET_API + '/' + id, pallet);
  }
  public getFromDateOperationPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PagePallet>(this.PALLET_API + '/search', {params});
  }
  getFromDateOperationRegister(date: string){
    return this.http.get<SisLoad[]>(this.PALLET_API + '/search/' + date);
  }
  public delete(pallet: SisLoad){
    return this.http.delete(this.PALLET_API+'/' + pallet.idSisOpPallet);
  }
  
}

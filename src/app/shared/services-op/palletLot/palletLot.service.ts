import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpPalletLot } from '../../../models/tdm-op/SisOpPalletLot';
interface PagePalletlot {
  content: SisOpPalletLot[],
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
export class PalletLotService {

  public API = environment.op.api;
  public PALLET_LOT_API = this.API + '/palletLot';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpPalletLot[]>(this.PALLET_LOT_API)
  }
  get(id: number){
    return this.http.get<SisOpPalletLot>(this.PALLET_LOT_API + '/' + id);
  }
  getPaginated(page, size, keyDistinct) { 
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('keyDistinct', keyDistinct);
    return this.http.get<PagePalletlot>(this.PALLET_LOT_API, {params});
  }
  public create(pallet: SisOpPalletLot) {
    return this.http.post<SisOpPalletLot>(this.PALLET_LOT_API, pallet);
  }
  public edit(id: number, pallet: SisOpPalletLot) {
    return this.http.put<SisOpPalletLot>(this.PALLET_LOT_API + '/' + id, pallet);
  }
  public getFromDateOperationPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PagePalletlot>(this.PALLET_LOT_API + '/search', {params});
  }
  getFromDateOperationRegister(date: string){
    return this.http.get<SisOpPalletLot[]>(this.PALLET_LOT_API + '/search/' + date);
  }
  public delete(palletLot: SisOpPalletLot){
    return this.http.delete(this.PALLET_LOT_API+'/delete/' + palletLot.idSisOpPalletLot);
  }
  
}

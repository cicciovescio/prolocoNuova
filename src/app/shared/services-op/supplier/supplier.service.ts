import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpSupplier } from '../../../models/tdm-op/sisOpSupplier';

interface PageSupplier {
  content: SisOpSupplier[],
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
export class SupplierService {

 
  public API = environment.op.api;
  public SUPPLIER_API = this.API + '/supplier';

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get<SisOpSupplier[]>(this.SUPPLIER_API)
  }
  public delete(supplier: SisOpSupplier){
    return this.http.delete(this.SUPPLIER_API+'/delete/' + supplier.idSisOpSupplier);
    }
    getPaginated(page, size) {
      const params = new HttpParams() 
        .set('page', page)
        .set('size', size);
      return this.http.get<PageSupplier>(this.SUPPLIER_API, {params});
    }
  
    get(id: number){
      return this.http.get<SisOpSupplier>(this.SUPPLIER_API + '/' + id);
    }
    public create(supplier: SisOpSupplier) {
      return this.http.post<SisOpSupplier>(this.SUPPLIER_API, supplier);
    }
    public edit(id: number, supplier: SisOpSupplier) {
      return this.http.put<SisOpSupplier>(this.SUPPLIER_API + '/update' + id, supplier);
    }
    getFromName(name: string, page, size){
      const params = new HttpParams()
        .set('name', name)
        .set('page', page)
        .set('size', size);
      return this.http.get<PageSupplier>(this.SUPPLIER_API + '/search/', {params});
    }
    public getAllSupllierWithVideo(page, size){
      const params = new HttpParams()
      .set('page', page)
      .set('size', size);
      return this.http.get<PageSupplier>( this.SUPPLIER_API + '/findVideo/', {params});
    }
}

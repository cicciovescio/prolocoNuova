import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SisOpProduct } from '../../../models/tdm-op/sisOpProduct';

interface PageProduct {
  content: SisOpProduct[],
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
export class ProductService {
  


  public API = environment.op.api;
  public PRODUCT_API = this.API + '/product';
 
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<SisOpProduct[]>(this.PRODUCT_API)
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageProduct>(this.PRODUCT_API, {params});
  }
  public create(type: SisOpProduct) {
    return this.http.post<SisOpProduct>(this.PRODUCT_API, type);
  }
  public edit(id: number, type: SisOpProduct) {
    return this.http.put<SisOpProduct>(this.PRODUCT_API + '/update/' + id, type);
  }
  public delete(typeto: SisOpProduct){
    return this.http.delete(this.PRODUCT_API +'/delete/' + typeto.idSisOpProduct);
    }
    public getType(id: number){
      return this.http.get<SisOpProduct[]>(this.PRODUCT_API + '/from-analysis/' + id);
    }
    getFromName(name: string, page, size){
      const params = new HttpParams()
        .set('name', name)
        .set('page', page)
        .set('size', size);
      return this.http.get<PageProduct>(this.PRODUCT_API + '/search/', {params});
    }
    public getAllProductWithVideo(page,size){
      const params = new HttpParams()
      .set('page', page)
      .set('size', size);
      return this.http.get<PageProduct>( this.PRODUCT_API + '/findVideo/', {params});
    }
    
    public getWithoutNessuna() {
      return this.http.get<SisOpProduct[]>(this.PRODUCT_API+"/nessunaProduzione")
    }
    
}

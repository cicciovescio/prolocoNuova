import { Injectable } from '@angular/core';
import { SisOpImages } from '../../../models/tdm-op/sisOpImages';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

interface PageImages {
  content: SisOpImages[],
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
export class ImagesService {

  public API = environment.op.api;
  public IMAGES_API = this.API + '/images';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisOpImages[]>(this.IMAGES_API)
  }

  public get(id: number){
    return this.http.get<SisOpImages>(this.IMAGES_API + '/getById/' + id);
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageImages>(this.IMAGES_API, {params});
  }
  getPageimages(page, size, keyimages) { 
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('keyimages', keyimages);
    return this.http.get<PageImages>(this.IMAGES_API, {params});
  }
  public create(images: SisOpImages) {
    return this.http.post<SisOpImages>(this.IMAGES_API, images);
  }
  public edit(id: number, images: SisOpImages) {
    return this.http.put<SisOpImages>(this.IMAGES_API + '/update/' + id, images);
  }
  public getFromDateOperationPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageImages>(this.IMAGES_API + '/search', {params});
  }
  getFromDateOperationRegister(date: string){
    return this.http.get<SisOpImages[]>(this.IMAGES_API + '/search/' + date);
  }
  public delete(images: SisOpImages,fileName:String){
    return this.http.delete(this.IMAGES_API+'/delete/' + images.idSisOpImages+"/"+fileName);
  }
  public getAllimageswithVideo(page,size){
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);
    return this.http.get<PageImages>( this.IMAGES_API + '/findVideo/', {params});
  }
  public deleteFile(fileName:String){
    return this.http.delete(this.IMAGES_API +'/imagesdelete/' +fileName);
  }
  getFromName(name: string, page, size){
    const params = new HttpParams()
      .set('name', name)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageImages>(this.IMAGES_API + '/search', {params});
  }
  public getByIdProduct(id: number){ 
    return this.http.get<SisOpImages[]>(this.IMAGES_API + '/ByProduct/' + id);
  }
  public getByIdProductAndVarieta(id: number,varieta:number){ 
    return this.http.get<SisOpImages[]>(this.IMAGES_API + '/ByProduct/' + id+"/"+varieta);
  }

}


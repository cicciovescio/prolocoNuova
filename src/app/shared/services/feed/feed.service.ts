import { Injectable } from '@angular/core';
import { SisOpFeed } from 'src/app/models/tdm-op/sisOpFeed';

import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseMessage } from 'src/app/models/responseMessage';
import { SisMilkFeed } from 'src/app/models/tdm-milk/sisMilkFeed';

interface PageFeed {
  content: SisMilkFeed[],
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

export class FeedService 
{

  public API = environment.milk.api;
  public FEED_API = this.API + '/feed';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<SisMilkFeed[]>(this.FEED_API)
  }
  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageFeed>(this.FEED_API, {params});
  }
  public create(feed: SisMilkFeed) {
    return this.http.post<ResponseMessage<SisMilkFeed>>(this.FEED_API, feed);
  }
  public edit(id: number, feed: SisMilkFeed) {
    return this.http.put<SisMilkFeed>(this.FEED_API + '/update' + id, feed);
  }
  public delete(feedto: SisMilkFeed){
    return this.http.delete(this.FEED_API +'/delete/' + feedto.idSisMilkFeed);
    }
    getFromName(name: string, page, size){
      const params = new HttpParams()
        .set('name', name)
        .set('page', page)
        .set('size', size);
      return this.http.get<PageFeed>(this.FEED_API + '/search/', {params});
    }
  
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SisPasteurization} from '../../../models/tdm-milk/sisPasteurization';
import {environment} from "../../../../environments/environment";

interface PagePasteurization {
  content: SisPasteurization[],
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
export class PasteurizationService {

    public API = environment.milk.api;
  public PASTEURIZATION_API = this.API + '/pasteurizations';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.PASTEURIZATION_API)
  }

  public getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PagePasteurization>(this.PASTEURIZATION_API, {params});
  }

  public getFromDateOperationRegisterPage(date: string, page, size){
    const params = new HttpParams()
      .set('dateOperation', date)
      .set('page', page)
      .set('size', size);
    return this.http.get<PagePasteurization>(this.PASTEURIZATION_API + '/search', {params});
  }

  public get(id: number){
    return this.http.get<SisPasteurization>(this.PASTEURIZATION_API + '/' + id);
  }

  getFromDateOperationRegister(date: string){
    return this.http.get<SisPasteurization[]>(this.PASTEURIZATION_API + '/search/' + date);
  }

  public create(op: SisPasteurization) {
    return this.http.post<SisPasteurization>(this.PASTEURIZATION_API, op);
  }

  public edit(id: number, op: SisPasteurization) {
    return this.http.put<SisPasteurization>(this.PASTEURIZATION_API + '/' + id, op);
  }

  public delete(pasteurization: SisPasteurization){
    return this.http.delete(this.PASTEURIZATION_API +'/'+ pasteurization.idSisPasteurization);
  }
  
  public getPasteurizationsWithoutProductionsAndNegativePhosphataseAndAnalystNotNull(): Observable<SisPasteurization[]>{
    return this.http.get<SisPasteurization[]>(this.API + '/pasteurizations-ok');
  }
  public getAllPasteurizationWithVideoFromData(date: string){
    return this.http.get<SisPasteurization[]>(this.PASTEURIZATION_API + '/searchPasteurizationWithVideo/'+date);
  }
} 

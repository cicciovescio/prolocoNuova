import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import { SisFoodSheetAnagraphic } from '../../../models/tdm-milk/sisFoodSheetAnagraphic';

interface PageFoodSheetAnagraphicService {
  content: SisFoodSheetAnagraphic[],
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
export class FoodSheetAnagraphicService {

  public API = environment.milk.api;
  public FOOD_SHEET_ANAGRAPHIC_API = this.API + '/foodSheet';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SisFoodSheetAnagraphic[]>(this.FOOD_SHEET_ANAGRAPHIC_API)
  }

  getPaginated(page, size) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PageFoodSheetAnagraphicService>(this.FOOD_SHEET_ANAGRAPHIC_API, {params});
  }

  get(id: number){
    return this.http.get<SisFoodSheetAnagraphic>(this.FOOD_SHEET_ANAGRAPHIC_API + '/' + id);
  }

  getFromDescription(description: string, page, size){
    const params = new HttpParams()
      .set('name', description)
      .set('page', page)
      .set('size', size);
    return this.http.get<PageFoodSheetAnagraphicService>(this.FOOD_SHEET_ANAGRAPHIC_API + '/search', {params});
  }

  getFromDateOperationRegister(date: string) {
    return this.http.get<SisFoodSheetAnagraphic[]>(this.FOOD_SHEET_ANAGRAPHIC_API + '/searchFood/' + date);
  }

  getLast(date: string) {
    return this.http.get<SisFoodSheetAnagraphic[]>(this.FOOD_SHEET_ANAGRAPHIC_API + '/searchLastFood/' + date);
  }

  public create(foodSheet: SisFoodSheetAnagraphic) {
    console.log(foodSheet);
    return this.http.post<SisFoodSheetAnagraphic>(this.FOOD_SHEET_ANAGRAPHIC_API, foodSheet);
  }

  public edit(id: number, foodSheet: SisFoodSheetAnagraphic) {
    return this.http.put<SisFoodSheetAnagraphic>(this.FOOD_SHEET_ANAGRAPHIC_API + '/' + id, foodSheet);
  }

  public delete(foodSheet: SisFoodSheetAnagraphic){
    return this.http.delete(this.FOOD_SHEET_ANAGRAPHIC_API + '/' + foodSheet.idSisFoodSheetAnagraphic);
  }
}
